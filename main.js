/* =========================================================
   SKILLS SCROLL ANIMATION
   ========================================================= */

const skillsSection = document.querySelector("#skills");

const skillsObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                skillsSection.classList.add("animate");

            }

        });

    },
    {
        threshold: 0.25
    }
);


if (skillsSection) {

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