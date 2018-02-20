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
       		var name = document.getElementById('name').value;
       		var apppat = document.getElementById('appat').value;
       		var appmat = document.getElementById('appmat').value;
       		var email = document.getElementById('email').value;
       		var school = document.getElementById('school').value;
       		var career =document.getElementById('career').value;
       		var semester = document.getElementById('semestre').value;
       		var languages = document.getElementById('languages').value;
       		var how = document.getElementById('how').value;
       		var why = document.getElementById('why').value;
       		var cv ="hola";
       		var areaId = document.getElementById('selectAreas').value;
       		//var params = "Name = "+name;
       		console.log(areaId);
       		xhttp.open("POST","http://localhost:8000/api/requests",true);
       		xhttp.setRequestHeader('Content-type','application/json');

       		xhttp.onload = function(){
       			console.log(this.responseText);
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
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
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