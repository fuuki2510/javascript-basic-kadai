const event = new Date(Date.UTC(2025, 2, 9,));
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString(undefined, options));
