window.addEventListener('DOMContentLoaded', (event) => {

	const fetchData = async () => {
		for (let i = 1; i <= 19; i++) {
			await getListData(i);
		}
	}
	
	/** Método para hacer la petición a la API y obtener el json de resultados */
	const getListData = async (id) => {
		const url = `https://rickandmortyapi.com/api/location/${id}`;

		const result = await fetch(url);
		const resultJson = await result.json();
		console.log(resultJson);
		createLocationItem(resultJson);
	}


	/** Método para crear el HTML del Elemento LOCATION*/
	const createLocationItem = (location) => {
		console.log('createLocationItem => ', location);
		const locations_list = document.querySelector('#lista');
		const item = document.createElement('div');
		
		const {name, id, type, dimension} = location;		

		item.innerHTML = `
        	<div class="card" style="width: 18rem; border-radius:15%;" href="detalle.html?id=${id}">
        		<img id="locationImg" src="../rickandmorty/src/${id}.jpg" class="card-img-top" alt="...">
        
        		<ul class="list-group list-group-flush">
      				<li class="list-group-item" id="datos">      
      				<h5 class="card-title" style="font-size: 1.2rem; padding-top:20px;">${id} ${name}</h5>
      				</li>      
      				<div class="footer">
                		<p>Type:</p>
                		<p>${type}</p>                     
                    </div>   
        		</ul>
    		</div>
		`;

		locations_list.appendChild(item);

	}
	
	fetchData();
});