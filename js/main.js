document.addEventListener(
  "DOMContentLoaded",
  function () {
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


    /*
      检查三个元素是否存在。
    */
    if (
      !intro ||
      !enterButton ||
      !site
    ) {
      alert(
        "点击功能没有匹配成功，请检查 intro、enterButton、site 三个ID。"
      );

      return;
    }


    /*
      点击进入官网。
    */
    function enterSite() {

      console.log(
        "进入官网按钮已点击"
      );


      /*
        显示白色网站主体。
      */
      site.classList.add(
        "is-active"
      );


      site.setAttribute(
        "aria-hidden",
        "false"
      );


      /*
        蓝色开屏离场。
      */
      intro.classList.add(
        "is-leaving"
      );


      /*
        允许网页滚动。
      */
      body.classList.remove(
        "page-locked"
      );


      /*
        动画结束后隐藏蓝色开屏。
      */
      window.setTimeout(
        function () {
          intro.style.display =
            "none";
        },
        1000
      );
    }


    enterButton.addEventListener(
      "click",
      enterSite
    );


    /*
      测试JavaScript是否成功加载。
    */
    console.log(
      "未构官网 main.js 已成功加载"
    );
  }
);
