const transactions = [
  { id: 1, category: 'Food', amount: 45.50, date: '2024-01-15' },
  { id: 2, category: 'Transport', amount: 20.00, date: '2024-01-16' },
  { id: 3, category: 'Food', amount: 30.75, date: '2024-01-17' },
  { id: 4, category: 'Entertainment', amount: 50.00, date: '2024-01-18' },
  { id: 5, category: 'Food', amount: 25.25, date: '2024-01-19' },
  { id: 6, category: 'Transport', amount: 15.50, date: '2024-01-20' }
];

//--------------------------------------------------------------------------

function aggregateData(transactions) {
  const summary = {};

  transactions.forEach(transaction => {
    const { category, amount } = transaction;

    if (!summary[category]) {
      summary[category] = {
        total: 0,
        count: 0,
        highest: amount,
        lowest: amount
      };
    }

    const data = summary[category];

    data.total += amount;
    data.count += 1;
    data.highest = Math.max(data.highest, amount);
    data.lowest = Math.min(data.lowest, amount);
  });

  for (const category in summary) {
    const data = summary[category];
    data.average = Number((data.total / data.count).toFixed(2));
    data.total = Number(data.total.toFixed(2));
  }

  return summary;
}

const result = aggregateData(transactions);
console.log(result);