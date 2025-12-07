import { IComponent } from "../core/IComponent.js";
import { IRenderStrategy } from "../patterns/bridge/IRenderStrategy.js";
import { IBuilder } from "../patterns/builder/IBuilder.js";

export class TextItem implements IComponent {
    constructor(private content: string) {}

    add(component: IComponent): void {
        throw new Error("Cannot add child to leaf node");
    }

    remove(component: IComponent): void {
        throw new Error("Cannot remove child from leaf node");
    }

    render(parent: HTMLElement, strategy: IRenderStrategy): void {
        const element = strategy.renderItem(this.content);
        parent.appendChild(element);
    }

    accept(builder: IBuilder): void {
        builder.buildListItem(this.content, 0, false);
    }
}