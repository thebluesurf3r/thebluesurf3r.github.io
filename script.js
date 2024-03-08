  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        // Add the fade-out class to the body
        document.body.classList.add('fade-out');

        // Redirect to the new page after the fade-out effect
        setTimeout(function () {
          window.location.href = link.getAttribute('href');
        }, 300); // Adjust the timeout based on the transition duration
      });
    });
  });

const sidebarLinks = document.querySelectorAll('#sidebar_ul li a');

sidebarLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    const targetSectionId = link.href.split('.html')[0]; // Extract section ID from href
    const targetElement = document.getElementById(targetSectionId);
    targetElement.classList.add('highlighted'); // Add 'highlighted' class
  });

  link.addEventListener('mouseout', () => {
    const targetSectionId = link.href.split('.html')[0];
    const targetElement = document.getElementById(targetSectionId);
    targetElement.classList.remove('highlighted'); // Remove 'highlighted' class
  });
});

