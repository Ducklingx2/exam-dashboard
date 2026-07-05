const routes = {
    dashboard: Dashboard,
    teachers: Teachers,
    tasks: Tasks,
    reports: Reports,
    analytics: Analytics,
    settings: Settings
};

function loadPage(page) {

    const main = document.getElementById("main");

    main.innerHTML = "";

    routes[page](main);

}
