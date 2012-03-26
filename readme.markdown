MiniMVC
=======

_Todo_

 - Code example
 - Not jQueyr plugin
 - jQuery plugin :P
 

Example
=======

Demo at: http://s4wny.github.com/MiniMVC.js/demo.html
 

*** STILL UNDER CONSTRUCTION, THESE IS HOW I SHALL BE ***
 
js/main.js
----------
	
    //Load the Twitter model via XHR (aka AJAX, or AJAJavascript)	
    twitterM = MVC.load.model('twitter');
    data     = twitterM.get.search("vindkraft"); //Cal
    
    html = MVC.load.view('twitter/search', {search : data});
    
    $("aside").append(html);


js/model/twitter.js
-------------------

    get = function {};
    
    get.search = function(query) {
        $.ajax('twitter', wuer)....
    }


js/view/twitter/search.html
---------------------------

    //asp tags also OK (<%%>, <%=%>
    <div id="twitterSearch">
        <? foreach(search as name => mess) ?>
    	    <b><?=name?></b>: <?=mess?><br>
    	<? endeach; ?>
    </div>