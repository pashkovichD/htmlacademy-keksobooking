const getRandomPositiveInteger = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

getRandomPositiveInteger(1, 10);

const getRandomPositiveFloat = (a, b, digits = 2) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (max - min) + min;
  return +result.toFixed(digits);
};

getRandomPositiveFloat(1.5, 11.5, 4);


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getElementsNotRepeat = (arr) => {
  const array = arr.slice();
  const result = [];
  for(let i = 0; i < getRandomPositiveInteger(1, array.length); i++) {
    const element = getRandomArrayElement(array);
    const indexSearchedFeature = array.indexOf(element);

    const swap = array[0];
    array[0] = array[indexSearchedFeature];
    array[indexSearchedFeature] = swap;

    array.shift();
    result.push(element);
  }
  return result;
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getElementsNotRepeat};
