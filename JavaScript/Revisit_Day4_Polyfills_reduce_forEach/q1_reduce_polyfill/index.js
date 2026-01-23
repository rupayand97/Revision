Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for(let i = 0; i< this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

//----------------------------------------------------------------------------------

const nums = [1, 2, 3, 4, 5];
const sum = nums.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

const items = [
  { category: 'fruit', name: 'apple' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'banana' }
];
const grouped = items.myReduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item.name);
  return acc;
}, {});
console.log(grouped);
// { fruit: ['apple', 'banana'], vegetable: ['carrot'] }
