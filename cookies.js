"use strict";

document.addEventListener('DOMContentLoaded', event => {
    console.log(`Las cookies antes: ${document.cookie}`);
    document.cookie = "Variable=true";
    console.log(`Las cookies después: ${document.cookie}`);

    localStorage.setItem("hacked", "true");
    let hacked = localStorage.getItem("hacked");
    console.log(`localStorage hacked = ${hacked}`);
    
    let sessionHacked = sessionStorage.getItem("hacked");
    console.log(`sessionStorage hacked = ${sessionHacked}`);
})