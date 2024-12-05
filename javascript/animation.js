document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default navigation
            const href = e.target.getAttribute("href");

            // Add slide-out class
            document.body.classList.add("slide-out");

            // Navigate to the new page after animation ends
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the animation duration
        });
    });

    // Add slide-in class on page load
    document.body.classList.add("slide-in");
});
