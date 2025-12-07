export interface IBuilder {
    buildHeader(text: string): void;
    buildListItem(text: string, depth: number, checked?: boolean): void;
    buildSeparator(): void;
    getResult(): string;
}