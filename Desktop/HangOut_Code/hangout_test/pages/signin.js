import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/HFooter";

export default function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/account");
  };

  const handleEmailChange = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const handlePasswordChange = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const valid_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length < 254 && valid_email.test(email) === false) {
      alert("Veuillez entrer une adresse e-mail valide 😄");
      return;
    }

    console.log(email, password);
    const body = JSON.stringify({
      email,
      password,
    });

    fetch("http://localhost:3000/api/users/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body), // convertit un objet en string
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.error == "erreur interne") {
          alert(
            "Nous rencontrons actuellement un problème sur notre serveur. Veuillez réessayer ulterieurement 😥"
          );
          return;
        }

        if (res.error == "e-mail ou mot de passe incorrect") {
          alert(
            "Il semblerait que votre mot de passe ou votre identifiant soit incorrect 😕"
          );
          return;
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex md:flex-row min-h-screen">
        <div className="px-8 py-12 w-full md:w-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-black">
              Connectez-vous
            </h2>
          </div>
          <div className>
            <form onSubmit={handleSubmit}>
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
                  placeholder="moi@gmail.com"
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
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  name="remind"
                  id="remind"
                  className="mr-2"
                />
                <label htmlFor="remind">Se souvenir de moi</label>
              </div>
              <div className>
                <div className="text-center">
                  <a href="/account" onClick={handleClick}>
                    <button className="p-4 border block w-full rounded-xl bg-blue-600 text-white font-bold text-lg focus:outline-none">
                      Se connecter
                    </button>
                  </a>
                  <a
                    className="block py-4 text-blue-600 focus:outline-none"
                    href="#"
                  >
                    Mot de passe oublié
                  </a>
                </div>
                <div className="text-center my-4 text-gray-400">
                  <p>— ou —</p>
                </div>
                <div className="text-center">
                  <Link href="/signup">
                    <a>
                      Nouveau ?{" "}
                      <span className="text-blue-600 font-bold focus:outline-none">
                        Inscrivez-vous !
                      </span>
                    </a>
                  </Link>
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
            '\n  .beach {\n    background-image: url("https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80");\n    background-position: bottom right;\n    background-size: cover;\n  }\n',
        }}
      />
    </div>
  );
}
