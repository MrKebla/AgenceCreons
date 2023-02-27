let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let liens = document.getElementsByClassName('menu-lien');

for(let i = 0 ; i < liens.length ; i++) 
{
    liens[i].addEventListener('click', function() 
        {
            body.classList.toggle('ouvert');
        }
    )
}

toggle.addEventListener('click', function()
    {
        body.classList.toggle('ouvert');
    }
)

//mettre avant pour que ca s"execute avant (dans l'ordre que l'on veut) 
let tl = gsap.timeline();

tl.from('.accueil, .accueil-agence, .accueil-projet, .accueil-contact', 
    { //effet de flou au tout début
        duration : 0.9,
        filter: "blur(10px)"
    }
);

tl.from('.overlay, .overlay2', 
    { //slide du menu
        duration : 0.65,
        x : '-100%'
    }
);

tl.from('.logo, .menu, .menu2, .toggle', 
    { //effet de fondu pour logo et menu
        duration : 0.55,
        opacity : 0
    }
);

tl.from('.accueil-text-haut, .accueil-text-bas', 
    { //effet de fondu des textes
        duration : 0.5,
        opacity : 0
    }
);

function openDesc() 
{
    document.getElementById("popup").style.display="block";
}

function openDesc2() 
{
    document.getElementById("popup2").style.display="block";
}

function openDesc3() 
{
    document.getElementById("popup3").style.display="block";
}

function openDesc4() 
{
    document.getElementById("popup4").style.display="block";
}

function closeDesc() 
{
    document.getElementById("popup").style.display="none";
    document.getElementById("popup2").style.display="none";
    document.getElementById("popup3").style.display="none";
    document.getElementById("popup4").style.display="none";
}