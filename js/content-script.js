
let flag = false;
if (document) {
    document.addEventListener('keydown', function(e) {
        flag = e.keyCode === 27;
    })
    document.addEventListener('keyup', function() {
        flag = false;
    })
    document.addEventListener('click', function(event) {
        if (flag) {
            event.preventDefault();
            event.target.style.visibility = "hidden";
        }
    })
}
