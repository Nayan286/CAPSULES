document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});

function texthidden() {
  window.addEventListener("load", () => {
    let feedPersonText2 = document.querySelectorAll(
      ".feedback-section .commentor .person-info .person h3:nth-child(2)"
    );

    feedPersonText2.forEach((el) => {
      el.style.display = "none";
    });
  });
}

texthidden();

function hoverEffect() {
  function menuHoverEffect() {
    let menuButton = document.querySelector(".hidden-menu-bottom");
    let scrollText = document.querySelectorAll(
      ".hidden-menu-bottom .menu-scroll-text .menu-text h3"
    );
    let menuIcon = document.querySelector(
      ".hidden-menu-bottom .menu-icon h3:nth-child(1)"
    );
    let crossIcon = document.querySelector(
      ".hidden-menu-bottom .menu-icon h3:nth-child(2)"
    );
    let click = 0;

    menuButton.addEventListener("click", () => {
      if (click === 0) {
        scrollText.forEach(function (text) {
          text.style.transform = "translateY(-100%)";
          menuIcon.style.display = "none";
          crossIcon.style.display = "block";
          click = 1;
        });
      } else {
        scrollText.forEach(function (text) {
          text.style.transform = "translateY(0%)";
          menuIcon.style.display = "block";
          crossIcon.style.display = "none";
          click = 0;
        });
      }
    });
  }

  menuHoverEffect();

  function reserveHoverEffect() {
    let reserveButton = document.querySelector(
      ".hidden-reserve-top .reserve-btn"
    );
    let scrollText = document.querySelectorAll(
      ".hidden-reserve-top .reserve-btn .reserve-scroll-text .reserve-text h3"
    );

    reserveButton.addEventListener("mouseenter", () => {
      scrollText.forEach(function (text) {
        text.style.transform = "translateY(-100%)";
      });
    });

    reserveButton.addEventListener("mouseleave", () => {
      scrollText.forEach(function (text) {
        text.style.transform = "translateY(0%)";
      });
    });
  }

  reserveHoverEffect();

  function footerHoverEffect() {
    let footerAnchor = document.querySelectorAll(
      ".footer .footer-content .footer-anchor .anchor"
    );

    footerAnchor.forEach(function (anchor) {
      let anchorH2 = anchor.querySelectorAll("h2");

      anchor.addEventListener("mouseenter", () => {
        gsap.to(anchorH2, {
          y: "-100%",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });

      anchor.addEventListener("mouseleave", () => {
        gsap.to(anchorH2, {
          y: "0%",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  }

  footerHoverEffect();
}

hoverEffect();

function menuTimeline() {
  let webHiddenPage = document.querySelector(".web-hidden-pages");
  let menuPage = document.querySelector(".web-hidden-pages .menu-page");
  let scrollTextH2 = document.querySelectorAll(
    ".web-hidden-pages .menu-page .menu-text .menu-scroll-text .scroll-text h2"
  );
  let menuIconH3 = document.querySelectorAll(
    ".web-hidden-pages .menu-page .menu-text .menu-bottom .menu-icons h3"
  );
  let menuPara = document.querySelectorAll(
    ".web-hidden-pages .menu-page .menu-text .menu-bottom .menu-para h3"
  );
  let menuImg = document.querySelector(
    ".web-hidden-pages .menu-page .menu-img"
  );
  let menuButton = document.querySelector(".hidden-menu-bottom");
  let click = 0;

  const tl = gsap.timeline({ paused: true });

  const mq = window.matchMedia("(max-width: 475px");

  if (mq.matches) {
    tl.to(
      webHiddenPage,
      {
        opacity: 1,
        duration: 0.3,
        display: "block",
        ease: "power1.Inout",
      },
      "same"
    );

    tl.from(
      menuPage,
      {
        scale: 0,
        transformOrigin: "none",
        duration: 0.4,
        ease: "power1.Inout",
      },
      "same"
    );

    tl.from(
      scrollTextH2,
      {
        y: "-110%",
        duration: 0.6,
        ease: "power1.Inout",
        delay: 0.2,
      },
      "samepage"
    );

    tl.from(
      menuIconH3,
      {
        scale: 0,
        duration: 0.3,
        stagger: 0.1,
        rotate: 5,
        ease: "power1.Inout",
      },
      "samepage"
    );

    tl.from(
      menuPara,
      {
        x: 20,
        duration: 0.3,
        ease: "power1.Inout",
        opacity: 0,
      },
      "samepage"
    );

    tl.from(
      menuImg,
      {
        duration: 0.3,
        opacity: 0,
        ease: "power1.Inout",
      },
      "samepage"
    );
  } else {
    gsap.set(menuImg, {
      width: "32%",
    });

    tl.to(
      webHiddenPage,
      {
        opacity: 1,
        duration: 0.3,
        display: "block",
        ease: "power1.Inout",
      },
      "same"
    );

    tl.from(
      menuPage,
      {
        scale: 0,
        transformOrigin: "bottom center",
        duration: 0.4,
        ease: "power1.Inout",
      },
      "same"
    );

    tl.from(
      scrollTextH2,
      {
        y: "-110%",
        duration: 0.6,
        ease: "power1.Inout",
        delay: 0.2,
      },
      "samepage"
    );

    tl.from(
      menuIconH3,
      {
        scale: 0,
        duration: 0.3,
        stagger: 0.1,
        rotate: 5,
        ease: "power1.Inout",
      },
      "samepage"
    );

    tl.from(
      menuPara,
      {
        x: 20,
        duration: 0.3,
        ease: "power1.Inout",
        opacity: 0,
      },
      "samepage"
    );

    tl.from(
      menuImg,
      {
        width: "0%",
        duration: 0.3,
        opacity: 0,
        ease: "power1.Inout",
      },
      "samepage"
    );
  }

  menuButton.addEventListener("click", () => {
    if (click === 0) {
      tl.play();
      click = 1;
    } else {
      tl.reverse();
      click = 0;
    }
  });
}

menuTimeline();

function reserveTimeline() {
  let reservePage = document.querySelector(".reserve-page");
  let reserveSection = document.querySelector(".reserve-section");
  let reserveBlock = document.querySelector(".reserve-page .reserve-block");
  let blockIcon = document.querySelector(".reserve-block .block-icon");
  let blockElem = document.querySelectorAll(
    ".reserve-page .reserve-block .block-head, .block-para, .block-capsule-detail, .block-capsule-rate"
  );
  let reserveFinal = document.querySelector(
    ".reserve-page .reserve-block .reserve-final"
  );
  let finalElem = document.querySelectorAll(
    ".reserve-final .stay-cost, .next-btn"
  );
  let reserveButton = document.querySelector(
    ".hidden-reserve-top .reserve-btn"
  );
  let costH2 = document.querySelector(
    ".reserve-page .reserve-block .reserve-final .stay-cost .cost h2"
  );

  const tl = gsap.timeline({ paused: true });

  gsap.set(reserveBlock, {
    xPercent: 100,
  });

  gsap.set(reserveFinal, {
    width: "96%",
  });

  tl.to(reservePage, {
    display: "block",
    opacity: 1,
    duration: 0.2,
    ease: "power2.Inout",
  });

  tl.to(
    reserveBlock,
    {
      xPercent: 0,
      duration: 0.3,
      ease: "power2.Inout",
    },
    "same"
  );

  tl.from(
    blockIcon,
    {
      opacity: 0,
      duration: 0.3,
      ease: "power2.Inout",
    },
    "same"
  );

  tl.from(
    reserveFinal,
    {
      width: "10%",
      duration: 0.3,
      ease: "power2.Inout",
    },
    "same"
  );

  tl.from(
    finalElem,
    {
      opacity: 0,
      duration: 0.4,
      ease: "power2.Inout",
    },
    "samepage"
  );

  tl.from(
    blockElem,
    {
      opacity: 0,
      duration: 0.4,
      delay: 0.2,
      ease: "power2.Inout",
    },
    "samepage"
  );

  reserveButton.addEventListener("click", () => {
    tl.play();
    costH2.innerHTML = "10000 USD";
  });
  reserveSection.addEventListener("click", () => {
    tl.play();
    costH2.innerHTML = "10000 USD";
  });
  blockIcon.addEventListener("click", () => {
    tl.reverse();
  });
}

reserveTimeline();

function detailBlockTimeline() {
  let capsulePage = document.querySelector(".capsule-detail-page");
  let detailBlock = document.querySelector(
    ".capsule-detail-page .detail-block"
  );
  let crossIcon = document.querySelector(
    ".capsule-detail-page .detail-block .cross-icon"
  );
  let blockElem = document.querySelectorAll(
    ".capsule-detail-page .detail-block .details-head,.dets-img,.details-para,.dets-about-capsule,.ready-reserve"
  );
  let capsuleCost = document.querySelectorAll(
    ".capsule-detail-page .capsule-cost"
  );
  let costElem = document.querySelectorAll(
    ".capsule-detail-page .capsule-cost .cost-content"
  );
  let plusIcon = document.querySelectorAll(
    ".page3 .desktop-view .rounded-capsules .rounded-capsule-content .round-bottom .plus-icon"
  );

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: "power2.Inout" },
  });

  gsap.set(detailBlock, {
    xPercent: -100,
  });

  gsap.set(capsuleCost, {
    width: "94%",
  });

  tl.to(capsulePage, {
    display: "block",
    duration: 0.2,
  });

  tl.to(detailBlock, {
    xPercent: 0,
    duration: 0.3,
    display: "block",
  });

  tl.from(
    capsuleCost,
    {
      width: "0%",
      duration: 0.3,
      opacity: 0,
    },
    "same"
  );

  tl.from(
    costElem,
    {
      opacity: 0,
      duration: 0.3,
    },
    "samepage"
  );

  tl.from(
    blockElem,
    {
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
    },
    "samepage"
  );

  plusIcon.forEach(function (plus) {
    plus.addEventListener("click", () => {
      tl.play();
    });
  });

  capsulePage.addEventListener("click", () => {
    tl.reverse();
  });
}

detailBlockTimeline();

function maplocation() {
  let mapLink = document.querySelector(
    ".map-section .map-content .map-head .map-link"
  );

  function mapOnClick() {
    window.open(
      "https://www.google.com/maps/place/Maricopa,+CA+93252,+USA/@35.0509402,-119.4272047,14z/data=!3m1!4b1!4m6!3m5!1s0x80ea32c344e73faf:0xe5e32ca2d0a088e8!8m2!3d35.058858!4d-119.4009509!16zL20vMHFfOTY?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  }

  mapLink.addEventListener("click", () => {
    mapOnClick();
  });
}

maplocation();

function customCursor() {
  let mapLink = document.querySelector(
    ".map-section .map-content .map-head .map-link"
  );
  let customCursor = document.querySelector(".custom-cursor");
  let cursorText = document.querySelector(".custom-cursor .cursor-text h3");
  let reserveSectionContent = document.querySelector(
    ".reserve-section .reserve-content"
  );

  document.addEventListener("mousemove", (dets) => {
    gsap.to(customCursor, {
      x: dets.clientX - 120,
      y: dets.clientY - 50,
      duration: 0.6,
      ease: "back.out(1.7)",
    });
  });

  function cursorMapAnimation() {
    mapLink.addEventListener("mouseenter", () => {
      gsap.to(customCursor, {
        scale: 1,
        duration: 0.4,
        ease: "power2.Inout",
        rotate: 0,
      });
    });

    mapLink.addEventListener("mouseleave", () => {
      gsap.to(customCursor, {
        scale: 0,
        duration: 0.4,
        ease: "power2.Inout",
        rotate: 6,
      });
    });
  }

  cursorMapAnimation();

  function cursorCapAnimation() {
    reserveSectionContent.addEventListener("mouseenter", () => {
      gsap.to(customCursor, {
        scale: 1,
        ease: "power2.Inout",
        duration: 0.4,
        rotate: 0,
      });

      cursorText.innerHTML = "Reserve Now";
    });

    reserveSectionContent.addEventListener("mouseleave", () => {
      gsap.to(customCursor, {
        scale: 0,
        ease: "power2.Inout",
        duration: 0.4,
        rotate: 6,
      });

      cursorText.innerHTML = "Show the Map";
    });
  }

  cursorCapAnimation();
}

customCursor();

function feedBackAnimation() {
  let feedH2triggersecond = document.querySelectorAll(
    ".feedback-section .feed-back .feed .second-trigger"
  );
  let feedH2triggerfirst = document.querySelectorAll(
    ".feedback-section .feed-back .feed .first-trigger"
  );
  let nextArrow = document.querySelector(
    ".feedback-section .slide-show .arrows h3:nth-child(2)"
  );
  let previousArrow = document.querySelector(
    ".feedback-section .slide-show .arrows h3:nth-child(1)"
  );
  let feedLoader = document.querySelector(
    ".feedback-section .slide-show .slide-load .feed-loader"
  );
  let feedImg1 = document.querySelector(
    ".feedback-section .commentor .person-img .img1"
  );
  let feedImg2 = document.querySelector(
    ".feedback-section .commentor .person-img .img2"
  );
  let feedPersonText1 = document.querySelectorAll(
    ".feedback-section .commentor .person-info .person h3:nth-child(1)"
  );
  let feedPersonText2 = document.querySelectorAll(
    ".feedback-section .commentor .person-info .person h3:nth-child(2)"
  );

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: "power1.in" },
  });

  gsap.set(feedLoader, {
    width: "50%",
  });

  tl.to(
    feedH2triggersecond,
    {
      y: "-100%",
      duration: 0.3,
    },
    "same"
  );

  tl.to(feedH2triggerfirst, {
    y: "100%",
    duration: 0.3,
  });

  tl.to(
    feedLoader,
    {
      width: "100%",
      duration: 0.5,
    },
    "same"
  );

  tl.to(
    feedImg1,
    {
      scale: 0,
      duration: 0.3,
      display: "none",
    },
    "same"
  );

  tl.to(feedImg2, {
    scale: 1,
    duration: 0.3,
    display: "block",
    delay: -0.2,
  });

  tl.to(
    feedPersonText1,
    {
      x: 15,
      opacity: 0,
      display: "none",
      duration: 0.3,
    },
    "same"
  );

  tl.fromTo(
    feedPersonText2,
    { x: 15, opacity: 0 },
    { x: 0, display: "block", opacity: 1, duration: 0.3, delay: -0.4 }
  );

  nextArrow.addEventListener("click", () => {
    tl.play();
  });

  previousArrow.addEventListener("click", () => {
    tl.reverse();
  });
}

feedBackAnimation();

function changeRate() {
  let capsule1 = document.querySelector(
    ".reserve-page .reserve-block .block-capsule-detail .capsule1"
  );
  let capsule2 = document.querySelector(
    ".reserve-page .reserve-block .block-capsule-detail .capsule2"
  );
  let capsule3 = document.querySelector(
    ".reserve-page .reserve-block .block-capsule-detail .capsule3"
  );
  let costH2 = document.querySelector(
    ".reserve-page .reserve-block .reserve-final .stay-cost .cost h2"
  );

  capsule1.addEventListener("click", () => {
    costH2.innerHTML = "10000 USD";
  });

  capsule2.addEventListener("click", () => {
    costH2.innerHTML = "11250 USD";
  });

  capsule3.addEventListener("click", () => {
    costH2.innerHTML = "12500 USD";
  });
}

changeRate();

function gsapScrollTrigger() {
  function paraFill() {
    let page2Para = document.querySelectorAll(
      ".page2 .section1 .section1-para h2"
    );

    let dq = window.matchMedia("(min-width: 480px");

    if (dq.matches) {
      gsap.to(page2Para, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inout",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".page2 .section1 .section1-para",
          scrub: 1,
          start: "top 70%",
          end: "top 0%",
        },
      });
    } else {
      gsap.to(page2Para, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inout",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".page2 .section1 .section1-para",
          scrub: 1,
          start: "top 80%",
          end: "top 0%",
        },
      });
    }
  }

  paraFill();

  function textTransformAnimation() {
    let discoverH2 = document.querySelectorAll(
      ".activity .activity-head .discover h2"
    );
    let activity = document.querySelector(".activity");

    const dq = window.matchMedia("(min-width: 480px)");

    if (dq.matches) {
      gsap.from(discoverH2, {
        y: "-100%",
        duration: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: activity,
          scrub: 2,
          start: "top 65%",
          end: "top 0%",
        },
      });
    } else {
      gsap.from(discoverH2, {
        y: "-100%",
        duration: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: activity,
          scrub: 2,
          start: "top 70%",
          end: "top 40%",
        },
      });
    }
  }

  textTransformAnimation();

  function textTransformAnimation2() {
    let section3H2 = document.querySelectorAll(
      ".page2 .section3 .section3-head .choose h2"
    );
    let page2Section3 = document.querySelector(".page2 .section3");

    const dq = window.matchMedia("(min-width: 480px)");

    if (dq.matches) {
      gsap.from(section3H2, {
        y: "-104%",
        duration: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: page2Section3,
          scrub: 2,
          start: "top 80%",
          end: "top 40%",
        },
      });
    } else {
      gsap.from(section3H2, {
        y: "-104%",
        duration: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: page2Section3,
          scrub: 2,
          start: "top 80%",
          end: "top 60%",
        },
      });
    }
  }

  textTransformAnimation2();

  function difficultyLoadAnimation() {
    let difficulty = document.querySelector(
      ".activity .activity-section .difficulty"
    );
    let difficultyLoad = document.querySelectorAll(
      ".activity .activity-section .difficulty .mode .medium .medium-load .load"
    );

    gsap.from(difficultyLoad, {
      width: "0%",
      duration: 0.8,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: difficulty,
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
  }

  difficultyLoadAnimation();

  function campSliderAnimation() {
    let page5 = document.querySelector(".page5");
    let page5Camping = document.querySelector(
      ".page5 .page5-desktop-view .camping"
    );

    const dq = window.matchMedia("(min-width: 480px");

    if (dq.matches) {
      gsap.to(page5Camping, {
        xPercent: -148,
        duration: 0.4,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: page5,
          scrub: 2,
          pin: true,
          start: "top top",
          end: "bottom top",
        },
      });
    }
  }

  campSliderAnimation();

  function footerWebTitleAnimation() {
    let titleSpan = document.querySelectorAll(
      ".footer .capsule-title .cap-title span"
    );
    let webCredit = document.querySelector(".footer .web-credit");

    const dq = window.matchMedia("(min-width: 480px)");

    if (dq.matches) {
      gsap.from(titleSpan, {
        x: "100%",
        duration: 0.4,
        ease: "power1.out",
        scrollTrigger: {
          trigger: webCredit,
          scrub: 2,
          start: "top center",
          end: "top center",
        },
      });
    } else {
      gsap.from(titleSpan, {
        x: "100%",
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: webCredit,
          scrub: 2,
          start: "top 80%",
          end: "top 80%",
        },
      });
    }
  }

  footerWebTitleAnimation();
}

gsapScrollTrigger();

function loaderAnimation() {
  let loader = document.querySelector(".loader");
  let loaderSpan = document.querySelectorAll(
    ".loader .loader-content .loader-loading .loader-title .load-title span"
  );
  let loaderPart = document.querySelector(
    ".loader .loader-content .loader-loading .loader-part"
  );
  let loaderH3 = document.querySelectorAll(
    ".loader .loader-content .loader-para .load-para h3"
  );
  let loaderLoading = document.querySelector(
    ".loader .loader-content .loader-loading"
  );

  let tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

  const mq = window.matchMedia("(max-width: 475px)");

  tl.from(loaderSpan, {
    x: "100%",
    duration: 0.6,
  });

  tl.from(loaderH3, {
    y: "-100%",
    duration: 0.4,
  });

  tl.to(
    loaderPart,
    {
      left: 0,
      duration: 1,
    },
    "sametime"
  );

  tl.to(
    loaderSpan,
    {
      color: "#000",
      duration: 0.2,
      delay: 0.5,
      stagger: 0.1,
    },
    "sametime"
  );

  tl.to(loaderSpan, {
    opacity: 0,
    duration: 0.3,
  });

  if (mq.matches) {
    tl.to(
      loaderLoading,
      {
        scale: 10,
        duration: 1.2,
        ease: "power4.out",
      },
      "same"
    );
  } else {
    tl.to(
      loaderLoading,
      {
        scale: 6,
        duration: 1.2,
        ease: "power4.out",
      },
      "same"
    );
  }

  tl.to(
    loader,
    {
      display: "none",
      opacity: 0,
    },
    "same"
  );
}

loaderAnimation();
