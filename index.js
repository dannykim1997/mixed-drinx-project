
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => response.json())
.then(margaritas => {
	console.log(margaritas);
})
.catch(err => {
	console.error(err);
});