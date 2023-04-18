window.addEventListener('DOMContentLoaded', (event) => {
   
  const getCharacter = async (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const result = await fetch(url);
    const resultJson = await result.json();
    console.log(resultJson);
    createCharacterItem(resultJson);
  }

  const fetchCharacter = async (id) => {
    await getCharacter(id);
  }
  let param = new URLSearchParams(document.location.search);
  let id = param.get('id');
  console.log(id);
  if(id !== undefined) fetchCharacter(id);   
            
  const createCharacterItem = (resultJson) => {
    console.log('createCharacterItem =>', resultJson);
    console.log('createCharacterItem name=>', resultJson.name);
    const character_list = document.querySelector('#lista');

    
    const item = document.createElement('div');
                    
            
    const {image, name, id, species, gender, status, origin, location } = resultJson;
            
                
    let card_option2_content = `
      <div class="card" style="width: 30rem; border-radius:20%;">
        <img src="${image}" class="card-img-top" alt="...">
                        
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <p>${id} </p>
              <h5 class="card-title" style="font-size: 1.9rem;">${name}</h5>

            </li>
            <li class="list-group-item">
              <div class="card-footer-social">
                <p>Specie</p>
                <p>${species}</p>
              </div>
              <div class="card-footer-social">
                <p>Gender</p>
                <p>${gender}</p>
            </li>
            <p class="card-footer-social">Status ${status}</p>
          </ul>
          <li class="list-group-item">
            <a href="places.html">- PLACES -</a>
            <div class="card-footer-social">
              <p>Origin:</p>
              <p>${origin.name}</p>
            </div>
            <div class="card-footer-social">
              <p>Location:</p>
              <p>${location.name}</p>
            </li>
      </div>
    `;
    character_list.innerHTML = card_option2_content;
    character_list.appendChild(item);
  }

});