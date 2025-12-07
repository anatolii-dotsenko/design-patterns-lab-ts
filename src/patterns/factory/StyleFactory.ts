import { IRenderStrategy } from "../bridge/IRenderStrategy.js";
import { ListStrategy } from "../bridge/ListStrategy.js";
import { GridStrategy } from "../bridge/GridStrategy.js";

export class StyleFactory {
    // Flyweight storage
    private static strategies: Map<string, IRenderStrategy> = new Map();

    static getStrategy(type: 'list' | 'grid'): IRenderStrategy {
        if (!this.strategies.has(type)) {
            if (type === 'list') {
                this.strategies.set(type, new ListStrategy());
            } else {
                this.strategies.set(type, new GridStrategy());
            }
        }
        return this.strategies.get(type)!;
    }
}