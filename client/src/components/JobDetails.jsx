import React from "react";
import { Link } from "react-router-dom";

export default function JobDetails({ job }) {
  if (!job) return <div className="p-4">Select a job to see details</div>;

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <Link to={job.job_link}>
          <button className="bg-pink-600 text-white px-4 py-2 rounded">
            Quick Apply
          </button>
        </Link>
      </div>
      <p className="text-sm text-gray-700 mt-1">
        {job.company} — {job.location}
      </p>

      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          <span>📅 {job.employment_type}</span>

          <span>🕒 {job.postedDateTime.$date}</span>
        </div>

        {/* {job.qualifications && ( */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">
            {job.experience}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-1">Full Job Description</h3>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {" "}
          We are seeking a skilled <strong>{job.title}</strong> with{" "}
          {job.experience} of experience to join <strong>{job.company}</strong>.
          This {job.employment_type} job is based in <strong>{job.location}</strong>,
          offering opportunities to work on impactful projects and
          collaborate with experienced professionals.
        </p>
      </div>
    </div>
  );
}
