import { CompositeList } from "../components/CompositeList.js";
import { TextItem } from "../components/TextItem.js";
import { Separator } from "../components/Separator.js";
import { IComponent } from "./IComponent.js";
import { StyleFactory } from "../patterns/factory/StyleFactory.js";
import { IRenderStrategy } from "../patterns/bridge/IRenderStrategy.js";
import { MarkdownBuilder } from "../patterns/builder/MarkdownBuilder.js";
import { CheckableDecorator } from "../patterns/decorator/CheckableDecorator.js";

export class AppFacade {
    private root: CompositeList;
    private currentTarget: CompositeList; // Where new items are added
    private currentStrategy: IRenderStrategy;
    private rootElement: HTMLElement;
    private isChecklistMode: boolean = false;
    // Keep track of decorators to toggle mode back if needed (simplified version)
    // In a full app, we would traverse the tree to wrap/unwrap.
    // For this lab, we will wrap new items if mode is on, or rebuild tree.

    constructor(rootId: string) {
        this.root = new CompositeList();
        this.currentTarget = this.root;
        this.currentStrategy = StyleFactory.getStrategy('list');
        this.rootElement = document.getElementById(rootId) as HTMLElement;
        this.refresh();
    }

    addList(): void {
        const newList = new CompositeList();
        this.currentTarget.add(newList);
        this.currentTarget = newList; // Enter the new list
        console.log("Created new group. Current target updated.");
        this.refresh();
    }

    addItem(text: string): void {
        let item: IComponent = new TextItem(text);
        
        if (this.isChecklistMode) {
            item = new CheckableDecorator(item);
        }
        
        this.currentTarget.add(item);
        this.refresh();
    }

    addSeparator(): void {
        this.currentTarget.add(new Separator());
        this.refresh();
    }

    toRoot(): void {
        this.currentTarget = this.root;
        console.log("Returned to root.");
    }

    toggleViewMode(mode: 'list' | 'grid'): void {
        this.currentStrategy = StyleFactory.getStrategy(mode);
        this.refresh();
    }

    toggleChecklistMode(): void {
        this.isChecklistMode = !this.isChecklistMode;
        alert(`Checklist mode is now: ${this.isChecklistMode ? 'ON (New items will be checkable)' : 'OFF'}`);
    }

    downloadMarkdown(): void {
        const builder = new MarkdownBuilder();
        builder.buildHeader("My Exported List");
        this.root.accept(builder);
        
        const blob = new Blob([builder.getResult()], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'list.md';
        a.click();
    }

    private refresh(): void {
        this.rootElement.innerHTML = "";
        this.root.render(this.rootElement, this.currentStrategy);
    }
}