var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createNewList(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	li.addEventListener("click", function(){
		var finished = this.classList.toggle("done");
		var deleteBtn = document.createElement("button");
			deleteBtn.appendChild(document.createTextNode("remove"));
			deleteBtn.classList.add("deleteButton");

		if(finished){
			this.appendChild(deleteBtn);
			deleteBtn.addEventListener("click", function(){
				this.parentElement.remove();
			})
		}else{
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	})
}

function addByClick(){
	if(inputLength() > 0 ){
		createNewList();
	}
}


function addByPress(event){
	if(inputLength() > 0 && event.keyCode === 13){
		createNewList();
	}
}

button.addEventListener("click", addByClick);
input.addEventListener("keypress", addByPress);