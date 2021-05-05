import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import CaseForm from './CaseForm';
import CaseTile from './CaseTile';

const CaseIndex = () => {
  const [cases, setCases] = useState([]);

  const fetchCases = async () => {
    try {
      const response = await fetch('/api/v1/cases');
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      setCases(responseBody);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const casesList = cases.map(({ id, prefix, case_number }) => {
    return <CaseTile key={id} prefix={prefix} case_number={case_number} />;
  });
  return (
    <div>
      <Typography variant="h2">Cases</Typography>
      {casesList}
      <CaseForm />
    </div>
  );
};

export default CaseIndex;
