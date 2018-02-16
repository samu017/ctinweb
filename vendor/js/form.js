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
    }
  };

  xhttp.open("GET", "http://192.168.1.74:8001/api/areas", true);
  xhttp.send();
//}