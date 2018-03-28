(function () {
    //create a form
    var f = document.createElement("form");

    //create input element
    var label = document.createElement("label");
    label.innerHTML = "Rows: ";
    f.appendChild(label);

    var nRows = document.createElement("input");
    nRows.type = "text";
    f.appendChild(nRows);

    //create input element
    var label = document.createElement("label");
    label.innerHTML = "Columns: ";
    f.appendChild(label);

    var nCols = document.createElement("input");
    nCols.type = "text";
    f.appendChild(nCols);

    //create a button
    var s = document.createElement("input");
    s.type = "button";
    s.value = "Generate Table";
    f.appendChild(s);

    document.getElementsByTagName('body')[0].appendChild(f); //pure javascript

    s.addEventListener("click", function () {
        
        // var actual_JSON;
        //     loadJSON(function(response) {
        //      // Parse JSON string into object
        //        actual_JSON = JSON.parse(response);
        //        console.log(actual_JSON);
        //     });

        // function loadJSON(callback) {   
        //     console.log("asdfas");
        //     var xobj = new XMLHttpRequest();
        //     xobj.overrideMimeType("application/json");
        //     xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
        //     xobj.onreadystatechange = function () {
        //           if (xobj.readyState == 4 && xobj.status == "200") {
        //             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        //             callback(xobj.responseText);
        //           }
        //     };
        //     xobj.send(null);  
        //  }

            
        var r = nRows.value;
        var c = nCols.value;
        // get the reference for the body
        var body = document.getElementsByTagName("body")[0];

        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        //alert("asdfas");
        // creating all cells
        var tableContent = JSON.parse(actual_JSON);
        for (var i = 0; i < r; i++) {
            // creates a table row
            var row = document.createElement("tr");

            for (var j = 0; j < c; j++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                var cell = document.createElement("td");
                var data = tableContent[i][j].id;
                var cellText = document.createTextNode(data);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            // add the row to the end of the table body
            tblBody.appendChild(row);
        }

        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "1");
    });

})();