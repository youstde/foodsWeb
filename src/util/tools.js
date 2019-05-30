
// 生成GUID
export const uuid = () => {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

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
