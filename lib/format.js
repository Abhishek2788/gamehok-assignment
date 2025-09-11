export function epochToLocalString(epochSeconds) {
  if (!epochSeconds) return '—';
  // API gives seconds (e.g. 1741260600). Convert to ms.
  const d = new Date(epochSeconds * 1000);
  return d.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
}

export function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str; // Handle non-string input or empty strings
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatGameName(name) {
  // Split by underscore
  return name
    .split("_")
    .map(word => {
      // Keep acronyms fully uppercase
      if (word.length <= 4 && word === word.toUpperCase()) {
        return word
      }
      // Otherwise capitalize only first letter
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(" ")
}

