export const electronicInCase = (electronics, electronicId) => {
  return !electronics.find((electronic) => electronic.id == electronicId);
};
