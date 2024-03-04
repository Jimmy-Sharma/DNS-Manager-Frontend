// DNSManagerDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios

const DNSManagerDashboard = () => {
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState(null);

  useEffect(() => {
    // Fetch domains from the backend upon component mount
    // fetchDomains();
  }, []);

//   const fetchDomains = async () => {
//     try {
//       const response = await axios.get(''); // Replace with your actual API endpoint
//       setDomains(response.data);
//     } catch (error) {
//       console.error('Error fetching domains:', error);
//     }
//   };

  const handleDomainSelection = (domain) => {
    // Update the selected domain
    setSelectedDomain(domain);
  };

  return (
    <div>
      <h1>DNS Manager Dashboard</h1>

      <div>
        <h2>Domains</h2>
        <ul>
          {domains.map((domain) => (
            <li key={domain.id} onClick={() => handleDomainSelection(domain)}>
              {domain.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedDomain && (
        <div>
          <h2>Selected Domain: {selectedDomain.name}</h2>
          {/* Render DNS records and other details here */}
          {/* You would typically include forms/modals for adding, editing, and deleting records */}
        </div>
      )}
    </div>
  );
};

export default DNSManagerDashboard;
