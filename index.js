// NAVBAR SCROLLDOWN EFFECT START
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.main_nav').css('box-shadow', '0 4px 12px 0 rgb(110 87 224 / 30%), 0 2px 4px rgb(110 87 224 / 40%)');
        $('.main_nav').css('background', 'var(--body-color)', 'important');
        $('.main_nav').css('border-bottom', '2px solid var(--primaryColor)');
    } else {
        $('.main_nav').css('background', 'transparent');
        $('.main_nav').css('border-bottom', 'none');
        $('.main_nav').css('box-shadow', 'none');
    }
});
// NAVBAR SCROLLDOWN EFFECT END
// LINK SWITCHER START
document.getElementById("HME").addEventListener("click", function () {
    document.getElementById("HME").classList.add("active");
    document.getElementById("ABT").classList.remove("active");
    document.getElementById("EDU").classList.remove("active");
    document.getElementById("SKL").classList.remove("active");
    document.getElementById("SRV").classList.remove("active");
    document.getElementById("PRT").classList.remove("active");
    document.getElementById("CNT").classList.remove("active");
});
document.getElementById("ABT").addEventListener("click", function () {
    document.getElementById("ABT").classList.add("active");
    document.getElementById("HME").classList.remove("active");
    document.getElementById("EDU").classList.remove("active");
    document.getElementById("SKL").classList.remove("active");
    document.getElementById("SRV").classList.remove("active");
    document.getElementById("PRT").classList.remove("active");
    document.getElementById("CNT").classList.remove("active");
});
document.getElementById("EDU").addEventListener("click", function () {
    document.getElementById("EDU").classList.add("active");
    document.getElementById("ABT").classList.remove("active");
    document.getElementById("HME").classList.remove("active");
    document.getElementById("SKL").classList.remove("active");
    document.getElementById("SRV").classList.remove("active");
    document.getElementById("PRT").classList.remove("active");
    document.getElementById("CNT").classList.remove("active");
});
document.getElementById("SKL").addEventListener("click", function () {
    document.getElementById("SKL").classList.add("active");
    document.getElementById("ABT").classList.remove("active");
    document.getElementById("EDU").classList.remove("active");
    document.getElementById("HME").classList.remove("active");
    document.getElementById("PRT").classList.remove("active");
    document.getElementById("SRV").classList.remove("active");
    document.getElementById("CNT").classList.remove("active");
});
document.getElementById("SRV").addEventListener("click", function () {
    document.getElementById("SRV").classList.add("active");
    document.getElementById("ABT").classList.remove("active");
    document.getElementById("EDU").classList.remove("active");
    document.getElementById("HME").classList.remove("active");
    document.getElementById("PRT").classList.remove("active");
    document.getElementById("SKL").classList.remove("active");
    document.getElementById("CNT").classList.remove("active");
});
document.getElementById("PRT").addEventListener("click", function () {
    document.getElementById("PRT").classList.add("active");
    document.getElementById("ABT").classList.remove("active");
    document.getElementById("EDU").classList.remove("active");
    document.getElementById("HME").classList.remove("active");
    document.getElementById("SRV").classList.remove("active");
    document.getElementById("SKL").classList.remove("active");
    document.getElementById("CNT").classList.remove("active");
});
document.getElementById("CNT").addEventListener("click", function () {
    document.getElementById("CNT").classList.add("active");
    document.getElementById("ABT").classList.remove("active");
    document.getElementById("EDU").classList.remove("active");
    document.getElementById("HME").classList.remove("active");
    document.getElementById("SRV").classList.remove("active");
    document.getElementById("SKL").classList.remove("active");
    document.getElementById("PRT").classList.remove("active");
});
// LINK SWITCHER END

// BLOCK SWITCHING START
var element__btn___1 = document.getElementById("basic-success-trigger");
var element__btn___2 = document.getElementById("basic-primary-trigger");
if (element__btn___1) {
    document.getElementById("basic-success-trigger").addEventListener("click", function () {
        document.getElementById("basic-success-trigger").classList.add("active__btn");
        document.getElementById("grad__cap").style.setProperty("color", "#fff", "important");
        document.getElementById("briefcase").style.setProperty("color", "var(--primaryHoverColor)", "important");
        document.getElementById("basic-primary-trigger").classList.remove("active__btn");
        document.getElementById("ed__block__1").style.setProperty("display", "block", "important");
        document.getElementById("ed__block__2").style.setProperty("display", "block", "important");
        document.getElementById("ed__block__3").style.setProperty("display", "block", "important");
        document.getElementById("ed__block__4").style.setProperty("display", "block", "important");
        document.getElementById("work__block__1").style.setProperty("display", "none", "important");
        document.getElementById("work__block__2").style.setProperty("display", "none", "important");
        document.getElementById("work__block__3").style.setProperty("display", "none", "important");
        document.getElementById("work__block__4").style.setProperty("display", "none", "important");
    });
}
if (element__btn___2) {
    document.getElementById("basic-primary-trigger").addEventListener("click", function () {
        document.getElementById("basic-primary-trigger").classList.add("active__btn");
        document.getElementById("briefcase").style.setProperty("color", "#fff", "important");
        document.getElementById("grad__cap").style.setProperty("color", "var(--primaryHoverColor)", "important");
        document.getElementById("basic-success-trigger").classList.remove("active__btn");
        document.getElementById("work__block__1").style.setProperty("display", "block", "important");
        document.getElementById("work__block__2").style.setProperty("display", "block", "important");
        document.getElementById("work__block__3").style.setProperty("display", "block", "important");
        document.getElementById("work__block__4").style.setProperty("display", "block", "important");
        document.getElementById("ed__block__1").style.setProperty("display", "none", "important");
        document.getElementById("ed__block__2").style.setProperty("display", "none", "important");
        document.getElementById("ed__block__3").style.setProperty("display", "none", "important");
        document.getElementById("ed__block__4").style.setProperty("display", "none", "important");
    });
}
// BLOCK SWITCHING END

// SCROLLDOWN
$(function () {
    $("html").niceScroll();
});
$("html").niceScroll({
    cursorcolor: "hsl(250, 69%, 61%)", // change cursor color in hex
    cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
    cursorborder: "1px solid hsl(250, 69%, 61%)", // css definition for cursor border
    cursorborderradius: "6px", // border radius in pixel for cursor
    scrollspeed: 60, // scrolling speed
    mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
    horizrailenabled:false
});
$("html").css({"overflow-x":"hidden"});
// fakeloader initialization
$(document).ready(function () {
    $.fakeLoader({
        timeToHide: 5000,
        bgColor: "hsl(250, 69%, 61%)",
        spinner: "spinner7"
    });
});
// Newsletter POP UP
$(document).ready(function () {
    setTimeout(function () {
        $('#myModal').modal('show');
    }, 30000);
});
$("#closebutton").click(function () {
    $('.modal-backdrop').remove();
});
// Cookie Pop-up
$(document).ready(function () {
    setTimeout(function () {
        $('#cookie_modal').modal('show');
    }, 15000);
});
$("#ok__btn").click(function () {
    $('.modal-backdrop').remove();
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
});
// TOOLTIPS INITIALIZERbasic-primary-trigger
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})