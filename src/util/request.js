export default function request(url, config) {
  if (url.indexOf('//') === -1) {
    if(window.location.href.indexOf('titan.')>-1){
      url = '//titan.adbaitai.com/titan-server' + url;
    }else{
      url = '//api.youstde.blog.com' + url;
      // url = '//127.0.0.1:7001' + url;
    }
  }
  config = config || {method: 'get'};
  config.method = config.method || 'get';

  if (config.method.toLowerCase() === "get") {
    config.params = config.params || {};
    config.params.time = new Date().getTime();
    return new Promise(function(resolve,reject){
      $.ajax({
        url: url,
        data: config.params,
        type: "GET",
        cache: false,
        xhrFields: {
          withCredentials: true
        },
        dataType: 'json',
        success: function (data) {
          resolve(data);
        },
        error: function () {
          reject('异常');
        }
      });
    })
  } else {
    return new Promise(function(resolve, reject){
      $.ajax({
        url: url,
        data: config.params,
        type: "POST",
        cache: false,
        xhrFields: {
          withCredentials: true
        },
        dataType: 'json',
        success: function (data) {
          resolve(data);
        },
        error: function () {
          reject('异常');
        }
      });
    })
  }
}

