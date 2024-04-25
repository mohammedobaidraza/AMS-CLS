import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'; // This line imports the App.css file

const SubmissionDetail = () => {
  const { id } = useParams();
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error("No ID provided");
      return;
    }

    fetch(`http://localhost:5000/api/submissions/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setSubmission(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching details:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!submission) return <div>No data found for this submission.</div>;

  return (
    <div className="submission-details">
      <h1>Submission Details</h1>
      <p><strong>ID:</strong><span>{submission.id}</span></p>
      <p><strong>Email:</strong><span>{submission.email}</span></p>
      <p><strong>Name:</strong><span>{submission.name}</span></p>
      <p><strong>Mobile:</strong><span>{submission.mobile}</span></p>
      <p><strong>College Name:</strong><span>{submission.collegeName}</span></p>
      <p><strong>Alpha Skill Set:</strong><span>{submission.alphaSkillSet}</span></p>
      <p><strong>Discovery Channel:</strong><span>{submission.discoveryChannel}</span></p>
      <p><strong>Motivation:</strong><span>{submission.motivation}</span></p>
      <p><strong>Value Addition:</strong><span>{submission.valueAddition}</span></p>
      <p><strong>Date:</strong><span>{submission.date}</span></p>
      <p><strong>Status:</strong><span>{submission.status}</span></p>
    {/* Buttons with the style you provided */}
    <div className="button-container">
   
      <button className="button-style">Appointment Letter</button>
      <button className="button-style">Change Status</button>
      <button className="button-style">Rejection Letter</button>
      <button className="button-style">Download Presentation</button>
      <button className="button-style">Add Notes</button>
      

    </div>
    </div>
  );
};

export default SubmissionDetail;