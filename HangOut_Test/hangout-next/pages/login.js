import React from "react";
import Link from 'next/link';
import Header from "../components/Header";

export default class Login extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <main>
                    <h1>
                        Connectez- vous ;)
                    </h1>
                </main>
            </div>
        )
    }
}