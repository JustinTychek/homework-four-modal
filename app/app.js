function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  //takes you to the home page if the url is empty
  if (pageID == "") {
    navToPage("home");
  } else {
    navToPage(pageID);
  }
}

//function that takes you to the page based on the pageID
function navToPage(pageName) {
  MODEL.getPageContent(pageName);
}

function addModalListener() {
  $(".bg-click").click(function (e) {
    // $(".modal").css("display", "none");
    gsap.to($(".modal"), { scale: 0, duration: 0 });
  });
}

function initListeners() {
  $(window).on("hashchange", route);
  route();

  $("#submit").click(function (e) {
    e.preventDefault();

    let text = $("#callout-text").val();
    let pass = $("#password-text").val();
    gsap.to($(".modal"), {
      scale: 0,
      duration: 0,
      onComplete: showAlert,
      onCompleteParams: [text, pass],
    });
  });
  $("#showModal").click(function (e) {
    //     $("body").append(`<div class="modal">
    //     <div class="bg-click"></div>
    //     <div class="callout"></div>
    // </div>`);
    // $(".modal").css("display", "flex");
    gsap.to($(".modal"), {
      ease: "expo.out",
      scale: 1,
      duration: 1,
    });
    addModalListener();
  });
}

function showAlert(info) {
  alert("Welcome back " + info);
  $("#callout-text").val("");
  $("#password-text").val("");
}

$(document).ready(function () {
  gsap.set($(".modal"), { scale: 0 });
  initListeners();
});
