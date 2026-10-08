const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      return reject('Input must be an array');
    }

    const words = mixedArray
      .filter((item) => typeof item === 'string')
      .map((item) => item.toLowerCase());

    resolve(words);
  });
};