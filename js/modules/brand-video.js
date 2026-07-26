window.WeGrowModules =
  window.WeGrowModules || {};


window.WeGrowModules.brandVideo =
  function initBrandVideo() {
    "use strict";


    const body =
      document.body;


    const playButton =
      document.getElementById(
        "playButton"
      );


    const videoModal =
      document.getElementById(
        "videoModal"
      );


    const closeVideoButton =
      document.getElementById(
        "closeVideoButton"
      );


    const brandVideo =
      document.getElementById(
        "brandVideo"
      );


    /*
      检查视频相关元素。
    */
    if (
      !playButton ||
      !videoModal ||
      !closeVideoButton ||
      !brandVideo
    ) {

      console.error(
        "brand-video.js：缺少视频必要元素"
      );

      return;
    }


    /*
      打开视频。
    */
    function openVideo() {

      videoModal.classList.add(
        "is-open"
      );


      videoModal.setAttribute(
        "aria-hidden",
        "false"
      );


      body.classList.add(
        "video-open"
      );


      /*
        每次点击都从开头播放。
      */
      brandVideo.currentTime =
        0;


      const playPromise =
        brandVideo.play();


      /*
        部分手机浏览器可能要求
        用户再次点击视频区域。
      */
      if (
        playPromise !== undefined
      ) {

        playPromise.catch(
          function (error) {

            console.log(
              "浏览器等待用户手动播放视频：",
              error
            );

          }
        );
      }
    }


    /*
      关闭视频。
    */
    function closeVideo() {

      videoModal.classList.remove(
        "is-open"
      );


      videoModal.setAttribute(
        "aria-hidden",
        "true"
      );


      brandVideo.pause();


      body.classList.remove(
        "video-open"
      );
    }


    /*
      点击播放按钮。
    */
    playButton.addEventListener(
      "click",
      openVideo
    );


    /*
      点击右上角关闭按钮。
    */
    closeVideoButton.addEventListener(
      "click",
      closeVideo
    );


    /*
      点击黑色背景关闭视频。
    */
    videoModal.addEventListener(
      "click",
      function (event) {

        if (
          event.target ===
          videoModal
        ) {

          closeVideo();
        }

      }
    );


    /*
      视频播放完成后自动关闭。
    */
    brandVideo.addEventListener(
      "ended",
      closeVideo
    );


    /*
      按ESC关闭。
    */
    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape" &&
          videoModal.classList.contains(
            "is-open"
          )
        ) {

          closeVideo();
        }

      }
    );


    console.log(
      "brand-video.js 已成功加载"
    );

  };
