let check= ["044", "451", "1"],
data = ["343", "333", "044", "123", "444", "555"];

let resSet = check.filter( function(n) { 
  return !this.has(n) 
}, new Set(data) )


let resIncl = check.filter (function (n){
  return !data.includes(n)
})

console.log(resSet);
console.log(resIncl);

