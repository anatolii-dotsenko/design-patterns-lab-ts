import { BaseDecorator } from "./BaseDecorator.js";
import { IRenderStrategy } from "../bridge/IRenderStrategy.js";
import { IBuilder } from "../builder/IBuilder.js";

export class CheckableDecorator extends BaseDecorator {
    private isChecked: boolean = false;
    // We store the specific text content if possible or generic handling
    private contentRef: string = ""; 

    constructor(wrappee: any) {
        super(wrappee);
        // A hack to access content for building purposes, usually handled better with getters
        if (wrappee['content']) {
            this.contentRef = wrappee['content'];
        }
    }

    toggle(): void {
        this.isChecked = !this.isChecked;
    }

    render(parent: HTMLElement, strategy: IRenderStrategy): void {
        // Create a wrapper for the checkbox + item
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.gap = "10px";

        // Create Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = this.isChecked;
        checkbox.onclick = () => {
            this.toggle();
            // Re-render visual state if needed (e.g. strikethrough)
            const sibling = checkbox.nextElementSibling as HTMLElement;
            if(sibling) {
                sibling.style.textDecoration = this.isChecked ? "line-through" : "none";
                sibling.style.opacity = this.isChecked ? "0.5" : "1";
            }
        };

        wrapper.appendChild(checkbox);

        // Render the original item into a temporary container to extract it
        const tempContainer = document.createElement("div");
        super.render(tempContainer, strategy);
        
        const renderedItem = tempContainer.firstElementChild as HTMLElement;
        if (renderedItem) {
            if (this.isChecked) {
                renderedItem.style.textDecoration = "line-through";
                renderedItem.style.opacity = "0.5";
            }
            wrapper.appendChild(renderedItem);
        }

        parent.appendChild(wrapper);
    }

    accept(builder: IBuilder): void {
         // Override to include checked status in export
         builder.buildListItem(this.contentRef, 0, this.isChecked);
    }
}