/*
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  
  /*
   * Typing Effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
  
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
  
  function newStyle() {
    //const classname = "CSXXXX";
    const newNavName = "Shinwoo Kim";
    document.getElementById("nav-brand").innerHTML = newNavName;
    document.getElementById("nav-brand").classList.remove('titillium-bold');
    document.getElementById("nav-brand").classList.add('h1');
    document.getElementById("nav-brand").classList.add('small-caps');
    document.getElementById("main-withsidebar").style.backgroundColor = "#fffff8";
    document.getElementById("main-withsidebar").classList.add("mb-2");
  }

  window.addEventListener("load", function() {
    const form = document.getElementById('feedback-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });
  