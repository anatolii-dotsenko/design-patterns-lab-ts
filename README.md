Here is a comprehensive `README.md` file for your project. It documents the architecture, the design patterns applied, and provides clear instructions on how to build and run the application.

### `README.md`

````markdown
# TS Composite List Editor

A framework-free Single Page Application (SPA) built with TypeScript. This project demonstrates advanced Object-Oriented Programming principles by implementing a hierarchical list editor using multiple structural and creational design patterns.

## 📋 Features

* **Hierarchical Structure:** Create infinitely nested lists and groups.
* **Dynamic Rendering:** Switch between "List View" and "Grid/Card View" instantly without changing the underlying data structure.
* **Interactive Elements:** Toggle "Checklist Mode" to wrap items with checkbox functionality dynamically.
* **Export:** Generate and download a Markdown (`.md`) representation of your current structure.
* **Zero Dependencies:** Built with vanilla TypeScript and SCSS.

## 🏗 Architecture & Design Patterns

This project is an educational implementation of the following GoF design patterns:

| Pattern | Type | Implementation Purpose |
| :--- | :--- | :--- |
| **Composite** | Structural | Manages the recursive tree structure of the data (`CompositeList` contains `TextItem` or other `CompositeList`s). |
| **Bridge** | Structural | Decouples the content (Data) from the visual representation (DOM). Allows switching between `ListStrategy` and `GridStrategy`. |
| **Decorator** | Structural | Dynamically adds "Checkable" behavior (checkboxes) to existing items without altering the `TextItem` class. |
| **Builder** | Creational | Encapsulates the logic for traversing the tree and generating a formatted Markdown string. |
| **Factory / Flyweight** | Creational | `StyleFactory` ensures we reuse rendering strategy instances (memory optimization) instead of creating new ones for every render cycle. |
| **Facade** | Structural | `AppFacade` provides a simplified interface for the UI to interact with the complex underlying system. |

## 🚀 How to Run

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* NPM (comes with Node.js)

### 1. Installation

Open your terminal in the project root directory and install dependencies:

```bash
npm install
````

### 2\. Building the Project

Compile the TypeScript and SCSS files into the `dist` folder:

```bash
npm run build
```

### 3\. Running the Application

Start the local HTTP server to view the application:

```bash
npm start
```

  * The terminal will show a URL (usually `http://127.0.0.1:8080`).
  * Open that URL in your browser.

### 4\. Development Mode (Optional)

If you are modifying the code, you can run the watcher to automatically recompile on file changes:

```bash
npm run watch
```

## 🎮 Usage Guide

1.  **Add Group:** Creates a new nested container. *Note: All subsequent items will be added inside this new group until you click "To Root".*
2.  **Add Item:** Adds a simple text node to the current group.
3.  **Add Separator:** Adds a visual divider.
4.  **To Root:** Resets the insertion point back to the main list (exiting any nested groups).
5.  **Toggle View:** Switches the visual renderer between a standard HTML List and a Grid of Cards.
6.  **Toggle Checkboxes:** Enables "Decorator Mode". Any **new** items added will be wrapped with a checkbox.
7.  **Export MD:** Downloads the current tree structure as a `list.md` file.

## 📂 Project Structure

```text
src/
├── components/       # Composite Pattern (Data Structure)
├── core/             # Facade and Base Interfaces
├── patterns/         # Design Pattern Implementations
│   ├── bridge/       # Rendering Strategies
│   ├── builder/      # Markdown Export Logic
│   ├── decorator/    # Checklist Wrappers
│   └── factory/      # Strategy Creation
├── styles/           # SCSS Source files
└── index.ts          # Entry Point
```

## 📜 License

This project is created for educational purposes.

```

---