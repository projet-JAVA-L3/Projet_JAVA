import React from "react";
import Head from "next/head";
import axios from "axios";
import HInfoDestination from "../components/HInfoDestination";

const API_KEY = "RESTGP20210329164811393881982403";
const API_URL = "https://secure-apir.viamichelin.com/apir/1/";

const itit = {
  conseille: 0, // favorise la sécurité, la simplicité et minimise les risques d’erreur de parcours.
  plusRapide: 1, // prend le moins de temps pour se rendre à: sa destination. Cet itinéraire favorise les grands axes, notamment les autoroutes.
  plusCourt: 2, // la distance pour se rendre à son point de destination est la plus courte, tout en restant sur des routes praticables. Cet itinéraire est souvent très long en terme de durée.
  decouverte: 3, // favorise les routes pittoresques présentant un intérêt touristique.
  economique: 4, // propose une route qui optimise la consommation en carburant et évite de passer par des routes à péages.
};

//let urlMichelin = 'https://secure-apir.viamichelin.com/apir/1/route.json/fra?steps=1:e:2.0:48.0;1:e:3.0:49.0&authkey=RESTGP20210329164811393881982403&callback=HangOut';
class ApiViaMichelin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      locId: "id",
      dureeAller: 0,
      distance: 0,
      coutCarburant: 0,
      coutPeage: 0,
      isLoaded: false,
    };
    this.getLocId = this.getLocId.bind(this);
    this.getItineraire = this.getItineraire.bind(this);
  }

  async componentDidMount() {
    await this.getLocId("paris", "75006");
    let depart = this.state.locId;
    await this.getLocId("toulouse");
    let arrive = this.state.locId;
    let date = "2021-04-01";
    await this.getItineraire(
      `${API_URL}route.json/fra?steps=3:e:${depart};3:e:${arrive}&date=${date}&itit=${itit.conseille}&cy=EUR&authkey=${API_KEY}&callback=HangOut`
    );
  }

  async getLocId(ville, codePostal = null /*,adresse=null*/) {
    let url = `${API_URL}geocode4f.json?country=fra&city=${ville}&authkey=RESTGP20210329164811393881982403&callback=HangOut`;
    if (codePostal)
      url = `${API_URL}geocode4f.json?country=fra&city=${ville}&zip=${codePostal}&authkey=RESTGP20210329164811393881982403&callback=HangOut`;
    /*   if(adresse){
               adresse= adresse.split(" ","%");
               url = `${API_URL}geocode4f.json?country=fra&city=${ville}&zip=${codePostal}&address=${adresse}&authkey=RESTGP20210329164811393881982403&callback=HangOut`;
           }

         */
    await axios
      .get(url)
      .then((response) => {
        let obj = response.data.substring(8, response.data.length - 1);
        let json = JSON.parse(obj);
        console.log(json);
        this.setState({
          items: json,
          locId: json.locationList[0].location.id,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async getItineraire(url) {
    console.log(url);
    await axios
      .get(url)
      .then((response) => {
        let obj = response.data.substring(8, response.data.length - 1);
        let json = JSON.parse(obj);

        this.setState({
          items: json,
          dureeAller: json.iti.header.summaries[0].totalTime,
          distance: json.iti.header.summaries[0].totalDist,
          coutCarburant: json.iti.header.summaries[0].consumption,
          coutPeage: json.iti.header.summaries[0].tollCost["car"],
          isLoaded: true,
        });
        console.log(this.state.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * render
   *
   * Render UI
   */
  render() {
    const {
      isLoaded,
      distance,
      dureeAller,
      coutCarburant,
      coutPeage,
    } = this.state;

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="App">
        <Head>
          <script
            src="https://secure-apijs.viamichelin.com/apijsv2/api/js?key=JSV2GP20210329164809496080620826$165380&
lang=fra&protocol=https"
            type="text/javascript"
          >
            {" "}
          </script>
        </Head>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 md:gap-8 justify-center">
          <div className="flex justify-center align-center">
            <div className="absolute left-0 m-10">
              <button title="Train" className="text-yellow-700">
                Tri Par
              </button>
            </div>
            <div className="m-auto h-1/2 w-1/2 flex justify-center">
              <img
                src="http://www.jk-motorsport.com/wp-content/uploads/2020/10/JK-Motorsport.png"
                alt="Ici une Voiture"
                className="h-auto w-auto max-h-64 max-w-64"
              />
            </div>
          </div>
          <div className="flex justify-center p-2">
            <HInfoDestination
              src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
              name="Toulouse"
              cost={coutCarburant}
              duree={dureeAller}
              distance={distance}
            />
          </div>
          <div className="flex justify-center p-2">
            <HInfoDestination src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80" />
          </div>
          <div className="flex justify-center p-2">
            <HInfoDestination src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80" />
          </div>
        </div>
      </div>
    );
  }
}

export default ApiViaMichelin;
