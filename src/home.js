import mooShuPic from './mooShu.jpg'
import banner from "./banner.jpg"
import rushHour from "./rushHour.jpg"
import './styles.css'
const renderHome = (content) => {
    document.body.style.backgroundImage = "URL(45bd094f22000e8d9f9b.jpg)" 
    content.className = "home"
    var welcome = document.createElement("h1")
    var bannerBox = document.createElement("div")
    var bannerPic = document.createElement("img")
    var featureItem = document.createElement("h2")
    var itemBox = document.createElement("div")
    var item = document.createElement("img")
    var homeDiv = document.createElement("div")
    homeDiv.className = "homeDiv"
    welcome.innerHTML = "Welcome to the Rush Hour Cafe!"
    bannerPic.src = banner
    featureItem.innerHTML = "Featured Item: Mushu! 5.99$"
    item.src = mooShuPic
    bannerBox.appendChild(bannerPic)
    itemBox.appendChild(item)
    bannerBox.className = "bannerBox"
    itemBox.className = "itemBox"
    document.body.style.backgroundImage = rushHour.src
    homeDiv.appendChild(welcome)
    homeDiv.appendChild(bannerBox)
    homeDiv.appendChild(featureItem)
    homeDiv.appendChild(itemBox)
    content.appendChild(homeDiv)
    return renderHome
}
export {
    renderHome
}


