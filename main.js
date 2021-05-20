function homeClicked() {
    location.href = "index.html";
}

function aboutClicked() {
    location.href = "about.html";
}

function portfolioClicked() {
    location.href = "portfolio.html";
}

function arrowClicked() {
    let viewHeight = window.innerHeight;
    console.log("Arrow");
    window.scrollBy({
        top: viewHeight, // could be negative value
        left: 0,
        behavior: "smooth",
    });
}

//Deal with carousel
function rightArrowClicked() {
    let pages = document.querySelectorAll(".Page");

    let activePage;
    for (let i = 0; i < pages.length; i++) {
        if (getComputedStyle(pages[i]).display == "flex") {
            activePage = i;
            console.log(activePage);
        }
    }

    if (activePage == pages.length - 1) {
        pages[activePage].style.display = "none";
        pages[0].style.display = "flex";
    } else {
        pages[activePage].style.display = "none";
        pages[activePage + 1].style.display = "flex";
    }
}

function leftArrowClicked() {
    let pages = document.querySelectorAll(".Page");

    let activePage;
    for (let i = 0; i < pages.length; i++) {
        if (getComputedStyle(pages[i]).display == "flex") {
            activePage = i;
            console.log(activePage);
        }
    }

    if (activePage == 0) {
        pages[activePage].style.display = "none";
        pages[pages.length - 1].style.display = "flex";
    } else {
        pages[activePage].style.display = "none";
        pages[activePage - 1].style.display = "flex";
    }
}
