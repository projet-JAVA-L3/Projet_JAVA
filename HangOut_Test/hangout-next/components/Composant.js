import React from "react"

// Composants traditionneles
export default class MonComposant extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disponible: true
        }
    }

    nonDisponible() {
        this.setState({
            disponible: f
        })
    }
    
    render() {
        return (

        );
    }
}

// Composants fonctionnels
export default function MonComposant() {
    // state
    const [disponible, setDisponible] = useState(true)

    return (

    );
}
