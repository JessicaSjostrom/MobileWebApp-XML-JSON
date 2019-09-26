/* myscript.js for Assignment 3 */

$(document).on("pagebeforeshow", "#jsonOut", function() {
	// Start of getJSON
	$.getJSON("ProjectData-10.json", function (data) {
		console.log(data);
		// Create variables to store myData from json
		start = data;
		start2 = data.blockgroup;

		// Change header
		$("h1").html(start.type);
	
		loadMain();
	});  // End of getJSON
});

// load JSON for xmlInfo
$(document).on("pagebeforeshow", "#xmlInfo", function() {
	$.getJSON("ProjectData-10.json", function (data) {
		start = data;
		// Change header
		$("h1").html(start.type);
	});  // End of xmlInfo
});		

// load JSON for jsonInfo
$(document).on("pagebeforeshow", "#jsonInfo", function() {
	$.getJSON("ProjectData-10.json", function (data) {
		start = data;
		// Change header
		$("h1").html(start.type);
	});  // End of jsonInfo
});

$(document).on("pagebeforeshow", "#about", function() {
	$.getJSON("ProjectData-10.json", function (data) {
		start = data;
		// Change header
		$("h1").html(start.type);
	});  // End of jsonInfo
});		

function loadMain() {
	//Clear output areas before appending to it
	$("#jsonList").html("");
	
	// load #jsonList
	for (x=0; x < start2.length; x++) {
		$("#jsonList").append(
			"<section data-role='collapsible'>" + 
			"<h3>" +
				"<span class='n" + x + "'>" + start2[x].codeid + "</span>" +  					
				"</h3>" +
				"<p>" +
			"<table>" + 
			"<tr><th>USDA ID</th><td width='70%'>" + start2[x].codeid+ "</td></tr>" + 
			"<tr><th>Description</th><td width='70%'>" + start2[x].description + "</td></tr>" + 
			"<tr><th>Contact Name</th><td width='70%'>" + start2[x].contactPoint.fn + "</td></tr>" + 
			"<tr><th>Contact Email</th><td width='70%'>" + start2[x].contactPoint.hasEmail + "</td></tr>" + 
			"<tr><th>Distribution media type</th><td width='70%'>" + start2[x].distribution[0].mediaType + "</td></tr>" + 
			"<tr><th>Distribution download URL</th><td width='70%'>" + start2[x].distribution[0].downloadURL + "</td></tr>" + 
			"<tr><th>Modified Date</th><td width='70%'>" + start2[x].modified + "</td></tr>" + 
			"<tr><th>Access Level</th><td width='70%'>" + start2[x].accessLevel + "</td></tr>" + 
			"<tr><th>Publisher Name</th><td width='70%'>" + start2[x].publisher.name + "</td></tr>" + 
			"</table>" +
			"</p>"+
			"</section>"
		);
	}
} // End of loadMain

$(document).on("pagebeforeshow", "#about", function() {
	// Start of about
	$.getJSON("group.json", function (data) {
	
	start3 = data.myData;
	
	// load #about
	$("#aboutMe").html(
		"<tr>" +
			"<td>Name: " +  start3.studName + "</td></tr>" +
			"<tr><td>Login: " + start3.studLogin + "</td></tr>" +
			"<tr><td>Number: " + start3.studNumb + "</td></tr>" +
			"<tr><td><img src=" + start3.myPic + "></td>" +
		"</tr>"
	);
	});  // End of getJSON
});

// Start xmlInfo
$(document).on("pagebeforeshow", "#xmlInfo", function() {
	$.ajax({
		type: "GET", url: "_dataFiles/vegetables.xml", dataType: "xml", success: buildXML
	});
});

function buildXML (xml) {
$("#xmlList").html("");  // clear html

	$(xml).find("food").each(function() {
		$("#xmlList").append(
		"<table width='300px'>" +
			"<tr><th>Item</th><td>" + ($(this).attr('name')) + "</td></tr>" + 
			"<tr><th>Calories</th><td>" + ($(this).find("calsPer").text()) + "</td></tr>" + 
			"<tr><th>Protein</th><td>" + ($(this).find("protein").text()) + "</td></tr>" + 
			"<tr><th>Carbs</th><td>" + ($(this).find("carbs").text()) + "</td></tr>" + 
			"<tr><th>Fat</th><td>" + ($(this).find("fat").text()) + "</td></tr>" + 
		"</table><br>"		
		);
// $("#xmlList").listview("refresh");  // refresh the list at the end
	});
}
// End xmlInfo