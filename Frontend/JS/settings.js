function Settings(main) {

    main.innerHTML = `

        <h1>Settings</h1>

        <p>Configure the Examination Management System.</p>

        <h2>Theme</h2>

        <button class="theme-btn" data-theme="ocean">Ocean</button>
	<button class="theme-btn" data-theme="amber">Amber</button>
	<button class="theme-btn" data-theme="emerald">Emerald</button>
	<button class="theme-btn" data-theme="violet">Violet</button>

    `;

    document.querySelectorAll(".theme-btn").forEach(button => {

    button.addEventListener("click", () => {

        applyTheme(button.dataset.theme);

    });

});

}