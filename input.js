document.querySelectorAll(".text-input").forEach((element) => {
    element.addEventListener("blur", (event) => {
      if (event.target.value != "") {
        event.target.nextElementSibling.classList.add("filled");
      } else {
        event.target.nextElementSibling.classList.remove("filled");
      }
    });
  });

  let btn = document.querySelector(".sub");

  btn.addEventListener("click", active);

  function active() {
    btn.classList.toggle("is_active");
  }