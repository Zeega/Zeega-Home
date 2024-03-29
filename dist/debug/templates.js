this["JST"] = this["JST"] || {};

this["JST"]["app/templates/cover-home.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="cover homepage" >\n    <ul class="media-grid"></ul>\n\n    <span class="tagline">\n        <h2>Pick a GIF of the day to start a new Zeega</h2>\n    </span>\n</div>';
}
return __p;
};

this["JST"]["app/templates/cover-profile.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="cover" \n    ';
 if ( background_image_url != "") { 
;__p+='\n        style ="background-image:url('+
( background_image_url )+
')" \n    ';
 } 
;__p+='\n>\n    <div class="profile-token-large" \n        ';
 if ( thumbnail_url !="") { 
;__p+='\n        style="background-image:url('+
( thumbnail_url )+
')"\n        ';
 } 
;__p+='\n    ></div>\n\n    <span class="headline">\n        <h2 class="display-name">'+
( display_name )+
'</h2>\n        <h3 class="username"><small>@'+
( username )+
'</small></h3>\n        <p class="bio">'+
( bio )+
'</p>\n    </span>\n\n    ';
 if ( editable ) { 
;__p+='\n        <ul class="bottom-menu">\n            <li>\n                <a href="#" class="edit-bio btnz btnz-light">edit profile</a>\n            </li>\n            <li>\n                <a href="#" class="save-bio btnz btnz-green">save</a>\n            </li>\n            <li>\n                <a href="/settings" data-bypass="true" class="settings"></a>\n            </li>\n        </ul>\n    ';
 } 
;__p+='\n\n</div>\n\n';
 if ( editable ) { 
;__p+='\n    <div class="profile-image-inputs">\n        <i class="icon-chevron-left"></i> Profile Image <input type="file" class="profile-image" name="profile-image" size="chars">\n        <i class="icon-chevron-up"></i> Background Image <input type="file" class="background-image" name="background-image" size="chars"> \n    </div>\n';
 } 
;__p+='\n';
}
return __p;
};

this["JST"]["app/templates/feed.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h2 class="feed-headline">'+
( headline )+
' &darr;</h2>';
}
return __p;
};

this["JST"]["app/templates/footer.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='\n    <span class="tags">\n        <h1>Explore more Zeegas...  <br>\n            <a data-bypass="true" href="'+
(path )+
'tag/bestof" class="tag-link" name="bestof">#bestof</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/music" class="tag-link" name="music">#music</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/politics" class="tag-link" name="politics">#politics</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/stories" class="tag-link" name="stories">#stories</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/funny" class="tag-link" name="funny">#funny</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/sports" class="tag-link" name="sports">#sports</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/zeegacard" class="tag-link" name="zeegacard">#zeegacard</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/tribute" class="tag-link" name="tribute">#tribute</a>\n            <a data-bypass="true" href="'+
(path )+
'tag/todayinzeega" class="tag-link" name="todayinzeega">#dailyzeega</a>\n        </h1>\n    </span>\n    ';
 if (userId == -1 ){ 
;__p+='\n        <span >\n            <h1>\n                <a class="btnz join-zeega" href="'+
(path )+
'register" >Join Zeega</a>\n            </h1>\n        </span>   \n    ';
 } 
;__p+='';
}
return __p;
};

this["JST"]["app/templates/layout-main.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="cover-wrapper"></div>\n<div class="ZEEGA-content-wrapper">\n    <div class="content"></div>\n\n    <span class="scroll-to-top hidden" >\n        <h1>\n            <a class="btnz" href="#" > ↑ </a>\n        </h1>\n    </span>\n</div>';
}
return __p;
};

this["JST"]["app/templates/media-item.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<a href="'+
( root )+
'project_from_item/'+
( archive )+
'" class="corner-'+
( Math.floor( Math.random() * 4 ) )+
'"></a>';
}
return __p;
};

this["JST"]["app/templates/sidebar.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="about" />\n    \n    <div class="logo-wrapper">\n        <span class="logo-mini"></span>\n    </div>\n\n    <div>\n        <h2>\n            is the easiest way to create and share interactive videos.\n            <a class="about-link" href="http://blog.zeega.com/about">Learn more.</a>\n        <h2>\n        <br>\n        <a class="btnz join-zeega" href="'+
(path )+
'register" > Sign Up</a>\n    </div>\n\n</div>\n\n<div class="explore">\n    <h2>Explore:</h2>\n    <ul>\n        <li>\n            <a data-bypass="true" href="'+
(path )+
'tag/bestof" class="tag-link" name="bestof">#bestof</a>\n        </li>\n        <li>\n            <a data-bypass="true" href="'+
(path )+
'tag/music" class="tag-link" name="music">#music</a>\n        </li>\n        <li>\n            <a data-bypass="true" href="'+
(path )+
'tag/politics" class="tag-link" name="politics">#politics</a>\n        </li>\n        <li>\n            <a data-bypass="true" href="'+
(path )+
'tag/stories" class="tag-link" name="stories">#stories</a>\n        </li>\n        <li>\n            <a data-bypass="true" href="'+
(path )+
'tag/funny" class="tag-link" name="funny">#funny</a>\n        </li>\n        <li>\n            <a data-bypass="true" href="'+
(path )+
'tag/sports" class="tag-link" name="sports">#sports</a>\n        </li>\n        <li>\n            <a data-bypass="true" href="'+
(path )+
'tag/tribute" class="tag-link" name="tribute">#tribute</a>\n        </li>\n        <li>\n            <a data-bypass="true" href="'+
(path )+
'tag/zeegacard" class="tag-link" name="zeegacard">#zeegacard</a>\n        </li>\n        <li>\n            <a data-bypass="true" href="'+
(path )+
'tag/todayinzeega" class="tag-link" name="todayinzeega">#dailyzeega</a>\n        </li>\n    </ul>\n</div>';
}
return __p;
};

this["JST"]["app/templates/zeega-card.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="left-col">\n  <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n    <div class="user-token token-medium" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n  </a>\n  <div class="profile-name">\n    <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id)+
'" >\n      '+
(user.display_name)+
'\n    </a>\n  </div>\n  <ul class="remixers">\n\n<!--\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n    <li>\n      <a data-bypass="true" class="profile-link" href="'+
(path )+
'profile/'+
(user.id )+
'" >\n        <div class="user-token token-small" style="background-image: url('+
( user.thumbnail_url )+
');"></div>\n      </a>\n    </li>\n-->\n\n\n  </ul>\n</div>\n\n\n<div class="right-col">\n  <div class="cover-image" style="\n      ';
 if( cover_image != "" ) { 
;__p+='\n        background-image: url('+
(cover_image )+
');\n      ';
 } 
;__p+='\n      ">\n    <span class="playbutton"></span>\n    <div class="static"></div>\n  </div>\n  <div class="social-stats">';
 if( favorite_count ) { 
;__p+='<i class=\'icon-heart\'></i> '+
( favorite_count )+
' ';
 if( favorite_count == 1 ) { 
;__p+='favorite';
 } else { 
;__p+='favorites';
 } 
;__p+=' ';
 } 
;__p+='<i class=\'icon-play\'></i> '+
( views )+
' ';
 if( views == 1 ) { 
;__p+='view';
 } else { 
;__p+='views';
 } 
;__p+='</div>\n';
 if ( title !== "" ) { 
;__p+='\n  <div class="caption">\n    <i class=\'icon-comment\'></i> '+
( title )+
'\n  </div>\n';
 } 
;__p+='\n  <div class="share">\n    <ul>\n      <li>\n        <a href="'+
( twitterShare )+
'" target="blank"><i class="icon-social icon-twitter"></i></a>\n      </li>\n      <li>\n        <a href="'+
( facebookShare )+
'" target="blank"><i class="icon-social icon-facebook"></i></a>\n      </li>\n      <li>\n        <a href="'+
( tumblrShare )+
'" target="blank"><i class="icon-social icon-tumblr"></i></a>\n      </li>\n      <li>\n        <input type="text" value="'+
( path )+
''+
( id )+
'" onfocus="this.select()" onMouseUp="return false" readonly>\n      </li>\n    </ul>\n  </div>\n\n  ';
 if ( editable ) { 
;__p+='\n    <div class="edit-actions">\n      <a href="/editor/'+
( id )+
'" class="edit-zeega btnz btnz-light" data-bypass="true" >edit</a>\n      <a href="#" class="delete-zeega btnz btnz-light">delete</a>\n    </div>\n  ';
 } 
;__p+='\n</div>';
}
return __p;
};

this["JST"]["app/templates/zeega-viewer.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<iframe \n    id="viewer-iframe"\n    src="'+
(path )+
'"\n    hideChrome="true" \n    webkitAllowFullScreen \n    mozallowfullscreen \n    allowFullScreen\n></iframe>\n<div class="modal-close">×</div>';
}
return __p;
};