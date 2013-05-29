this["JST"] = this["JST"] || {};

this["JST"]["app/templates/item-mini.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='\n<div class="item-content">\n\t<div class="item-overlay">\n\t\t<h3>'+
( title )+
'</h3>\n\t\t<a class="item-profile" href = "'+
( path )+
'profile/'+
( user.id )+
'">'+
( user.display_name )+
'</a>\n\t</div>\n</div>\n    \n';
}
return __p;
};

this["JST"]["app/templates/item.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='\n<div class="item-content">\n    \t<h2>'+
( title )+
'</h2>\n   \t\t<a class="item-profile" href = "'+
( path )+
'profile/'+
( user.id )+
'">'+
( user.display_name )+
'</a>\n</div>';
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

this["JST"]["app/templates/theme-mini.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="row">       \n    <h2>'+
( title )+
' <span class="tagline">'+
( description )+
'</span> </h2>\n    <div class="items"></div>\n</div>              \n';
}
return __p;
};

this["JST"]["app/templates/theme.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="row">       \n    <h2>'+
( title )+
'<span class="tagline">'+
( description )+
'</span> </h2>\n    <div class="items"></div>\n</div>              \n            \n';
}
return __p;
};