window.addEventListener("load", () => 
    {
        
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");

        var colorPicker = document.querySelector('input[type="color"]');//prend la couleur du choix dans INDEX
        var sizePicker = document.querySelector('input[type="range"]');
        var ecranLargeur = screen.width; //variables tailles de la écran
        var ecranHauteur = screen.height;
        var largeur; //variables valeur a retire pour décalage
        var hauteur;
        
        //taille du canvas et de la valeur a décaler selon la taile de l'écran
        if(ecranLargeur==800) 
        {
            canvas.height = 350;
            canvas.width = 600;
            largeur = 100;
            hauteur = 142;
        } 
        if(ecranLargeur==1024) 
        {
            canvas.height = 500;
            canvas.width = 775;
            largeur = 124;
            hauteur = 167;
        } 
        else if(ecranLargeur==1152) 
        {
            canvas.height = 575;
            canvas.width = 875;
            largeur = 139;
            hauteur = 182;
        }
        else if(ecranLargeur==1176) 
        {
            canvas.height = 425;
            canvas.width = 800;
            largeur = 187;
            hauteur = 152;
        } 
        else if(ecranLargeur==1280) 
        {
            if (ecranHauteur==720) 
            {
                canvas.height = 475;
                canvas.width = 850;
                largeur = 214;
                hauteur = 160;
            } 
            else if (ecranHauteur==768) 
            {
                canvas.height = 500;
                canvas.width = 875;
                largeur = 202;
                hauteur = 167;
            } 
            else if (ecranHauteur==800) 
            {
                canvas.height = 525;
                canvas.width = 875;
                largeur = 202;
                hauteur = 172;
            } 
            else if (ecranHauteur==960) 
            {
                canvas.height = 650;
                canvas.width = 975;
                largeur = 152;
                hauteur = 196;
            } 
            else if (ecranHauteur==1024) 
            {
                canvas.height = 700;
                canvas.width = 1050;
                largeur = 115;
                hauteur = 206;
            }
        } 
        else if(ecranLargeur==1360) 
        {
            canvas.height = 500;
            canvas.width = 925;
            largeur = 217;
            hauteur = 167;
        } 
        else if(ecranLargeur==1366){
            canvas.height = 500;
            canvas.width = 925;
            largeur = 221;
            hauteur = 167;
        }
        else if(ecranLargeur==1536){ // Si 1920*1080 en 125%
            canvas.height = 600;
            canvas.width = 1050;
            largeur = 243;
            hauteur = 182;
        }
        else if(ecranLargeur==1600) 
        {
            if(ecranHauteur==900) 
            {
                canvas.height = 625;
                canvas.width = 1075;
                largeur = 263;
                hauteur = 187;
            } 
            else {
                canvas.height = 725;
                canvas.width = 1075;
                largeur = 263;
                hauteur = 206;
            }
        } 
        else if(ecranLargeur==1680) 
        {
            canvas.height = 750;
            canvas.width = 1150;
            largeur = 265;
            hauteur = 210;
        } 
        else if(ecranLargeur==1768) 
        {
            canvas.height = 700;
            canvas.width = 1200;
            largeur = 284;
            hauteur = 201;
        } 
        else if(ecranLargeur==1920) 
        { 
            canvas.height = 775;
            canvas.width = 1300;
            largeur = 310;
            hauteur = 214;
        }

        console.log("Largeur: " + largeur + ", hauteur: " + hauteur + ", taille écran : " +ecranLargeur+ "px par " +ecranHauteur+ "px.");

        let painting = false;

        function startPosition(e)
        {
            painting = true;
            draw(e);
        }

        function finishedPosition()
        {
            painting = false;
            ctx.beginPath();
        }

        function draw(e)
        {
            if(!painting) return;
            ctx.lineWidth = sizePicker.value;
            ctx.lineCap = "round";
            ctx.strokeStyle = colorPicker.value; //mets la couleur
            if(screen)
            ctx.lineTo(e.clientX-largeur, e.clientY-hauteur);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX-largeur, e.clientY-hauteur);
            
        }

        canvas.addEventListener("mousedown", startPosition);
        canvas.addEventListener("mouseup", finishedPosition);
        canvas.addEventListener("mousemove", draw);

    }
);
    