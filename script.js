// Initial Javascript learning file $Id: script.js,v 1.1 2014/07/07 17:52:56 beirne Exp beirne $

// configuration variables
var timeout = 250; //milliseconds
var fadeSpeed = 500; //milliseconds
var useFade   = true;

// timers array
var timers = new Array();

// state array -- by id, value = active, false = inactive
var state = new Array();

//lastOpacity: used to prevent multiple timers from making the fade flicker
var lastOpacity = new Array();

var msie = false;
if( navigator.appName == "Microsoft Internet Explorer" ) msie = true;

//entry point: set element to visible and clear its timers
function setMenu( id ) {
  var e = document.getElementById(id);
  e.style.visibility = "visible";
  state[id] = true;
  setOpacity( id, 1 );
  if(timers[id]) {
    clearTimeout(timers[id]);
    timers[id] = undefined;
  }
}

// set element to hidden and reset its opacity
// typically called by a timer
// may be used as an entry point to bypass timers and fades
function hideMenu( id ) {
  var e = document.getElementById(id);
  state[id] = false;
  e.style.visibility = "hidden";
  if(useFade) setOpacity( id, 1 );
}

//entry point: hide the menu using fade (if enabled)
function clearMenu( id ) {
  if(useFade) timers[id] = setTimeout( 'fadeMenu( "' + id + '" )', timeout );
  else timers[id] = setTimeout( 'hideMenu( "' + id + '" )', timeout );
}

// set the opacity
// special support for MSIE
function setOpacity( id, value ) {
  var e = document.getElementById(id);
  if(state[id]) value = 1; // menu fade was interrupted
  else if(lastOpacity[id] && (lastOpacity[id] < value)) value = lastOpacity[id]; //prevents flicker if multiple timers set

  if(msie) e.style.filter = 'alpha(opacity=' + value * 100 + ')'; //MS Internet Explorer
  else e.style.opacity = (value);  // Everyone else (standard DOM)

  if( value == 0 ) hideMenu( id ); //when all faded, reset the menu state
  lastOpacity[id] = value;
}

// fade a menu
// typically called by a timer
function fadeMenu ( id )
{
    var start = 0;
    var end = 0;
    var s = Math.round( fadeSpeed / 25 );   // fade in 25ms increments
    var timer = 0;
    var i;

    state[id] = false;

    for( i = s; i >= 0 ; i-- ) {
        setTimeout( "setOpacity('" + id + "'," + ( i / s ) + ")", timer++ * fadeSpeed / s )
    }
}


$(document).ready(function() {
	//alert ("Welcome to Mike Beirne's home page");
  rotatePics(1);
});
$('#no-script').remove();
$('.spoiler').hide();
$('<input type="button" class="revealer" value="Tell Me!"/>')
  .insertBefore('.spoiler');
$('.revealer').click(function(){
  $(this).hide();
  $(this).next().fadeIn();
});

//$('p').animate({
//  padding: '20px',
//  fontSize: '20px'
//}, 2000);

/*
$('.menuVert li').hover(function() {
  $(this).animate({paddingLeft: '+=15px'}, 200);
}, function() {
  $(this).animate({paddingLeft: '-=15px'}, 200);
});
*/


$(window).scroll(function () {
  $('#navigation').css('top', $(document).scrollTop());
});

//$(document).ready(function() {
//  rotatePics(1);
//});
 
function rotatePics(currentPhoto) {
  var numberOfPhotos = $('#photos img').length;
  currentPhoto = currentPhoto % numberOfPhotos;
        
  $('#photos img').eq(currentPhoto).fadeOut(function() {
    // re-order the z-index
    $('#photos img').each(function(i) {
      $(this).css(
        'zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos
      );
    });
    $(this).show();
    setTimeout(function() {rotatePics(++currentPhoto);}, 4000);
  });                   
}
function addClass(element, classToAdd) {
    var currentClassValue = element.className;
      
    if (currentClassValue.indexOf(classToAdd) == -1) {
        if ((currentClassValue == null) || (currentClassValue === "")) {
            element.className = classToAdd;
        } else {
            element.className += " " + classToAdd;
        }
    }
}
 
function removeClass(element, classToRemove) {
    var currentClassValue = element.className;
 
    if (currentClassValue == classToRemove) {
        element.className = "";
        return;
    }
 
    var classValues = currentClassValue.split(" ");
    var filteredList = [];
 
    for (var i = 0 ; i < classValues.length; i++) {
        if (classToRemove != classValues[i]) {
            filteredList.push(classValues[i]);
        }
    }
 
    element.className = filteredList.join(" ");
}


var now = new Date();
day = now.getDate();
month = now.getMonth() + 1;

if (month == 10 && day >= 11 ) {
var halloweenSel = document.querySelector("#regular");
addClass(halloweenSel, "halloween");
}

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-54000014-1', 'auto');
  ga('send', 'pageview');

