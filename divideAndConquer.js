var hashArray = [];

const main = (arr) => {
  return divideAndConq(arr)[0];
}
const divideAndConq = (arr) => {
  if(arr.length === 1) {
    return [0,[arr[0],arr[0]];
  }
  let halfPoint = Math.floor(arr.length/2);
  let [MaxProfitOne,FirstPairValue] = divideAndConq(arr.split(halfPoint));
  let [MaxProfitTwo,SecondPairValue] = divideAndConq(arr.split(halfPoint,arr.length));

  const maxProfit = max([MaxValueOne,
                      FirstPairValue[1] - SecondPairValue[0],
                      SecondPairValue[1] - FirstPairValue[0]]);
  const minValue = min(MinPairValue[0],MaxPairValue[0]);
  const maxValue = max(MaxPairValue[1],MaxPairValue[1]);
  return [maxProfit,[minValue,maxValue]];
}