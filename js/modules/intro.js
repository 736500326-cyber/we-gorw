window.WeGrowModules =
  window.WeGrowModules || {};


window.WeGrowModules.intro =
  function initIntro() {
    "use strict";


    const body =
      document.body;


    const intro =
      document.getElementById(
        "intro"
      );


    const enterButton =
      document.getElementById(
        "enterButton"
      );


    const site =
      document.getElementById(
        "site"
      );


    const hero =
      document.getElementById(
        "home"
      );


    const heroPoster =
      document.getElementById(
        "heroPoster"
      );


    /*
      检查首页必要元素。
    */
    if (
      !intro ||
      !enterButton ||
      !site ||
      !hero ||
      !heroPoster
    ) {

      console.error(
        "intro.js：缺少首页必要元素"
      );

      return;
    }


    let hasEntered =
      false;


    /*
      点击后进入官网。
    */
    function enterSite() {

      /*
        防止按钮被连续点击。
      */
      if (hasEntered) {
        return;
      }


      hasEntered =
        true;


      /*
        显示白色官网主体，
        同时触发Logo动画。
      */
      site.classList.add(
        "is-active"
      );


      site.setAttribute(
        "aria-hidden",
        "false"
      );


      /*
        品牌蓝开屏离场。
      */
      intro.classList.add(
        "is-leaving"
      );


      /*
        开屏动画结束后彻底隐藏。
      */
      window.setTimeout(
        function () {

          intro.hidden =
            true;

        },
        950
      );


      /*
        Logo组合动画播放完成后，
        显示全屏品牌海报。
      */
      window.setTimeout(
        function () {

          hero.classList.add(
            "show-poster"
          );


          heroPoster.setAttribute(
            "aria-hidden",
            "false"
          );


          body.classList.add(
            "poster-ready"
          );


          /*
            海报出现后允许页面滚动。
          */
          body.classList.remove(
            "page-locked"
          );

        },
        2600
      );
    }


    /*
      点击按钮进入。
    */
    enterButton.addEventListener(
      "click",
      enterSite
    );


    /*
      Enter键或空格键也可以进入。
    */
    document.addEventListener(
      "keydown",
      function (event) {

        if (hasEntered) {
          return;
        }


        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          enterSite();
        }

      }
    );


    console.log(
      "intro.js 已成功加载"
    );

  };
