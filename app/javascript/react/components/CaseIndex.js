import { Typography } from '@material-ui/core';
import React from 'react';
import CaseForm from './CaseForm';
import CaseTile from './CaseTile';

const CaseIndex = ({ cases }) => {
  const casesList = cases.map(({ id, prefix, case_number }) => {
    return <CaseTile key={id} prefix={prefix} case_number={case_number} />;
  });
  return (
    <div>
      <Typography variant="h2">Cases</Typography>
      {casesList}
    </div>
  );
};

export default CaseIndex;
