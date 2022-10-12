/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let domainName = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "small", "crazy"];
  let noun = ["king", "lizard", "philosopher", "faker"];
  let domain = [".com", ".net", ".us", ".io", ".fr", ".es", ".ch", ".co.uk"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainName.push("  " + pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
  console.log(domainName);
  document.querySelector("#domain-results").innerHTML = domainName;
};
