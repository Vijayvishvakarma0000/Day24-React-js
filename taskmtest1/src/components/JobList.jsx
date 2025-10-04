import React from "react";
import "./JobList.css";

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h4>{job.title}</h4>
            <p>Type: {job.type}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;
