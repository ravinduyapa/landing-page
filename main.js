document.addEventListener('DOMContentLoaded', function () {

    // Navitem Function start
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                var navbarHeight = document.querySelector('.navbar').offsetHeight;
                var targetOffset = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    }
    // Navitem function end 



    // Add smooth scroll to top when company logo is clicked function start
    var logo = document.getElementById('logo');
    
    if (logo) {
        logo.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    // Add smooth scroll to top when company logo is clicked function end


    // Lateset News Section function start
    var lines = document.querySelectorAll('.line');
    var cardContainers = document.querySelectorAll('.card-container');

    lines.forEach(function (line) {
        line.addEventListener('click', function () {
            var targetId = this.getAttribute('data-target');
            
            cardContainers.forEach(function (container) {
                container.classList.remove('active');
            });

            var targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                targetContainer.classList.add('active');
            }

            lines.forEach(function (line) {
                line.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

    if (lines.length > 0) {
        lines[0].click();
    }
    // Lateset News Section function End


    
});
