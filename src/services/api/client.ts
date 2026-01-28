import { API_CONFIG, getApiUrl } from "./config";

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public data: any,
    message: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Request interceptor type
 */
export type RequestInterceptor = (
  config: RequestInit
) => RequestInit | Promise<RequestInit>;

/**
 * Response interceptor type
 */
export type ResponseInterceptor = (
  response: Response
) => Response | Promise<Response>;

/**
 * Error interceptor type
 */
export type ErrorInterceptor = (error: Error) => Error | Promise<Error>;

/**
 * HTTP Client with interceptor support and error handling
 */
export class HttpClient {
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];
  private errorInterceptors: ErrorInterceptor[] = [];

  /**
   * Add a request interceptor
   */
  addRequestInterceptor(interceptor: RequestInterceptor): void {
    this.requestInterceptors.push(interceptor);
  }

  /**
   * Add a response interceptor
   */
  addResponseInterceptor(interceptor: ResponseInterceptor): void {
    this.responseInterceptors.push(interceptor);
  }

  /**
   * Add an error interceptor
   */
  addErrorInterceptor(interceptor: ErrorInterceptor): void {
    this.errorInterceptors.push(interceptor);
  }

  /**
   * Execute request interceptors
   */
  private async executeRequestInterceptors(
    config: RequestInit
  ): Promise<RequestInit> {
    let finalConfig = config;
    for (const interceptor of this.requestInterceptors) {
      finalConfig = await interceptor(finalConfig);
    }
    return finalConfig;
  }

  /**
   * Execute response interceptors
   */
  private async executeResponseInterceptors(
    response: Response
  ): Promise<Response> {
    let finalResponse = response;
    for (const interceptor of this.responseInterceptors) {
      finalResponse = await interceptor(finalResponse);
    }
    return finalResponse;
  }

  /**
   * Execute error interceptors
   */
  private async executeErrorInterceptors(error: Error): Promise<Error> {
    let finalError = error;
    for (const interceptor of this.errorInterceptors) {
      finalError = await interceptor(finalError);
    }
    return finalError;
  }

  /**
   * Retry logic with exponential backoff
   */
  private async retryRequest(
    url: string,
    config: RequestInit,
    attempt: number = 0
  ): Promise<Response> {
    try {
      return await fetch(url, config);
    } catch (error) {
      const shouldRetry =
        attempt < API_CONFIG.RETRY.MAX_ATTEMPTS &&
        (error instanceof TypeError || error instanceof Error);

      if (shouldRetry) {
        const delay =
          API_CONFIG.RETRY.DELAY *
          Math.pow(API_CONFIG.RETRY.BACKOFF_MULTIPLIER, attempt);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return this.retryRequest(url, config, attempt + 1);
      }

      throw error;
    }
  }

  /**
   * Generic GET request
   */
  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = getApiUrl(endpoint);
    const config: RequestInit = {
      method: "GET",
      ...options,
    };

    return this.request<T>(url, config);
  }

  /**
   * Generic POST request
   */
  async post<T>(
    endpoint: string,
    body?: any,
    options?: RequestInit
  ): Promise<T> {
    const url = getApiUrl(endpoint);
    const config: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    };

    return this.request<T>(url, config);
  }

  /**
   * Generic PUT request
   */
  async put<T>(
    endpoint: string,
    body?: any,
    options?: RequestInit
  ): Promise<T> {
    const url = getApiUrl(endpoint);
    const config: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    };

    return this.request<T>(url, config);
  }

  /**
   * Generic DELETE request
   */
  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = getApiUrl(endpoint);
    const config: RequestInit = {
      method: "DELETE",
      ...options,
    };

    return this.request<T>(url, config);
  }

  /**
   * Core request method with interceptor and error handling
   */
  private async request<T>(url: string, config: RequestInit): Promise<T> {
    try {
      // Execute request interceptors
      const finalConfig = await this.executeRequestInterceptors(config);

      // Make request with retry logic
      let response = await this.retryRequest(url, finalConfig);

      // Execute response interceptors
      response = await this.executeResponseInterceptors(response);

      // Check if response is OK
      if (!response.ok) {
        let errorData: any;
        try {
          errorData = await response.json();
        } catch {
          errorData = { message: response.statusText };
        }

        const error = new ApiError(
          response.status,
          errorData,
          `HTTP ${response.status}: ${response.statusText}`
        );

        throw error;
      }

      // Parse and return response
      const data = await response.json();
      return data as T;
    } catch (error) {
      // Execute error interceptors
      const finalError =
        error instanceof Error ? await this.executeErrorInterceptors(error) : error;
      throw finalError;
    }
  }
}

/**
 * Create a singleton HTTP client instance
 */
export const apiClient = new HttpClient();
