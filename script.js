
	
	var elem = document.getElementById('principal-button');
	var found = document.getElementsByClassName("notFound");
	// found.style.diplay = 'none';
	elem.onClick = function() {
		var txtArea;
		document.getElementById("write").value = txtArea;
			if(txtArea === true){
				
			}
			else{
				found.style.diplay = 'block';
			}
		alert("Hello World");
};



