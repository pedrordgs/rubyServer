 function barra () {
   var bar = document.getElementById ("bar");
   var width=0;
   var id=setInterval (frame,15);
   const fb = document.getElementsByClassName ("myfb");
   const tt = document.getElementsByClassName ("mytt");
   const insta = document.getElementsByClassName ("myinsta");
   const git = document.getElementsByClassName ("mygithub");
   const cont = document.getElementsByClassName ("mycont");
   function frame (){
     if (width >=100) {
       document.getElementById ("fblink").setAttribute("href","https://www.facebook.com/profile.php?id=100001119490761");
       document.getElementById ("ttlink").setAttribute("href","https://twitter.com/pedrordgs_");
       document.getElementById ("instalink").setAttribute("href","https://www.instagram.com/pedrordgs8/");
       document.getElementById ("gitlink").setAttribute("href","https://github.com/pedrordgs");
       fb[0].style.opacity = "1";
       tt[0].style.opacity = "1";
       insta[0].style.opacity = "1";
       git[0].style.opacity = "1";
       cont[0].style.opacity = "1";
       clearInterval(id);
     }
     else {
       document.getElementById ("fblink").removeAttribute("href");
       document.getElementById ("ttlink").removeAttribute("href");
       document.getElementById ("instalink").removeAttribute("href");
       document.getElementById ("gitlink").removeAttribute("href");
       width++;
       bar.style.width = width + '%';
       fb[0].style.opacity = "0";
       tt[0].style.opacity = "0";
       insta[0].style.opacity = "0";
       git[0].style.opacity = "0";
       cont[0].style.opacity = "0";
     }
   } 
 }

function errada(){
  const fb = document.getElementsByClassName ("myfb");
  const tt = document.getElementsByClassName ("mytt");
  const insta = document.getElementsByClassName ("myinsta");
  const git = document.getElementsByClassName ("mygithub");
  const cont = document.getElementsByClassName ("mycont");
  document.getElementById("fblink").removeAttribute("href");
  document.getElementById ("ttlink").removeAttribute("href");
  document.getElementById ("instalink").removeAttribute("href");
  document.getElementById ("gitlink").removeAttribute("href");
  fb[0].style.opacity = "0";
  tt[0].style.opacity = "0";
  insta[0].style.opacity = "0";
  git[0].style.opacity = "0";
  cont[0].style.opacity = "0";
  document.getElementById("bar").style.opacity = "0";
  alert ("Resposta Errada!");
}

function certa (){
  document.getElementById("bar").style.opacity = "1";
  barra ();
}
