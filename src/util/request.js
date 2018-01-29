export default function request(url, config) {
  if (url.indexOf('//') === -1) {
    if(process.env.NODE_ENV === 'production'){
      url = '//stblog.ltyun.cc/api' + url;
    }else{
      //本地
      url = '//api.youstde.blog.com' + url;
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

