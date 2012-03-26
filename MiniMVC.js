/**
 * MiniMVC.js - A Mini MVC framwork for javascript.
 *
 * A Mini MVC framwork for javascript.
 *
 * @example 
 *     MiniMVC.load 
 *
 * @todo Not jQuery independent
 * @todo cache in MiniMVC.load.view to local storage
 */
 
 
(function() {

    i = 0;
    console.log("Debug: "+i); i++;
	
    MiniMVC     = {};
	MiniMVC.ini = {};
	MiniMVC.ini.basePath = '';
	
    
	//TODO, template tags option.
	
    //------------------------------------------------------------
    // Load
    //------------------------------------------------------------
    
    MiniMVC.load = function() {};
    
    /**
     * View
     */
    MiniMVC.load.view = function(view) {
	    $.get(MiniMVC.ini.basePath +'view/'+ view, function(data) {
		    console.log(data);
			console.log(tmpl);
			console.log(tmpl(data));
			
			//return tmpl(data);
		});
	}
	
	
    /**
     * Model
     */
    MiniMVC.load.model = function(model) {
	    $.get(MiniMVC.ini.basePath +'model/'+ model, function(data) {
		    console.log(data);
            console.log(eval(data));
			
			//return eval(data);
		});
	}
      
    
	console.log("Debug: "+i); i++;
    
    //------------------------------------------------------------
    // Private helpers
    //------------------------------------------------------------
    
    // Big thanks for this code! <3
    // Simple JavaScript Templating
    // --------------------------------------
    // John Resig - http://ejohn.org/ - MIT Licensed
    var cache = {};
    
    this.tmpl = function tmpl(str, data){
      // Figure out if we're getting a template, or if we need to
      // load the template - and be sure to cache the result.
      var fn = !/\W/.test(str) ?
        cache[str] = cache[str] ||
          tmpl(document.getElementById(str).innerHTML) :
        
        // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function("obj",
          "var p=[],print=function(){p.push.apply(p,arguments);};" +
          
          // Introduce the data as local variables using with(){}
          "with(obj){p.push('" +
          
          // Convert the template into pure JavaScript
          str
            .replace(/[\r\t\n]/g, " ")
            .split("<%").join("\t")
            .replace(/((^|%>)[^\t]*)'/g, "$1\r")
            .replace(/\t=(.*?)%>/g, "',$1,'")
            .split("\t").join("');")
            .split("%>").join("p.push('")
            .split("\r").join("\\'")
        + "');}return p.join('');");
      
      // Provide some basic currying to the user
      return data ? fn( data ) : fn;
    };
    
    console.log("Debug: "+i); i++;
    //Jailbreak
    window.MiniMVC = {
        'load' : MiniMVC.load
    };
	
	console.log("Debug: "+i); i++;
})();