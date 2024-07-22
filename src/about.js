const about = {
    Name: "Restaurant Name",
    Owner: "Restaurant Group",
    Phone: "5555-5555",
    Mail: "restaurantname@domain.net"
}

const populateAbout = () => {
    const contentDiv = document.querySelector("#content");
    const titleDiv = document.createElement("div");
    const aboutContent = document.createElement("div");
    
    titleDiv.textContent = "About";
    titleDiv.classList.toggle("title");

    aboutContent.classList.toggle("aboutContent");
    
    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(aboutContent);

    for (const key of Object.keys(about)) {
        const information = document.createElement("div");

        information.textContent = `${key}: ${about[key]}`;

        aboutContent.appendChild(information);
    }

}

export { populateAbout };