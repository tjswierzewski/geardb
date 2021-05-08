import { Typography } from '@material-ui/core';
import React from 'react';
import CaseTile from './CaseTile';

const CaseIndex = ({ cases, selectedCase, setSelectedCase }) => {
  const casesList = cases.map(({ id, prefix, case_number }) => {
    const handleSelect = () => {
      if (selectedCase === id) {
        setSelectedCase(null);
        return;
      }
      setSelectedCase(id);
    };
    const selected = selectedCase === id;
    return (
      <div key={id} onClick={handleSelect}>
        <CaseTile id={id} prefix={prefix} case_number={case_number} selected={selected} />
      </div>
    );
  });
  return (
    <div>
      <Typography variant="h2">Cases</Typography>
      {casesList}
    </div>
  );
};

export default CaseIndex;
