import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./App";
import { reportWebVitals } from "./utils/performance";

const rootElement = document.getElementById("app") as HTMLElement;
createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);

// Report performance metrics
import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
  getCLS(reportWebVitals);
  getFID(reportWebVitals);
  getFCP(reportWebVitals);
  getLCP(reportWebVitals);
  getTTFB(reportWebVitals);
});
