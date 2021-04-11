import React from "react";
import HFooter from "../components/HFooter";

const itit = {
  conseille: 0, // favorise la sécurité, la simplicité et minimise les risques d’erreur de parcours.
  plusRapide: 1, // prend le moins de temps pour se rendre à sa destination. Cet itinéraire favorise les grands axes, notamment les autoroutes.
  plusCourt: 2, // la distance pour se rendre à son point de destination est la plus courte, tout en restant sur des routes praticables. Cet itinéraire est souvent très long en terme de durée.
  decouverte: 3, // favorise les routes pittoresques présentant un intérêt touristique.
  economique: 4, // propose une route qui optimise la consommation en carburant et évite de passer par des routes à péages.
};

export default class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      villeDepart: "Paris",
      villeArrivee: "Bordeaux",
      typeItineraire: itit.conseille,
      eviterPeage: false,
      date: "2021-04-05",
      itinerary: {},
    };
  }
  componentDidMount() {
    let launchItinerary = () => {
      //villeDepart = this.props.villeDepart
      let villeDepart = { coords: { lon: 2.35107, lat: 48.85684 } }, //paris
        destination = { coords: { lon: -0.57574, lat: 44.83498 } }; //bordeaux

      let confIti = {
        steps: [villeDepart, destination],
        map: {
          container: document.getElementById("mapContainer"),
          focus: true,
        },
        //affiche la feuille de route dans un element ayant un id roadsheet (je l'afficherai plus tard)
        roadsheet: document.getElementById("roadsheet"),
        itit: this.state.typeItineraire,
        //eviter les peage
        avoidTolls: this.state.eviterPeage,
        //propose des itinéraires alternatifs s'ils existent
        multipleIti: true,
        //préciser la date de départ sinon il prend automatiquement la date du jour
        //date:this.state.date,
      };
      let callbacks = {
        onSuccess: (result) => {
          console.log(result);
          let output = document.getElementsByClassName("bilanItineraire");
          this.setState({
            itinerary: result.header.summaries,
          });
          for (
            let i = 0;
            i < output.length && result.header.summaries.length;
            i++
          ) {
            let iti = result.header.summaries[i];
            let t = iti.totalTime,
              h = Math.round(t / 3600),
              m = Math.round((t % 3600) / 60),
              name = " ",
              report = "";
            for (let j = 0; j < iti.names.length; j++) {
              name += iti.names[j] + " ";
            }
            report +=
              "<div class='text-center mb-3 font-bold relative flex items-center justify-center'><span class='rounded-full bg-yellow-400 inline-block w-7 h-7'>" +
              (i + 1) +
              "</span><p class='text-blue-700'>" +
              name +
              "</p></div>";
            report +=
              "<div class='relative flex items-center justify-between'><p class='font-bold'>Distance</p>" +
              "<span class='float-right'>" +
              iti.totalDist / 1000 +
              "km</span></div>";
            report +=
              "<div class='relative flex items-center justify-between'><p class='font-bold'>Durée</p>" +
              "<span class='float-right'>" +
              h +
              "h " +
              m +
              "min</span></div>";
            report +=
              "<div class='relative flex items-center justify-between'><p class='font-bold'>Cout total</p>" +
              "<span class='float-right'>" +
              (iti.consumption + iti.tollCost.car / 100).toFixed(2) +
              "€</span></div>";
            report +=
              "<div class='relative flex items-center justify-between'><p class='font-bold'>Cout Carburant</p>" +
              "<span class='float-right'>" +
              iti.consumption +
              "€</span></div>";
            report +=
              "<div class='relative flex items-center justify-between'><p class='font-bold'>Cout Peage</p>" +
              "<span class='float-right'>" +
              iti.tollCost.car / 100 +
              "€</span></div>";
            output[i].innerHTML = report;
          }
        },
      };
      VMLaunch("ViaMichelin.Api.Itinerary", confIti, callbacks);
    };
    let confMap = {
      container: document.getElementById("mapContainer"),
    };
    let callbacksMap = {
      onSuccess: function () {
        launchItinerary();
      },
    };
    VMLaunch("ViaMichelin.Api.Map", confMap, callbacksMap);
  }

  render() {
    const { villeDepart, villeArrivee } = { ...this.state };
    return (
      <div>
        <div className="container mx-auto relative flex items-center justify-between shadow-lg p-3">
          <h1 className="text-2xl font-bold font-serif text-blue-700">
            Votre itinéraire : {villeDepart} -{">"} {villeArrivee}
          </h1>
          <img
            className="h-20"
            src="http://www.jk-motorsport.com/wp-content/uploads/2020/10/JK-Motorsport.png"
          />
        </div>

        <div
          id="mapContainer"
          style={{
            width: "100%",
            height: "500px",
          }}
        />

        <div className="bg-gray-50 pt-7 pl-5">
          <p className="font-bold text-2xl">Trois itineraires possibles :</p>
        </div>

        <div className="flex items-center justify-between py-9 bg-gray-50 flex-col md:flex-row gap-4">
          <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center gap-8">
            <div className="relative">
              <div className="rounded-lg px-2 bg-white border shadow-2xl">
                <div class="px-4 py-8 mb-4">
                  <div class="flex gap-8 flex-row-reverse flex items-center pr-56"></div>
                  <div>
                    <pre id="itineraire1" className="bilanItineraire" />
                  </div>
                  <div className="bg-blue-600 mt-6 mx-4 rounded-xl">
                    <a href="/signin">
                      <p className="font-bold text-white text-xl text-center py-2">
                        + Sauvegarder
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center gap-8">
            <div className="relative">
              <div className="rounded-lg px-2 bg-white border shadow-2xl">
                <div class="px-4 py-8 mb-4">
                  <div class="flex gap-8 flex-row-reverse flex items-center pr-56"></div>
                  <div>
                    <pre id="itineraire2" className="bilanItineraire" />
                  </div>
                  <div className="bg-blue-600 mt-6 mx-4 rounded-xl">
                    <a href="/signin">
                      <p className="font-bold text-white text-xl text-center py-2">
                        + Sauvegarder
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center gap-8">
            <div className="relative">
              <div className="rounded-lg px-2 bg-white border shadow-2xl">
                <div class="px-4 py-8 mb-4">
                  <div class="flex gap-8 flex-row-reverse flex items-center pr-56"></div>
                  <div>
                    <pre id="itineraire3" className="bilanItineraire" />
                  </div>
                  <div className="bg-blue-600 mt-6 mx-4 rounded-xl">
                    <a href="/signin">
                      <p className="font-bold text-white text-xl text-center py-2">
                        + Sauvegarder
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HFooter />
      </div>
    );
  }
}
