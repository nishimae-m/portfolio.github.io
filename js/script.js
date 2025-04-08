document.addEventListener("DOMContentLoaded", function () {
  // ページ内スクロール
  var navHeight = document.querySelector(".header").offsetHeight;
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      var href = this.getAttribute("href");
      var target = document.querySelector(
        href === "#" || href === "" ? "html" : href
      );
      var position = target.offsetTop - navHeight;
      window.scrollTo({ top: position, behavior: "smooth" });
    });
  });

  // ページトップ
  document.getElementById("js-page-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });
});
