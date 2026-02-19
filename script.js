document.addEventListener("DOMContentLoaded", () => {
  
  const projectBtn = document.getElementById("projectBtn");
  const projectInfo = document.getElementById("projectInfo");

  projectBtn.addEventListener("click", () => {
    if (projectInfo.hasAttribute("hidden")) {
      projectInfo.removeAttribute("hidden");
      projectBtn.textContent = "Hide Project Info";
    } else {
      projectInfo.setAttribute("hidden", "");
      projectBtn.textContent = "Show Project Info";
    }
  });

});
