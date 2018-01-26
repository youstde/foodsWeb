export default  {
  onMessage: function(name,callback){
    var msgs = window.onMessage[name] = window.onMessage[name] || [];
    msgs.push(callback);
  },
  sendMessage: function(name,param){
    var msgs = window.onMessage[name] || [];
    msgs.forEach(function(msg){
      msg(param);
    })
  },
  getQueryString: (name) => {
    let queryJson = {};
    let search = window.location.href.split('?')[1];
    let fields = search.split('&');
    fields && fields.forEach(function(field){
      var arr = field.split('=');
      queryJson[arr[0]] = arr[1];
    });

    return queryJson[name];
  }
}
