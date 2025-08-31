export const API_BASE = "http://localhost:4000"; // backend URL
export const getPanchayat = async () => {
  const res = await fetch(`${API_BASE}/seeds`);
  if (!res.ok) throw new Error("Failed to fetch Panchayat data");
  return res.json();
};
