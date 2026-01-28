// Contact Service - API calls for contact form
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  designation: string;
}

const API_BASE = process.env.REACT_APP_API_BASE || "https://api.example.com";

export const contactService = {
  // Submit contact form
  submitContactForm: async (data: ContactFormData): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit contact form");
      return true;
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return false;
    }
  },
};
