const API_Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQwZmYxOWJlNzEzYjkyMmQzYWRmZjUyMWM3ZDczNCIsInN1YiI6IjY1ODMzNWY5ZTI5NWI0M2NiYjY4NTMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBTase5fJJEEeMpSTLMDBWxp4pY1S7OKVnSIoV5NzHk";

function clearItems() {
  // Use querySelectorAll and forEach to remove items
  document.querySelectorAll(".item").forEach(item => {
    item.remove();
  });
}



function SearchMovie() {
  //get the text in search bar and send search api
  let searchText = document.getElementById('searchInput').value;
  console.log('the text is: ' + searchText);
  if (searchText != "") {
    clearItems();
  }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_Token}`
      }
    };
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => printDitels(response))
      .catch(err => console.error(err));
  
 
}
function selectMovieByGenre() {
  clearItems()
  // Get the selected genre from the dropdown
  let genre = document.getElementById('genre').value;
  console.log(genre);


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_Token}`
    }
  };
  
  fetch(`https://api.themoviedb.org/3/search/movie?query=${genre}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => printDitels(response))
    .catch(err => console.error(err));;
}



function printDitels(response){
  // print the ditels to the clinet
    console.log(response);
    const section = document.querySelector('.container');
    const box = document.querySelector(".box")

    response.results.forEach(itam => {
    
        const div = document.createElement('div');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const modalContent = document.createElement('div');
        const closeBtn = document.createElement('span');

        div.className = 'item';
        img.src = "https://www.themoviedb.org/t/p/w220_and_h330_face"+ itam.poster_path;
        a.appendChild(img);
        div.appendChild(a);
        box.appendChild(div);
        section.appendChild(box);
        document.body.appendChild(section);

        // Get the modal
        let modal = document.getElementById("myModal");

        // Get the button that opens the modal
        let btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];

        let imgmodal =  document.getElementById("img-modal");
        let p_modal = document.getElementById("p-modal");
        // When the user clicks the button, open the modal 
        img.onclick = function() {
          modal.style.display = "block";
        imgmodal.src ="https://www.themoviedb.org/t/p/w220_and_h330_face"+ itam.poster_path; 
        p_modal.innerText = itam.overview;
        }
      

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    
    });
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_Token}`
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing', options)
  .then(response => response.json())
  .then(response => printDitels(response))
  .catch(err => console.error(err));


/*
  let inganer;
  response.result.forEach(item => {
    if(item.genre_ids.inculdes(genre)){
      inganer += {...item};
    }
  })
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_Token}`
    }
  };
    
    fetch(`https://api.themoviedb.org/3/search/include_adult=false`, options)
      .then(response => response.json())
      .then(response => printDitels
        
        (inganer))
      .catch(err => console.error(err));;
}
 */