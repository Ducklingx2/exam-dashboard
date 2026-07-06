const pages = {
    dashboard: Dashboard,
    teachers: Teachers,
    tasks: Tasks,
    reports: Reports,
    analytics: Analytics,
    settings: Settings,
    departments: Departments
};

function loadPage(page) {

    const main = document.getElementById("main");

    main.innerHTML = "";

    pages[page](main);

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    document
        .querySelector(`[data-page="${page}"]`)
        .classList.add("active");

    refreshUI();

}
