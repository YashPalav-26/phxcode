export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Get API key from environment variables
  const API_KEY = process.env.VITE_ONECOMPILER_API_KEY;
  
  if (!API_KEY) {
    return res.status(500).json({ 
      error: "OneCompiler API key is not configured. Please set VITE_ONECOMPILER_API_KEY in your Vercel project environment variables." 
    });
  }

  try {
    const { language, stdin, files } = req.body;

    // Validate input
    if (!language || !files || !files.length) {
      return res.status(400).json({ error: "Missing required fields: language and files" });
    }

    // Map language to OneCompiler format
    const LANGUAGE_MAP = {
      javascript: "javascript",
      typescript: "typescript",
      python: "python",
      python3: "python",
      java: "java",
      csharp: "csharp",
      php: "php",
      c: "c",
      cpp: "cpp",
    };

    const oneCompilerLanguage = LANGUAGE_MAP[language];
    if (!oneCompilerLanguage) {
      return res.status(400).json({ error: `Unsupported language: ${language}` });
    }

    // Call OneCompiler API
    const response = await fetch("https://api.onecompiler.com/v1/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify({
        language: oneCompilerLanguage,
        stdin: stdin || "",
        files: files,
      }),
    });

    const data = await response.json();

    // Return the response from OneCompiler
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Error executing code:", error);
    return res.status(500).json({ error: "Failed to execute code: " + error.message });
  }
}
