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
    
	
    MiniMVC                = {};
	MiniMVC.ini            = {};
	MiniMVC.priv           = {};
	
	//Settings
	MiniMVC.ini.basePath   = '';
	MiniMVC.ini.modelSufix = '.js';
	MiniMVC.ini.viewSufix  = '.html';
	
    MiniMVC.ini.template.openTag  = '<%';
    MiniMVC.ini.template.closeTag = '%>';
	
    
	//TODO, template tags option.
	
    //------------------------------------------------------------
    // Load
    //------------------------------------------------------------
    
    MiniMVC.load = function() {};
    
    /**
     * View
     */
    MiniMVC.load.view = function(view) {
	    $.get(MiniMVC.ini.basePath +'view/'+ view + MiniMVC.ini.viewSufix, function(data) {
		    console.log(data);
			console.log(MiniMVC.priv.tmpl);
			console.log(MiniMVC.priv.tmpl(data));
			
			return MiniMVC.priv.tmpl(data);
		});
	}
	
	
    /**
     * Model
     */
    MiniMVC.load.model = function(model) {
	    $.get(MiniMVC.ini.basePath +'model/'+ model + MiniMVC.ini.modelSufix, function(data) {
		    console.log(data);
            console.log(eval(data));
			
			return eval(data);
		});
	}
      
    
	
    //------------------------------------------------------------
    // Template system
    //------------------------------------------------------------
	
	// Big thanks for this code! <3
    // Simple JavaScript Templating
    // --------------------------------------
    // John Resig - http://ejohn.org/ - MIT Licensed
    var cache = {};
    
    MiniMVC.priv.tmpl = function tmpl(str, data){
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
            .split(MiniMVC.ini.template.openTag).join("\t")
            .replace(/((^|%>)[^\t]*)'/g, "$1\r")
            .replace(/\t=(.*?)%>/g, "',$1,'")
            .split("\t").join("');")
            .split(MiniMVC.ini.template.closeTag).join("p.push('")
            .split("\r").join("\\'")
        + "');}return p.join('');");
      
      // Provide some basic currying to the user
      return data ? fn( data ) : fn;
    };
    
	
	
    //------------------------------------------------------------
    // Private helpers
    //------------------------------------------------------------

        
    //Jailbreak
    window.MiniMVC = MiniMVC;
	
})();