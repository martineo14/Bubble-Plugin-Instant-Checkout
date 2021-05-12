function(instance, context) {
  

 var popupCenter = function popupCenter(_ref) {
  var url = _ref.url;
  var title = _ref.title;
  var w = _ref.w;
  var h = _ref.h;

  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var systemZoom = width / window.screen.availWidth;
  var left = (width - w) / 2 / systemZoom + dualScreenLeft;
  var top = (height - h) / 2 / systemZoom + dualScreenTop;
  var newWindow = window.open(url, title, "\n      scrollbars=yes,\n      width=" + w / systemZoom + ",\n      height=" + h / systemZoom + ",\n      top=" + top + ",\n      left=" + left + "\n      ");

  if (window.focus) {
    newWindow.focus();
  }
};

var registerPopupListener = function registerPopupListener(url) {
  window.addEventListener("message", function (event) {
    var data = event.data;
    var origin = event.origin;

    try {
      var _JSON$parse = JSON.parse(data);
      var message = _JSON$parse.message;

      if (origin === context.keys["PopUpBaseUrl"] && message === "ORDER_PLACED") {
         instance.triggerEvent("approved");
      }
    } catch (err) {
      // handle error
    }
  });
};

    
  var popupBaseUrl = context.keys["PopUpBaseUrl"];
  var checkoutUrl = `${popupBaseUrl}/checkout?appKey=${context.keys["AppKey"]}`;
    
  var btn = $(`<button data-url=${checkoutUrl}>Instant Checkout</button>`);

    
    btn.click(function(a) {
     var popupColor = event.target.getAttribute("popup-color");
     var product = event.target.getAttribute("product-id");
     var quantity = event.target.getAttribute("product-quantity");
     var url = `${event.target.getAttribute("data-url")}&products=%5B%7B%22i%22:%22${product}%22,%22q%22:${quantity}%7D%5D&color=${popupColor}`;
        
     event.preventDefault();
     popupCenter({ url: url, w: 400, h: 700 });
     registerPopupListener(url);
  });
    
      
  instance.canvas.append(btn);
}