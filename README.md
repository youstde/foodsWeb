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

### 移动端控制键盘的显隐
[移动端控制键盘的显隐](https://www.cnblogs.com/matthew9298-Begin20160224/p/5951904.html)

###
[ios input输入时弹出键盘框 页面整体上移键盘框消失后页面不能回弹的问题](https://blog.csdn.net/zhangkeke_/article/details/88739521)

###checkbox在vue中的使用
[ Vue 复选框 checkbox 全选与取消全选](https://c.runoob.com/codedemo/3870)

###JavaScript 浮点数陷阱及解法
[JavaScript 浮点数陷阱及解法](https://github.com/camsong/blog/issues/9)
