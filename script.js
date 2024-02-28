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
