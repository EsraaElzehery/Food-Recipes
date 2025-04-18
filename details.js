const urlParams = new URLSearchParams(window.location.search)
const recipeId = urlParams.get("id") 
const ing =document.getElementById("recipe-ingredients")
const instruction = document.getElementById("recipe-instruction")
fetch(`https://dummyjson.com/recipes/${recipeId}`)
.then(res => res.json())
.then(data=>{
    document.getElementById("recipe-name").textContent = data.name
    document.getElementById("recipe").textContent = data.name
    document.getElementById("recipe-img").src = data.image
    // document.getElementById("recipe-instruction").textContent = data.instructions

    data.instructions.forEach((e)=>{
        const lii = document.createElement("li")
        lii.textContent = e
        instruction.appendChild(lii)
    })


data.ingredients.forEach(i=>{
    const li = document.createElement("li")
    li.textContent = i
    ing.appendChild(li)
})

    
});
document.getElementById("menu").addEventListener("click",()=>{
    let menuUl = document.getElementById("ul-menu")
    menuUl.classList.toggle("active")

})