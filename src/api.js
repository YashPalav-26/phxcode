import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

// OneCompiler API configuration
const API_KEY = "oc_44ftcgqwu_44ftcgqxb_0c5ef73963c0a8b4d55e2573c29415f37d9347dc1af19069";

const API = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

export const executeCode = async (language, sourceCode, input = "") => {
  try {
    if (!LANGUAGE_VERSIONS[language]) {
      throw new Error(`Unsupported language: ${language}`);
    }

    const response = await API.post("/execute", {
      language,
      files: [{ content: sourceCode }],
      stdin: input,
    });

    return response.data;
  } catch (error) {
    // Provide more detailed error information
    if (error.response?.status === 401) {
      console.error("Authentication failed: Invalid or missing API key.");
      throw new Error("API authentication failed. Please check your OneCompiler API key.");
    }
    console.error("Error executing code:", error.response?.data?.message || error.message);
    throw error;
  }
};
