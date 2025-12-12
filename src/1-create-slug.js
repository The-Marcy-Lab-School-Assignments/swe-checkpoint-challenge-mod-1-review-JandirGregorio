// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  if (title.includes('!') || title.includes('#') || title.includes('?')) return null;

  const words = title.split(' ');
  let slug = '';
  words.forEach((word) => slug += '-' + word.toLowerCase());

  return slug.slice(1);
};

module.exports = {
  createSlug,
};
