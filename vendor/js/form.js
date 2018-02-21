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
       		var cv = new FormData();
       		/*FILE UPLAD*/
       		document.querySelector('#validationCustom11').addEventListener('change', function(e) {
	  			var file = this.files[0];
	  			
	  			cv.append("validationCustom11", file);
				 xhttp.open('POST', 'http://localhost:8000/api/requests', true);
				  xhttp.upload.onprogress = function(e) {
				    if (e.lengthComputable) {
				      var percentComplete = (e.loaded / e.total) * 100;
				      console.log(percentComplete + '% uploaded');
				    }
				  };	  			
				 xhttp.onload = function() {
				    if (this.status == 200) {
				      var resp = JSON.parse(this.response);
				      console.log('Server got:', resp);
				      var pdf = document.createElement('pdf');
				      pdf.src = resp.dataUrl;
				      document.body.appendChild(pdf);
				    };
				  };
			},false);

       		/****END*****/

       		//var expresion =/\w+@\w+\.+[a-z]/;;
       		//console.log(areaId);
       		xhttp.open("POST","http://localhost:8000/api/requests",true);
       		xhttp.setRequestHeader('Content-type','application/json');

       		xhttp.onload = function(){
       			console.log(this.responseText);
	       		if (xhttp.status == 400) {
	       			document.getElementById('alert2').style.display="block";
	       			document.getElementById('alert1').style.display="none";
	       		}
	       		else{
	       			document.getElementById('alert1').style.display="block";	
	       			document.getElementById('alert2').style.display="none";
	       		}
       		}
       		var body = '{"name": "'+name+'" ,"apppat":"'+apppat+'","appmat":"'+appmat+'","email":"'+email+'","school":"'+school+'","career":"'+career+'","semester":"'+semester+'","languages":"'+languages+'","how":"'+how+'","why":"'+why+'","cv":"'+cv+'","areaId":"'+areaId+'"}';
       		console.log('body',body);
       		
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
  	//var expresion,correo;
  	//correo = document.getElementById('validationCustom04');
  	//expresion = /\w+@\w+\.+[a-z]/;
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        /*if (!expresion.test(correo)){
        	alert("correo no válido");
        	return false;
        }*/
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
/*END INPUTS VALIDATION*/