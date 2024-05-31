import pieOne from "./images/pie1.jpg";

const pageFirstload = () => {

    const content = document.querySelector("#content");

    const resturantName = document.createElement("div");
    resturantName.textContent = "Jal Pie Shop";
    resturantName.classList.add("name")
    content.appendChild(resturantName);

    const pie1 = new Image(300, 300);
    pie1.src = pieOne;
    content.appendChild(pie1);

    const resturantDetail = document.createElement("p");
    resturantDetail.textContent = `
        Welcome to JalPie. At this resturant we sell various flavors
        of pie that will sure make you come again and again. We bake
        our pies fresh everyday, so you'll always get high quality pies
        no matter when you show up.
    `;
    content.appendChild(resturantDetail);
};

export default pageFirstload;