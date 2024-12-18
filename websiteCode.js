const goalDescriptions = {
    1: "Becoming a full-stack developer means mastering front-end and back-end technologies.",
    2: "Accumulating experience allows you to solve more complex problems effectively.",
    3: "Constructing a high-end platform involves creating robust, scalable, and efficient systems.",
    4: "Founding your own company gives you the opportunity to innovate and lead in your field."
};

const dropdown = document.getElementById("goalsDropdown");
const dynamicText = document.getElementById("dynamicText");

dropdown.addEventListener("change", function () {
    const selectedValue = dropdown.value;
    dynamicText.textContent = goalDescriptions[selectedValue];
});