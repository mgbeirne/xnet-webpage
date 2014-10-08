// Initial Javascript learning file $Id: script.js,v 1.1 2014/07/07 17:52:56 beirne Exp beirne $


(function($){ //create closure so we can safely use $ as alias for jQuery

    $(document).ready(function(){
	// initialise plugin
	var example = $('#example').superfish({
	//add options here if required
        });
    });

})(jQuery);

$('#no-script').remove();
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

