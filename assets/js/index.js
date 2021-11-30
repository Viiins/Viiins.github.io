let studentButton = document.querySelector(".student-role");
let teacherButton = document.querySelector(".teacher-role");

studentButton.addEventListener("click", (event) => {
    if(!event.target.classList.contains('active')) {
        event.target.classList.add('active');
        teacherButton.classList.remove('active');

        document.querySelector('.student-form').style.zIndex = 2;
        document.querySelector('.teacher-form').style.zIndex = 1;
    }
});

teacherButton.addEventListener("click", (event) => {
    if(!event.target.classList.contains('active')) {
        event.target.classList.add('active');
        studentButton.classList.remove('active');

        document.querySelector('.student-form').style.zIndex = 1;
        document.querySelector('.teacher-form').style.zIndex = 2;
    }
});