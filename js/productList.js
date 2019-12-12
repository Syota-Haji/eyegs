$(document).ready(function () {
    $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
    $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
});

document.getElementById("togglemenubar").classList.add("collapsed");

//サイドメニューバー制御用javascript
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
//トップメニューが押されたときサイドメニューを閉じる
$("#togglemenubar").click(function (e) {
  if (document.getElementById("wrapper").classList.contains('toggled')) {
    document.getElementById("menu-toggle").click();
  }
});

$("#menu-toggle").click(function (e) {
  if (document.getElementById("togglemenubar").classList.toggle('collapsed')) {
    //collapsedが存在する場合(閉じている)
  }
  document.getElementById("togglemenubar").classList.toggle('collapsed');
});
