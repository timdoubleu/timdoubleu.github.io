(() => {
  // src/js/index.js
  document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
      if (!event.target.matches(".mob-toggle, .mob-toggle svg, .mob-toggle g, .mob-toggle path"))
        return;
      event.preventDefault();
      document.querySelector(".nav-mobile-flyout").classList.toggle("active");
    }, false);
    document.addEventListener("click", function(event) {
      if (!event.target.matches(".close-contain, .close-contain img"))
        return;
      event.preventDefault();
      document.querySelector(".nav-mobile-flyout").classList.toggle("active");
    }, false);
    const counters = document.querySelectorAll(".counter-span");
    for (let n of counters) {
      const updateCount = () => {
        const target = +n.getAttribute("data-end");
        const count = +n.innerText;
        const speed = n.getAttribute("data-speed");
        const inc = target / speed;
        if (count < target) {
          n.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, speed);
        } else {
          n.innerText = target;
        }
      };
      updateCount();
    }
    const propTitles = document.querySelectorAll(".prop-title h2");
    propTitles.forEach((title) => {
      title.addEventListener("mouseover", (e) => {
        const imgTarget = e.target.parentNode.querySelector("img");
        imgTarget.style.filter = "brightness(1)";
      });
      title.addEventListener("mouseleave", (e) => {
        const imgTarget = e.target.parentNode.querySelector("img");
        imgTarget.addEventListener("mouseleave", (e2) => {
          e2.target.style.filter = "brightness(0.7)";
        });
      });
    });
    const citySelect = document.querySelector("#city-select");
    if (citySelect) {
      citySelect.addEventListener("input", function(event) {
        const targetCity = event.target.value;
        const propContainers = document.querySelectorAll(".prop-contain");
        propContainers.forEach((prop) => {
          if (targetCity == "All" || targetCity == "") {
            prop.style.display = "flex";
          } else if (prop.dataset.city == targetCity) {
            prop.style.display = "flex";
          } else {
            prop.style.display = "none";
          }
        });
      }, false);
    }
    $(".slider").slick({
      dots: true,
      arrows: true,
      autoplay: true,
      infinite: false,
      fade: true,
      autoplaySpeed: 3e3
    });
    const switchNav = () => {
      const nav = document.querySelector(".nav");
      const navHeight = nav.clientHeight;
      const navLogo = document.querySelector(".nav .nav-logo");
      if (window.scrollY >= navHeight) {
        if (!nav.classList.contains("sticky")) {
          nav.classList.add("sticky");
          navLogo.src = "/assets/navLogoRed.png";
        }
      } else {
        nav.classList.remove("sticky");
        navLogo.src = "/assets/navLogo.png";
      }
    };
    document.addEventListener("scroll", (e) => {
      switchNav();
    });
    switchNav();
    const copyYear = document.querySelector(".footer .copy-year");
    if (copyYear)
      copyYear.innerHTML = (/* @__PURE__ */ new Date()).getFullYear();
  });
})();
//# sourceMappingURL=bundle.js.map
