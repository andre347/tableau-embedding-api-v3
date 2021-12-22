import "./style.css";

let viz = document.getElementById("tableauViz");

viz.addEventListener("firstinteractive", async (event) => {
  console.log("Viz is ready!", event.type);
});
