// https://stackoverflow.com/a/7616484/52349
const hashFromText = text => {
  let hash = 0;
  let chr;
  if (text.length === 0) return hash;
  for (let i = 0; i < text.length; i++) {
    chr = text.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

module.exports = { hashFromText };
