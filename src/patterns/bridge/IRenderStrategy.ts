export interface IRenderStrategy {
    renderContainer(element: HTMLElement): HTMLElement;
    renderItem(content: string, isChecked?: boolean): HTMLElement;
    renderSeparator(): HTMLElement;
}