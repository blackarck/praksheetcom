/*
Main js file for Praksheet
Author - VS
Sep 22
*/

console.log("starting up praksheet");

function openCont(tabname,btnname) {
    var i;
    var x = document.getElementsByClassName("contentwrapper");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
     
    }
    x = document.getElementsByClassName("btnformat");
    for (i = 0; i < x.length; i++) {
      x[i].style.borderBottom = "none";
    }
    document.getElementById(tabname).style.display = "block";
    document.getElementById(btnname).style.borderBottom = "3px solid rgb(230, 106, 24)";
  }


  