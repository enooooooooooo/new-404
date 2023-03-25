document.getElementById('drawerOpen').addEventListener('click', () => {
  document.getElementById("mySidepanel").style.width = "300px";
  document.getElementById("mySidepanel").style.opacity = "1";
});

document.getElementById('drawerClose').addEventListener('click', () => {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("mySidepanel").style.opacity = "0";
});