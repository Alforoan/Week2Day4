document.addEventListener('DOMContentLoaded', () => {
  const movieBtn = document.body.querySelector('.movie-btn');
  const movieImg = document.body.querySelector('.movie-img');

  const sizes = ['200px', '300px', '150px', '700px', '900px'];
  let index = 0;
  movieBtn.addEventListener('click', () => {
    if(index < 5){
        console.log("index",index);
        movieImg.style.width = sizes[index];
        index++;
    }else{
        index = 0;
        movieImg.style.width = sizes[index];
    }
  });
 
});
