import React from 'react'

const HumidityLevelInfo = (humidity_percentage) => {
  if (humidity_percentage < 0) {
    return {
      level: 'Invalid',
      description: 'UV index cannot be negative.'
    };
  } else if (humidity_percentage < 3) {
    return {
      level: 'Low',
      description: 'Minimal risk. No protection needed.'
    };
  } else if (humidity_percentage < 6) {
    return {
      level: 'Moderate',
      description: 'Take precautions, such as covering up and using sunscreen.'
    };
  } else if (humidity_percentage < 8) {
    return {
      level: 'High',
      description: 'Protection against sun damage is needed. Seek shade during midday hours.'
    };
  } else if (humidity_percentage < 11) {
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
}

export default HumidityLevelInfo