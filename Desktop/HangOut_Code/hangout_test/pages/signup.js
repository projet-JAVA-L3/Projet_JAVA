import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/HFooter";

export default function signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleUsernameChange = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const handleEmailChange = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const handlePassword1Change = useCallback(
    (event) => {
      setPassword1(event.target.value);
    },
    [setPassword1]
  );

  const handlePassword2Change = useCallback(
    (event) => {
      setPassword2(event.target.value);
    },
    [setPassword2]
  );

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!username || !email || !password1 || !password2) {
      alert("Veuillez remplir tout les champs 😄");
      return;
    }

    if (password1 !== password2) {
      alert("Veuillez entrer deux mots de passes identiques 😄");
      return;
    }

    const valid_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length < 254 && valid_email.test(email) === false) {
      alert("Veuillez entrer une adresse e-mail valide 😄");
      return;
    }

    if (password1.length < 6) {
      alert("Veuillez entrer un mot de passe d'au moins 6 caractères 😄");
      return;
    }

    console.log(username, email, password1);
    const body = JSON.stringify({
      username,
      email,
      password: password1,
    });

    fetch("http://localhost:3000/api/users/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body), // convertit un objet en string
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div>
      <Navbar />
      <div className="flex md:flex-row min-h-screen text-center">
        <div className="px-8 py-12 w-full md:w-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-black">
              Inscrivez-vous
            </h2>
          </div>
          <div className>
            <form onsubmit={handleSubmit}>
              <div className="mb-4">
                <label className="uppercase text-sm font-bold block mb-2 ">
                  Nom d'utilisateur
                </label>
                <input
                  className="p-4 bg-gray-200 w-full rounded-xl placeholder-gray-500 focus:outline-none border focus:border-blue-600"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Amine"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="uppercase text-sm font-bold block mb-2 "
                  htmlFor="email"
                >
                  Adresse email
                </label>
                <input
                  className="p-4 bg-gray-200 w-full rounded-xl placeholder-gray-500 focus:outline-none border focus:border-blue-600"
                  name="email"
                  id="email"
                  type="text"
                  placeholder="exemple@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="uppercase text-sm font-bold block mb-2 "
                  htmlFor="password"
                >
                  Mot de passe
                </label>
                <input
                  className="p-4 bg-gray-200 w-full rounded-xl placeholder-gray-500 focus:outline-none border focus:border-blue-600"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  value={password1}
                  onChange={handlePassword1Change}
                />
                <p className="text-left"> 6 caractères minimum </p>
              </div>
              <div className="mb-4">
                <label
                  className="uppercase text-sm font-bold block mb-2 "
                  htmlFor="password"
                >
                  Confirmez le mot de passe
                </label>
                <input
                  className="p-4 bg-gray-200 w-full rounded-xl placeholder-gray-500 focus:outline-none border focus:border-blue-600"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  value={password2}
                  onChange={handlePassword2Change}
                />
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  name="remind"
                  id="remind"
                  className="mr-2"
                />
                <label htmlFor="remind">
                  J'accepte les{" "}
                  <a className="text-blue-600" href="#">
                    Conditions Générales d'Utilisation
                  </a>
                </label>
              </div>
              <div className>
                <div className="text-center">
                  <Link href="/account">
                    <a>
                      <button
                        onClick={handleSubmit}
                        className="p-4 border block w-full rounded-xl bg-blue-600 text-white font-bold text-lg focus:outline-none "
                      >
                        S'inscrire
                      </button>
                    </a>
                  </Link>
                  <p className="block py-4">
                    Déjà inscrit ?{" "}
                    <Link href="/signin">
                      <a className="text-blue-600 font-bold">Connectez-vous</a>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="beach hidden md:block md:flex-1 bg-gray-600" />
      </div>
      <Footer />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n  .beach {\n    background-image: url("https://images.unsplash.com/photo-1505753065532-68713e211a3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");\n    background-position: bottom right;\n    background-size: cover;\n  }\n',
        }}
      />
    </div>
  );
}
