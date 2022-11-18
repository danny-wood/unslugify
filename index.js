/**
 * Unslugifies a slugified string.
 *
 * @param {string} slug slugified string.
 * @returns {string} un-slugified string.
 */
const unslugify = (slug) => slug.replace(/\-/g, " ")
  .replace(/\w\S*/g,
  (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
);

export default unslugify;
