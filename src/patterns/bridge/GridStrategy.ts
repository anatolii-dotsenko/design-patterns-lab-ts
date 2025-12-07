import { IRenderStrategy } from "./IRenderStrategy.js";

export class GridStrategy implements IRenderStrategy {
    renderContainer(element: HTMLElement): HTMLElement {
        const container = document.createElement("div");
        container.classList.add("grid-container");
        element.appendChild(container);
        return container;
    }

    renderItem(content: string, isChecked: boolean = false): HTMLElement {
        const card = document.createElement("div");
        card.classList.add("grid-card");
        
        if (isChecked) {
            card.classList.add("checked");
        }

        const text = document.createElement("p");
        text.textContent = content;
        card.appendChild(text);
        
        return card;
    }

    renderSeparator(): HTMLElement {
        const sep = document.createElement("div");
        sep.classList.add("grid-separator");
        sep.textContent = "---";
        return sep;
    }
}