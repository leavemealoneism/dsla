var schoolNameInput = document.createElement("input");
document.body.appendChild(schoolNameInput);
var schoolNameInput = document.createElement("button");
schoolNameInput.style.height = "20px";
schoolNameInput.style.width = "100px";
schoolNameInput.innerHTML = "Submit";
document.body.appendChild(schoolNameInput);
schoolNameInput.onclick = function(){
	//alert("Do you want this to be the name?");
	//alert(schoolName);
	//document.body.reload();
	schoolNameInput.style.text = schoolName;
};