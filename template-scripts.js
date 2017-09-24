
//window location object
// If URL is http://www.somedomain.com/account/search?filter=a#top

window.location.pathname // /account/search

// For reference:

window.location.host     // www.somedomain.com (includes port if there is one)
window.location.hostname // www.somedomain.com
window.location.hash     // #top
window.location.href     // http://www.somedomain.com/account/search?filter=a#top
window.location.port     // (empty string)
window.location.protocol // http:
window.location.search   // ?filter=a  

//----------------------------------------------------------------------------------

var url = 'http://www.somedomain.com/account/search?filter=a#top';
var urlObject = parseUrl(url);

urlObject.href         // 'http://www.somedomain.com/account/search?filter=a#top'
urlObject.searchParams // { filter: 'a' }
urlObject.hash         // '#top'
urlObject.search       // '?filter=a'
urlObject.protocol     // 'http:'
urlObject.host         // 'www.somedomain.com'
urlObject.hostname     // 'www.somedomain.com'
urlObject.port.        // ''
urlObject.path         // '/account/search'

//if string contains characters
if (str.indexOf("Yes") >= 0)
  
//----------------------------------------------------------------------------------
$(document).ready(function(){ 
 var cPath = window.location.href; alert(cPath);
 $('.top_filter ul li').each(function(){ 
  var liPath =  $(this).find('a').attr('href'); 
  if( cPath.indexOf(liPath) > 0 ){ 
    $(this).find('a').css('border-bottom','2px solid #000');  
  } 
 });
});


