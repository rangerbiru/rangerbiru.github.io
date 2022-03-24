function popupWA() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}

//script toggle nav
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.nav-link');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

//script dropdown
function BtnDrop() {
    document.getElementById("drop-item").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.btn-drop')) {
        var dropdowns = document.getElementsByClassName("drop-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}