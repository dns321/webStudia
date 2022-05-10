const list = document.querySelector(".filter"),
  items = document.querySelectorAll(".works-item"),
  listItems = document.querySelectorAll(".filter-item");

function filter() {
  list.addEventListener("click", (event) => {
    const targetFilter = event.target.dataset.filter;
    const target = event.target;

    // if (target.classList.contains("filter-item")) {
    // listItems.forEach((listItem) => listItem.classList.remove("active"));
    // target.classList.add("active");
    // }

    switch (targetFilter) {
      case "all":
        getItems("works-item");
        break;
      case "web":
        getItems(targetFilter);
        break;
      case "app":
        getItems(targetFilter);
        break;
      case "des":
        getItems(targetFilter);
        break;
      case "mar":
        getItems(targetFilter);
        break;
    }
  });
}

filter();

function getItems(className) {
  items.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
