this["JST"] = this["JST"] || {};

this["JST"]["app/templates/feed.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h2>'+
( headline )+
' &darr;</h2>';
}
return __p;
};

this["JST"]["app/templates/footer.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class ="footer">\n    <span class="tags">\n        <h1>Explore more Zeegas...  <br>\n            <a class="tag-link" data-bypass="true" href="'+
(path )+
'tags/bestof" >#bestof</a>\n            <a class="tag-link" data-bypass="true" href="'+
(path )+
'tags/stories" >#stories</a>\n            <a class="tag-link" data-bypass="true" href="'+
(path )+
'tags/funny" >#funny</a>\n            <a class="tag-link" data-bypass="true" href="'+
(path )+
'tags/music" >#music</a>\n        </h1>\n    </span>\n    <span >\n        <a class ="join" href="'+
(path )+
'/register">Join Zeega</a>\n        \n    </span>   \n  </div>';
}
return __p;
};

this["JST"]["app/templates/layout-main.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="ZEEGA-content-wrapper">\n    <div class="sidebar-wrapper"></div>\n    <div class="content"></div>\n</div>';
}
return __p;
};

this["JST"]["app/templates/sidebar.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="about" />\n    <h2> Zeega is a new form of interactive media. Learn more. <h2>\n</div>\n\n<div class="explore" />\n    <h2>Explore</h2>\n    <a data-bypass="true" href="'+
(path )+
'tag/bestof" class="tag-link">#bestof</a>\n    <a data-bypass="true" href="'+
(path )+
'tag/stories" class="tag-link">#stories</a>\n    <a data-bypass="true" href="'+
(path )+
'tag/funny" class="tag-link">#funny</a>\n    <a data-bypass="true" href="'+
(path )+
'tag/music" class="tag-link">#music</a>\n</div>';
}
return __p;
};

this["JST"]["app/templates/zeega.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<article style="background-image: url('+
(cover_image )+
');" >\n            <div class="info-overlay">\n                <div class="left-column">\n                  <a data-bypass="true" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n                    <div class="profile-token" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n                   </a>\n                </div>\n                <div class="right-column">\n                  <h1 class = "caption">'+
( title )+
'</h1>\n                  \n                  <div class="profile-name">\n                    <a data-bypass="true" href="'+
(path )+
'profile/'+
(user.id)+
'" >\n                      '+
(user.display_name)+
'\n                    </a>\n                   \n                  </div>\n                 \n                </div>\n                  \n            \n            </div>\n        <a href="'+
(path )+
''+
(id )+
'" class="mobile-play" data-bypass="true"></a>\n</article>';
}
return __p;
};