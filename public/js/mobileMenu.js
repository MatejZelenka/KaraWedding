export const toggleMenuMobile = () => {
  const navigation = document.querySelector("#navbar-mobile");
  if (navigation.classList.contains("invisible")) {
    navigation.classList.remove("invisible");
    navigation.classList.add("visible");
  } else {
    navigation.classList.remove("visible");
    navigation.classList.add("invisible");
  }

  navigation.classList.toggle("opacity-100");
};
