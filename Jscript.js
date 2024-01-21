const API_Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQwZmYxOWJlNzEzYjkyMmQzYWRmZjUyMWM3ZDczNCIsInN1YiI6IjY1ODMzNWY5ZTI5NWI0M2NiYjY4NTMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBTase5fJJEEeMpSTLMDBWxp4pY1S7OKVnSIoV5NzHk";

function search() {
    var searchQuery = document.getElementById('query').value;
 
}
// ffff
function selcetMovie(){

  let value = document.getElementById("genre").value;
 const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQwZmYxOWJlNzEzYjkyMmQzYWRmZjUyMWM3ZDczNCIsInN1YiI6IjY1ODMzNWY5ZTI5NWI0M2NiYjY4NTMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBTase5fJJEEeMpSTLMDBWxp4pY1S7OKVnSIoV5NzHk'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular', options)
    .then(response => response.json())
    .then(response => printImg(response))
    .catch(err => console.error(err));

}


function printImg(response){
    console.log(response);
    const section = document.querySelector('.container');
    const box = document.querySelector(".box")

    response.results.forEach(itam => {
    
        const div = document.createElement('div');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const modal = document.createElement('div');
        const modalContent = document.createElement('div');
        const closeBtn = document.createElement('span');

        div.className = 'item';
        img.src = "https://www.themoviedb.org/t/p/w220_and_h330_face"+ itam.backdrop_path;
        a.appendChild(img);
        div.appendChild(a);
        box.appendChild(div);
        section.appendChild(box);
        document.body.appendChild(section);
    
    });
}


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQwZmYxOWJlNzEzYjkyMmQzYWRmZjUyMWM3ZDczNCIsInN1YiI6IjY1ODMzNWY5ZTI5NWI0M2NiYjY4NTMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBTase5fJJEEeMpSTLMDBWxp4pY1S7OKVnSIoV5NzHk'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing', options)
    .then(response => response.json())
    .then(response => printImg(response))
    .catch(err => console.error(err));


