document.addEventListener(
  "DOMContentLoaded",
  function () {
    "use strict";


    const modules =
      window.WeGrowModules || {};


    /*
      按顺序启动功能模块。
    */
    const moduleOrder = [
      "intro",
      "brandVideo"
    ];


    moduleOrder.forEach(
      function (moduleName) {

        const initFunction =
          modules[moduleName];


        if (
          typeof initFunction ===
          "function"
        ) {

          initFunction();

        } else {

          console.warn(
            "未找到模块：",
            moduleName
          );
        }

      }
    );


    /*
      顶部导航滚动状态。
    */
    const siteHeader =
      document.querySelector(
        ".site-header"
      );


    window.addEventListener(
      "scroll",
      function () {

        if (!siteHeader) {
          return;
        }


        siteHeader.classList.toggle(
          "is-scrolled",
          window.scrollY > 20
        );

      },
      {
        passive: true
      }
    );


    console.log(
      "未构官网模块已成功启动"
    );

  }
);
