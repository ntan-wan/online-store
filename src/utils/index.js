function capitalizeFirstLetter(str) {
  const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalizedStr;
}

export default {
  capitalizeFirstLetter,
};
