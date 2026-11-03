$(document).ready(function () {
  // 1. Theme persistence check on initial load
  if (localStorage.getItem("theme") === "dark") {
    $("body").addClass("dark-mode");
  }

  // 2. Dark Mode Toggle
  $("#theme-toggle").on("click", function () {
    $("body").toggleClass("dark-mode");
    const isDark = $("body").hasClass("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // 3. jQuery Accordion / Collapsible Sections
  $(".collapsible").on("click", function () {
    // Smoothly toggle the visibility of the sibling .content block
    $(this).next(".content").slideToggle(250);

    // Flip the indicator arrow
    $(this).find("span").text(function (_, currentText) {
      return currentText === "▼" ? "▲" : "▼";
    });
  });

  // 4. Print / PDF Export Button
  $("#print-btn").on("click", function () {
    window.print();
  });
});