$(document).ready(function () {

    $.getJSON("../js/cookware.json", function (data) {
        var container = $("#card-container");
        container.empty(); // Clears previous attempts

        data.forEach(card => {
            var cardData = `
                <div class="card" style="width: 18rem; margin: 15px; border: 1px solid #444; background-color: #111;">
                    <img src="../assets/pics/Cook-wear/${card.image}" class="card-img-top" height="180px" style="object-fit: cover;">
                    <div class="card-body text-center">
                        <h5 class="card-title" style="color: white;">${card.title}</h5>
                        <p class="card-text" style="color: #FF6600; font-weight: bold;">Rs. ${card.price}/-</p>
                        <a href="#" class="btn" style="background-color: #FF6600; color: white; width: 100%;">Go Shop</a>
                    </div>
                </div>`;
            container.append(cardData);
        });
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error("JSON Load Failed: " + textStatus);
        // This will show you exactly what's wrong in the console
    });
});

// N A V 

function scrollToCategory(cooking) {
  const element = document.getElementById(cooking);
  
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  }
}
function scrollToCategory(fridge) {
  const element = document.getElementById(fridge);
  
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  }
}
function scrollToCategory(store) {
  const element = document.getElementById(store);
  
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  }
}
function scrollToCategory(applience) {
  const element = document.getElementById(applience);
  
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  }
}