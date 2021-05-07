const postElectronictoCase = async (electronicID, caseID) => {
  try {
    const response = await fetch(`/api/v1/electronics/${electronicID}/add`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(caseID)
    });
  } catch (error) {
    console.error(`Error in Fetch: ${error.message}`);
  }
};

export default postElectronictoCase;
