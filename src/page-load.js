import pieOne from "./images/pie1.jpg";

const pageFirstload = () => {

    const content = document.querySelector("#content");

    const resturantName = document.createElement("div");
    resturantName.textContent = "Jal Pie Shop";
    resturantName.classList.add("name")
    content.appendChild(resturantName);

    const middleTop = document.createElement('div');
    middleTop.classList.add("middle-top");

    const pie1 = new Image(300, 300);
    pie1.src = pieOne;
    middleTop.appendChild(pie1);

    const resturantDetail = document.createElement("p");
    resturantDetail.classList.add("detail");
    resturantDetail.textContent = `
        Welcome to JalPie. At this resturant we sell various flavors
        of pie that will sure make you come again and again. We bake
        our pies fresh everyday, so you'll always get high quality pies
        no matter when you show up.
    `;
    middleTop.appendChild(resturantDetail);

    content.appendChild(middleTop);

    const hours = document.createElement("div");
    hours.classList.add("hours");
    const days = {
        Monday: "8am-8pm",
        Tuesday: "8am-8pm",
        Wednesday: "8am-8pm",
        Thursday: "8am-8pm",
        Friday:  "8am-8pm",
        Saturday: "Closed",
        Sunday: "Closed",
    };

    for (let day in days) {
        const dayHours = document.createElement('p');
        dayHours.textContent = day + " " + days[day];
        hours.appendChild(dayHours);
    };

    content.appendChild(hours);
};

export default pageFirstload;