// map function:  Array.map((value, index, array)=>{})

// map polyfill
Array.prototype.myMap = function(callback){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this))        
    }
    return temp;
}

// Test Case:
const nums = [1, 2, 3, 4, 5];
const doubled = nums.myMap(x => x * 2);
console.log(doubled); //o/p: [2, 4, 6, 8, 10]

const users = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
const names = users.myMap(u => u.name);
console.log(names); //o/p: ['John', 'Jane']
