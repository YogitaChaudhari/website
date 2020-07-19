console.log("This is external javascript");

function greet(){
   window.alert("Hello user");
}

btn = document.getElementById("btn");
btn.addEventListener('click',function(){
	heading = document.getElementsByTagName('h3');
	heading[0].style.color = "red";
	
	para = document.getElementsByTagName('p');
	para[0].style.fontSize = "24px";
	
	test = document.getElementById('test');
	test.innerHTML = "This is my new html content";
	
	blue = document.getElementsByClassName('blue');
	blue[0].style.display = "none";
	blue[1].style.fontWeight = "bold";
});

thought = document.getElementsByName('thought')[0];
thought.addEventListener('keyup',function(){
	data = thought.value;
	msg = document.getElementsByClassName('msg')[0];
	msg.innerHTML = data;
	msg.style.color = "blue";
});
//single line comment
/*

*/
creator = document.getElementById('creator');
creator.addEventListener('dblclick',function(){
	newbutton = document.createElement('h2');
	text = document.createTextNode("New Button");
	newbutton.appendChild(text);
	document.body.appendChild(newbutton);
});

sh = document.getElementById("sh");
sh.addEventListener('click',function(){
	pwd = document.getElementsByName('pass')[0];
	typ = pwd.getAttribute('type');
	if(typ == 'password'){
		pwd.setAttribute('type','text');
		sh.innerHTML = "hide";
	}else{
		pwd.setAttribute('type','password');
		sh.innerHTML = "show";
	}
});

function validate()
{
	uname = document.getElementsByName('uname')[0];
	pwd = document.getElementsByName('pass')[0];
	
	if(uname.value == '' || pwd.value == '')
	{
		alert("Please enter all fields");
		return false;
	}
}