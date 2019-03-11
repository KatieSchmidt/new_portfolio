const navigation = document.querySelector(".navigation");
const openButton = document.querySelector(".nav-button-open");

const closeButton = document.querySelector(".nav-button-close");

const navItems = document.querySelectorAll(".navigation__list-item");

openButton.onclick = () => {
  navigation.classList.remove("navigation-hidden");
};

closeButton.onclick = () => {
  navigation.classList.add("navigation-hidden");
};

for (var i = 0; i < navItems.length; i++) {
  navItems[i].onclick = function(e) {
    navigation.classList.add("navigation-hidden");
  };
}
