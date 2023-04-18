window.addEventListener('DOMContentLoaded', (event) => {

	const fetchData = async () => {
		for (let i = 1; i <= 32; i++) {
			await getListData(i);
		}
	}
	
	/** Método para hacer la petición a la API y obtener el json de resultados */
	const getListData = async (id) => {
		const url = `https://rickandmortyapi.com/api/character/${id}`;
		const result = await fetch(url);
		const resultJson = await result.json();		
		createCharacterItem(resultJson);
	}
 

	/** Método para crear el HTML del Elemento CHARACTER*/
	const createCharacterItem = (character) => {
		
		const characters_list = document.querySelector('#lista');
		const item = document.createElement('div');		
		const {image, name, id, species, gender, status } = character;		

		item.innerHTML = `
		<a class="card" style="width: 18rem; border-radius:15%;" href="detalle.html?id=${id}">
			<img src="${image}" class="card-img-top" alt="...">
			
			<ul class="list-group list-group-flush">
				<li class="list-group-item" id="datos">
			
				<h5 class="card-title" style="font-size: 1.2rem;">${id} ${name}</h5>

				</li>
				<li class="list-group-item">
					<div class="card-footer-social" >
						<p>Specie: </p>
						<p>${species}</p>
						
					</div>
					<div class="card-footer-social">
						<p>Gender: </p>
						<p>${gender}</p>
					</div>
				</li>
				<p class="card-footer-social">Status: ${status}</p>
			</ul>
		</a>`;

		characters_list.appendChild(item);

	}
	
	fetchData();
});

