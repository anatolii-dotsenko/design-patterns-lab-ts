import { IComponent } from "../core/IComponent.js";
import { IRenderStrategy } from "../patterns/bridge/IRenderStrategy.js";
import { IBuilder } from "../patterns/builder/IBuilder.js";

export class Separator implements IComponent {
    add(): void {}
    remove(): void {}

    render(parent: HTMLElement, strategy: IRenderStrategy): void {
        const element = strategy.renderSeparator();
        parent.appendChild(element);
    }

    accept(builder: IBuilder): void {
        builder.buildSeparator();
    }
}