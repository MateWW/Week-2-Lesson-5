function contentCreator(elementid){	
	var allElements=["span","b","div","section","p","h1"],
		allLeters="abcdefghijklmnopqrstvywxwz1234567890",
		casualStringSize=15,
		casualSentenceSize=6;

	elementid=document.querySelector("body");

	var elementslen=(Math.random()*5).toFixed(0)+5;

	while(elementslen>0)
	{
		var elem=document.createElement(allElements[(Math.random()*(allElements.length-1)).toFixed(0)]);
		var sentence="";

		for(var i=0;i<((Math.random()*4)+casualSentenceSize-2);i++)
		{
			var word="";
			for(var j=0;j<((Math.random()*10)+casualStringSize-10);j++)
			{
				word+=allLeters[(Math.random()*(allLeters.length-1)).toFixed(0)];
			}
			sentence+= word + " ";
		}
		elem.appendChild(document.createTextNode(sentence));
		elementid.appendChild(elem);
		elementslen--;
	}
	elementid.appendChild(document.createElement("button"));
}

function Toggler(selector)
{
	if(!(this instanceof Toggler) && selector.length>0){
		return new Toggler(selector);
	}
	this.data=document.querySelector(""+selector+"");	

	if(this.data===null)	{

		throw new Error("Nie ma takiego elementu: "+selector)
	}

}
Toggler.prototype.getElem = function(){
	return this.data;
}
Toggler.prototype.show = function(){
	this.data.style.display = "block";
}
Toggler.prototype.hide = function(){
	// this.data.style.display = "none";
	this.data.style.display = "none";
}

addEventListener('DOMContentLoaded', function() {

	contentCreator("body")
	var elem = new Toggler("section");
	var button = document.querySelector("button");

	button.addEventListener("click", function() {

	     if(elem.getElem().style.display == "none") {
	        elem.show();
	    } else {
	        elem.hide();
	    }

	}, false);
});