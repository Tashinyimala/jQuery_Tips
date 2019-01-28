// Javascript
// const element = document.getElementById('start');
// element.innerHTML = "Go";

//jQuery
$(document).ready(() => {
    let txt = "";
    txt += "width: " + $("#start").width() + "<br/>";
    txt += "height: " + $("#start").height() + "<br/>";
    txt += "innerWidth: " + $("#start").innerWidth() + "<br/>";
    txt += "innerHeight: " + $("#start").innerHeight() + "<br/>";
    txt += "outerWidth: " + $("#start").outerWidth() + "<br/>";
    txt += "outerHeight: " + $("#start").outerHeight() + "<br/>";

    $("#start").html(txt);

    // Get Content
    const val = $("p").text();
    alert(val);

    // Set Content
    $(".test").text("Tashi Delek!");

    // Adding Content
    $(".demo").append("Tashi Nyima");
    $(".demo").prepend("Mr ");
    $(".demo").before("<i>Hello 👍</i>");
    $(".demo").after("<b> bye ✋</b>");

    // Manipulating CSS
    $(".test1").removeClass("red");
    $(".test1").addClass("example");

    $("button").click(() => {
        $("#toggleBtn").toggleClass("red");
    });

    // CSS Properties
    alert($("p").css("background-color"));
    $("p").css({"background-color": "yellow", "font-family":"monospace"});

    // DOM Traversing
    const el = $(".demo").parent();
    el.css("border", "2px solid red");

    // Removing elements
    $("p").eq(3).remove(); // index from 0
    $(".colors").empty();

    // Handling Events
    $("#showDate").click(function() {
        $("body").html(Date());
    });

    $("p").on("click", function() {
        alert("clicked");
        $("p").off("click"); // remove event handler
    });

    $("a").click((event) => {
        alert(event.pageX);
        event.preventDefault();
    });

    // // Hide/Show
    // $("p").click(() => {
    //     $("#togglePlz").toggle(1000);
    // });

    // // Fade in/out
    // $("p").click(() => {
    //     $("#fadePlz").fadeToggle(1500);
    // });

    // slide up/down
    $("p").click(() => {
        $("#slideToggle").slideToggle(1500);
    });
});
