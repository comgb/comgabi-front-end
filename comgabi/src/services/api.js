export async function getNews(numberOfData) {
  try {
    const response = await fetch(`http://localhost:8080/api/news?numberOfData=${numberOfData}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch news data:", error);
    throw error;
  }
}
