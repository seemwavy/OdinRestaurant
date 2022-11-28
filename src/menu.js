import mooShuPic from './mooShu.jpg'
import camelHump from './camelHump.jpg'
import kungPao from './kungPao.jpg'
import gefilteFish from './gefilteFish.jpg'
import './styles.css'
const renderMenu = (content) => {
    document.body.style.backgroundImage = "URL(42472254cd4178c18f67.jpeg)"
    var menuHeader = document.createElement("h1")
    var menuDisplay = document.createElement("div")
    var menuBox1 = document.createElement("div")
    var menuBox2 = document.createElement("div")
    var menuBox3 = document.createElement("div")
    var menuBox4 = document.createElement("div")
    var foodPic1 = document.createElement("img")
    var foodPic2 = document.createElement("img")
    var foodPic3 = document.createElement("img")
    var foodPic4 = document.createElement("img")
    var foodHeader1 = document.createElement("h2")
    var foodHeader2 = document.createElement("h2")
    var foodHeader3 = document.createElement("h2")
    var foodHeader4 = document.createElement("h2")
    menuHeader.innerHTML = "Menu Items"
    foodHeader1.innerHTML = "Camel Hump 5.99$"
    foodHeader2.innerHTML = "Moo-Shu 5.99$"
    foodHeader3.innerHTML = "Gefilte Fish 5.99$"
    foodHeader4.innerHTML = "Kung-POW Chicken 10.99$"
    foodPic1.src = camelHump
    foodPic2.src = mooShuPic
    foodPic3.src = gefilteFish
    foodPic4.src = kungPao
    menuBox1.appendChild(foodHeader1)
    menuBox1.appendChild(foodPic1)
    menuBox2.appendChild(foodHeader2)
    menuBox2.appendChild(foodPic2)
    menuBox3.appendChild(foodHeader3)
    menuBox3.appendChild(foodPic3)
    menuBox4.appendChild(foodHeader4)
    menuBox4.appendChild(foodHeader4)
    menuBox1.className = "menuBox"
    menuBox2.className = "menuBox"
    menuBox3.className = "menuBox"
    menuBox4.className = "menuBox"
    menuDisplay.className = "menuHeader"
    menuDisplay.appendChild(menuBox1)
    menuDisplay.appendChild(menuBox2)
    menuDisplay.appendChild(menuBox3)
    menuDisplay.appendChild(menuBox4)
    content.appendChild(menuHeader)
    content.appendChild(menuDisplay)
    return renderMenu
}
export {
    renderMenu
}