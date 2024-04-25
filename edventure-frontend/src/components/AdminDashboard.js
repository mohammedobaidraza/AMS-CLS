// File: src/components/AdminPage.js

import React, { useEffect, useState } from 'react';
import SubmissionsTable from './SubmissionsTable';

const AdminPage = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/submissions')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => setSubmissions(data))
            .catch(error => console.error('Error fetching submissions:', error));
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <SubmissionsTable submissions={submissions} />
        </div>
    );
};

export default AdminPage;
