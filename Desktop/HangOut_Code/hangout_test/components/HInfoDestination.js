import React from 'react';

/**
 * Classe d'affichage des résultats sur la deuxième interface.
 * Récupère un objet par ses props qui contient résultats d'une requête formatée.
 * Permet le lien vers la page des résultats
 */

class HDestination extends React.Component {

    render() {
        const propsJson = this.props.journey;
        const src = this.props.src;
        //const name = propsJson.destinationArrivee != undefined ? propsJson.destinationArrivee : " ";
        const name = propsJson != undefined ? propsJson.destinationArrivee != undefined ? propsJson.destinationArrivee.split(' (')[0] : this.props.name : this.props.name;
        const duree = propsJson != undefined ? propsJson.duree : " ";
        const cost = this.props.cost;
        const avantage = "";
        //Url préparé pour passer les données
        //const url = "/HJourneyTrain?from=" + this.props.journey.destinationDepart + "&to=" + this.props.journey.destinationArrivee + "&datetime=" + this.props.journey.heureDepart;
        if(name != this.props.name) {
            return (
                <div className="bg-white flex flex-col justify-stretch border-solid border-2 border-black rounded-2xl max-w-xs max-h-xs">
                    <div className="rounded-t-2xl h-28 flex-7 flex justify-center">
                    <img src={src} alt="logo" className="rounded-t-2xl max-h-full max-w-full" />
                    </div>
                    <div className=" border-solid border-2 border-r-0 border-l-0 border-black flex-1 h-min">
                      <p className="text-center text-blue-600 font-bold mb-0">{propsJson != undefined ? propsJson.destinationArrivee != undefined ? propsJson.destinationArrivee.split(' (')[0] : name : name}</p>
                    </div>
                    <div className="text-black text-sm text-left ml-3 flex-3 flex align-center">
                    <p>
                        Duree    : {duree}<br/>
                        Coût     : {cost}<br/>
                        Avantage : {avantage}
                    </p>
                    </div >
                </div>
            );
        }
        else {
            return(
                <div>
                    
                </div>
            );
        }
    }
}

export default HDestination;


