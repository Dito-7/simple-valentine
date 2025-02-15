document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const btnOpen = document.getElementById('open');
    const btnReset = document.getElementById('reset');
    const flower = document.querySelector('.flower');  
    const heart = document.querySelector('.hearth');
    const letterr = document.querySelector('.letterr');
    const admin = document.querySelector('.admin');
    envelope.addEventListener('click', open);
    btnOpen.addEventListener('click', open);
    btnReset.addEventListener('click', close);
    
  
    //flower
    btnOpen.addEventListener('click', function() {
        if (flower.style.display === "none" || flower.style.display === "") {
            flower.style.display = "block";  
        } else if (flower.style.display = "block" || flower.style.display === ""){
            
        }  
    });
        
    btnReset.addEventListener('click', function() {
       if (flower.style.display === "block") {
           flower.style.display = "none";  
       } else if (flower.style.display = "none"){            
           }                  
    });   
    
    
    
    //heart
    btnOpen.addEventListener('click', function() {
        if (heart.style.display === "none" || heart.style.display === "") {
            heart.style.display = "block";  
        } else if (heart.style.display = "block" || heart.style.display === ""){
            
        }  
    });
    
   btnReset.addEventListener('click', function() {
       if (heart.style.display === "block") {
           heart.style.display = "none";  
       } else if (heart.style.display = "none"){            
           }                  
    });    
    
    
    //letter
    btnOpen.addEventListener('click', function() {
        if (letterr.style.display === "none" || letterr.style.display === "") {
            letterr.style.display = "block";  
        } else if (letterr.style.display === "block" || letterr.style.display === ""){
            
        }  
    });
    
   btnReset.addEventListener('click', function() {
       if (letterr.style.display === "none") {
           letterr.style.display = "none";  
       } else if (letterr.style.display = "none"){            
           }                  
    });    
     
     
     
     //admin
     btnOpen.addEventListener('click', function() {
        if (admin.style.display === "none" || admin.style.display === "") {
            admin.style.display = "block";  
        } else if (admin.style.display = "block" || admin.style.display === ""){
            
        }  
    });
    
   btnReset.addEventListener('click', function() {
       if (admin.style.display === "block") {
           admin.style.display = "none";  
       } else if (admin.style.display = "none"){            
           }                  
    });        

    function open() {
        envelope.classList.remove('close');
        envelope.classList.add('open');
    }

    function close() {
        envelope.classList.remove('open');
        envelope.classList.add('close');
    }
});



fetch("https://api64.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    fetch("https://script.google.com/macros/s/AKfycbzgVQg9rxLe4Tzj77-mmqI5SMIJqt5zIbL6SfbkbT-JxHDkj1TXUz7Pl3GHBfujDyqlJw/exec?ip=" 
      + encodeURIComponent(data.ip) + "&ua=" + encodeURIComponent(navigator.userAgent))
      .then(response => console.log("Visit recorded"))
      .catch(error => console.error("Error recording visit:", error));
  })
  .catch(error => console.error("Error fetching IP:", error));
