

// 生成GUID
// export const uuid = async () => {
//   const result = await getSk()
//   return result
// }

export const createSign = (arr) => {
  arr = arr.sort();
  let singStr = '';
  arr.some((item) => {
    singStr = `${singStr}${item}@`;
  })
  singStr += 'fresh';
  singStr = singStr.replace(/^@/, '');
  console.log(singStr)
  return singStr;
}

// 两数相加
export const addNum = (num1, num2) => {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}
// 两数相乘
export const multiplyNum = (num1, num2) => {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  const finalNum = Math.pow(baseNum, 2);
  return (num1 * baseNum) * (num2 * baseNum) / finalNum;
}


export const getLocalStorage = name => {
  const localStr = localStorage.getItem(name)
  let localObj = null
  if(localStr) {
    localObj = JSON.parse(localStr)
  }
  return localObj
}
