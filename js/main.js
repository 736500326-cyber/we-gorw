document.addEventListener(
  "DOMContentLoaded",
  function () {
    "use strict";


    /*
      获取所有已经注册的功能模块。
    */
    const modules =
      window.WeGrowModules || {};


    /*
      模块启动顺序。
      后期新增功能可以继续写在这里。
    */
    const moduleOrder = [
      "intro",
      "brandVideo"
    ];


    /*
      按顺序启动模块。
    */
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


    function updateHeaderState() {

      if (!siteHeader) {
        return;
      }


      siteHeader.classList.toggle(
        "is-scrolled",
        window.scrollY > 20
      );
    }


    window.addEventListener(
      "scroll",
      updateHeaderState,
      {
        passive: true
      }
    );


    updateHeaderState();


    console.log(
      "未构官网全部模块已成功启动"
    );

  }
);
