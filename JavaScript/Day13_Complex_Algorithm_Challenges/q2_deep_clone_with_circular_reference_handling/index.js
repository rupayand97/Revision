function deepClone(value, visited = new Map()) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (visited.has(value)) {
    return visited.get(value);
  }

  const clone = Array.isArray(value) ? [] : {};
  visited.set(value, clone);

  for (let key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clone[key] = deepClone(value[key], visited);
    }
  }

  return clone;
}

const obj = {
  name: "John",
  address: {
    city: "NYC",
    coords: { lat: 40, lng: -74 },
  },
  hobbies: ["reading", "gaming"],
};

obj.self = obj;

const clonedObj = deepClone(obj);

console.log(clonedObj);
console.log(clonedObj === obj);
console.log(clonedObj.self === clonedObj);