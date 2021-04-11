import {VILLES} from "./Ville"

function toCities(data) {
    var envie = data.envie;
    var environnement = data.environnement;
    var dest = new Array();

    if(envie == "" && environnement == "") for(var key in VILLES) dest.push(VILLES[key]);
    else if(envie != "" && environnement != "") dest = filterTwoArrays(findCitybyEnvie(envie),findCitybyEnvironnement(environnement),findCitybyName(data.ville));
    else if(envie != "" && environnement == "") dest = findCitybyEnvie(envie);
    else if(envie == "" && environnement != "") dest = findCitybyEnvironnement(environnement);

    return dest;
}

/**
 *  Fonction qui permet de créer la requète pour Navitia
 * 
 *  Prend en entrée un objet qui contient :
 *      ville           -> String, la ville de depart
 *      environnement[] -> String Array, le(s) environnement(s) choisi(s)
 *      envie[]         -> String Array, le(s) envie(s) choisi(s)
 *      dateDepart      -> Date, 
 *      dateRetour      -> Date,
 *      duree           -> Int ou String
 * 
 */

export default function requestNavitia (data) {

    if(data.ville == "" || data.ville == undefined) {
        return "";
    }

    const NAVITIA_URL="https://api.sncf.com/v1/coverage/sncf/journeys?key=d7257033-908e-4678-9909-f9ac7fa6009a";
    var url = new Array();
    const villeDepart = "&from=" + findCitybyName(data.ville);
    const villeDArrivee = toCities(data);
    const duree = data.duree != "" ? "&max_duration=" + findDuration(data.duree) : "";
    const dateDepart = "&datetime=" + data.date_depart.split('-')[0] + data.date_depart.split('-')[1] + data.date_depart.split('-')[2] + "T000000"

    for(var i=0;i<villeDArrivee.length;i++) {
        url[i]=NAVITIA_URL + villeDepart + "&to=" + villeDArrivee[i] + dateDepart;
    }

    return url;

}
/**
 * 
 * @param name nom de la ville a rechercher
 * @returns l'id de la ville demandée
 */

function findCitybyName(name) {
    for(var key in VILLES) {
        if(VILLES[key].name == name) return VILLES[key].id;
    }
}

/**
 * 
 * @param environnement 
 * @returns les villes correspondant a l'environnement
 */

function findCitybyEnvironnement(environnement) {
    var villesARetourner = new Array();

    for(var key in VILLES) {
        if(VILLES[key].environnement.includes(environnement)) villesARetourner.push(VILLES[key].id);
    }

    return villesARetourner;
}

/**
 * 
 * @param envie 
 * @returns les villes correspondant a l'envie
 */

function findCitybyEnvie(envie) {
    var villesARetourner = new Array();


    for(var key in VILLES) {
        if(VILLES[key].envie.includes(envie)) villesARetourner.push(VILLES[key].id);
    }

    return villesARetourner;
}

/**
 * 
 * @param array1 une premier tableau
 * @param array2 un deuxième tableau
 * @returns un tableau contenant les élements compris dans les deux tableaux
 */

function filterTwoArrays(array1, array2, villeDepart) {
    var villesARetourner = new Array();
    for(var i=0;i<array1.length;i++) {
        if(array2.includes(array1[i]) && array1[i] != villeDepart) villesARetourner.push(array1[i]);
    }
    return villesARetourner;
}

function findDuration(duree) {
    if(duree == "toutes+durées") return 1000000;
    if(duree == "- de 2 heures") return 7200;
    if(duree == "entre 2 et 4 heures") return 14400;
    if(duree == "+ de 4 heures") return 1000000;
}