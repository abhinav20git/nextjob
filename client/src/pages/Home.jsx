import React, { useEffect, useState } from 'react';
import JobDetails from '../components/JobDetails';
import JobList from '../components/JobList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
export default function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetch('/jobdata.json')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setSelectedJob(data[0]);
      })
      .catch(err => console.error('Failed to load job data:', err));
  }, []);

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
