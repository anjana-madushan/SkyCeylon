// Based on the UV index, uv level and its description will be returned

export const getUVLevelInfo = (uvIndex) => {
  if (uvIndex < 0) {
    return {
      level: 'Invalid',
      description: 'UV index cannot be negative.'
    };
  } else if (uvIndex < 3) {
    return {
      level: 'Low',
      description: 'Minimal risk. No protection needed.'
    };
  } else if (uvIndex < 6) {
    return {
      level: 'Moderate',
      description: 'Take precautions, such as covering up and using sunscreen.'
    };
  } else if (uvIndex < 8) {
    return {
      level: 'High',
      description: 'Protection against sun damage is needed. Seek shade during midday hours.'
    };
  } else if (uvIndex < 11) {
    return {
      level: 'Very High',
      description: 'Extra protection required. Avoid sun exposure during midday hours.'
    };
  } else {
    return {
      level: 'Extreme',
      description: 'Take all precautions. Unprotected skin can burn in minutes.'
    };
  }
};
