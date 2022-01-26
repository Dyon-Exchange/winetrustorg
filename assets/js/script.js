/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


// jarallax
if (document.querySelectorAll('.jarallax').length) {
    jarallax(document.querySelectorAll('.jarallax'));
}


// nav-tab
$(function () {
    $('.nav-pills .nav-link').click(function (e) {
        e.preventDefault();
        $('.nav-pills .nav-link').removeClass('active');
        $(this).addClass('active');
        let tagid = $(this).data('bs-target');
        console.log(tagid);
        $('.tab-content .tab-pane').removeClass('show active');
        $(tagid).addClass('show active');
    });
});



// navToggle
if (document.querySelectorAll('.navbar-toggler').length) {
    document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', () => {
        document.getElementById('navToggle').classList.toggle('translate-x');
    })
}