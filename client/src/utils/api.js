export const fetchJobs = async (location) => {
  const query = location ? `?location=${location}` : '';
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/jobs${query}`);
  return await res.json();
};