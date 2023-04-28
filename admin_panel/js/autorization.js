const formAuthorization = document.querySelector(".autorization__form");
const authorization = document.querySelector(".autorization");
const sectionExit = document.querySelector(".section.exit");
const exitForm = document.querySelector(".exit__form");

if (localStorage.getItem("authorized_A&K") === "true") {
    console.log("fff");
    authorization.classList.add("hidden");
    sectionExit.classList.remove("hidden");
    localStorage.setItem("authorized_A&K", true);
}

formAuthorization.addEventListener("submit", () => {
    event.preventDefault();
    if (formAuthorization[0].value === "qwerty" &&
        formAuthorization[1].value === "1234") {
        authorization.classList.add("hidden");
        sectionExit.classList.remove("hidden");
        localStorage.setItem("authorized_A&K", true);
    } else {
        alert("Неправильный логин или пароль.");
    }
});

exitForm.addEventListener("submit", () => {
    event.preventDefault();
    authorization.classList.remove("hidden");
    sectionExit.classList.add("hidden");
    localStorage.removeItem("authorized_A&K");
});