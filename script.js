function goToMenu() {

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}

function orderFood(foodName) {

    alert("You selected " + foodName + "! 🍽️");

}
