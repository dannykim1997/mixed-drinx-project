let cardInfo = document.createElement("div")
cardInfo.className = "card-info"
cardInfo.id = 'info'
let container = document.querySelector(".drinx")
let form = document.querySelector("form")
form.addEventListener("submit", (e) => searchDrinx(e))

getdrinks()

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
  const directions = document.createElement("h6")
  const ing1 = document.createElement("ul")
  const ing2 = document.createElement("ul")
  const ing3 = document.createElement("ul")
  const ing4 = document.createElement("ul")
  const ing5 = document.createElement("ul")
  const ing6 = document.createElement("ul")
  const ing7 = document.createElement("ul")
  const exit = document.createElement("button")
  const drinkNameInfo = document.createElement("h4")

  exit.textContent = " X"
  exit.className = "exitBtn"
  drinkNameInfo.textContent = drinks.strDrink
  drinkNameInfo.className = "infoNameTitle"
	glass.textContent = `Glassware in image: ${drinks.strGlass}`
  glass.className = "infoName"
  directions.className = "infoName"
	directions.textContent = `Instructions: ${drinks.strInstructions}`
  ing1.textContent = setTextContent(drinks.strIngredient1, drinks.strMeasure1)
  ing1.className = "infoName"
  ing2.textContent = setTextContent(drinks.strIngredient2, drinks.strMeasure2)
  ing2.className = "infoName"
  ing3.textContent = setTextContent(drinks.strIngredient3, drinks.strMeasure3)
  ing3.className = "infoName"
  ing4.textContent = setTextContent(drinks.strIngredient4, drinks.strMeasure4)
  ing4.className = "infoName"
  ing5.textContent = setTextContent(drinks.strIngredient5, drinks.strMeasure5)
  ing5.className = "infoName"
  ing6.textContent = setTextContent(drinks.strIngredient6, drinks.strMeasure6)
  ing6.className = "infoName"
  ing7.textContent = setTextContent(drinks.strIngredient7, drinks.strMeasure7)
  ing7.className = "infoName"
	
	cardInfo.append(exit, drinkNameInfo, glass, directions, ing1, ing2, ing3, ing4, ing5, ing6, ing7)
	container.appendChild(cardInfo)

	exit.addEventListener("click", () => removeInfo(cardInfo))
}
  
function setTextContent(ingredients, measurements) {
  if (ingredients === null) {
    return ""
  } else if (ingredients !== null & measurements == null){
    return `${ingredients} - to taste`
  } else {return `${ingredients} - ${measurements}`}
}

function changeBtnColor(btn) {
	btn.textContent = " ♥" 
}	

function removeInfo(cardInfo) {
	cardInfo.style.display = "none"
}
