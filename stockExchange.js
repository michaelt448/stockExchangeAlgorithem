

function BruteForce(list) {
  resultList = [];
  maximum = -1;
  count = 0;
  for(let i = 0; i < list.length; i++) {
    for (let j = i+1; j < list.length; j++) {
      resultList.push(list[j] - list[i]);
    }
  }
  for(let i = 0; i < resultList.length; i++) {
    if(resultList[i] > maximum){
      maximum = resultList[i];
    }
  }
  return maximum;
}

console.log(BruteForce([3,16,7,]));
console.log(BruteForce([45,24,35,31,40,38,11]));

function divideAndConquer()