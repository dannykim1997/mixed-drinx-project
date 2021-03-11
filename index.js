let cardInfo = document.createElement("div")
cardInfo.className = "card-info"
cardInfo.id = 'info'
let form = document.querySelector("form")
form.addEventListener("submit", (e) => searchDrinx(e))

function searchDrinx(e) {
	e.preventDefault()
	getdrinks(e.target[0].value)
	e.target.reset()
}

function getdrinks(e = "vodka") {
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`)
	.then(response => response.json())
	.then(margaritas => {
		container.innerHTML = ""
		margaritas.drinks.forEach(drink => buildDrinks(drink))})
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
	const btn = document.createElement("h9")
	btn.textContent = " ♡"
	btn.className = "btn-like"

	btn.addEventListener("click", () => changeBtnColor(btn))
	drinkImg.addEventListener("click", () => showCardInfo(drinks))
	
	drinkName.append(btn)

	card.append(drinkImg, drinkName)
	container.appendChild(card)
}

const showCardInfo = function(drinks) {
	cardInfo.innerHTML = ""
	cardInfo.style.display = "block"

  const glass = document.createElement("h5")
  glass.className = "infoName"
  const directions = document.createElement("h6")
  directions.className = "infoName"
  const ing1 = document.createElement("ul")
  ing1.className = "infoName"
  const ing2 = document.createElement("ul")
  ing2.className = "infoName"
  const ing3 = document.createElement("ul")
  ing3.className = "infoName"
  const ing4 = document.createElement("ul")
  ing4.className = "infoName"
  const ing5 = document.createElement("ul")
  ing5.className = "infoName"
  const ing6 = document.createElement("ul")
  ing6.className = "infoName"
  const ing7 = document.createElement("ul")
  ing7.className = "infoName"
  const exit = document.createElement("button")
  exit.className = "exitBtn"
  const drinkNameInfo = document.createElement("h4")
  drinkNameInfo.textContent = drinks.strDrink
  drinkNameInfo.className = "infoNameTitle"

  	exit.textContent = " X"
	glass.textContent = `Glassware in image: ${drinks.strGlass}`
	directions.textContent = `Instructions: ${drinks.strInstructions}"`
	
  ing1.textContent = setTextContent(drinks.strIngredient1, drinks.strMeasure1)
  ing2.textContent = setTextContent(drinks.strIngredient2, drinks.strMeasure2)
  ing3.textContent = setTextContent(drinks.strIngredient3, drinks.strMeasure3)
  ing4.textContent = setTextContent(drinks.strIngredient4, drinks.strMeasure4)
  ing5.textContent = setTextContent(drinks.strIngredient5, drinks.strMeasure5)
  ing6.textContent = setTextContent(drinks.strIngredient6, drinks.strMeasure6)
  ing7.textContent = setTextContent(drinks.strIngredient7, drinks.strMeasure7)
	
	cardInfo.append(exit, drinkNameInfo, glass, directions, ing1, ing2, ing3, ing4, ing5, ing6, ing7)
	container.appendChild(cardInfo)

	exit.addEventListener("click", () => removeInfo(cardInfo))
	}
  
  function setTextContent(ingredients, measurements) {
    if (ingredients === null) {
      return ""
    } else {
      return `${ingredients} - ${measurements}`
    }
  }

function changeBtnColor(btn) {
	btn.textContent = " ♥"
}	

function removeInfo(cardInfo) {
	cardInfo.style.display = "none"
}