const API_URL = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`;

export const getAIResponseChat = async (formattedHistory) => {

  const promptString = formattedHistory.map(msg => msg.text).join('\n');

  console.log(promptString);

  const response = await fetch(`${API_URL}/mcp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "handlePrompt",
      params: {
        prompt: promptString
      }
    })
  });


  const data = await response.json();

  if (!response.ok) {
    const msg = data?.error?.message || "Ocurrió un error inesperado.";
    throw new Error(msg);
  }

  const text = data.result?.replace(/\*\*(.*?)\*\*/g, "$1").trim();

  return text;
};

