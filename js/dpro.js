//dpro.js
//thanks to : http://www.mikedoesweb.com/2012/creating-your-own-javascript-library/
function d(id) {
 
   // About object is returned if there is no 'id' parameter
   var about = {
      Version: 0.1,
      Author: "Bjoern Dexta Liebke",
      Created: "somewhere",
      Updated: "14/04/21"
   };
 
   if (id) {
 
      // Avoid clobbering the window scope:
      // return a new _ object if we're in the wrong scope
      if (window === this) {
         return new d(id);
      }
 
      // We're in the correct object scope:
      // Init our element object and return the object
      this.e = document.getElementById(id);
      return this;
   } else {
      // No 'id' parameter was given, return the 'about' object
      return about;
   }
};

/* _ Prototype Functions
============================*/
d.prototype = {
   hide: function () {
      this.e.style.display = 'none';
      return this;
   },
 
   show: function () {
      this.e.style.display = 'inherit';
      return this;
   },
 
   bgcolor: function (color) {
      this.e.style.background = color;
      return this;
   },
 
   val: function (newval) {
      this.e.value = newval;
      return this;
   },

   html: function (newinner) {
   	  this.e.innerHTML = newinner;
   	  return this;
   },
 
   toggle: function () {
      if (this.e.style.display !== 'none') {
         this.e.style.display = 'none';
      } else {
         this.e.style.display = '';
      }
      return this;
   },
 
   size: function (height, width) {
      this.e.style.height = height + 'px';
      this.e.style.width = width + 'px';
      return this;
   },

   load: function (ftyp,fname) {
   	  if(ftyp=="" || fname=="") return;
        if(ftyp=="js") {
   	  	var fileref=document.createElement('script');
   	  	fileref.setAttribute("type","text/javascript");
   	  	fileref.setAttribute("src",fname);
   	  } else if(ftyp=="css") {
   	  	var fileref=document.createElement('link');
   	  	fileref.setAttribute("rel","stylesheet");
   	  	fileref.setAttribute("type","text/css");
   	  	fileref.setAttribute("href",fname);
   	  }
   	  if(typeof fileref!='undefined') {
   	  	document.getElementsByTagName("head")[0].appendChild(fileref);
   	  }
   },

   ready: function (caba) {
   	  document.onreadystatechange = function() {
   	  	if (document.readyState === 'complete') {
   	  		caba();
   	  	}
   	  }
   }
};