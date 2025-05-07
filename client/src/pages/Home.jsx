import React, { useEffect, useState } from 'react';
import JobDetails from '../components/JobDetails';
import JobList from '../components/JobList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { fetchJobs } from '../utils/api';
export default function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const loadJobs = async () => {
      const result = await fetchJobs(location); // searchLocation is user input
      setJobs(result);
    };
    loadJobs();
  }, [location]);

  const filteredJobs = location
    ? jobs.filter((job) =>
        job.location?.toLowerCase().includes(location.trim().toLowerCase())
      )
    : jobs;

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <SearchBar location={location} setLocation={setLocation} />
      <div className="flex flex-1">
        <div className="w-1/2 overflow-y-auto border-r">
          <JobList jobs={filteredJobs} onSelectJob={setSelectedJob} />
        </div>
        <div className="w-1/2 overflow-y-auto">
          <JobDetails job={selectedJob} />
        </div>
      </div>
    </div>
  );
}
