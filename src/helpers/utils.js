export const capitalize = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

export const getShortDate = () => {
  const now = Date().toString();
  const endIndex = now.indexOf('GMT') - 1;
  return now.slice(0, endIndex);
};
