document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll(".nav-item");
    var contentSections = document.querySelectorAll(".content-section");
    var widgets = document.querySelectorAll(".widget");
    var contentFrame = document.getElementById("content-frame");

    navItems.forEach(function(item) {
        item.addEventListener("click", function() {
            contentSections.forEach(function(section) {
                section.classList.remove("active");
            });

            var contentId = this.getAttribute("data-content");
            document.getElementById(contentId).classList.add("active");
            var targetSection = document.getElementById(contentId);
            targetSection.classList.add("active");
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            contentFrame.style.display = 'none';
            contentFrame.src = '';
        });
    });

    widgets.forEach(function(widget) {
        widget.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            contentSections.forEach(function(section) {
                section.classList.remove("active");
            });
            contentFrame.style.display = 'block';
            contentFrame.src = url;
        });
    });
});
