const data = [{
    "name": "DROPSET TRAINER SHOES Blue",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "green"],
    "price": 125,
    "icon": "Frame 14.png",
    "page": "product_page.html",
    "id": 0
},
{
    "name": "ULTRABOOST 1.0 MIAMI Green",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": "green",
    "price": 125,
    "icon": "tr1.png",
    "id": 1
},
{
    "name": "ADIDAS OZELIA SHOES Green",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": "green",
    "price": 125,
    "icon": "tr2.png",
    "id": 2
},
{
    "name": "ADIDAS 4DFWD 2 RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["orange", "green"],
    "price": 125,
    "icon": "tr3.png",
    "id": 3
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr4.png",
    "id": 4
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr5.png",
    "id": 5
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr6.png",
    "id": 6
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr7.png",
    "id": 7
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr8.png",
    "id": 8
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr9.png",
    "id": 9
}]

data.map((element)=>{
    if(element.id >0 && element.id <=9){
    let card0 = document.createElement('div')  
    console.log(card0)
    let list = document.querySelector('.catalog')
    card0.classList.add('card')
    card0.innerHTML = `
                        <img src="/img/${element.icon}" alt="">
                        <p>${element.name}</p>
                        <button><img src="/img/Button125.png" alt=""></button>`
    list.append(card0)
    }
})



