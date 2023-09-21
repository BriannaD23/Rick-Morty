document.addEventListener('DOMContentLoaded', getFetch);

function getFetch() {
    const choice = document.querySelector('input').value;
    const url = `https://rickandmortyapi.com/api/character/?page=1`;

  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
  
        if (data.results && data.results.length > 0) {
          const characters = data.results;
          const characContainer = document.getElementById('charac-container');
          characContainer.innerHTML = '';
  
          characters.forEach((character) => {
            const image = character.image;
            const name = character.name;
            const status = character.status;
            const species = character.species;
  
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');
  
            // Create and append the character's image
            const characterImage = document.createElement('img');
            characterImage.src = image;
            characterDiv.appendChild(characterImage);
  
            // Create and append the character's name
            const characterName = document.createElement('p');
            characterName.textContent = `Name: ${name}`;
            characterDiv.appendChild(characterName);
  
            // Create and append the character's status
            const characterStatus = document.createElement('p');
            characterStatus.textContent = `Status: ${status}`;
            characterDiv.appendChild(characterStatus);

            const characterSpecies = document.createElement('p');
            characterSpecies.textContent = `Species: ${species}`;
            characterDiv.appendChild(characterSpecies);
  
            // Create and append the status icon based on 'status'
            const statusIcon = document.createElement('i');
            if (status === 'Alive') {
                statusIcon.className = 'fas fa-check-circle alive-icon';
            } else if (status === 'Dead') {
                statusIcon.className = 'fas fa-skull-crossbones dead-icon';
            }else if( status === 'unknown'){
                statusIcon.className = 'fas fa-question-circle unknown-icon';
            }else{
                statusIcon.className = 'hidden';
            } 


            characterDiv.appendChild(statusIcon);

            characContainer.appendChild(characterDiv);
          });

        } else {
          console.log('No characters found');
        }
    })
      .catch((err) => {
        console.log(`error ${err}`);
    });
}




// Button search charcaters

function searchCharacters() {
    const searchTerm = document.querySelector('.input-search input').value.trim(); // Get the search term from the input field
    
    if (searchTerm === '') {
        // If the search term is empty, show all characters (first page by default)
        currentPage = 1;
        fetchCharacters();
        return;
    }

    // Construct the URL for searching characters by name
    const url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const characters = data.results;
                const characContainer = document.getElementById('charac-container');
                characContainer.innerHTML = '';

                characters.forEach(character => {
                    const image = character.image;
                    const name = character.name;
                    const status = character.status;
                    const species = character.species;

                    const characterDiv = document.createElement('div');
                    characterDiv.classList.add('character');

                    const characterImage = document.createElement('img');
                    characterImage.src = image;
                    characterDiv.appendChild(characterImage);

                    const characterName = document.createElement('p');
                    characterName.textContent = `Name: ${name}`;
                    characterDiv.appendChild(characterName);

                    const characterStatus = document.createElement('p');
                    characterStatus.textContent = `Status: ${status}`;
                    characterDiv.appendChild(characterStatus);

                    const characterSpecies = document.createElement('p');
                    characterSpecies.textContent = `Species: ${species}`;
                    characterDiv.appendChild(characterSpecies);

                    const statusIcon = document.createElement('i');
                    if (status === 'Alive') {
                        statusIcon.className = 'fas fa-check-circle alive-icon';
                    } else if (status === 'Dead') {
                        statusIcon.className = 'fas fa-skull-crossbones dead-icon';
                    }else if( status === 'unknown'){
                        statusIcon.className = 'fas fa-question-circle unknown-icon';
                    }else{
                        statusIcon.className = 'hidden';
                    } 
        
        
                    characterDiv.appendChild(statusIcon);

                    characContainer.appendChild(characterDiv);
                });
            } else {
                console.log('No characters found');
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}

const searchButton = document.querySelector('.input-search .button-search'); // Update the selector
searchButton.addEventListener('click', searchCharacters);



// Search term real time
// Function to fetch characters based on search term
function searchCharacters() {
    const searchTerm = document.querySelector('.input-search input').value.trim();
    
    if (searchTerm === '') {
        // If the search term is empty, show all characters (first page by default)
        currentPage = 1;
        fetchCharacters();
        return;
    }

    // Construct the URL for searching characters by name
    const url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const characters = data.results;
                const characContainer = document.getElementById('charac-container');
                characContainer.innerHTML = '';

                characters.forEach(character => {
                    const image = character.image;
                    const name = character.name;
                    const status = character.status;
                    const species = character.species;

                    const characterDiv = document.createElement('div');
                    characterDiv.classList.add('character');

                    const characterImage = document.createElement('img');
                    characterImage.src = image;
                    characterDiv.appendChild(characterImage);

                    const characterName = document.createElement('p');
                    characterName.textContent = `Name: ${name}`;
                    characterDiv.appendChild(characterName);

                    const characterStatus = document.createElement('p');
                    characterStatus.textContent = `Status: ${status}`;
                    characterDiv.appendChild(characterStatus);

                    const characterSpecies = document.createElement('p');
                    characterSpecies.textContent = `Species: ${species}`;
                    characterDiv.appendChild(characterSpecies);

                    const statusIcon = document.createElement('i');
                    if (status === 'Alive') {
                        statusIcon.className = 'fas fa-check-circle alive-icon';
                    } else if (status === 'Dead') {
                        statusIcon.className = 'fas fa-skull-crossbones dead-icon';
                    }else if( status === 'unknown'){
                        statusIcon.className = 'fas fa-question-circle unknown-icon';
                    }else{
                        statusIcon.className = 'hidden';
                    } 
        
        
                    characterDiv.appendChild(statusIcon);

                    characContainer.appendChild(characterDiv);
                });
            } else {
                console.log('No characters found');
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}

// Add an input event listener to the search input field
const searchInput = document.querySelector('.input-search input');
searchInput.addEventListener('input', searchCharacters);

// End of search term real time



// Using prev and next button

function fetchCharacters() {
    const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);

            if (data.results && data.results.length > 0) {
                const characters = data.results;
                const characContainer = document.getElementById('charac-container');
                characContainer.innerHTML = '';

                characters.forEach(character => {
                    const image = character.image;
                    const name = character.name;
                    const status = character.status;
                    const species = character.species;

                    const characterDiv = document.createElement('div');
                    characterDiv.classList.add('character');

                    const characterImage = document.createElement('img');
                    characterImage.src = image;
                    characterDiv.appendChild(characterImage);

                    const characterName = document.createElement('p');
                    characterName.textContent = `Name: ${name}`;
                    characterDiv.appendChild(characterName);

                    const characterStatus = document.createElement('p');
                    characterStatus.textContent = `Status: ${status}`;
                    characterDiv.appendChild(characterStatus);

                    const characterSpecies = document.createElement('p');
                    characterSpecies.textContent = `Species: ${species}`;
                    characterDiv.appendChild(characterSpecies);

                    const statusIcon = document.createElement('i');
                    if (status === 'Alive') {
                        statusIcon.className = 'fas fa-check-circle alive-icon';
                    } else if (status === 'Dead') {
                        statusIcon.className = 'fas fa-skull-crossbones dead-icon';
                    }else if( status === 'unknown'){
                        statusIcon.className = 'fas fa-question-circle unknown-icon';
                    }else{
                        statusIcon.className = 'hidden';
                    } 
        
                    characterDiv.appendChild(statusIcon);


                    characContainer.appendChild(characterDiv);
                });

            } else {
                console.log('No characters found');
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}


const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', navigatePrevious);
nextButton.addEventListener('click', navigateNext);

let currentPage = 1;
let totalPages = 42;

function navigatePrevious() {
    if (currentPage > 1) {
        currentPage--;
        fetchCharacters();
    }
}

function navigateNext() {
    if (currentPage < totalPages) {
        currentPage++;
        fetchCharacters();
    }
}


//with icon//

/*
function getFetch() {
    const choice = document.querySelector('input').value;
    const url = `https://rickandmortyapi.com/api/character/?page=1`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
  
        if (data.results && data.results.length > 0) {
          const characters = data.results;
          const characContainer = document.getElementById('charac-container');
          characContainer.innerHTML = '';
  
          characters.forEach((character) => {
            const image = character.image;
            const name = character.name;
            const status = character.status;
            const species = character.species;
  
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');
  
            // Create and append the character's image
            const characterImage = document.createElement('img');
            characterImage.src = image;
            characterDiv.appendChild(characterImage);
  
            // Create and append the character's name
            const characterName = document.createElement('p');
            characterName.textContent = `Name: ${name}`;
            characterDiv.appendChild(characterName);
  
            // Create and append the character's status
            const characterStatus = document.createElement('p');
            characterStatus.textContent = `Status: ${status}`;
            characterDiv.appendChild(characterStatus);
  
            // Create and append the character's species
            const characterSpecies = document.createElement('p');
            characterSpecies.textContent = `Species: ${species}`;
            characterDiv.appendChild(characterSpecies);
  
            // Create and append the status icon based on 'status'
            const statusIcon = document.createElement('i');
            statusIcon.className = status === 'Alive' ? 'fas fa-check-circle alive-icon' : 'fas fa-skull-crossbones dead-icon';
            characterDiv.appendChild(statusIcon);
  
            characContainer.appendChild(characterDiv);
          });
        } else {
          console.log('No characters found');
        }
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }





// no icon


/*
function getFetch() {
    const choice = document.querySelector('input').value;
    const url = `https://rickandmortyapi.com/api/character/?page=1`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);

            if (data.results && data.results.length > 0) {
                const characters = data.results;
                const characContainer = document.getElementById('charac-container');
                characContainer.innerHTML = '';

                characters.forEach(character => {
                    const image = character.image;
                    const name = character.name;
                    const status = character.status;
                    const species = character.species;

                    const characterDiv = document.createElement('div');
                    characterDiv.classList.add('character');

                    const characterImage = document.createElement('img');
                    characterImage.src = image;
                    characterDiv.appendChild(characterImage);

                    const characterName = document.createElement('p');
                    characterName.textContent = `Name: ${name}`;
                    characterDiv.appendChild(characterName);

                    const characterStatus = document.createElement('p');
                    characterStatus.textContent = `Status: ${status}`;
                    characterDiv.appendChild(characterStatus);

                    const characterSpecies = document.createElement('p');
                    characterSpecies.textContent = `Species: ${species}`;
                    characterDiv.appendChild(characterSpecies);

                    characContainer.appendChild(characterDiv);
                });

            } else {
                console.log('No characters found');
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}
*/









