const paginar = (id) => {
  const lasanha = document.querySelector("#pag1");
  const palha = document.querySelector("#pag2");
  const macarrao = document.querySelector("#pag3");

  if (id === 1) {
    lasanha.classList.add("active");
    palha.classList.remove("active");
    macarrao.classList.remove("active");
  } else if (id === 2) {
    lasanha.classList.remove("active");
    palha.classList.add("active");
    macarrao.classList.remove("active");
  } else {
    lasanha.classList.remove("active");
    palha.classList.remove("active");
    macarrao.classList.add("active");
  }
};
