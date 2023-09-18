"use strict";
        // const TESTER1 = document.getElementById('tester1');
        // Plotly.newPlot(TESTER1, [{
        //     x: [1, 2, 3, 4, 5],
        //     y: [1, 2, 4, 8, 16]
        // }], {
        //     margin: { t: 0 }
        // });

        var values = ["11", "12", "13", "14", "150", "200", "30"] //File size
var labels = ["A1", "A2", "A3", "A4", "A5", "B1", "B2"] //File ext. and SubFolders
var parents = ["", "A1", "A2", "A3", "A4", "", "B1"] //Folders and SuFolders

var data = [{
  type: 'treemap',
  values: values,
  labels: labels,
  parents: parents,
  marker: {colorscale: 'Blues'}
}]


        const data2 = [{
            type: "treemap",
            // labels: [" "],
            labels: ["Path", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura", "Cain2","Test2"], //TODO: Remove duplicate values
            // parents: [" "]
            parents: ["", "Path", "Path", "Seth", "Seth", "Path", "Path", "Awan", "Path", "Enoch", "Path"],
            marker: {colors: ["pink", "royalblue", "lightgray", "purple", "cyan", "lightgray", "lightblue","green","red","gold"]}
        }];

        const TESTER2 = document.getElementById('tester2');
        //https://plotly.com/javascript/plotlyjs-function-reference/#plotlynewplot
        // Plotly.newPlot(graphDiv, data, layout, config)
        // Plotly.newPlot(graphDiv, obj)
        Plotly.newPlot(TESTER2, data); //to update we can use Plotly.react. this can also be used instead of new to create.