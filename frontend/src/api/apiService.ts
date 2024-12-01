const BASE_URL = "http://localhost:5173/api";

export const getBoards = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/boards");
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createBoard = async (name: string) => {
  try {
    const response = await fetch("http://localhost:8080/api/boards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};



