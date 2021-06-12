export const caseInTour = (cases, caseId) => {
  return !cases.find((roadcase) => roadcase.id === caseId);
};
