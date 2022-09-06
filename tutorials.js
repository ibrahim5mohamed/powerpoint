function labelthumbs(t) {
    document.write('<ul id="label_with_thumbs">');
    for (var e = 0; e < numposts; e++) {
        var r, n, i = t.feed.entry[e],
            l = i.title.$t;
        if (e == t.feed.entry.length) break;
        for (var u = 0; u < i.link.length; u++) {
            if ("replies" == i.link[u].rel && "text/html" == i.link[u].type) var o = i.link[u].title,
                m = i.link[u].href;
            if ("alternate" == i.link[u].rel) {
                r = i.link[u].href;
                break
            }
        }
            try {
            n = i.media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/s450-e365")
        } 
      
        catch (t) {
            s = i.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5)
        }
      
        var p = i.published.$t,
            h = (p.substring(0, 4), p.substring(5, 7), p.substring(8, 10), new Array);
        h[1] = "Jan", h[2] = "Feb", h[3] = "Mar", h[4] = "Apr", h[5] = "May", h[6] = "June", h[7] = "July", h[8] = "Aug", h[9] = "Sept", h[10] = "Oct", h[11] = "Nov", h[12] = "Dec", document.write('<li class="recent-box">'), 1 == showpostthumbnails && document.write('<div class="imageContainer"><a href="' + r + '" ><img class="lazy label_thumb" src="' + n.replace("s72-c","s450-rw-e365") + '" title="' + l + '" alt="' + l + '"/></a></div>'), document.write('<a class="label_title" href="' + r + '" >' + l + "</a>");
        var g = 0;
        document.write("");
        for (var f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], w = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"], v = (p = i.published.$t).split("-")[2].substring(0, 2), y = p.split("-")[1], _ = p.split("-")[0], A = 0; A < f.length; A++)
            if (parseInt(y) == f[A]) {
                y = w[A];
                break
            } var k = v + " " + y + " " + _;
        if (1 == showpostdate && document.write('<div class="toe"><a href="' + r + '" class="post-date">' + k + "</a>"), 1 == showcommentnum && (1 == g && " | ", "1 Comments" == o && (o = "1 Comment"), "0 Comments" == o && (o = "No Comments"), o, g = 1, document.write('<a class="recent-com" href="' + m + '" target ="_top">' + o + "</a></div>")), "content" in i) var $ = i.content.$t;
        else if ("summary" in i) $ = i.summary.$t;
        else $ = "";
        if ($ = $.replace(/<\S[^>]*>/g, ""), 1 == showpostsummary)
            if ($.length < numchars) document.write(""), document.write($), document.write("");
            else {
                document.write("");
                var x = ($ = $.substring(0, numchars)).lastIndexOf(" ");
                $ = $.substring(0, x), document.write('<p class="post-summary">' + $ + "...</p>")
            } document.write("</li>"), e != numposts - 1 && document.write("")
    }
    document.write("</ul>")
}