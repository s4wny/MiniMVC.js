(function() {
    
	
	model       = {}; //Something to attatch objects to, this will be returned
    model.get   = {}; //To get a nice syntax later, like "someThing.get.x" instead of "someThing.x".
	
	//DB
	model.people = {0 : {'name': 'Abba',       'age' : '34'},
	                1 : {'name': 'Abbroz',     'age' : '83'},
	                2 : {'name': 'Ahahah',     'age' : '4'}};
	
	
	model.get.allPeople = function() {
	    return people;
	}
	
	
	model.get.people = function(id) {
	    return people[id];
	}
	
	//All models MUST return their functions
	return model;
})();