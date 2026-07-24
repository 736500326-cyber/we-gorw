window.WeGrowModules =
  window.WeGrowModules || {};


window.WeGrowModules.intro =
  function initIntro() {

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


    function enterSite() {

      if (hasEntered) {
        return;
      }


      hasEntered =
        true;


      /*
        显示官网白底和Logo动画。
      */
      site.classList.add(
        "is-active"
      );


      site.setAttribute(
        "aria-hidden",
        "false"
      );


      /*
        蓝色开屏淡出。
      */
      intro.classList.add(
        "is-leaving"
      );


      /*
        开屏完成后彻底隐藏。
      */
      window.setTimeout(
        function () {

          intro.hidden =
            true;

          body.classList.remove(
            "page-locked"
          );

        },
        900
      );


      /*
        Logo组合动画播放约2.6秒，
        然后切换为海报。
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

        },
        2600
      );
    }


    enterButton.addEventListener(
      "click",
      enterSite
    );


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

  };
