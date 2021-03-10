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
	const drinkName = document.createElement("h4")
	drinkName.textContent = drinks.strDrink
	const drinkImg = document.createElement("img")
	drinkImg.className = "drink-img"
	drinkImg.src = drinks.strDrinkThumb
	const btn = document.createElement("button")
	btn.textContent = "favorite"
	
	drinkImg.addEventListener("click", () => showCardInfo(drinks))
	
	drinkName.append(btn)

	card.append(drinkImg, drinkName)
	container.appendChild(card)
}

function handleClick(e) {
	console.log(e.target.drinkInfoObj.value)
}

const showCardInfo = function(drinks) {
	let cardInfo = document.createElement("div")
	cardInfo.className = "card-info"
	const glass = document.createElement("h5")
	glass.textContent = drinks.strGlass
	const directions = document.createElement("h6")
	directions.textContent = drinks.strInstructions
	const iba = document.createElement("h7")
	iba.textContent = drinks.strIBA
	const ing1 = document.createElement("ul")
	ing1.textContent = drinks.strIngredient1
	const ing2 = document.createElement("ul")
	ing2.textContent = drinks.strIngredient2
	const ing3 = document.createElement("ul")
	ing3.textContent = drinks.strIngredient3
	const ing4 = document.createElement("ul")
	ing4.textContent = drinks.strIngredient4
	const ing5 = document.createElement("ul")
	ing5.textContent = drinks.strIngredient5
	const ing6 = document.createElement("ul")
	ing6.textContent = drinks.strIngredient6
	const ing7 = document.createElement("ul")
	ing7.textContent = drinks.strIngredient7
	
	cardInfo.append(glass, directions, iba, ing1, ing2, ing3, ing4, ing5, ing6, ing7)
	container.appendChild(cardInfo)
	}
	// showCardInfo.className = "moreInfo"
