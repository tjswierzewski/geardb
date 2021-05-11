const postCasetoTour = async (caseID, tourID) => {
  try {
    const response = await fetch(`/api/v1/cases/${caseID}/add`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tourID)
    });
  } catch (error) {
    console.error(`Error in Fetch: ${error.message}`);
  }
};

export default postCasetoTour;
