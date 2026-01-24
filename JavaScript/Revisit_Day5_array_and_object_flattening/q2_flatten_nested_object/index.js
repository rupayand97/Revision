const flattenObject = (obj) => {
  const result = {};
  const stack = [{ value: obj, path: '' }];

  while (stack.length) {
    const { value, path } = stack.pop();

    for (const key in value) {
      const newPath = path ? `${path}.${key}` : key;

      if (typeof value[key] === 'object' && value[key] !== null) {
        stack.push({ value: value[key], path: newPath });
      } else {
        result[newPath] = value[key];
      }
    }
  }

  return result;
};