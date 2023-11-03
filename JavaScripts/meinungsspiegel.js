//create the request form html
   const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
    .then(FingerprintJS => FingerprintJS.load())
   var contacts = [];
   var tbl = document.createElement("table");
   var tab0 = document.createElement("table0")
   var tabl = document.createElement("table1")
   var min = 1;
   var max = 49;
   var gen = "weiblich, männlich";
   var gender = gen.split(", ");
   var file =  "Der praktiezierte Genuizid an der palastinensischen Bevölkerung ist ein unglaubliches bisher nie dagewesenes Verbrechen gegen Humanität und Internationales Recht, " +
               "Alle die Diesen am Laufen halten oder sich bedingungslos hinter die Drahtzieher stellen müssen zur Rechenschaft gezogen werden !!, " +
               "Eine mehrheitlich verabschiedete Resulution der UN wird mit den Füssen getreten so das man sich fragen muß was ist Recht noch wert in unserer Gesellschaft ";
               
   var themaSplit = file.split(", ");
   var header = "Umfrage Themen, "+
                "Ich stimme zu, " +
                "Ich bin unentschieden, " +
                "Ich stimme nicht zu, " +
                "Ich möchte mich nicht äussern";
   var headerSplit = header.split(", ");

   var arrChoosed = [];
	for(var x = 0; x < (themaSplit.length +3); x++){
            if(x == 0)
               arrChoosed[x] = ["browserid", "null"]; 
            if(x == 1)
               arrChoosed[x] = ["email", "null"];
            if(x == 2) {
               arrChoosed[x] = ["sex", "null"];
            } 
            if(x > 2) {
	       arrChoosed[x] = [themaSplit[x-3], "null"];
            }    
	}

   var checkbox = document.createElement('input');
   var saveBtn = document.createElement('button');
   var oImg = document.createElement("img");
   var textEditor = [];

function MeinungsSpiegel() {
  
   var row = document.createElement("tr");
   for(var r = 0; r<gender.length; r++) {
      var cell = document.createElement("td1");
      var cell0 = document.createElement("td1");
      var cell1 = document.createElement("td1");

      createRadioElement(cell0, gender[r], "sex", false)
      cell.appendChild(cell0);
      cell1.appendChild(document.createTextNode(gender[r]));
      
      row.appendChild(cell);
      row.appendChild(cell1);
      tab0.appendChild(row);
   }

   var form1 = document.getElementById('form1');
   form1.appendChild(tab0); // appends <table> into <form1>
   
   for (var r = 0; r < (themaSplit.length +1); r++) {
        var row = document.createElement("tr");
	     
	// create cells in row
        for (var c = 0; c < headerSplit.length; c++) {
             var cell = document.createElement("td");
             var cellText = document.createTextNode("");
             if(r == 0) {
                var cellText = document.createTextNode(headerSplit[c]);
             }
             if(r != 0 && c == 0) {
               var cellText = document.createTextNode(themaSplit[r -1]);
             } 
             if(r != 0 && c != 0) { 
                createRadioElement(cell, headerSplit[c], themaSplit[r -1], false)
             }

             cell.appendChild(cellText);
             row.appendChild(cell);
        }           
            
	 tbl.appendChild(row); // add the row to the end of the table body
    }
    
    var form1 = document.getElementById('form1');
    form1.appendChild(tbl); // appends <table> into <form1>

    createInstructionLine(); 
}

function createRadioElement(elem, value, name, checked) {
    var radiobut = document.createElement('input');
        radiobut.type = 'radio';
        radiobut.value = value;
        radiobut.name = name;
        
        radiobut.addEventListener('click', () => {
            
            for(var i=2; i<arrChoosed.length; i++) {
                if(arrChoosed[i][0] == radiobut.name) {
                   arrChoosed[i][1] = radiobut.value; 
                }
            }

            var complete = true;

            for(var x=2; x<arrChoosed.length; x++) {
              if(arrChoosed[x][1] == "null") {
                  complete = false;
               }
            }
           
            if(complete) 
              saveBtn.style.backgroundColor = 'green';
        })
        
    elem.appendChild(radiobut);
}


function createCheckBox() {
        var row = document.createElement("tr");
        var cell = document.createElement("td1");
       
	checkbox.type = "checkbox";
	checkbox.name = "checkbox";
	checkbox.value = "value";
        checkbox.checked = false; 
	checkbox.id = "id";
        checkbox.addEventListener('click', () => {
            if(!checkbox.checked) {
               textEditor.value = "z.B. mustermann@gmail.com";
               checkbox.value = false;
            } else 
               checkbox.value = true;
        })

        cell.appendChild(checkbox);
        row.appendChild(cell);

        var text = "Das Umfrageergebnis soll mir zugesendet werden., e-mail:";
        var spTx = text.split(", ");
        for(var i=0;i<spTx.length;i++) {    
	    var cell = document.createElement("td1");
	    var cellText = document.createTextNode(spTx[i]);
	    cell.appendChild(cellText);
	    row.appendChild(cell);
        }
        
        cell.append(createEditField('width:180px; border:1px solid #7f7f7f', 'email', 'Mustermann@web.de', 1));

	var cell = document.createElement("td1");
        cell.appendChild(createButton());

        row.appendChild(cell);

        var cell = document.createElement("td1");
            cell.appendChild(createImg('./Animation/empty.png', 40, 120));

        row.appendChild(cell);

        tabl.appendChild(row);
   
    var form3 = document.getElementById('form3');
    form3.appendChild(tabl); // appends <table> into <form3>
}

function createEditField (style, name, value, id) {
        textEditor[id] = document.createElement('input');
   
	textEditor[id].type = "text";
	textEditor[id].name = name;
	textEditor[id].value = value; 
        textEditor[id].setAttribute('style', style);
	textEditor[id].id = id;
        if(name == 'email')
           textEditor[id].addEventListener('click', () => {
              textEditor[id].value = "";
              checkbox.checked = true;
              checkbox.value = true;
           })
        else 
          textEditor[id].setAttribute('readonly',true);
    return textEditor[id];
}

function createButton() {
        
	saveBtn.innerText = "Abschicken";
	saveBtn.name = "sendBtn";
        saveBtn.style = "editor";
        saveBtn.style.color = 'white';
        saveBtn.style.backgroundColor = "blue";
        saveBtn.id = "id";
      
        saveBtn.addEventListener('click', () => {
            if(saveBtn.style.backgroundColor === 'green') {
                
                 oImg.setAttribute('src', './Animation/timer.gif');
                 var visId = getFingerPrint();
            } 
        })
    return saveBtn;
}

function createInstructionLine() {
        var row = document.createElement("tr");
       
        var cell = document.createElement("td2");
        var cellText1 = document.createTextNode("Ab einer Teilnehmerzahl > 1000 (derzeit: ");
        var cellText2 = document.createTextNode(" ) erstellen wir eine Übersichtsgrafik und mailen Ihnen das Ergebnis, auf Wunsch, zu !");
            row.appendChild(cellText1);
        var cell = document.createElement("td2");
            cell.appendChild(createEditField ('width:60px; border:0px', 'teilnehmer', httpGet('https://meinungsspiegel.onrender.com/MeinungsSpiegel'), 0));
            row.appendChild(cell);
        var cell = document.createElement("td2");
            row.appendChild(cellText2);
       
        tabl.appendChild(row);

    var form2 = document.getElementById('form2');
    form2.appendChild(tabl); // appends <table> into <form2>

    createCheckBox();
}

function createImg(path,height,width) {
    
    oImg.setAttribute('src', path);
    oImg.setAttribute('name', 'oImg');
    oImg.setAttribute('height', height);
    oImg.setAttribute('width', width);

  return oImg;
}

async function getFingerPrint() {

    fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const visitorId = result.visitorId

      contacts = [visitorId];
      arrChoosed[0][1] = contacts;
      arrChoosed[1][1] = textEditor[1].value;
      httpPost('https://meinungsspiegel.onrender.com/MeinungsSpiegel',arrChoosed);
      saveBtn.style.backgroundColor = 'blue';
    })
    
}

async function httpGet(url) {
  var result;
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    })
    .then(res => {
	    if (res.status>=200 && res.status <300) {
	      return res.json()
	    }else{
	      throw new Error();
	    }
    })
    .then(data=> {result = "00"+data.membCount,
                  textEditor[0].value = result},
                 )
    .catch(err=>console.log('fetch() failed')); 
}

async function httpPost(url, data) {
    event.preventDefault();
    var result;
	  await fetch(url, {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json"
	    },
            body: JSON.stringify(data)
	    })
	    .then(res => {
		    if (res.status>=200 && res.status <300) {
		      return res.json()
		    }else{
		      throw new Error();
		    }
	    })
	    .then(data=> {result = data},
		         )
	    .catch(err=>console.log('fetch() failed'));

}

