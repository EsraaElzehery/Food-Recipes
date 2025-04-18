const container = document.getElementById("container")
const container1 = document.getElementById("container1")
const container3 = document.getElementById("container3")

document.getElementById("menu").addEventListener("click",()=>{
    let menuUl = document.getElementById("ul-menu")
    menuUl.classList.toggle("active")
    console.log(menuUl)
})

class Meal {
constructor(image,id,name,rate){
    this.image = image
this.id = id
this.name = name
this.rate= rate
}

veiwAllMeals() {
const box= document.createElement("div")
box.classList.add("box")
box.innerHTML = `
<img src=${this.image} alt="${this.name}"/>
<div class="text">${this.name}</span></div>
<div class="rate">Rating: ${this.rate}<i class="fa-solid fa-star"></i></div>
<button class="btn">More Details</button>
<div class="edit">
<div class="style">
<img src="./assets/photo_2025-04-03_19-05-58.jpg"/>
<span>Esraaa</span>
</div>
<div>
<span class="cal">199 cals</span>
</div>
</div>`
let btn = box.querySelectorAll(".btn")
btn.forEach(b=>{
    b.addEventListener("click",()=>{
        window.location.href = `details.html?id=${this.id}`
    })
})
container.appendChild(box)

}
veiwAllMeals2() {
const box= document.createElement("div")
box.classList.add("box")
box.innerHTML = `
<img src=${this.image} alt="${this.name}"/>
<div class="text">${this.name}</span></div>
<div class="rate">Rating: ${this.rate}<i class="fa-solid fa-star"></i></div>
<button class="btn">More Details</button>
<div class="edit">
<div class="style">
<img src="./assets/photo_2025-04-03_19-05-58.jpg"/>
<span>Esraaa</span>
</div>
<div>
<span class="cal">199 cals</span>
</div>
</div>`

let btn = box.querySelectorAll(".btn")
btn.forEach(b=>{
    b.addEventListener("click",()=>{
        window.location.href = `details.html?id=${this.id}`
    })
})
container1.appendChild(box)
console.log(container1)
}
veiwAllMeals3() {
const box3= document.createElement("div")
box3.classList.add("box3")
box3.innerHTML = `
<div>
<img src=${this.image} alt="${this.name}"/>
<button class='btn'><h1 class="text">${this.name}</h1></button>
</div>
`
let btn = box3.querySelectorAll(".btn")
btn.forEach(b=>{
    b.addEventListener("click",()=>{
        window.location.href = `details.html?id=${this.id}`
    })
})


container3.appendChild(box3)
console.log(container3)
}
static async fetchData(res1, res2, res3){
res1 = await fetch('https://dummyjson.com/recipes?limit=8')

let data1 = await res1.json()
data1.recipes.map((meal)=>{
    const mealObject = new Meal(meal.image,meal.id, meal.name, meal.rating)
        mealObject.veiwAllMeals();
    })

res2 = await fetch("https://dummyjson.com/recipes?limit=4&skip=23")
const data2 = await res2.json()

data2.recipes.map((meal)=>{
const mealObject2 = new Meal(meal.image,meal.id, meal.name, meal.rating)
    mealObject2.veiwAllMeals2();
})

res3 = await fetch("https://dummyjson.com/recipes?limit=8&skip=6")
const data3 =await res3.json()
console.log(res3)
data3.recipes.map((meal)=>{
    const mealObject3 = new Meal(meal.image,meal.id, meal.name)
    mealObject3.veiwAllMeals3()
})
}}
Meal.fetchData()



