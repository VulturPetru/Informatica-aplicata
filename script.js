//Cache the DOM
var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("img")
var educatie = document.getElementById("educatie")
var an = document.getElementById("anNastere")

const d=new Date()
var year = d.getFullYear()

//Add evebt listenerto button
button.addEventListener("click", altaviata)
an.addEventListener("mouseover", displayAge)

function displayAge()
{
	an.innerHTML = year - an.innerHTML	
}
function altaviata()
{
		nume.innerHTML="Functie: Profesor universitar"
		prenume.innerHTML="Locul de munca:Japonia"
		educatie.innerHTML=" Experiente: <ol><li>Nota 10 in exmen la matematici speciale.</li><li>L-am impresionat pe domnul Orzan.</li><li>Am terminat facultatea in primii 4 ani.</li></ol> "
		img.src="inginer.jpg"
		
		body.style.backgroundColor="silver"
		body.style.color="blue"
		
		//opacitate imagine
		img.style.opacity="75%"
		//grosime margini imagine
		img.style.borderWidth="25px"
		img.style.width="400px"
		img.style.height="300px"
		img.style.marginLeft="500px"
	
}