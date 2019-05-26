```
npm run local
```
Array.prototype.some & Array.prototype.every

```js
function sort_ASCII(obj){
  var arr = new Array();
  var num = 0;
  for (var i in obj) {
    arr[num] = i;
    num++;
  }
  var sortArr = arr.sort();
  var sortObj = {};
  for (var i in sortArr) {
    sortObj[sortArr[i]] = obj[sortArr[i]];
  }
  return sortObj;
}

  console.log(sort_ASCII({
    noncestr: 'Wm3WZYTPz0wzccnW',
    jsapi_ticket: 'sM4AOVdWfPE4DxkXGE',
    timestamp: '1231312312',
    url: 'http://www.baidu.com'
  }))

```

### slot插槽的使用
```js
// 类似于react中this.props.children
https://cn.vuejs.org/v2/guide/components-slots.html
```
