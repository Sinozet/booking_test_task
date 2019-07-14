export
const decodeDate = (date) => {
  const d = `0${date.getDate()}`.slice(-2);
  const m = `0${date.getMonth() + 1}`.slice(-2);
  const y = `000${date.getFullYear()}`.slice(-4);
  return `${y}-${m}-${d}`;
};

export
const encodeDate = (value) => new Date(value)