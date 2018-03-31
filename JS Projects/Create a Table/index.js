class CreateTable {

    constructor(row, col, data) {
        this.row = row;
        this.col = col;
        this.data = data;
        console.log(data);
    }

    generate_table() {

        var container, table, th, tr, td, row, cell, tbody, thead;
        //
        container = document.createElement('div');
        container.setAttribute('class', 'container');
        container.setAttribute('id', 'contents');

        table = document.createElement('table');
        table.setAttribute('class', 'table table-dark table-striped');

        thead = document.createElement('thead');
        table.appendChild(thead);

        tbody = document.createElement('tbody');
        table.appendChild(tbody);

        var keys = Object.keys(this.data[0]);
        var l = keys.length;

        for (var i = 0; i < l; i++) {
            th = document.createElement('th');
            thead.appendChild(th);
            th.innerHTML = '<h2>' + keys[i] + '</h2>'
        }

        for (row = 0; row < this.row; row++) {
            tr = document.createElement('tr');
            for (cell = 0; cell < this.col; cell++) {
                td = document.createElement('td');
                tr.appendChild(td);
                var y = keys[cell];
                var x = this.data[row][y];
                td.innerHTML = x;
            }
            tbody.appendChild(tr);
        }

        document.getElementsByTagName('body')[0].appendChild(container);
        document.getElementById('contents').appendChild(table);
        //container.appendChild(table);
    }

}

(function () {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var table_data = JSON.parse(this.responseText);
            
            var obj = new CreateTable(13, 5, table_data);
            obj.generate_table();
            var obj2 = new CreateTable(3, 5, table_data);
            obj2.generate_table();
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();

}());