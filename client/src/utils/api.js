// utils/api.js
export const fetchJobs = async (location) => {
    const query = location ? `?location=${location}` : '';
    const res = await fetch(`http://localhost:5000/api/jobs${query}`);
    return await res.json();
  };
  