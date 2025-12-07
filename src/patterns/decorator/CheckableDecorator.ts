import { BaseDecorator } from "./BaseDecorator.js";
import { IRenderStrategy } from "../bridge/IRenderStrategy.js";
import { IBuilder } from "../builder/IBuilder.js";

export class CheckableDecorator extends BaseDecorator {
    private isChecked: boolean = false;
    private contentRef: string = ""; 

    constructor(wrappee: any) {
        super(wrappee);
        if (wrappee['content']) {
            this.contentRef = wrappee['content'];
        }
    }

    toggle(): void {
        this.isChecked = !this.isChecked;
    }

    render(parent: HTMLElement, strategy: IRenderStrategy): void {
        // Wrapper for structure
        const wrapper = document.createElement("div");
        wrapper.classList.add("checklist-wrapper");

        if (this.isChecked) {
            wrapper.classList.add("is-checked");
        }

        // Custom stylized Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = this.isChecked;
        checkbox.classList.add("custom-checkbox");
        
        checkbox.onclick = () => {
            this.toggle();
            // Toggle visual class immediately without full re-render
            if (this.isChecked) {
                wrapper.classList.add("is-checked");
            } else {
                wrapper.classList.remove("is-checked");
            }
        };

        wrapper.appendChild(checkbox);

        // Render content
        const tempContainer = document.createElement("div");
        super.render(tempContainer, strategy);
        
        const renderedItem = tempContainer.firstElementChild as HTMLElement;
        if (renderedItem) {
            // Remove default item margins to fit in wrapper
            renderedItem.style.margin = "0"; 
            wrapper.appendChild(renderedItem);
        }

        parent.appendChild(wrapper);
    }

    accept(builder: IBuilder): void {
         builder.buildListItem(this.contentRef, 0, this.isChecked);
    }
}