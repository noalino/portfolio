const randomize = (min, max, units) => (
  `${Math.floor(Math.random() * (max - min) + min)}${units}`
);

export default randomize;