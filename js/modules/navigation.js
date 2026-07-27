window.WeGrowModules =
  window.WeGrowModules || {};


window.WeGrowModules.navigation =
  function initNavigation() {
    "use strict";


    const body =
      document.body;


    const menuButton =
      document.getElementById(
        "mobileMenuButton"
      );


    const navigation =
      document.getElementById(
        "siteNavigation"
      );


    if (
      !menuButton ||
      !navigation
    ) {
      console.warn(
        "navigation.js：没有找到手机导航元素"
      );

      return;
    }


    const navigationLinks =
      navigation.querySelectorAll(
        "a"
      );


    function openMenu() {
      navigation.classList.add(
        "is-open"
      );


      menuButton.classList.add(
        "is-active"
      );


      menuButton.setAttribute(
        "aria-expanded",
        "true"
      );


      body.classList.add(
        "menu-open"
      );
    }


    function closeMenu() {
      navigation.classList.remove(
        "is-open"
      );


      menuButton.classList.remove(
        "is-active"
      );


      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );


      body.classList.remove(
        "menu-open"
      );
    }


    function toggleMenu() {
      if (
        navigation.classList.contains(
          "is-open"
        )
      ) {
        closeMenu();
      } else {
        openMenu();
      }
    }


    menuButton.addEventListener(
      "click",
      toggleMenu
    );


    navigationLinks.forEach(
      function (link) {

        link.addEventListener(
          "click",
          closeMenu
        );

      }
    );


    window.addEventListener(
      "resize",
      function () {

        if (
          window.innerWidth > 760
        ) {
          closeMenu();
        }

      }
    );


    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape" &&
          navigation.classList.contains(
            "is-open"
          )
        ) {
          closeMenu();
        }

      }
    );


    console.log(
      "navigation.js 已成功加载"
    );
  };
