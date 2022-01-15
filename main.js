function skillsLeftClicked() {
    document.querySelector(".primary").classList.add("p2l");
    document.querySelector(".back").classList.add("b2r");
    document.querySelector(".left").classList.add("l2b");
    document.querySelector(".right").classList.add("r2p");

    document
        .querySelector(".primary")
        .addEventListener("animationend", function () {
            console.log("function called");

            document.querySelector(".p2l").classList.add("left");
            document.querySelector(".p2l").classList.remove("primary", "p2l");

            document.querySelector(".b2r").classList.add("right");
            document.querySelector(".b2r").classList.remove("back", "b2r");

            document.querySelector(".l2b").classList.add("back");
            document.querySelector(".l2b").classList.remove("left", "l2b");

            document.querySelector(".r2p").classList.add("primary");
            document.querySelector(".r2p").classList.remove("right", "r2p");
        });
}

function skillsRightClicked() {
    document.querySelector(".primary").classList.add("p2r");
    document.querySelector(".back").classList.add("b2l");
    document.querySelector(".left").classList.add("l2p");
    document.querySelector(".right").classList.add("r2b");

    document
        .querySelector(".primary")
        .addEventListener("animationend", function () {
            console.log("function called");

            document.querySelector(".p2r").classList.add("right");
            document.querySelector(".p2r").classList.remove("primary", "p2r");

            document.querySelector(".b2l").classList.add("left");
            document.querySelector(".b2l").classList.remove("back", "b2l");

            document.querySelector(".l2p").classList.add("primary");
            document.querySelector(".l2p").classList.remove("left", "l2p");

            document.querySelector(".r2b").classList.add("back");
            document.querySelector(".r2b").classList.remove("right", "r2b");
        });
}
