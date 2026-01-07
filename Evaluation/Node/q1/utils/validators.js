exports.isValidDate = (date) => !isNaN(Date.parse(date));

exports.isValidStatus = (status) =>
  ['todo', 'in-progress', 'completed'].includes(status);

exports.isValidPriority = (priority) =>
  ['low', 'medium', 'high', 'critical'].includes(priority);
