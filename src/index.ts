import { AppFacade } from "./core/AppFacade.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = new AppFacade("app-root");

    // Helper to get input
    const getText = () => prompt("Enter text:", "Sample Text");

    // Bind Buttons
    document.getElementById("addListBtn")?.addEventListener("click", () => {
        app.addList();
    });

    document.getElementById("addItemBtn")?.addEventListener("click", () => {
        const text = getText();
        if (text) app.addItem(text);
    });

    document.getElementById("addSepBtn")?.addEventListener("click", () => {
        app.addSeparator();
    });

    document.getElementById("resetBtn")?.addEventListener("click", () => {
        app.toRoot();
    });

    let isGrid = false;
    document.getElementById("toggleViewBtn")?.addEventListener("click", () => {
        isGrid = !isGrid;
        app.toggleViewMode(isGrid ? 'grid' : 'list');
    });

    document.getElementById("toggleCheckBtn")?.addEventListener("click", () => {
        app.toggleChecklistMode();
    });

    document.getElementById("exportBtn")?.addEventListener("click", () => {
        app.downloadMarkdown();
    });
});