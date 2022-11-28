import './styles.css'
const renderAbout = (content) => {
    document.body.style.backgroundImage = "URL(a41d48689f6a338b7d6a.jpg)"
    var aboutBox = document.createElement("div")
    var aboutHeader = document.createElement("h1")
    var aboutWords = document.createElement("p")
    aboutWords.innerHTML = "The Rush Hour Cafe was founded by fans of a movie about two cops: one with the fastest hands in the east and the other with the slickest mouth in the west. The movie became a phenomenon that took the world by storm. Shortly after a sequel was made and after years a third was made to round out the trilogy. The 3 great movies inspired a generation and in tribute, this fictional cafe serves dishes mentioned in the movie with roots from China to LA and more. So hurry on down to the Rush Hour Cafe! And be careful, its Rush Hour."
    aboutHeader.innerHTML = "About The Rush Hour Cafe"
    aboutBox.appendChild(aboutHeader)
    aboutBox.appendChild(aboutWords)
    content.appendChild(aboutBox)
    aboutBox.className = "aboutBox"
    return renderAbout
}

export {
    renderAbout
}