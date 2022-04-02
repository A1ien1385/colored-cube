const greenbtn = document.querySelector(".green");
const bluebtn = document.querySelector(".blue");
const yellowbtn = document.querySelector(".yellow");
const redbtn = document.querySelector(".red");
const span = document.querySelectorAll("span");
const cube = document.querySelector(".cube");
const topp = document.querySelector(".top");
const shadow = document.querySelectorAll(".shadow");
const reset = document.querySelector(".reset");
const violetbtn = document.querySelector(".violet");


redbtn.addEventListener("click", function()
{
  
  topp.style.backgroundColor = "rgba(219, 112, 147, .6)";
  
 
span.forEach(function(element)
{
    element.style.backgroundColor = "rgba(219, 112, 147, .6)";
    element.style.boxShadow = "0 0 120px rgba(219, 112, 147, .6)";
})
});



greenbtn.addEventListener("click", function()
{
  
  topp.style.backgroundColor = "rgba(0,236,0,.4)";
  
  
 span.forEach(function(element)
{
    element.style.backgroundColor = "rgba(0,236,0, .4)";
    element.style.boxShadow = "0 0 120px rgba(0,236,0, .4)";
    element.style.filter = "blur(3px)";
})
});

bluebtn.addEventListener("click", function()
{
  topp.style.backgroundColor = "rgba(10,0,250, .7)";
  
span.forEach(function(element)
{
    element.style.backgroundColor = "rgba(10,0,250, .7)";
    element.style.boxShadow = "0 0 120px rgba(10,0,250, .7)";
    element.style.filter = "blur(3px)";
} ) 
});

yellowbtn.addEventListener("click", function()
{
  topp.style.backgroundColor = "rgba(250, 250,10,.6)"
  
span.forEach(function(element)
{
    element.style.backgroundColor = "rgba(250, 250,10,.6)";
    element.style.boxShadow = "0 0 120px rgba(250, 250,10,.6)";
    element.style.filter = "blur(3px)";
} ) 
});


reset.addEventListener("click", function()
{
    topp.style.backgroundColor = "rgba(255, 255, 255, .6)";
    
span.forEach(function(element)
  {
      element.style.backgroundColor = "rgba(255, 255, 255, .6)";
      element.style.boxShadow = "";
      element.style.filter = "blur(0)";
      
  } ) 
  });


  violetbtn.addEventListener("click", function()
{
  
  topp.style.backgroundColor = "rgba(127,0,255, .7)";
  
 
span.forEach(function(element)
{
    element.style.backgroundColor = "rgba(127,0,255, .7)";
    element.style.boxShadow = "0 0 120px rgba(127,0,255, .7)";
})
});