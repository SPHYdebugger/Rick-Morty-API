window.addEventListener('DOMContentLoaded', (event) => {

	const fetchCharacter = async () => {
		for (let i = 1; i <= 32; i++) {
			await getListCharacter(i);
		}
	}
	
	/** Método para hacer la petición a la API y obtener el json de resultados */
	const getListCharacter = async (id) => {
		const url = `https://rickandmortyapi.com/api/character/${id}`;

		const result = await fetch(url);
		const resultJson = await result.json();
		console.log(resultJson);
		buscarNombre(resultJson);
	}
	
	const buscarNombre = (character) => {
		console.log('buscarNombre => ', character);
		
		const {name,id} = character;
		console.log(name);
		let nameLower= name.toLowerCase();

		const formulario =document.querySelector('#formulario');
        const boton = document.querySelector('#buscar');

        const filtrar = () => {
        console.log(formulario.value);
        
        const texto = formulario.value.toLowerCase();
        if (texto == nameLower) {
            const url = `https://rickandmortyapi.com/api/character/${id}`;
            location.href =`detalle.html?id=${id}`;
        }
        }

        boton.addEventListener('click',filtrar);

		formulario.addEventListener("keypress", function(event) {
			if (event.keyCode === 13) {
			  event.preventDefault();
			  filtrar();
			}
		})
	}
  
	fetchCharacter();
});