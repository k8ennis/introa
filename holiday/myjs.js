var ImageArray =[
"https://images.dailyhive.com/20160912140657/Christmas-champagne-Andrzej-SowaShutterstock.jpg",
"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14947552_690360097779315_3482325206432378994_n.jpg?oh=54501e6832acfdcca4ad6c59bcbbb9ff&oe=5888D953",
"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/15027869_1782038005381068_875032131981513709_n.jpg?oh=c5ae6bf5569cdac1c2ad3a2ea4abc49d&oe=58B8FAC9",
"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/15094877_696307500517908_2346563867204335977_n.jpg?oh=6b242a54b3f7f31222e3e1a520949a97&oe=58B9E9F6",
"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/15073433_1786866481564887_1211657222605501222_n.jpg?oh=c0eac56be97977b6f16ce0bd8d7ae2c1&oe=58CF88FF",
"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/15037197_695464000602258_8188229855029320467_n.jpg?oh=06ba839f21dc9f29ba4176c7680a111a&oe=58CCFBFA",
"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/15095557_695463963935595_4900756281157857798_n.jpg?oh=ea361b9db250e796fcbfaefc16b92b66&oe=5889AEEC",
"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/1654284_1649035178681352_603732348788962386_n.jpg?oh=578d49e6a1ca6eade17e7235cfa63cd7&oe=58AFAAFF",
"https://rs720.pbsrc.com/albums/ww204/Angel_Love_Blue/Gif/Christmas65llisallindsay.gif~c200"
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

      






