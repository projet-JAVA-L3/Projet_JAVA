/**
 * Fonction formatJsonSncf, formate les résultats de la requête Sncf pour le coût des trains
 * @param {les données brut de la sncf} data 
 * @returns les données formatées
 */

 export default function formatJsonSncf(data) {

    const couts = {
            costPlein: data.records[0].fields.plein_tarif_loisir_2nde,
            costAppel: data.records[0].fields.prix_d_appel_2nde,
    }

    return (JSON.parse(JSON.stringify(couts)));
} 