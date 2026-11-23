// Skills section scroll animation
const skillsSection = document.querySelector("#skills");

if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    skillsSection.classList.add("animate");
                    skillsObserver.unobserve(skillsSection);
                }
            });
        },
        {
            threshold: 0.5
        }
    );

    skillsObserver.observe(skillsSection);
}

// Contact form demo submission handler (for Sir / presentation)
const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
    });
}