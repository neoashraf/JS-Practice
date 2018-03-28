function generateARow(){

    console.log("11");    
    var table = document.createElement("TABLE");
    document.body.appendChild(table);  // adding into the dom
    table.setAttribute("id","aTable");

    var row =  document.createElement("TR");
    document.getElementById("aTable").appendChild(row);  // adding into the dom  here getElementById is used to append into the same element
    row.setAttribute("id","tableRow");

    var columns = document.createElement("TD");
    var text = document.createTextNode("Dota");
    columns.appendChild(text);  //adding the text to the columns (it is store in the variable not dom)
    document.getElementById("tableRow").appendChild(columns);    // adding into the dom


    var howManyRowinTable = document.getElementById("aTable").rows.length;
    // prints in the p tag written in html
    document.getElementById("cntTableRow").innerHTML = "The table has " + howManyRowinTable +" rows.";

    // dynamically create p tag and assign value
    var para = document.createElement("P");
    var paratext = document.createTextNode("The table has " + howManyRowinTable +" rows.");
    para.appendChild(paratext);
    document.body.appendChild(para);
    
}

