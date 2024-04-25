import React, { useEffect, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CButton
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const SubmissionsTable = () => {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

const fields = [
    { key: 'email', label: 'Email' },
    { key: 'name', label: 'Name' },
    { key: 'mobileNumber', label: 'Mobile' },
    { key: 'collegeName', label: 'College Name' },
    { key: 'alphaSkillSet', label: 'Alpha Skill Set' },
    { key: 'discoveryChannel', label: 'Discovery Channel' },
    { key: 'motivation', label: 'Motivation' },
    { key: 'valueAddition', label: 'Value Addition' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' },
];

useEffect(() => {
    fetch('http://localhost:5000/api/submissions')
      .then(response => response.json())
      .then(data => setSubmissions(data))
      .catch(error => console.error('Error fetching submissions:', error));
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending': return 'warning';
      case 'Approved': return 'success';
      case 'Rejected': return 'danger';
      default: return 'primary';
    }
  };

  const viewDetails = (submissionId) => {
    console.log("Navigating to:", `/admin/submission/${submissionId}`); // Check the URL being generated
    navigate(`/admin/submission/${submissionId}`);
  
  };

  return (
    <CCard>
      <CCardHeader>Campus Leads Applications</CCardHeader>
      <CCardBody>
        <CTable hover striped bordered size="sm">
          <CTableHead>
            <CTableRow>
              {fields.map(field => (
                <CTableHeaderCell key={field.key}>{field.label}</CTableHeaderCell>
              ))}
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {submissions.map(submission => (
              <CTableRow key={submission.id}>
                {fields.map(field => (
                  <CTableDataCell key={field.key}>
                    {field.key === 'status' ? (
                      <CButton color={getStatusBadge(submission.status)} onClick={() => viewDetails(submission.id)}>
                        {submission.status}
                      </CButton>
                    ) : (
                      submission[field.key]
                    )}
                  </CTableDataCell>
                ))}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default SubmissionsTable;