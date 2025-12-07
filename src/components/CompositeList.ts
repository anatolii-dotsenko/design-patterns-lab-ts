import { IComponent } from "../core/IComponent.js";
import { IRenderStrategy } from "../patterns/bridge/IRenderStrategy.js";
import { IBuilder } from "../patterns/builder/IBuilder.js";

export class CompositeList implements IComponent {
    private children: IComponent[] = [];

    add(component: IComponent): void {
        this.children.push(component);
    }

    remove(component: IComponent): void {
        const index = this.children.indexOf(component);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    render(parent: HTMLElement, strategy: IRenderStrategy): void {
        const container = strategy.renderContainer(parent);
        this.children.forEach(child => child.render(container, strategy));
    }

    accept(builder: IBuilder): void {
        this.children.forEach(child => child.accept(builder));
    }
}