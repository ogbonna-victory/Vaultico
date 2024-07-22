function changeBackground() {
    const colours = ["#f0f0f0", "#8247c2", "#2b9eb3", "#a4e57a", "white"];
    const randomIndex = Math.floor(Math.random() * colours.length);
    const colour = colours[randomIndex];
    document.body.style.backgroundColor = colour;
    
    const footer = document.querySelector("footer");

    if (colour === "#8247c2"){
        document.body.style.color ="white";
        footer.style.color = "black";
    } else{
        document.body.style.color ="black"
    }
}

