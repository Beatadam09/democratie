document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu on mobile icon click
    document.getElementById('mobile-menu').addEventListener('click', toggleMenu);

    // Add event listeners to the menu items
    document.querySelectorAll('.nav-menu li').forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            hideAllSections();
            showSection(menuItem);
            toggleMenu(); // Close the menu after clicking on a menu item
        });
    });

    // Add event listeners to click-to-toggle paragraphs
    document.querySelectorAll('.click-to-toggle').forEach(function (toggleText) {
        toggleText.addEventListener('click', function () {
            toggleContentVisibility(toggleText);
        });
    });

    // Add smooth scrolling for links with the 'scroll-link' class
    document.querySelectorAll('.scroll-link').forEach(function (scrollLink) {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = scrollLink.getAttribute('data-target');
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function toggleMenu() {
        var menu = document.querySelector('.nav-menu');
        var mobileMenu = document.getElementById('mobile-menu');
        menu.classList.toggle('show');
        mobileMenu.classList.toggle('active');
    }

    function hideAllSections() {
        document.getElementById('wie-zijn-wij').style.display = 'none';
        document.getElementById('home-content').style.display = 'none';
        document.getElementById('about-us-content').style.display = 'none';
        document.getElementById('team-content').style.display = 'none'; // Hide team content
        // Add more sections if needed
    }

  function showSection(menuItem) {
    var target = menuItem.querySelector('.hover-box').getAttribute('data-content');
    hideAllSections(); // Hide all sections before showing the target section
    document.getElementById(target).style.display = 'block';

    if (target === 'about-us-content') {
        // Show team content and additional content only in "Over Ons"
        document.getElementById('ons-team-content').style.display = 'block';
        document.getElementById('additional-content').style.display = 'block';
    }
}



    function toggleContentVisibility(toggleText) {
        var targetId = toggleText.getAttribute('data-target');
        var targetContent = document.getElementById(targetId);
        targetContent.style.display = (targetContent.style.display === 'none' || targetContent.style.display === '') ? 'block' : 'none';
    }
});
