const printLineItem = (item) => {
  return `Name: ${item.name} - Price: $${item.price}`;
};

const items = [
  { name: 'Apple', price: 1 },
  { name: 'Banana', price: 0.75 },
];

const withHeader = (contentFunc) => {
  return (...args) => {
    const header = "=== Header ===\n";
    return header + contentFunc(...args);
  };
};

const withFooter = (contentFunc) => {
  return (...args) => {
    const footer = "\n=== Footer ===";
    return contentFunc(...args) + footer;
  };
};

const printAllItems = (items) => items.map(printLineItem).join('\n');

const report = withFooter(withHeader(printAllItems));

console.log(report(items))
