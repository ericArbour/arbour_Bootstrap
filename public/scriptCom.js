$(function() {
  $.get('https://www.reddit.com/r/seinfeldgifs.json?limit=100').done(function(response) {
    var list = response.data.children;
    for (var i = 0; i <= list.length; i++) {
      var url = list[i].data.url;
      url = url.substring(0, url.length - 1);
      if (url.substring(url.length - 3) === "gif") {
        var date = new Date(list[i].data.created * 1000);
        var title = list[i].data.title;
        var a = $('<a>').attr({href: url, 'data-lightbox': "image", title: title});
        var img = $('<img>').attr('src', list[i].data.thumbnail).addClass('gif');
        a.append(img);
        var h4 = $('<h4>').text(title);
        var p = $('<p>').text("-" + list[i].data.author).css('font-style', 'italic');
        var p2 = $('<p>').text((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear());
        var div = $('<div>').addClass('main event').append(h4, a, p, p2);
        $('#posts').append(div);
      }
    }
  });
});
