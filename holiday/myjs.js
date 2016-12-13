var ImageArray =[
"https://images.dailyhive.com/20160912140657/Christmas-champagne-Andrzej-SowaShutterstock.jpg"
];

var currentIndex = 0;

function renderImage() {
	if(currentIndex < 0) {
		currentIndex = ImageArray.length - 1;
	} else if (currentIndex >= ImageArray.length) {
		currentIndex = 0
	}
	$('#thePhoto').attr('src', ImageArray[currentIndex]);
}
renderImage();

$('#ForwardBtn').on('click', function(){
	//this is what happens when it's clicked
	currentIndex++;
	renderImage();
});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});


var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + "!";
$("h1").html(outputString);

 // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'People');
        data.addColumn('number', 'Amount of Holiday Cheer');
        data.addRows([
          ['Kate', 100],
          ['Sam', 80],
          ['Riley', 60],
          ['Frank', 50],
          ['Kelly', 100]
        ]);

        var chartWidth = $(window).width()*.35;

        // Set chart options
        var options = {'title':'Holiday cheer in the Ennis household',
                       'width':chartWidth,
                       'height':300,
                       'backgroundColor': '#468263',
                       'colors': ["#C19469"],
                       'fontName': 'Playfair Display',
                       'fontSize': 20
                   };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

      






