if (!Array.prototype.some) {
  Array.prototype.some = function(fun/*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}

window.onMessage = function(name,callback){
  var msgs = window.onMessage[name] = window.onMessage[name] || [];
  if(msgs.indexOf(callback)===-1){
      msgs.push(callback);
  }
};

window.sendMessage = function(name,param){
  var msgs = window.onMessage[name] || [];
  msgs.forEach(function(msg){
      msg(param);
  })
};
