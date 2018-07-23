var flag = 0;
//for parallax effect
function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
}
$(window).scroll(function () {
    var scrolled = $(window).scrollTop()
    $('.parallax').each(function (index, element) {
        var initY = $(this).offset().top
        var height = $(this).height()
        var endY = initY + $(this).height()

        // Check if the element is in the viewport.
        var visible = isInViewport(this)
        if (visible) {
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position', 'center ' + parseInt(-(ratio * 1.5)) + 'px')
        }
    })
})

//for smooth scroll
$(function () {
    $('.scroll').scrollOffset({
        offset: 60,
        duration: 600,
        onComplete: null
    });
});

//waypoints
var appear = new Waypoint({
    element: document.getElementById('about'),
    handler: function () {
        var temp = document.getElementById('ttt');
        temp.style.opacity = "0.8";
        temp.style.display = "inline-block";
        temp.style.animation = "appear 1.5s";
    },
    offset: 200
});
var disappear = new Waypoint({
    element: document.getElementById('about'),
    handler: function () {
        var temp = document.getElementById('ttt');
        temp.style.opacity = "0";
        temp.style.display = "none";
        temp.style.animation = "disappear 1.5s";
    },
    offset: 400
});
var arr = ["about", "projects", "services", "contact"];
arr.forEach(element => {
    scrollAnim(element, 450, 500);
});
function scrollAnim(element, appear, disappear) {
    var aboutAppear = new Waypoint({
        element: document.getElementById(element),
        handler: function () {
            var temp = document.getElementById(element);
            temp.style.opacity = "1";
            if (element === 'about' && flag === 0) {
                //progressCircle
                $(function () {
                    $('.circlechart').circlechart();
                });
                flag=1;
            }
        },
        offset: appear
    });
    var aboutDisAppear = new Waypoint({
        element: document.getElementById(element),
        handler: function () {
            var temp = document.getElementById(element);
            temp.style.opacity = "0";
        },
        offset: disappear
    });
}
//custom
var x = 1;

$("#dropDown").click(function(){
    if(x == 0){
        $("#link").removeClass("drop");
        x = 1;
    }else{
        $("#link").addClass("drop");
        x = 0;
    }
});
function send(){
    var flag=0;
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    if(name.value===null){
        flag=1;
    }
}