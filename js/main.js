function initialize(){
    cities();
};

function cities(){
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];
    
    $("#mydiv").append("<table>");
    
    $("table").append("<tr>");
    
    $("tr").append("<th>City</th><th>Population</th>")
    
    for (var i = 0; i < cityPop.length; i ++){
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        $("table").append(rowHtml);
        
    };
};


function debugAjax(){
	
	var mydata;

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			mydata = response;
            
			debugCallback(mydata);
            console.log(mydata);
		}
	});

    function debugCallback(response){
	
    console.log(mydata);
    
    };
};

$(document).ready(debugAjax);
$(document).ready(initialize);