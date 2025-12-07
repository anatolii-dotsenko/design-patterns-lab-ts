import { IRenderStrategy } from "./IRenderStrategy.js";

export class ListStrategy implements IRenderStrategy {
    renderContainer(element: HTMLElement): HTMLElement {
        const container = document.createElement("div");
        container.classList.add("list-container");
        
        // --- THIS PART IS CRITICAL FOR VISIBILITY ---
        const label = document.createElement("div");
        label.classList.add("group-label");
        label.innerText = "📂 Group"; // The visible text
        label.style.color = "#888";   // Inline style fallback
        label.style.fontSize = "0.8rem";
        label.style.marginBottom = "5px";
        
        container.appendChild(label);
        // ---------------------------------------------

        element.appendChild(container);
        return container;
    }

    renderItem(content: string, isChecked: boolean = false): HTMLElement {
        const item = document.createElement("div");
        item.classList.add("list-item");
        
        if (isChecked) {
            item.classList.add("checked");
        }
        
        item.textContent = content;
        return item;
    }

    renderSeparator(): HTMLElement {
        const sep = document.createElement("hr");
        sep.classList.add("list-separator");
        return sep;
    }
}