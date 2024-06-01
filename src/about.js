const loadAboutPage = () => {
    const middle = document.createElement('div');
    middle.classList.add("middle");

    const about = document.createElement("div");
    about.id = "about";

    const para = document.createElement("p");
    para.textContent = `
        Hello, this is the Jal clans offical pie shop. We are situtated in a small city of Jalcity.
        We sell a wide variety of pies that will sure;y statisfy your needs
    `;
    about.appendChild(para);

    const para2 = document.createElement("p");
    para2.textContent = `
        Email: Jalclan@jalmail.com
    `;
    about.appendChild(para2);

    middle.appendChild(about);

    return middle;
};

export default loadAboutPage;