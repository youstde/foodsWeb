

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

// 两数相减
export const deleteNum = (num1, num2) => {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum - num2 * baseNum) / baseNum;
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

// 判断当前是在微信还是在支付宝中
export const  isAliOrWx = () => {
  var typeBower = '';
  var browser = {
     versions: function() {
        var u = navigator.userAgent,
           app = navigator.appVersion;
        return { //移动终端浏览器版本信息
           trident: u.indexOf('Trident') > -1, //IE内核
           presto: u.indexOf('Presto') > -1, //opera内核
           webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
           gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
           mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
           ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
           android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
           iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
           iPad: u.indexOf('iPad') > -1, //是否iPad
           webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
     }(),
     language: (navigator.browserLanguage || navigator.language).toLowerCase()
  };
  if(browser.versions.mobile) { //判断是否是移动设备打开。browser代码在下面
     var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
     if(ua.match(/Alipay/i)=="alipay"){
        typeBower = 'ali';
     }
      if(ua.match(/MicroMessenger/i) == "micromessenger") {
       typeBower = 'wx';
     }
  }
  return typeBower;
};
