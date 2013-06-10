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
__p+='\n    <span class="tags">\n        <h1>Explore more Zeegas...  <br>\n            <a class="tag-link" data-bypass="true" href="'+
(path )+
'tag/bestof" >#bestof</a>\n            <a class="tag-link" data-bypass="true" href="'+
(path )+
'tag/stories" >#stories</a>\n            <a class="tag-link" data-bypass="true" href="'+
(path )+
'tag/funny" >#funny</a>\n            <a class="tag-link" data-bypass="true" href="'+
(path )+
'tag/music" >#music</a>\n        </h1>\n    </span>\n    <span >\n        <h1>\n            <a class ="join" href="'+
(path )+
'/register">Join Zeega</a>\n        </h1>\n    </span>   \n  ';
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
__p+='<div class="about" />\n    \n    <div class="logo-wrapper"><span class="logo-mini"></span></div>\n    <div>\n        <h2>is a new form of interactive media. <a class="about-link" href="http://blog.zeega.com/about">Learn more.</a> <h2>\n        <br>\n        ';
 if (userId == -1 ){ 
;__p+='\n        <a class="btnz join-zeega" href="'+
(path )+
'register" > Sign Up</a>\n\n        ';
 } 
;__p+='\n    </div>\n\n</div>\n\n<div class="explore">\n    <h2>\n        Explore:\n        <a data-bypass="true" href="'+
(path )+
'tag/bestof" class="tag-link">#bestof</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/stories" class="tag-link">#stories</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/funny" class="tag-link">#funny</a>\n        <a data-bypass="true" href="'+
(path )+
'tag/music" class="tag-link">#music</a>\n    </h2>\n</div>';
}
return __p;
};

this["JST"]["app/templates/zeega-viewer.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<iframe src="'+
(path )+
'" endpage="true"  webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n<a href="#" class="modal-close">×</a>';
}
return __p;
};

this["JST"]["app/templates/zeega.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<article class="card" style="background-image: url('+
(cover_image )+
');" >\n            <div class="info-overlay">\n                <div class="left-column">\n                  <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n                    <div class="profile-token" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n                   </a>\n                </div>\n                <div class="right-column">\n                  <h1 class = "caption">'+
( title )+
'</h1>\n                  \n                  <div class="profile-name">\n                    <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id)+
'" >\n                      '+
(user.display_name)+
'\n                    </a>\n                   \n                  </div>\n                 \n                </div>\n                  \n            \n            </div>\n        <a href="'+
(path )+
''+
(id )+
'" class="play" data-bypass="true"></a>\n</article>';
}
return __p;
};