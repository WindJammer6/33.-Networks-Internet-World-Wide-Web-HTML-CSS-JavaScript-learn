function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const foo = "bar";
const bar = "foo";

// Exporting functions and variables:
module.exports = {capitalizeString, foo, bar};