document.addEventListener("DOMContentLoaded", function () {
    fetch("../json/appliences.json")
        .then(response => response.json())
        .then(data => {
            var container = document.getElementById("applience");
            container.innerHTML = "";

            data.forEach(card => {
                var cardData = `
                <div class="col-md">
        <div class="card category-card" style="width: 18rem;">
    <img src="../assets/pics/appliences/${card.image}" class="card-img-top w-70 d-block mx-auto" alt="...">
        <div class="card-body ">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">Rs. ${card.price}</p>
            <button class="btn btn-outline-dark w-100 d-flex justify-content-center" type="submit">Add
                To Cart 🛒</button>
        </div>
</div>
</div>
        `;

                container.innerHTML += cardData;
            });
        })
});