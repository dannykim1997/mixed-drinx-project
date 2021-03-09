// document.addEventListener("DOMContentLoaded", postDrinks())

function getdrinks() {
	fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
	.then(response => response.json())
	.then(margaritas => margaritas.drinks.forEach(drink => buildDrinks(drink)))
	.catch(error => console.error("error", error));
}
getdrinks()

let container = document.querySelector(".drinx")

function buildDrinks(drinks) {
	let card = document.createElement("div")
	card.className = "card"
	card.id = "drink-id"
	const drinkName = document.createElement("h3")
	drinkName.textContent = drinks.strDrink
	const drinkImg = document.createElement("img")
	drinkImg.className = "drink-img"
	drinkImg.src = drinks.strDrinkThumb
	card.append(drinkName, drinkImg)
	container.appendChild(card)
}