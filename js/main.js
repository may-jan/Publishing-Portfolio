$(document).ready(function () {
  //-------------------------- MAIN ------------------------//
  //인트로설정
  $(".intro_show").delay(500).animate({ left: "140%" }, 2200);
  $(".intro").delay(2500).animate({ top: "-1200px" }, 1000);
  $(".intro_text").delay(2500).animate({ opacity: "0" }, 1000);
  $(".main_work1").delay(3700).slideDown(800);
  $(".main_work2").delay(3700).animate({ top: "0" }, 800);

  //메인텍스트
  const content = "BEYOUND \n THE \n DESIGN.";
  const text = document.querySelector("#main_text>.text");
  let i = 0;
  function typing() {
    if (i < content.length) {
      let txt = content.charAt(i);
      text.innerHTML += txt === "\n" ? "<br/>" : txt;
      i++;
    }
  }
  $("#main_text")
    .delay(3800)
    .show(function () {
      setInterval(typing, 110);
    });

  //-------------------------- 스크롤설정 ------------------------//
  $("body,html").stop().animate({ scrollTop: "0" }, 500);
  $(".navi li:eq(0)").addClass("on");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //main
    if (scroll >= 0 && scroll < 900) {
      $(".navi li").removeClass("on");
      $(".navi li:eq(0)").addClass("on");
    }

    //about me
    if (scroll >= 900 && scroll < 1900) {
      $(".navi li").removeClass("on");
      $(".navi li:eq(1)").addClass("on");
      $(".aboutme_wrap1").animate({ opacity: "1", marginTop: "0" }, 800);
      $(".aboutme_wrap2")
        .delay(150)
        .animate({ opacity: "1", marginTop: "0" }, 800);
      $(".aboutme_wrap3")
        .delay(300)
        .animate({ opacity: "1", marginTop: "0" }, 800, function () {
          $("#skillbox li:eq(0) .skillbox2")
            .delay(200)
            .animate({ width: "90%" }, 800);
          $("#skillbox li:eq(1) .skillbox2")
            .delay(400)
            .animate({ width: "80%" }, 800);
          $("#skillbox li:eq(2) .skillbox2")
            .delay(600)
            .animate({ width: "90%" }, 800);
          $("#skillbox li:eq(3) .skillbox2")
            .delay(800)
            .animate({ width: "90%" }, 800);
          $("#skillbox li:eq(4) .skillbox2")
            .delay(1000)
            .animate({ width: "60%" }, 800);
        });
    }

    //project
    if (scroll >= 1900 && scroll < 2900) {
      $(".navi li").removeClass("on");
      $(".navi li:eq(2)").addClass("on");
    }

    //publish
    if (scroll >= 2900 && scroll < 9900) {
      $(".navi li").removeClass("on");
      $(".navi li:eq(3)").addClass("on");
    }

    if (scroll >= 2900) {
      $(".pub1").animate({ opacity: "1", right: "0%" }, 800);
    }
    if (scroll >= 3550) {
      $(".pub2").animate({ opacity: "1", left: "0%" }, 800);
    }
    if (scroll >= 4210) {
      $(".pub3").animate({ opacity: "1", right: "0%" }, 800);
    }
    if (scroll >= 4870) {
      $(".pub4").animate({ opacity: "1", left: "0%" }, 800);
    }
    if (scroll >= 5530) {
      $(".pub5").animate({ opacity: "1", right: "0%" }, 800);
    }
    if (scroll >= 6180) {
      $(".pub6").animate({ opacity: "1", left: "0%" }, 800);
    }
    if (scroll >= 6840) {
      $(".pub7").animate({ opacity: "1", right: "0%" }, 800);
    }
    if (scroll >= 7500) {
      $(".pub8").animate({ opacity: "1", left: "0%" }, 800);
    }
    if (scroll >= 8160) {
      $(".pub9").animate({ opacity: "1", right: "0%" }, 800);
    }
    if (scroll >= 8820) {
      $(".pub10").animate({ opacity: "1", left: "0%" }, 800);
    }

    //work
    if (scroll >= 9900 && scroll < 10900) {
      $(".navi li").removeClass("on");
      $(".navi li:eq(4)").addClass("on");

      $(".gg-box img:eq(0)").animate(
        { top: "0px", opacity: "1" },
        700,
        "easeInOutBack"
      );
      $(".gg-box img:eq(1)")
        .delay(50)
        .animate({ top: "0px", opacity: "1" }, 700, "easeInOutBack");
      $(".gg-box img:eq(2)")
        .delay(100)
        .animate({ top: "0px", opacity: "1" }, 700, "easeInOutBack");
      $(".gg-box img:eq(3)")
        .delay(150)
        .animate({ top: "0px", opacity: "1" }, 700, "easeInOutBack");
      $(".gg-box img:eq(4)")
        .delay(200)
        .animate({ top: "0px", opacity: "1" }, 700, "easeInOutBack");
      $(".gg-box img:eq(5)")
        .delay(250)
        .animate({ top: "0px", opacity: "1" }, 700, "easeInOutBack");
      $(".gg-box img:eq(6)")
        .delay(300)
        .animate({ top: "0px", opacity: "1" }, 700, "easeInOutBack");
      $(".gg-box img:eq(7)")
        .delay(350)
        .animate({ top: "0px", opacity: "1" }, 700, "easeInOutBack");
    }

    //contact
    if (scroll >= 10900) {
      $(".navi li").removeClass("on");
      $(".navi li:eq(5)").addClass("on");
    }
  });

  //-------------------------- navi ------------------------//
  $(".navi li:eq(0)").click(function () {
    $("body,html").stop().animate({ scrollTop: "0" }, 500);
  });
  $(".navi li:eq(1)").click(function () {
    $("body,html").stop().animate({ scrollTop: "1000" }, 500);
  });
  $(".navi li:eq(2)").click(function () {
    $("body,html").stop().animate({ scrollTop: "2000" }, 500);
  });
  $(".navi li:eq(3)").click(function () {
    $("body,html").stop().animate({ scrollTop: "3000" }, 500);
  });
  $(".navi li:eq(4)").click(function () {
    $("body,html").stop().animate({ scrollTop: "10000" }, 500);
  });
  $(".navi li:eq(5)").click(function () {
    $("body,html").stop().animate({ scrollTop: "11000" }, 500);
  });

  $(".navi li:eq(5)").delay(4400).animate({ opacity: "1", right: "40" }, 500);
  $(".navi li:eq(4)").delay(4450).animate({ opacity: "1", right: "40" }, 500);
  $(".navi li:eq(3)").delay(4500).animate({ opacity: "1", right: "40" }, 500);
  $(".navi li:eq(2)").delay(4550).animate({ opacity: "1", right: "40" }, 500);
  $(".navi li:eq(1)").delay(4600).animate({ opacity: "1", right: "40" }, 500);
  $(".navi li:eq(0)").delay(4650).animate({ opacity: "1", right: "40" }, 500);

  //-------------------------- mobile_menu ------------------------//
  $(".burger").click(function () {
    if ($(".burger .x, .burger .y, .burger .z").hasClass("rotate") == false) {
      $(".burger .x, .burger .y, .burger .z").removeClass("rotateback");
      $(".burger .x, .burger .y, .burger .z").addClass("rotate");
      $(".mobile_menu ul")
        .css({ display: "block" })
        .animate({ opacity: "1" }, 600);
      $(".circle").animate(
        { width: "4000px", height: "4000px", left: "-1000", top: "-2000" },
        600
      );
    } else {
      $(".burger .x, .burger .y, .burger .z").removeClass("rotate");
      $(".burger .x, .burger .y, .burger .z").addClass("rotateback");
      $(".mobile_menu ul")
        .css({ display: "none" })
        .animate({ opacity: "0" }, 600);
      $(".circle").animate(
        { width: "0px", height: "0px", left: "0", top: "0" },
        600
      );
    }
  });

  $(".mobile_menu li:eq(0)").click(function () {
    $("body,html").stop().animate({ scrollTop: "0" }, 500);
    $(".burger .x, .burger .y, .burger .z").removeClass("rotate");
    $(".burger .x, .burger .y, .burger .z").addClass("rotateback");
    $(".mobile_menu ul")
      .css({ display: "none" })
      .animate({ opacity: "0" }, 600);
    $(".circle").animate(
      { width: "0px", height: "0px", left: "0", top: "0" },
      600
    );
  });
  $(".mobile_menu li:eq(1)").click(function () {
    $("body,html").stop().animate({ scrollTop: "1000" }, 500);
    $(".burger .x, .burger .y, .burger .z").removeClass("rotate");
    $(".burger .x, .burger .y, .burger .z").addClass("rotateback");
    $(".mobile_menu ul")
      .css({ display: "none" })
      .animate({ opacity: "0" }, 600);
    $(".circle").animate(
      { width: "0px", height: "0px", left: "0", top: "0" },
      600
    );
  });
  $(".mobile_menu li:eq(2)").click(function () {
    $("body,html").stop().animate({ scrollTop: "2000" }, 500);
    $(".burger .x, .burger .y, .burger .z").removeClass("rotate");
    $(".burger .x, .burger .y, .burger .z").addClass("rotateback");
    $(".mobile_menu ul")
      .css({ display: "none" })
      .animate({ opacity: "0" }, 600);
    $(".circle").animate(
      { width: "0px", height: "0px", left: "0", top: "0" },
      600
    );
  });
  $(".mobile_menu li:eq(3)").click(function () {
    $("body,html").stop().animate({ scrollTop: "3000" }, 500);
    $(".burger .x, .burger .y, .burger .z").removeClass("rotate");
    $(".burger .x, .burger .y, .burger .z").addClass("rotateback");
    $(".mobile_menu ul")
      .css({ display: "none" })
      .animate({ opacity: "0" }, 600);
    $(".circle").animate(
      { width: "0px", height: "0px", left: "0", top: "0" },
      600
    );
  });
  $(".mobile_menu li:eq(4)").click(function () {
    $("body,html").stop().animate({ scrollTop: "10000" }, 500);
    $(".burger .x, .burger .y, .burger .z").removeClass("rotate");
    $(".burger .x, .burger .y, .burger .z").addClass("rotateback");
    $(".mobile_menu ul")
      .css({ display: "none" })
      .animate({ opacity: "0" }, 600);
    $(".circle").animate(
      { width: "0px", height: "0px", left: "0", top: "0" },
      600
    );
  });
  $(".mobile_menu li:eq(5)").click(function () {
    $("body,html").stop().animate({ scrollTop: "11000" }, 500);
    $(".burger .x, .burger .y, .burger .z").removeClass("rotate");
    $(".burger .x, .burger .y, .burger .z").addClass("rotateback");
    $(".mobile_menu ul")
      .css({ display: "none" })
      .animate({ opacity: "0" }, 600);
    $(".circle").animate(
      { width: "0px", height: "0px", left: "0", top: "0" },
      600
    );
  });

  //-------------------------- PUBLISH ------------------------//

  //-------------------------- WORK ------------------------//
}); //end
