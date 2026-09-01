const skillsSection = document.querySelector("#skills");

if (skillsSection) {

    const skillsObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    skillsSection.classList.add("animate");

                    // একবার animation হবে
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

/* =========================================================
   TYPED TEXT
   ========================================================= */

const typedText = document.querySelector(".text");

if (typedText && typeof Typed !== "undefined") {

    new Typed(".text", {

        strings: [
            "Web Developer",
            "CSE Student",
            "UI Designer"
        ],

        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1000,
        loop: true

    });

}