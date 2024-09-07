document.addEventListener('DOMContentLoaded', function() {
    var backImage = document.querySelector('.back');
    
    backImage.addEventListener('mouseover', function() {
        backImage.src = 'images/back1.png'; 
    });

    backImage.addEventListener('mouseout', function() {
        backImage.src = 'images/back.png'; 
    });
});
