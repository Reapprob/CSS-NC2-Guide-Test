const groups = document.querySelectorAll(".learning-group");

groups.forEach(group => {
    const summary = group.querySelector(":scope > summary");
    const content = group.querySelector(":scope > .learning-list");

    summary.addEventListener("click", function(event) {
        event.preventDefault();

        if (group.open) {
            content.style.maxHeight = "0";
            content.style.opacity = "0";

            setTimeout(() => {
                group.open = false;
            }, 300);

        } else {
            group.open = true;

            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = "1";
        }
    });

    const categories = content.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("toggle", function() {
            if (group.open) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});