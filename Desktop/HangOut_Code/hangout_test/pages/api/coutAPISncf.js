/**
 * Fonction getCout
 * @param {objet contenant les données d'une étape} data 
 * @returns un tableau contenant les urls a envoyer vers l'api de la Sncf pour le coût des trains
 */

export default function getcout(data){

    var url = new Array();

    for(var i=0;i<data.itinerary.length;i++) {
        if(data.itinerary[i].duree == "0h00") {
            const toPush = {
                id : 0,
            }
            url.push(toPush);
        } else if(data.itinerary[i].waiting) {
            const toPush = {
                id : 0,
            }
            url.push(toPush);
        }
        else {
            const depart = formattageVille(data.itinerary[i].destinationDepart.split(' (')[0]);
            const arrivee = formattageVille(data.itinerary[i].destinationArrivee.split(' (')[0]);
            if(depart == arrivee) {
                const toPush = {
                    id : 0,
                }
                url.push(toPush);
            } else {
                const URL = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tarifs-tgv-par-od&facet=od&q=" + depart + "-+" + arrivee;
                const toPush = {
                    id : data.itinerary[i].destinationDepart,
                    url : URL,
                }
                url.push(toPush);
            }
        }
    }
    return url;
}

/**
 * Fonction formattageVille, formate le nom des villes pour les rendre utilisable
 * @param {nom de la ville} name 
 * @returns le nom de ville formatée pour l'api de la Sncf
 * Nécéssaire car le nom des gares entre les Apis Navitia et Sncf sont différents
 */
function formattageVille(name) {
    if(name == "Bordeaux Saint-Jean") return "Bordeaux";
    if(name == "Paris Montparnasse Hall 1 &2") return "Paris Montparnasse"
    if(name == "Paris Gare de Lyon Hall 1 &2") return "Paris Gare de Lyon"
    if(name == "Paris Saint-Lazare") return "Paris Saint Lazare"
    if(name == "Marseille Saint-Charles") return "Marseille"
    else return name;

}