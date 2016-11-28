    ons.ready(function() {
      console.log("Onsen UI is ready!");
    });

    window.fn = {};
    window.fn.open = function() {
      var menu = document.getElementById('menu');
      alert(menu);
      menu.open();
    };
    window.fn.load = function(page) {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content
        .load(page)
        .then(menu.close.bind(menu));

    };
    window.fn.navigate = function(page) {
      alert(page);
      document.querySelector('#myNav').pushPage('docs/' + page);
    };    
    window.fn.changeFontSize = function() {
      var range = document.getElementById('fontRange');
      ons.notification.alert(range.value);
    　localStorage.setItem('fontSize', range.value);
    };

document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.matches('#home-page')) {
    //ローカルストレージからフォントサイズ取得
    var key = 'fontSize';
    var data = localStorage.getItem(key);
    //設定
    //$('ons-button.name').css(key, data + 'px');
  }
});