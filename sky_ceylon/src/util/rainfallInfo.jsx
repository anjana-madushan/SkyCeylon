// Based on the precip_mm, rainfall level will be returned.

export const getRainfallInfo = (precip_mm) => {
  if (precip_mm == 0) {
    return 'No rain';
  } else if (precip_mm < 1) {
    return 'Very Light Rain';
  } else if (precip_mm < 10) {
    return 'Light Rain';
  } else if (precip_mm < 31) {
    return 'Moderate Rain';
  } else if (precip_mm < 71) {
    return 'Heavy Rain';
  } else if (precip_mm < 151) {
    return 'Very Heavy Rain';
  } else {
    return 'Extremely Heavy Rain';
  }
};
