import { Typography, makeStyles, Grid } from '@material-ui/core';
import React from 'react';
import CaseTile from './CaseTile';

const useStyles = makeStyles((theme) => ({
  scrollList: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 'calc(100vh - 250px)'
  }
}));

const CaseIndex = ({ cases, selectedCase, setSelectedCase }) => {
  const classes = useStyles();
  const casesList = cases.map(({ id, prefix, case_number, electronics }) => {
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
        <CaseTile
          id={id}
          prefix={prefix}
          case_number={case_number}
          selected={selected}
          electronics={electronics}
        />
      </div>
    );
  });
  return (
    <div>
      <Typography variant="h2">Cases</Typography>
      <Grid className={classes.scrollList}>{casesList}</Grid>
    </div>
  );
};

export default CaseIndex;
