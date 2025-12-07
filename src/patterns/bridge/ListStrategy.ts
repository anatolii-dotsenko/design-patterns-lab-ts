import { IRenderStrategy } from "./IRenderStrategy.js";

export class ListStrategy implements IRenderStrategy {
    renderContainer(element: HTMLElement): HTMLElement {
        const container = document.createElement("div");
        container.classList.add("list-container");
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