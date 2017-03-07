addEventListener('DOMContentLoaded', function() {
	var con=console.log,
	    elem=document.getElementsByTagName("section")[0];

	window.console.log = function(msg){
	    elem.innerHTML+="<div>"+msg+"</div>";
	    con(msg);

	}

function createData(obj) {

    var data =obj ;

    return {
    	get:function(key){
    		return data[key];
    	},
    	set:function(key,value){
    		if(typeof key == "string" && typeof value != 'undefined')
    		{	
    			data[key]=value;
    			return true;
    		}
    		else{
    			console.log("nie podano odpowiednich danych");
    			return false
    		}
    	}

    }

}

var data = createData({});

data.set("name","Janek");

console.log( data.get("name") );

});