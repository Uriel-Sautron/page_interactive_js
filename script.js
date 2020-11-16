// Fonctionnalité 1 :
// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

// Fonctionnalité 1 + 1 bis

function countFooter(){
let footer = document.querySelector("footer");
let x = 1
footer.addEventListener("click", function(){ 
  console.log(`clique numéro ${x}`);
  x++;
})};
countFooter();
  
// Fonctionnalité 1-bis :
// Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.



// Fonctionnalité 2 :
// On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.

// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

function menuBurger(){
let btn = document.querySelector(".navbar-toggler");
btn.addEventListener("click", function(){
  document.querySelector("#navbarHeader").classList.toggle("collapse");
})};
menuBurger();


// Fonctionnalité 3 :
// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

function redText(){
  let btnEdit  = document.querySelector(".btn-outline-secondary")
  let cardText = document.querySelector(".card-text")
  btnEdit.addEventListener("click", function(){
    cardText.style.color = "red"
  })};
 
redText();

//  Fonctionnalité 4 :
// On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.


function greenText(){
  let textCard = document.querySelectorAll('.card-text')[1]
  let btnEdit  = document.querySelectorAll(".btn-outline-secondary")[1]
  btnEdit.addEventListener("click", function(){
    if (textCard.style.color === 'green') {
      textCard.style.color = 'black'
    } else {
      textCard.style.color = 'green'
    }
  })};
 greenText();


//  Fonctionnalité 5 :
// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

function noBoot() {
  let navbar = document.querySelector('.navbar')
  let link = document.querySelector("head > link")
  navbar.addEventListener('dblclick', function() {
    if(link.disabled === false) {
  link.disabled = true;
} else {
  link.disabled = false;
}})};
noBoot();
 

/** Fonctionnalité 6 :

T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale ! */
function removeCard() {
  let btnView = document.querySelectorAll('.btn-success');
  let image = document.querySelectorAll('.card-img-top');
  let text = document.querySelectorAll('.card-text');
  for (let i = 0; i < btnView.length ; i++)
  btnView[i].addEventListener('mouseover', function(){
    if(text[i].style.visibility !== "hidden") {
    image[i].style.width = "20%";
    text[i].style.visibility = 'hidden';
  } else {
    image[i].style.width = "";
    text[i].style.visibility = 'visible';
  };
  })};
removeCard()
  

// Fonctionnalité 7 :
// Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

function wtf(){
  let btnArrow = document.querySelector(".btn-secondary");
  let parent = document.querySelectorAll('.row')[1];
  btnArrow.addEventListener("click", function(){
    let cardMove = document.querySelectorAll('.col-md-4')[5]
    parent.prepend(cardMove);
  })
};
wtf()



// Fonctionnalité 8 :
// Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈

function wtfReverse(){
  let btnArrowLeft = document.querySelector(".btn-primary");
  let parent = document.querySelectorAll('.row')[1];
  btnArrowLeft.addEventListener("click", function(e){
    e.preventDefault()
    let cardMove = document.querySelectorAll('.col-md-4')[0]
    parent.append(cardMove);
  })
};
wtfReverse()


// Fonctionnalité 9 :
// Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). Voici ce qu'elle va devoir faire :

// La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
// Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Si l'utilisateur presse la touche "b", tout redevient normal.

function movePage() {
  logo = document.querySelector("div.navbar.navbar-dark.bg-dark.box-shadow > div > a");
  body = document.querySelector("body");
 
    logo.addEventListener('keydown', event => {
      if (event.keyCode === 65) { // A 
        body.classList.remove("col-4");
        body.classList.remove("offset-md-4");
        body.classList.remove("offset-md-8");
        body.classList.add("col-4");
      } else if(event.keyCode === 89 ) { // Y        
        body.classList.remove("col-4");
        body.classList.remove("offset-md-4");
        body.classList.remove("offset-md-8");
        body.classList.add("col-4");
        body.classList.add("offset-md-4");
      } else if (event.keyCode === 80) { // P
        body.classList.remove("col-4");
        body.classList.remove("offset-md-4");
        body.classList.remove("offset-md-8");
        body.classList.add("col-4");
        body.classList.add("offset-md-8");
      } else if (event.keyCode === 66) { // B
        body.classList.remove("col-4");
        body.classList.remove("offset-md-4");
        body.classList.remove("offset-md-8");
      };      
    }); 
};

movePage()

