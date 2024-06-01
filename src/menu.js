const loadMenuPage = () => {
    const middle = document.createElement('div');
    middle.classList.add("middle");

    const menu = document.createElement('ul');
    menu.id = "menu"

    const pies = {apple: "$5", cherry:"$5", pumpkin:"$5", peach:"$5"}

    for (let pie in pies) {
        const entry = document.createElement("li");
        entry.textContent = pie + " - " + pies[pie];
        menu.appendChild(entry);
    };

    middle.appendChild(menu);
    return middle;
};

export default loadMenuPage;