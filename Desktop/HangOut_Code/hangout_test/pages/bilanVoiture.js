import Navbar from "../components/Navbar";
import React from "react";
import Itinerary from "../components/Itinerary";
import Head from "next/head";

export default class BilanVoiture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ville: null,
      dateDepart: null,
      dateRetour: null,
      duree: null,
      envie: null,
      environnement: null,
    };
  }
  render() {
    return (
      <div>
        <Head>
          <title>HangOut</title>
        </Head>
        <Navbar />
        <Itinerary
          //mettre les villes de depart et arrivee dans des props
          villeDepart=""
          villeRetour=""
        />
      </div>
    );
  }
}
