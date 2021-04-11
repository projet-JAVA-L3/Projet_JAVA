import React from "react";

export default class AutocompletionAddress extends React.Component {
  
    componentDidMount() {
    let conf = {
      input: document.getElementById("ville"),
      parameters: {
        //permet de selectionner que les adresse de france
        exclusiveCountry: "fra",
      },
    };
    VMLaunch("ViaMichelin.Api.Completion.Address", conf);
  }

  render() {
    return (
      <input
        id="ville"
        name="ville"
        type="text"
        placeholder="ex. Monaco"
        className="focus:outline-none"
        required
        autocomplete= "off"
      />
    );
  }
}
