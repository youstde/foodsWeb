export default  {
  getQueryString: (name) => {
    let queryJson = {};
    let search = window.location.href.split('?')[1];
    let fields = search.split('&');
    fields && fields.forEach(function(field){
      var arr = field.split('=');
      queryJson[arr[0]] = arr[1];
    });

    return queryJson[name];
  },
  setCookie: (name, value, expires, domain, path, secure)=> {
      var cookieText = "";
      cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
      if (expires instanceof Date) {
        cookieText += "; expires=" + expires.toGMTString();
      }
      if (path) {
        cookieText += "; path=" + path;
      }
      if (domain) {
        cookieText += "; domain=" + domain;
      }
      if (secure) {
        cookieText += "; secure";
      }
      document.cookie = cookieText;
  }
}
