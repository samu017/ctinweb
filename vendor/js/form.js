//function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
    	var areas = JSON.parse(this.response),select,option;
    	select = document.getElementById("selectAreas");
    	areas.forEach(area => {
    		option = document.createElement("option");
    		option.value = area.id;
    		option.text = area.name;
    		select.add(option);
       		//document.getElementById("demo").innerHTML = area.name;
       	//console.log(areas.length);
       	});
       	document.getElementById('form_ctin').addEventListener('submit', postForm);
       	function postForm(e){
       		e.preventDefault();
       		var name = document.getElementById('validationCustom01').value;
       		var apppat = document.getElementById('validationCustom02').value;
       		var appmat = document.getElementById('validationCustom03').value;
       		var email = document.getElementById('validationCustom04').value;
       		var school = document.getElementById('validationCustom05').value;
       		var career =document.getElementById('validationCustom06').value;
       		var semester = document.getElementById('validationCustom07').value;
       		var languages = document.getElementById('validationCustom08').value;
       		var how = document.getElementById('validationCustom09').value;
       		var why = document.getElementById('validationCustom10').value;
       		var areaId = document.getElementById('selectAreas').value;
       		var url_string = "file:///home/samu/Escritorio/ctin/index.html?r=success"; 
			var url = new URL(url_string);
			var r = url.searchParams.get("r");

       		//console.log(areaId);
       		xhttp.open("POST","http://localhost:8000/api/requests",true);
       		xhttp.setRequestHeader('Content-type','application/json');

       		xhttp.onload = function(){
       			//console.log(r);
       			//console.log(this.responseText);
	       		if (xhttp.status == 400) {
	       			document.getElementById('alert2').style.display="block";
	       			document.getElementById('alert1').style.display="none";

	       		}
	       		else{

  		     		window.location.replace("file:///home/samu/Escritorio/ctin/index.html?r=success");
	       			if(r==="success"){
	       				
	       				document.getElementById('alert1').style.display="block";	
	       				document.getElementById('alert2').style.display="none";
	       				setTimeout("window.location.href = 'file:///home/samu/Escritorio/ctin/index.html';",10000);
	    				
	       			}
	       		}
       		}
       		var body = '{"name": "'+name+'" ,"apppat":"'+apppat+'","appmat":"'+appmat+'","email":"'+email+'","school":"'+school+'","career":"'+career+'","semester":"'+semester+'","languages":"'+languages+'","how":"'+how+'","why":"'+why+'","areaId":"'+areaId+'"}';
       		//console.log('body',body);
       		xhttp.send(body);
       	}
    }
  };

  xhttp.open("GET", "http://127.0.0.1:8000/api/areas", true);
  xhttp.send();
//}

/*INPUTS VALIDATIONS*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
/*END INPUTS VALIDATION*/