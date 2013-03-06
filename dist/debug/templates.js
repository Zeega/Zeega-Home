this["JST"] = this["JST"] || {};

this["JST"]["app/templates/item-mini.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='\n<div class="item-content">\n    <h3>'+
( title )+
'</h3>\n    <a class="item-profile" href = "http://zeega.com/profile/'+
( user_id )+
'">'+
( display_name )+
'</a>\n</div>\n    \n';
}
return __p;
};

this["JST"]["app/templates/item.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='\n<div class="item-content">\n    <h2>'+
( title )+
'</h2>\n    <a class="item-profile" href = "http://zeega.com/profile/'+
( user_id )+
'">'+
( display_name )+
'</a>\n</div>\n    \n<p class="headline">'+
( description )+
'</p>';
}
return __p;
};

this["JST"]["app/templates/layout-main.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="nav container"></div>\n<div id="content"></div>';
}
return __p;
};

this["JST"]["app/templates/navbar.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="row">       \n    <div class="span6">\n        <a href="/"><img src="assets/img/zeega-logo.png" alt="zeega-logo" width="134" height="43"></a>\n        <div class="strapline">\n            Remake the Internet\n        </div>\n    </div>\n    \n    <div class="span8">\n        <div class="navigation">    \n            <div class="">\n                <a href="#" class="dropdown-toggle">About </a> |     \n                <a href="http://blog.zeega.com" target="_blank">Blog</a> | \n                <a href="/login">Login</a>\n            </div>\n        </div>\n    </div>\n</div>              \n';
}
return __p;
};

this["JST"]["app/templates/theme.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="row">       \n    <h2>'+
( title )+
'</h2>\n    <p>'+
( description )+
'</p>\n\n\n    <div class="items"></div>\n</div>              \n';
}
return __p;
};