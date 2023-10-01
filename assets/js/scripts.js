function toggleMenu() {
    var nav = document.getElementsByClassName("navbar-collapse");
    if (nav[0].classList.contains('collapse')) {
        nav[0].classList.remove("collapse");
    } else {
        nav[0].classList.add("collapse");
    }
}