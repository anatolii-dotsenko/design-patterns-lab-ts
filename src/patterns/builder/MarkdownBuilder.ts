import { IBuilder } from "./IBuilder.js";

export class MarkdownBuilder implements IBuilder {
    private result: string = "";

    buildHeader(text: string): void {
        this.result += `# ${text}\n\n`;
    }

    buildListItem(text: string, depth: number, checked?: boolean): void {
        const indent = "  ".repeat(depth);
        const prefix = (typeof checked === 'boolean') 
            ? `- [${checked ? 'x' : ' '}]` 
            : "-";
        
        this.result += `${indent}${prefix} ${text}\n`;
    }

    buildSeparator(): void {
        this.result += `\n---\n\n`;
    }

    getResult(): string {
        return this.result;
    }
}