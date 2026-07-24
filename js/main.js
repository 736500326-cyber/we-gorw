/* =========================================
   1. 全局基础设置
   ========================================= */

:root {
  --brand-blue: #0319f1;
  --black: #050505;
  --white: #ffffff;
  --gray: #6d6d75;
  --line: rgba(5, 5, 5, 0.12);
}


* {
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
}


html,
body {
  width: 100%;
  min-height: 100%;
  margin: 0;
}


body {
  color: var(--black);
  background: var(--white);

  font-family:
    Arial,
    "Helvetica Neue",
    "Microsoft YaHei",
    "PingFang SC",
    sans-serif;
}


body.page-locked {
  overflow: hidden;
}


button,
a {
  font: inherit;
}


a {
  color: inherit;
  text-decoration: none;
}


/* =========================================
   2. 纯蓝开屏
   ========================================= */

.intro {
  position: fixed;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  color: var(--white);
  background: var(--brand-blue);

  /*
    点击后，蓝色全屏会向中心收拢。
  */
  transition:
    top 900ms cubic-bezier(0.76, 0, 0.24, 1),
    right 900ms cubic-bezier(0.76, 0, 0.24, 1),
    bottom 900ms cubic-bezier(0.76, 0, 0.24, 1),
    left 900ms cubic-bezier(0.76, 0, 0.24, 1),
    opacity 240ms ease 720ms,
    border-radius 900ms ease;
}


.intro.is-leaving {
  top: 22vh;
  right: 27vw;
  bottom: 22vh;
  left: 27vw;

  opacity: 0;
  border-radius: 2px;

  pointer-events: none;
}


.intro__content {
  display: flex;
  flex-direction: column;
  align-items: center;

  transition:
    opacity 220ms ease,
    transform 420ms ease;
}


.intro.is-leaving .intro__content {
  opacity: 0;
  transform: scale(0.92);
}


.intro__name {
  margin-bottom: 46px;

  color: var(--white);

  font-size: clamp(48px, 9vw, 132px);
  font-weight: 700;
  line-height: 0.88;
  letter-spacing: -0.07em;
}


.intro__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 26px;

  min-width: 190px;
  height: 54px;
  padding: 0 26px;

  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 999px;

  color: var(--white);
  background: transparent;

  font-size: 14px;
  letter-spacing: 0.18em;

  cursor: pointer;

  transition:
    color 180ms ease,
    background 180ms ease,
    transform 180ms ease;
}


.intro__button:hover {
  color: var(--brand-blue);
  background: var(--white);

  transform: translateY(-2px);
}


.intro__arrow {
  font-size: 20px;

  transition: transform 180ms ease;
}


.intro__button:hover .intro__arrow {
  transform: translateX(5px);
}


.intro__tip {
  margin: 14px 0 0;

  color: rgba(255, 255, 255, 0.62);

  font-size: 10px;
  letter-spacing: 0.28em;
}


/* =========================================
   3. 官网主体
   ========================================= */

.site {
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  background: var(--white);

  opacity: 0;
  visibility: hidden;

  transition:
    opacity 240ms ease,
    visibility 240ms ease;
}


.site.is-active {
  opacity: 1;
  visibility: visible;
}


/* =========================================
   4. 顶部导航
   ========================================= */

.site-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 82px;
  padding: 0 clamp(24px, 5vw, 82px);

  border-bottom: 1px solid transparent;

  background: rgba(255, 255, 255, 0.78);

  opacity: 0;
  transform: translateY(-24px);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  transition:
    opacity 600ms ease 1800ms,
    transform 600ms ease 1800ms,
    border-color 240ms ease;
}


.site.is-active .site-header {
  opacity: 1;
  transform: translateY(0);
}


.site-header.is-scrolled {
  border-color: var(--line);
}


.site-header__logo {
  display: block;

  width: 140px;
  height: 54px;

  overflow: hidden;
}


.site-header__logo img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;
}


.site-header__nav {
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 48px);

  font-size: 13px;
}


.site-header__nav a {
  position: relative;

  padding: 10px 0;
}


.site-header__nav a::after {
  content: "";

  position: absolute;
  right: 0;
  bottom: 3px;
  left: 0;

  height: 2px;

  background: var(--brand-blue);

  transform: scaleX(0);
  transform-origin: right;

  transition: transform 220ms ease;
}


.site-header__nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}


/* =========================================
   5. 首屏
   ========================================= */

.hero {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  padding:
    100px
    clamp(20px, 6vw, 90px)
    80px;

  background: var(--white);
}


/*
  图二和图三都是1900×1080画布，
  所以可以完全重合。
*/
.logo-motion {
  position: relative;

  width: min(1020px, 88vw);
  aspect-ratio: 1900 / 1080;

  margin-top: min(4vh, 42px);

  pointer-events: none;
}


.logo-motion img {
  position: absolute;
  inset: 0;

  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;

  user-select: none;
  -webkit-user-drag: none;
}


/* 图三初始状态 */
.logo-motion__shape {
  z-index: 1;

  opacity: 0;

  transform:
    translateY(60px)
    scale(1.32)
    rotate(-2deg);

  transform-origin: center;
}


/* 图二初始状态 */
.logo-motion__text {
  z-index: 2;

  opacity: 0;

  clip-path:
    inset(0 100% 0 0);

  transform:
    translateX(-28px);
}


/* 点击后图三动效 */
.site.is-active .logo-motion__shape {
  animation:
    shapeEnter
    920ms
    cubic-bezier(0.16, 1, 0.3, 1)
    260ms
    forwards;
}


/* 点击后图二文字揭开 */
.site.is-active .logo-motion__text {
  animation:
    textReveal
    900ms
    cubic-bezier(0.16, 1, 0.3, 1)
    780ms
    forwards;
}


@keyframes shapeEnter {
  0% {
    opacity: 0;

    transform:
      translateY(60px)
      scale(1.32)
      rotate(-2deg);
  }

  65% {
    opacity: 1;

    transform:
      translateY(-10px)
      scale(0.97)
      rotate(0deg);
  }

  100% {
    opacity: 1;

    transform:
      translateY(0)
      scale(1)
      rotate(0deg);
  }
}


@keyframes textReveal {
  0% {
    opacity: 0;

    clip-path:
      inset(0 100% 0 0);

    transform:
      translateX(-28px);
  }

  100% {
    opacity: 1;

    clip-path:
      inset(0 0 0 0);

    transform:
      translateX(0);
  }
}


/* =========================================
   6. 首屏文案
   ========================================= */

.hero-copy {
  position: relative;
  z-index: 3;

  width: min(920px, 90vw);
  margin-top: -40px;

  text-align: center;

  opacity: 0;
  transform: translateY(28px);
}


.site.is-active .hero-copy {
  animation:
    heroCopyEnter
    720ms
    ease
    1550ms
    forwards;
}


@keyframes heroCopyEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.hero-copy__eyebrow {
  margin: 0 0 22px;

  color: var(--brand-blue);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.28em;
}


.hero-copy h1 {
  margin: 0;

  font-size:
    clamp(34px, 5.2vw, 76px);

  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.055em;
}


.hero-copy__description {
  margin: 28px 0 0;

  color: var(--gray);

  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 1.9;
}


.hero-copy__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  margin-top: 36px;
}


.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 148px;
  height: 48px;
  padding: 0 22px;

  border-radius: 999px;

  font-size: 13px;

  transition:
    color 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}


.primary-button {
  color: var(--white);
  background: var(--brand-blue);
  border: 1px solid var(--brand-blue);
}


.secondary-button {
  color: var(--black);
  background: var(--white);
  border: 1px solid var(--line);
}


.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-2px);
}


.secondary-button:hover {
  color: var(--white);
  background: var(--black);
  border-color: var(--black);
}


/* =========================================
   7. 暂时占位板块
   ========================================= */

.placeholder-section {
  min-height: 72vh;
  padding:
    120px
    clamp(24px, 8vw, 130px);

  border-top: 1px solid var(--line);

  background: var(--white);
}


.placeholder-section span {
  color: var(--brand-blue);

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24em;
}


.placeholder-section h2 {
  margin: 22px 0 0;

  font-size: clamp(42px, 7vw, 100px);
  font-weight: 500;
  letter-spacing: -0.06em;
}


.placeholder-section p {
  color: var(--gray);

  font-size: 15px;
}


/* =========================================
   8. 手机端
   ========================================= */

@media (max-width: 760px) {

  .intro.is-leaving {
    top: 31vh;
    right: 15vw;
    bottom: 31vh;
    left: 15vw;
  }


  .intro__name {
    margin-bottom: 34px;

    font-size: 58px;
  }


  .site-header {
    height: 64px;
    padding: 0 16px;
  }


  .site-header__logo {
    width: 104px;
    height: 42px;
  }


  .site-header__nav {
    gap: 14px;

    font-size: 11px;
  }


  .site-header__nav a:nth-child(2),
  .site-header__nav a:nth-child(3) {
    display: none;
  }


  .hero {
    justify-content: center;

    min-height: 100svh;
    padding:
      78px
      14px
      48px;
  }


  .logo-motion {
    width: 106vw;
    max-width: none;

    margin-top: -30px;
  }


  .hero-copy {
    width: 92vw;
    margin-top: -22px;
  }


  .hero-copy__eyebrow {
    font-size: 9px;
    letter-spacing: 0.19em;
  }


  .hero-copy h1 {
    font-size: clamp(30px, 9vw, 44px);
    line-height: 1.16;
  }


  .hero-copy__description {
    margin-top: 20px;

    font-size: 13px;
    line-height: 1.75;
  }


  .hero-copy__actions {
    flex-direction: column;

    width: 100%;
    margin-top: 26px;
  }


  .primary-button,
  .secondary-button {
    width: min(320px, 88vw);
  }

}


/* =========================================
   9. 减少动画模式
   ========================================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }

}
