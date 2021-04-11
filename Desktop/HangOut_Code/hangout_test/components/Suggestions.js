import React, {useState} from "react";

const VOYAGES = [
    {
      depart: "Paris",
      answer: (
        <div>
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
            <div className="flex items-center">
              <svg
                className="text-blue-600 text-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202926"
              >
                <g id="_13-car" data-name="13-car">
                  <g id="glyph">
                    <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"></path>
                    <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"></path>
                    <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"></path>
                  </g>
                </g>
              </svg>
              <p className="text-right px-2 -mt-2 mr-0.5">|</p>
              <svg
                className="text-blue-600 text-right -mt-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202922"
              >
                <g id="_12-train" data-name="12-train">
                  <g id="glyph">
                    <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                    <circle cx="209" cy="367" r="12"></circle>
                    <circle cx="319" cy="367" r="12"></circle>
                    <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                    <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                    <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                    <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                    <rect x="4" y="279" width="53" height="29"></rect>
                    <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Marseille - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lyon - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulouse - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5">
            <p className="text-left">Toulouse - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Nice - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Nantes - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Montpellier - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Strasbourg - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Bordeaux - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lille - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Rennes - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Reims - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Saint-Etienne - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Le Havre - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulon - Paris</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      depart: "Cannes",
      answer: (
        <div>
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
            <div className="flex items-center">
              <svg
                className="text-blue-600 text-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202926"
              >
                <g id="_13-car" data-name="13-car">
                  <g id="glyph">
                    <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"></path>
                    <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"></path>
                    <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"></path>
                  </g>
                </g>
              </svg>
              <p className="text-right px-2 -mt-2 mr-0.5">|</p>
              <svg
                className="text-blue-600 text-right -mt-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202922"
              >
                <g id="_12-train" data-name="12-train">
                  <g id="glyph">
                    <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                    <circle cx="209" cy="367" r="12"></circle>
                    <circle cx="319" cy="367" r="12"></circle>
                    <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                    <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                    <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                    <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                    <rect x="4" y="279" width="53" height="29"></rect>
                    <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Marseille - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lyon - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulouse - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5">
            <p className="text-left">Toulouse - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Nice - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Nantes - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Montpellier - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Strasbourg - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Bordeaux - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lille - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Rennes - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Reims - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Saint-Etienne - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Le Havre - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulon - Cannes</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      depart: "Marseille",
      answer: (
        <div>
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
            <div className="flex items-center">
              <svg
                className="text-blue-600 text-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202926"
              >
                <g id="_13-car" data-name="13-car">
                  <g id="glyph">
                    <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"></path>
                    <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"></path>
                    <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"></path>
                  </g>
                </g>
              </svg>
              <p className="text-right px-2 -mt-2 mr-0.5">|</p>
              <svg
                className="text-blue-600 text-right -mt-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202922"
              >
                <g id="_12-train" data-name="12-train">
                  <g id="glyph">
                    <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                    <circle cx="209" cy="367" r="12"></circle>
                    <circle cx="319" cy="367" r="12"></circle>
                    <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                    <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                    <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                    <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                    <rect x="4" y="279" width="53" height="29"></rect>
                    <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Marseille - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lyon - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulouse - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5">
            <p className="text-left">Toulouse - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Nice - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Nantes - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Montpellier - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Strasbourg - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Bordeaux - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lille - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Rennes - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Reims - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Saint-Etienne - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Le Havre - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulon - Marseille</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      depart: "Avignon",
      answer: (
        <div>
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
            <div className="flex items-center">
              <svg
                className="text-blue-600 text-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202926"
              >
                <g id="_13-car" data-name="13-car">
                  <g id="glyph">
                    <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"></path>
                    <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"></path>
                    <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"></path>
                  </g>
                </g>
              </svg>
              <p className="text-right px-2 -mt-2 mr-0.5">|</p>
              <svg
                className="text-blue-600 text-right -mt-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202922"
              >
                <g id="_12-train" data-name="12-train">
                  <g id="glyph">
                    <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                    <circle cx="209" cy="367" r="12"></circle>
                    <circle cx="319" cy="367" r="12"></circle>
                    <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                    <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                    <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                    <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                    <rect x="4" y="279" width="53" height="29"></rect>
                    <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Marseille - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lyon - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulouse - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5">
            <p className="text-left">Toulouse - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Nice - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Nantes - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Montpellier - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Strasbourg - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Bordeaux - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lille - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Rennes - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Reims - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Saint-Etienne - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Le Havre - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulon - Avignon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      depart: "Grenoble",
      answer: (
        <div>
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
            <div className="flex items-center">
              <svg
                className="text-blue-600 text-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202926"
              >
                <g id="_13-car" data-name="13-car">
                  <g id="glyph">
                    <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"></path>
                    <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"></path>
                    <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"></path>
                  </g>
                </g>
              </svg>
              <p className="text-right px-2 -mt-2 mr-0.5">|</p>
              <svg
                className="text-blue-600 text-right -mt-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202922"
              >
                <g id="_12-train" data-name="12-train">
                  <g id="glyph">
                    <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                    <circle cx="209" cy="367" r="12"></circle>
                    <circle cx="319" cy="367" r="12"></circle>
                    <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                    <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                    <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                    <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                    <rect x="4" y="279" width="53" height="29"></rect>
                    <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Marseille - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lyon - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulouse - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5">
            <p className="text-left">Toulouse - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Nice - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Nantes - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Montpellier - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Strasbourg - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Bordeaux - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lille - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Rennes - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Reims - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Saint-Etienne - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Le Havre - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulon - Grenoble</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      depart: "Lyon",
      answer: (
        <div>
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
            <div className="flex items-center">
              <svg
                className="text-blue-600 text-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202926"
              >
                <g id="_13-car" data-name="13-car">
                  <g id="glyph">
                    <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"></path>
                    <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"></path>
                    <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"></path>
                  </g>
                </g>
              </svg>
              <p className="text-right px-2 -mt-2 mr-0.5">|</p>
              <svg
                className="text-blue-600 text-right -mt-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202922"
              >
                <g id="_12-train" data-name="12-train">
                  <g id="glyph">
                    <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                    <circle cx="209" cy="367" r="12"></circle>
                    <circle cx="319" cy="367" r="12"></circle>
                    <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                    <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                    <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                    <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                    <rect x="4" y="279" width="53" height="29"></rect>
                    <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Marseille - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lyon - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulouse - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5">
            <p className="text-left">Toulouse - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Nice - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Nantes - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Montpellier - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Strasbourg - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Bordeaux - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lille - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Rennes - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Reims - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Saint-Etienne - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Le Havre - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulon - Lyon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      depart: "Toulon",
      answer: (
        <div>
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
            <div className="flex items-center">
              <svg
                className="text-blue-600 text-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202926"
              >
                <g id="_13-car" data-name="13-car">
                  <g id="glyph">
                    <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"></path>
                    <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"></path>
                    <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"></path>
                  </g>
                </g>
              </svg>
              <p className="text-right px-2 -mt-2 mr-0.5">|</p>
              <svg
                className="text-blue-600 text-right -mt-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202922"
              >
                <g id="_12-train" data-name="12-train">
                  <g id="glyph">
                    <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                    <circle cx="209" cy="367" r="12"></circle>
                    <circle cx="319" cy="367" r="12"></circle>
                    <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                    <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                    <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                    <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                    <rect x="4" y="279" width="53" height="29"></rect>
                    <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Marseille - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lyon - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulouse - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5">
            <p className="text-left">Toulouse - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Nice - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Nantes - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Montpellier - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Strasbourg - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Bordeaux - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lille - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Rennes - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Reims - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Saint-Etienne - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Le Havre - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulon - Toulon</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      depart: "Toulouse",
      answer: (
        <div>
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
            <div className="flex items-center">
              <svg
                className="text-blue-600 text-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202926"
              >
                <g id="_13-car" data-name="13-car">
                  <g id="glyph">
                    <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"></path>
                    <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"></path>
                    <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"></path>
                  </g>
                </g>
              </svg>
              <p className="text-right px-2 -mt-2 mr-0.5">|</p>
              <svg
                className="text-blue-600 text-right -mt-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202922"
              >
                <g id="_12-train" data-name="12-train">
                  <g id="glyph">
                    <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                    <circle cx="209" cy="367" r="12"></circle>
                    <circle cx="319" cy="367" r="12"></circle>
                    <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                    <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                    <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                    <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                    <rect x="4" y="279" width="53" height="29"></rect>
                    <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Marseille - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lyon - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulouse - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5">
            <p className="text-left">Toulouse - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Nice - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Nantes - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Montpellier - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Strasbourg - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Bordeaux - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lille - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Rennes - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Reims - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Saint-Etienne - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Le Havre - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulon - Toulouse</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      depart: "Strasbourg",
      answer: (
        <div>
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
            <div className="flex items-center">
              <svg
                className="text-blue-600 text-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202926"
              >
                <g id="_13-car" data-name="13-car">
                  <g id="glyph">
                    <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"></path>
                    <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"></path>
                    <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"></path>
                  </g>
                </g>
              </svg>
              <p className="text-right px-2 -mt-2 mr-0.5">|</p>
              <svg
                className="text-blue-600 text-right -mt-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                id="fi_3202922"
              >
                <g id="_12-train" data-name="12-train">
                  <g id="glyph">
                    <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                    <circle cx="209" cy="367" r="12"></circle>
                    <circle cx="319" cy="367" r="12"></circle>
                    <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                    <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                    <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                    <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                    <rect x="4" y="279" width="53" height="29"></rect>
                    <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Marseille - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lyon - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulouse - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5">
            <p className="text-left">Toulouse - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Nice - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Nantes - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Montpellier - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Strasbourg - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Bordeaux - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Lille - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Rennes - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Reims - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Saint-Etienne - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 w-70">
            <p className="text-left">Le Havre - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
  
          <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
            <p className="text-left">Toulon - Strasbourg</p>
            <div className="flex items-center">
              <a className="text-right" href="#">
                59€
              </a>
              <p className="text-right px-2">|</p>
              <a className="text-right" href="#">
                140€
              </a>
            </div>
          </div>
        </div>
      ),
    }
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
  
  function Expandable({ depart, answer }) {
    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <div
          className="p-2 hover:bg-gray-200 flex items-center justify-between mb-2 border-b-2 border-blue-600"
          onClick={() => setOpen(!open)}
        >
          <h4>{depart}</h4>
  
          <div className={open ? "transform rotate-180" : "tranform rotate-0"}>
            <Arrow />
          </div>
        </div>
  
        {open && <div className="p-2">{answer}</div>}
      </div>
    );
  }
  
  function SUGGESTIONS() {
    return (
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-left pb-5 text-black">
          Quelques petites idées de voyages...
        </h2>
  
        <div className="grid lg:grid-cols-3 gap-4 ">
          {VOYAGES &&
            VOYAGES.map(({ depart, answer }) => (
              <Expandable depart={depart} answer={answer} />
            ))}
        </div>
      </div>
    );
  }

export default function Suggestion() {
return(
    <SUGGESTIONS/>
);
}