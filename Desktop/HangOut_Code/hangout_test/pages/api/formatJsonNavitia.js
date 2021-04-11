/**
 * 
 * @param data données résultats de la requête
 * 
 * @returns données formattées et prêtes a être utilisé
 */

 export default function formatData (data) {

	const countJourneys = data.journeys[0].sections.length;

	const itinerary = new Array();
	for(var i=0;i<countJourneys;i++) {
		if(!(data.journeys[0].sections[i].type == "waiting")) {
			itinerary[i] = {
				destinationDepart   : data.journeys[0].sections[i].from.name,
				destinationArrivee  : data.journeys[0].sections[i].to.name,
				heureDepart         : formattageDate(data.journeys[0].sections[i].departure_date_time),
				heureArrivee        : formattageDate(data.journeys[0].sections[i].arrival_date_time),
				duree               : formattageDuree(data.journeys[0].sections[i].duration),
				waiting             : false,
			}
		} else {
			itinerary[i] = {
				destinationDepart   : "",
				destinationArrivee  : "",
				heureDepart         : formattageDate(data.journeys[0].sections[i].departure_date_time),
				heureArrivee        : formattageDate(data.journeys[0].sections[i].arrival_date_time),
				duree               : formattageDuree(data.journeys[0].sections[i].duration),
				waiting             : true,
			}
		}
	};

	const usefulData = {
		destinationDepart   : data.journeys[0].sections[0].from.name,
		destinationArrivee  : data.journeys[0].sections[countJourneys-1].to.name,
		heureDepart         : formattageDate(data.journeys[0].sections[0].departure_date_time),
		heureArrivee        : formattageDate(data.journeys[0].sections[countJourneys-1].arrival_date_time),
		duree               : formattageDuree(data.journeys[0].duration),
		itinerary           : itinerary,
	};
	return (JSON.parse(JSON.stringify(usefulData)));
}

function formattageDate(date) {
	return date.substr(6,2) + "/" + date.substr(4,2) + "/" +  date.substr(0,4) + "-" + date.substr(9,2) + "h" + date.substr(11,2);
}

function formattageDuree(duree) {
	return Math.trunc(duree/3600) + "h" + Math.trunc(duree%3600/60).toString().padStart(2,"0")
}