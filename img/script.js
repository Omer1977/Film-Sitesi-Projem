const arrows = document.querySelectorAll(".arrow");
const movieLists= querySelectorAll(".movie-list");
arrows.forEach((arrow)=>{
    arrow.addEventListener("click", function(){
        console.log(arrow);
    })
})