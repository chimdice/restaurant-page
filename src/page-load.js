import pieOne from "./images/pie1.jpg";

const pageFirstload = () => {

    const content = document.querySelector("#content");
    const nav = document.querySelector("nav")

    const resturantName = document.createElement("p");
    resturantName.textContent = "Jal Pie Shop";
    resturantName.classList.add("name")
    nav.insertBefore(resturantName, nav.firstChild);

    const middle = document.createElement('div');
    middle.classList.add("middle");

    const pie1 = new Image();
    pie1.src = pieOne;
    middle.appendChild(pie1);


    const rightSide = document.createElement('div');
    rightSide.classList.add("right-side");

    const resturantDetail = document.createElement("p");
    resturantDetail.classList.add("detail");
    resturantDetail.textContent = `
        Welcome to JalPie. At this resturant we sell various flavors
        of pie that will sure make you come again and again. We bake
        our pies fresh everyday, so you'll always get high quality pies
        no matter when you show up.
    `;
    rightSide.appendChild(resturantDetail);

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

    rightSide.appendChild(hours);
    middle.appendChild(rightSide);
    content.appendChild(middle)

    const footer = document.createElement("footer");
    const footerText = document.createElement("p");

    footerText.textContent = "@JalClan 2024"
    footer.appendChild(footerText);
    content.appendChild(footer);
};

export default pageFirstload;