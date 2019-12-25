var button = document.getElementById('submit');
	console.log(button);
button.addEventListener('click', () => {
var nourriture2 = document.getElementById('A');
	console.log(nourriture2);
	var endroit	=document.getElementById('B');
	console.log(endroit);	
	var nom1 =document.getElementById('C');
	console.log(nom1)
	var nourriture = document.getElementById('D')
	console.log(nourriture)
	var nom2 =document.getElementById('E');
	console.log(nom2)
	var form = document.querySelector('form');
	console.log(form);
	var text = `Les restaurants s'activaient autour de la ${endroit.value}. Mais tout le monde savait que le restaurant le plus fréquenté était "les ${nom1.value}" car en Belgique chaque restaurant ayant des ${nourriture.value} monte d'un cran. Mais un jour un restaurant appelé "${nom2.value}" arriva sur la ${endroit.value} et à partir de ce jour tout changea. Les "${nom2.value}" devint le plus fréquenté de la ${endroit.value} grâce à leurs ${nourriture2.value}.`
	console.log(text);
var output = document.getElementById('output');

   output.innerHTML = `<p>${text}</p><div class="red-button"><a href="index.html">Revenir en arriere</a></div>`;
    form.style.display = "none";
});
