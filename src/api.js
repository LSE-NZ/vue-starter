const API_BASE_URL = 'https://sincere-insight-production.up.railway.app';

export async function fetchData() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/your-endpoint`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}