
const refs={
    Filter: document.querySelector(".filter"),
    ElWeb: document.querySelectorAll(".web"),
    ElApp: document.querySelectorAll(".app"),
    ElDes: document.querySelectorAll(".des"),
    ElMar: document.querySelectorAll(".mar")
}

refs.Filter.addEventListener("click", filterElement);

function filterElement(event){
    let filter = event.target.dataset.filter;
    if (filter === "all"){
        refs.ElWeb.forEach(element => element.classList.remove("is-none"));
        refs.ElApp.forEach(element => element.classList.remove("is-none"));
        refs.ElDes.forEach(element => element.classList.remove("is-none"));
        refs.ElMar.forEach(element => element.classList.remove("is-none"));
    } if (filter === "web"){
        refs.ElWeb.forEach(element => element.classList.remove("is-none"));
        refs.ElApp.forEach(element => element.classList.add("is-none"));
        refs.ElDes.forEach(element => element.classList.add("is-none"));
        refs.ElMar.forEach(element => element.classList.add("is-none"));
    } if (filter === "app"){
        refs.ElApp.forEach(element => element.classList.remove("is-none"));
        refs.ElWeb.forEach(element => element.classList.add("is-none"));
        refs.ElDes.forEach(element => element.classList.add("is-none"));
        refs.ElMar.forEach(element => element.classList.add("is-none"));
    } if (filter === "des"){
        refs.ElDes.forEach(element => element.classList.remove("is-none"));
        refs.ElWeb.forEach(element => element.classList.add("is-none"));
        refs.ElApp.forEach(element => element.classList.add("is-none"));
        refs.ElMar.forEach(element => element.classList.add("is-none"));
    } if (filter === "mar"){
        refs.ElMar.forEach(element => element.classList.remove("is-none"));
        refs.ElWeb.forEach(element => element.classList.add("is-none"));
        refs.ElApp.forEach(element => element.classList.add("is-none"));
        refs.ElDes.forEach(element => element.classList.add("is-none"));
    }
}

