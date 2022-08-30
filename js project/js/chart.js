var id = localStorage.getItem("id")
var d = document.getElementById("chart")

function getiitem(item) {
    var div = `<img src="${item.img}" alt="${item.name}">
    <div>
        <h1>${item.name}</h1>
        <h2>${item.desc}</h2>
         <p> this is one of the most beautiful  car in the market and his price it more sutible according to features in the world market and it model is one of the most newst in the market <br>
         touch : Grip of the wheel
         Foot on the gas
         Securely seated
         <br>
         Sight: Feeling when you first see the car
         Physical details of the car
         The profile of the car on a turn
         The look down the hood of the car, head on
        . </p>
        <h2> ${item.price} <span style="color: red;">LE</span> </h2>
        <button onclick="conferm()" id="chartbtn">Buy Now </button>
    </div>`
    d.innerHTML = div
}

function conferm() {
    var div = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Nice choice</h4>
    <p>Aww yeah, you successfully Ordered it ...</p>
    <hr>
    <p class="mb-0">wait it in 3 days.</p>
    <p class="mb-0">thank you for trust us come back soon.</p>
    <br>
    <a href="shop.html">Back to Shop</a>

  </div>`
    d.innerHTML = div

}

var productsxhr = new XMLHttpRequest();
var product = new Array();

productsxhr.open('GET', '../products.json');
productsxhr.send("")
productsxhr.onreadystatechange = () => {
    if (productsxhr.readyState == 4) {
        if (productsxhr.status == 200) {
            var test = JSON.parse(productsxhr.response);
            Object.assign(product, test)
            product.forEach(element => {
                if (id == element.id) {
                    getiitem(element)
                }
            });
        }
    }
};