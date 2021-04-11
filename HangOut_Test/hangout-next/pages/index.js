import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HangOut</title>
      </Head>

      {/* En tete */}
      <Header />

      <main>
        <section className={styles.hero + " py-12 min-h-96"}>
          <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center gap-8">
            <div className="hero__heading text-center">
              <h2 className="text-5xl text-yellow-500 font-extrabold max-w-prose mb-2">
                Redécouvrez la France
              </h2>
              <p className="max-w-prose mx-auto text-white">
                Saisissez vos envies et découvrez des idées de voyages faites
                pour vous !
              </p>
            </div>
            <div className="hero__form relative">
              <div className="rounded-lg overflow-hidden pb-8 px-2 bg-white border shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                  {/* VILLE */}
                  <div className="p-2 flex items-center gap-2">
                    <div>
                      <svg className="w-8 text-yellow-500" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="ville"
                        className="block text-yellow-500 font-bold text-xs uppercase tracking-wide"
                      >
                        Ville
                      </label>
                      <input
                        type="text"
                        placeholder="ex. Monaco"
                        className="focus:outline-none"
                      />
                    </div>
                  </div>
                  {/* ENVIRONNEMENT */}
                  <div className="p-2 flex items-center gap-2">
                    <div>
                      <svg className="w-8 text-yellow-500" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M15,18.54C17.13,18.21 19.5,18 22,18V22H5C5,21.35 8.2,19.86 13,18.9V12.4C12.16,12.65 11.45,13.21 11,13.95C10.39,12.93 9.27,12.25 8,12.25C6.73,12.25 5.61,12.93 5,13.95C5.03,10.37 8.5,7.43 13,7.04V7A1,1 0 0,1 14,6A1,1 0 0,1 15,7V7.04C19.5,7.43 22.96,10.37 23,13.95C22.39,12.93 21.27,12.25 20,12.25C18.73,12.25 17.61,12.93 17,13.95C16.55,13.21 15.84,12.65 15,12.39V18.54M7,2A5,5 0 0,1 2,7V2H7Z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="ville"
                        className="block text-yellow-500 font-bold text-xs uppercase tracking-wide"
                      >
                        Environnement
                      </label>
                      <select name id className="w-full">
                        <option>Plage</option>
                        <option>Montagne</option>
                        <option>Campagne</option>
                        <option>Ville</option>
                      </select>
                    </div>
                  </div>
                  {/* ENVIES */}
                  <div className="p-2 flex items-center gap-2">
                    <div>
                      <svg className="w-8 text-yellow-500" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19,10C19,11.38 16.88,12.5 15.5,12.5C14.12,12.5 12.75,11.38 12.75,10H11.25C11.25,11.38 9.88,12.5 8.5,12.5C7.12,12.5 5,11.38 5,10H4.25C4.09,10.64 4,11.31 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,11.31 19.91,10.64 19.75,10H19M12,4C9.04,4 6.45,5.61 5.07,8H18.93C17.55,5.61 14.96,4 12,4M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="ville"
                        className="block text-yellow-500 font-bold text-xs uppercase tracking-wide"
                      >
                        Envies
                      </label>
                      <select name id className="w-full">
                        <option>Beau temps</option>
                        <option>Tourisme</option>
                        <option>Sports d'hiver</option>
                        <option>Sports nautiques</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                  {/* DEPART */}
                  <div className="p-2 flex items-center gap-2">
                    <div>
                      <svg className="w-8 text-yellow-500" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M7,12H9V14H7V12M21,6V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2H18V4H19A2,2 0 0,1 21,6M5,8H19V6H5V8M19,20V10H5V20H19M15,14V12H17V14H15M11,14V12H13V14H11M7,16H9V18H7V16M15,18V16H17V18H15M11,18V16H13V18H11Z"
                        />
                      </svg>
                    </div>
                    <div className>
                      <label
                        htmlFor="ville"
                        className="block text-yellow-500 font-bold text-xs uppercase tracking-wide"
                      >
                        Départ
                      </label>
                      <input
                        type="datetime-local"
                        defaultValue="2021-03-15T23:44"
                        className="focus:outline-none appearance-none"
                      />
                    </div>
                  </div>
                  {/* RETOUR */}
                  <div className="p-2 flex items-center gap-2">
                    <div>
                      <svg className="w-8 text-yellow-500" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="ville"
                        className="block text-yellow-500 font-bold text-xs uppercase tracking-wide"
                      >
                        Arrivé
                      </label>
                      <input
                        type="datetime-local"
                        className="focus:outline-none"
                      />
                    </div>
                  </div>
                  {/* DUREE */}
                  <div className="p-2 flex items-center gap-2">
                    <div>
                      <svg className="w-8 text-yellow-500" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="ville"
                        className="block text-yellow-500 font-bold text-xs uppercase tracking-wide"
                      >
                        Durée de trajet
                      </label>
                      <div className="flex">
                        <input type="text" defaultValue={1} className="w-6" />
                        <p>h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-lg font-bold bg-yellow-500 text-white py-3 px-6 rounded-full absolute -bottom- left-1/2 transform -translate-x-1/2">
                  <svg className="w-8" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.2 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M19.5,2A0.5,0.5 0 0,1 20,2.5V11.81C19.42,11.26 18.75,10.81 18,10.5V4.7L15,5.86V10C14.3,10.07 13.62,10.24 13,10.5V5.87L9,4.47V16.13H9V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2.03L19.5,2M4,5.46V17.31L7,16.15V4.45L4,5.46Z"
                    />
                  </svg>
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
