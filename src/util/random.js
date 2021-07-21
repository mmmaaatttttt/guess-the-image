export function choice(arr) {
  const randomIndex = randomIntBetween(0, arr.length);
  return arr[randomIndex];
}

export function shuffle(arr) {
  const arrCopy = [...arr];
  for (let i = arrCopy.length - 1; i > 0; i--) {
    const j = randomIntBetween(0, i + 1);
    [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
  }
  return arrCopy;
}

export function randomIntBetween(min = 0, max = 10) {
  if (max < min) {
    throw new Error(`min (${min}) must be less than or equal to max (${max}).`);
  }

  return Math.floor(min + Math.random() * (max - min));
}
