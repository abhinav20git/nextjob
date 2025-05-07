import React from "react";

export default function JobList({ jobs, onSelectJob }) {
  return (
    <div className="p-4 space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => onSelectJob(job)}
          className="cursor-pointer border p-4 rounded hover:bg-gray-100"
        >
          <h3 className="font-semibold text-blue-600">{job.title}</h3>
          <p className="text-sm text-gray-700">
            {job.company} — {job.location}
          </p>
          <p className="text-sm text-gray-500">{job.salary}</p>
          <p className="text-xs text-gray-400">{job.datePosted}</p>
          <div className="flex justify-between w-full my-1">
            <div>
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">
                {job.experience}
              </span>
            </div>
            <div>
              <span className="text-gray-600 text-sm">
                {job.employment_type}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
