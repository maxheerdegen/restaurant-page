const openingHours = [
    {
        name: "monday",
        open: "15 am",
        close: "21 pm"
    },
    {
        name: "tuesday",
        open: "11 am",
        close: "21 pm"
    },
    {
        name: "wednesday",
        open: "11 am",
        close: "23 pm"
    },
    {
        name: "thursday",
        open: "11 am",
        close: "21 pm"
    },
    {
        name: "friday",
        open: "11 am",
        close: "23 pm"
    },
    {
        name: "saturday",
        open: "11 am",
        close: "23 pm"
    },
    {
        name: "sunday",
        open: "11 am",
        close: "20 pm"
    },
];

const populateHome = () => {
    const contentDiv = document.querySelector("#content");

    const titleDiv = document.createElement("div");
    const contentTextDiv = document.createElement("div"); 
    const openingHoursTitleDiv = document.createElement("div");

    titleDiv.textContent = "Restaurant Name";
    titleDiv.classList.toggle("title");

    contentTextDiv.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum posuere justo sit amet pellentesque. 
    Vivamus eu mi odio. Nulla commodo lectus fermentum, rutrum purus id, eleifend mauris. 
    In hac habitasse platea dictumst. Pellentesque finibus sem vel diam tristique hendrerit. 
    Vestibulum placerat lacinia massa. Nunc egestas lectus et sapien venenatis, vel bibendum sapien posuere. 
    Aenean malesuada auctor sem, a feugiat nibh dignissim ac. Donec dui nulla, imperdiet in elementum sit amet, blandit eget ipsum.
    Nulla efficitur blandit laoreet. Phasellus suscipit iaculis purus rutrum vestibulum. Phasellus semper varius orci vitae ornare. 
    Phasellus eros mi, feugiat eu porta sit amet, interdum vel leo. Cras quis mi facilisis diam cursus placerat. 
    Vivamus porta, velit eu mollis commodo, sem sapien dapibus neque, vitae mollis nulla purus id tortor. 
    Praesent lacinia condimentum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Aenean ligula ligula, ultricies tempor neque ac, hendrerit rhoncus sapien. Quisque in lectus sit amet metus faucibus rutrum sit amet ac dui. 
    Suspendisse laoreet est id rhoncus sollicitudin. Quisque ornare quam quis lobortis volutpat. Nam erat libero, aliquet eget ligula sed, lobortis tempus turpis. 
    Pellentesque varius dui vitae tempus molestie. Aliquam ut semper nunc, non efficitur ipsum. Suspendisse potenti. Pellentesque tempor ut mauris at suscipit.`
    contentTextDiv.classList.toggle("contentText");

    openingHoursTitleDiv.textContent = "Opening Hours";
    openingHoursTitleDiv.classList.toggle("subtitle");

    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(contentTextDiv);
    contentDiv.appendChild(openingHoursTitleDiv);

    for (const day of openingHours) {
        const weekday = day.name.charAt(0).toUpperCase() + day.name.slice(1);

        const openingHoursDayDiv = document.createElement("div");
        openingHoursDayDiv.textContent = `${weekday}: ${day.open} - ${day.close}`;
        openingHoursDayDiv.classList.toggle("openingHours");

        contentDiv.appendChild(openingHoursDayDiv);
    }
}

export { populateHome };