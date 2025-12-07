import { IComponent } from "../../core/IComponent.js";
import { IRenderStrategy } from "../bridge/IRenderStrategy.js";
import { IBuilder } from "../builder/IBuilder.js";

export abstract class BaseDecorator implements IComponent {
    constructor(protected wrappee: IComponent) {}

    add(component: IComponent): void {
        this.wrappee.add(component);
    }

    remove(component: IComponent): void {
        this.wrappee.remove(component);
    }

    render(parent: HTMLElement, strategy: IRenderStrategy): void {
        this.wrappee.render(parent, strategy);
    }

    accept(builder: IBuilder): void {
        this.wrappee.accept(builder);
    }
}