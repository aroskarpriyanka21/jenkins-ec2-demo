function showMessage() {

    alert("Welcome to Foodie Restaurant! 🍴");

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}


function orderFood(foodName) {

    alert(
        "Thank you! You selected " + foodName + " 🍽️"
    );

}
