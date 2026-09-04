document.addEventListener("DOMContentLoaded", () => {
  const desktop = document.querySelector(".desktop");
  const windowBox = document.querySelector(".window");
  const task = document.querySelector(".task");
  document.querySelectorAll("[data-action]").forEach((button) =>
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "close") location.href = "index.html";
      if (action === "minimize") desktop.classList.add("minimized");
      if (action === "maximize") desktop.classList.toggle("maximized");
    }),
  );
  task?.addEventListener("click", () => desktop.classList.toggle("minimized"));
  document
    .querySelectorAll("form")
    .forEach((form) =>
      form.addEventListener("submit", (event) => event.preventDefault()),
    );
  let clock = document.querySelector(".clock");
  if (!clock) {
    clock = document.createElement("time");
    clock.className = "clock";
    document.querySelector(".taskbar")?.append(clock);
  }
  const updateClock = () => {
    if (clock)
      clock.textContent = new Date()
        .toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(",", "");
  };
  updateClock();
  setInterval(updateClock, 10000);
});
