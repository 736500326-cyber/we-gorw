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

      brandVideo.currentTime =
        0;

      const playPromise =
        brandVideo.play();

      if (
        playPromise !== undefined
      ) {
        playPromise.catch(
          function (error) {
            console.log(
              "浏览器需要用户再次点击播放：",
              error
            );
          }
        );
      }
    }


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


    playButton.addEventListener(
      "click",
      openVideo
    );


    closeVideoButton.addEventListener(
      "click",
      closeVideo
    );


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


    brandVideo.addEventListener(
      "ended",
      closeVideo
    );


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
  };
