const h1 = document.querySelector("h1");

h1.addEventListener("input", () =>
  h1.setAttribute("data-heading", h1.innerText)
);
