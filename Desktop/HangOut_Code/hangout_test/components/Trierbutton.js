import React from "react";
import "../styles/Home.module.css";

export default function TrierPar() {
  return (
    <div class="w-1/6 h-1/6 m-4 px-0 ">
      <label class="italic p-px"> Trier par : </label>
      <select name id className="border-4 rounded cursor-pointer ">
        <option class="bg-gray-200" value="1">
          {" "}
          Le moins cher{" "}
        </option>
        <option class="bg-gray-200" value="2">
          Le plus rapide
        </option>
        <option class="bg-gray-200" value="3">
          Le meilleur choix{" "}
        </option>
      </select>
    </div>
  );
}
