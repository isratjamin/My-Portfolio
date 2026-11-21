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

