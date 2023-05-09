function togglePrint() {
    if (document.getElementById("mainNav").classList.contains("printmode")) {
      togglePrintOff();
    } else {
      togglePrintOn();
      window.print();
    }
} 
function togglePrintOn() {
    document.getElementById("main-withsidebar").classList.add("mx-auto");
    document.getElementById("main-withsidebar").classList.remove("border");
    document.getElementById("main-withsidebar").style.backgroundColor = "white";
    document.getElementById("main-withsidebar").classList.remove("left-border-side");
    document.getElementById("page-container").style.marginTop = "0px";
    document.getElementById("page-container").style.marginTop = "0px";
    document.getElementById("mainNav").classList.add("printmode");
    document.body.style.marginTop = "0px";
    document.getElementById("side-menu").classList.add("printmode");
    document.getElementById("side-menu").classList.add("printmode");
    document.getElementById("footer").classList.add("printmode");
    document.getElementById("footer").classList.remove("bg-dark");
}
  
function togglePrintOff() {
    document.getElementById("main-withsidebar").classList.remove("mx-auto");
    document.getElementById("main-withsidebar").classList.add("border");
    document.getElementById("main-withsidebar").style.backgroundColor = "#fffff8";
    document.getElementById("main-withsidebar").classList.add("left-border-side");
    document.getElementById("page-container").style.marginTop = "4em";
    document.getElementById("mainNav").classList.remove("printmode");
    document.body.style.marginTop = "74px";
    document.getElementById("side-menu").classList.remove("printmode");
    document.getElementById("side-menu").classList.remove("printmode");
    document.getElementById("footer").classList.remove("printmode");
    document.getElementById("footer").classList.add("bg-dark");
}