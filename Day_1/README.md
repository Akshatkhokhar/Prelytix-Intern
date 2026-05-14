# Prelytix Project Documentation

## 1. Virtual DOM & Stamina Updates
When the stamina state changes, React creates a new Virtual DOM tree and compares it with the previous version using its diffing algorithm. It then calculates the most efficient way to update the real DOM, ensuring that only the stamina bar and button text are updated rather than re-rendering the entire webpage.

## 2. Modulus Logic Snippet
The following logic handles the "5th-click bug" where stamina drops significantly every fifth interaction:

```javascript
const handleWriteCode = () => {
  const newClickCount = clickCount + 1;
  setClickCount(newClickCount);

  let reduction = 2;
  if (newClickCount % 5 === 0) {
    reduction = 15;
  }

  setStamina((prev) => Math.max(0, prev - reduction));
};
```

## 3. Vite vs. Create React App (CRA)
| Feature | Vite | Create React App (CRA) |
| :--- | :--- | :--- |
| **Build Engine** | Uses **esbuild** (Go-based) for pre-bundling, making it extremely fast. | Uses **Webpack**, which can become slow as the project size increases. |
| **HMR Speed** | Fast **Hot Module Replacement** via native ESM, independent of project size. | HMR slows down as more modules are added to the Webpack dependency graph. |
| **Flexibility** | Offers a simple, extensible plugin system based on **Rollup**. | Requires **"ejecting"** to access or modify underlying Webpack configurations. |
