import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Aide.module.css";

const QUESTIONS = [
  {
    question: "Que faire en cas de problème ?",
    answer: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
          excepturi, exercitationem explicabo fugit eveniet animi, illo expedita
          voluptate doloribus minima similique molestias cupiditate praesentium
          fugiat quasi necessitatibus ab sit?
        </p>
      </div>
    ),
  },
  {
    question: "Que faire en cas de problème ?",
    answer: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
          excepturi, exercitationem explicabo fugit eveniet animi, illo expedita
          voluptate doloribus minima similique molestias cupiditate praesentium
          fugiat quasi necessitatibus ab sit?
        </p>
      </div>
    ),
  },
  {
    question: "Que faire en cas de problème ?",
    answer: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
          excepturi, exercitationem explicabo fugit eveniet animi, illo expedita
          voluptate doloribus minima similique molestias cupiditate praesentium
          fugiat quasi necessitatibus ab sit?
        </p>
      </div>
    ),
  },
  {
    question: "Que faire en cas de problème ?",
    answer: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
          excepturi, exercitationem explicabo fugit eveniet animi, illo expedita
          voluptate doloribus minima similique molestias cupiditate praesentium
          fugiat quasi necessitatibus ab sit?
        </p>
      </div>
    ),
  },
  {
    question: "Que faire en cas de problème ?",
    answer: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
          excepturi, exercitationem explicabo fugit eveniet animi, illo expedita
          voluptate doloribus minima similique molestias cupiditate praesentium
          fugiat quasi necessitatibus ab sit?
        </p>
      </div>
    ),
  },
  {
    question: "Que faire en cas de problème ?",
    answer: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
          excepturi, exercitationem explicabo fugit eveniet animi, illo expedita
          voluptate doloribus minima similique molestias cupiditate praesentium
          fugiat quasi necessitatibus ab sit?
        </p>
      </div>
    ),
  },
];

const Arrow = () => {
  return (
    <svg class="w-6 h-6" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
      />
    </svg>
  );
};

function Expandable({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="p-2 hover:bg-gray-200 flex items-center justify-between mb-2 border-b-2 border-blue-600"
        onClick={() => setOpen(!open)}
      >
        <h4>{question}</h4>

        <div className={open ? "transform rotate-180" : "tranform rotate-0"}>
          <Arrow />
        </div>
      </div>

      {open && <div className="p-2">{answer}</div>}
    </div>
  );
}

function FAQ() {
  return (
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-black font-bold p-5 text-xl">Foire aux Questions</h2>

      <div className="grid lg:grid-cols-3 gap-4 ">
        {QUESTIONS &&
          QUESTIONS.map(({ question, answer }) => (
            <Expandable question={question} answer={answer} />
          ))}
      </div>
    </div>
  );
}

export default class aide extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <section className={styles.Hero + " text-white"}>
            <div className="bg-black bg-opacity-50">
              <div className="container mx-auto max-w-4xl py-24 px-4">
                <h1 class="text-4xl font-bold mb-4 text-white">
                  Besoin d'aide ?
                </h1>

                <div>
                  <p className="text-lg max-w-prose">
                    N'hésitez pas à nous envoyer un message à l'adresse suivante
                    :<br />
                    <a href="mailto:hangout.teamcontact@gmail.com" className="font-bold text-blue-800">
                      hangout.teamcontact@gmail.com
                    </a>
                    <br />
                    et nous serons ravis de vous répondre dans les plus brefs
                    délais 😊
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQ />
        </main>

        <footer class="bg-gray-200 p-4 text-center">
          <div class="container mx-auto m-0 relative">
            <p>© Copyright 2021, HangOut</p>
          </div>
        </footer>
      </div>
    );
  }
}
