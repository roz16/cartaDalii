onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });

wrapper.addEventListener("dragstart", (e) => {
    // Agrega la clase "dragging" para el efecto visual
    wrapper.classList.add("dragging");

    // Guarda la posición inicial del cursor
    e.dataTransfer.setData("text/plain", null); // Necesario para habilitar el arrastre en algunos navegadores
});

wrapper.addEventListener("dragend", () => {
    // Elimina la clase "dragging" cuando se suelta
    wrapper.classList.remove("dragging");
});
