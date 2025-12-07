import { IRenderStrategy } from "../patterns/bridge/IRenderStrategy.js";
import { IBuilder } from "../patterns/builder/IBuilder.js";

export interface IComponent {
    add(component: IComponent): void;
    remove(component: IComponent): void;
    render(parent: HTMLElement, strategy: IRenderStrategy): void;
    accept(builder: IBuilder): void;
}