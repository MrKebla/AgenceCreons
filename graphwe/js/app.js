window.addEventListener("load", function () 
  {
    setTimeout(function()
      {
        document.querySelector(".popup").style.display = "block";
      }
      , 250   
    ) 
  }
);

document.querySelector("#fermer");addEventListener("click", function()
  {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".enbala").style.display = "none";
  }
);

function twPleinEcran(_element) 
{
  var monElement = _element||document.documentElement;
  if (document.fullscreenElement) 
  {
    if (!document.fullscreenElement) 
    {
      monElement.requestFullscreen();
    } 
    else 
    {
      document.exitFullscreen();
    }
  }
  if (document.webkitFullscreenEnabled) 
  {
    if (!document.webkitFullscreenElement) 
    {
      monElement.webkitRequestFullscreen();
    } 
    else 
    {
       document.webkitExitFullscreen();
    }
  }
}

$(function() 
  {
    $("#button").click(function() 
      {
        html2canvas($("#canvas"), 
          {
            onrendered: function(canvas) 
            {
              var imgsrc = canvas.toDataURL("image/png");
              console.log(imgsrc);
              var dataURL = canvas.toDataURL();
              $.ajax(
                {
                  type: "POST",
                  url: "script.php",
                  data: 
                  {
                    imgBase64: dataURL
                  }
                }
              ).
              done(function(o) 
                {
                  console.log('saved');
                }
              );
            }
          }
        );
        document.querySelector(".sauver").style.display = "block";
      }
    );
  }
);