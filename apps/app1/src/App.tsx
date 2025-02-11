import React from "react";

import "@repo/ui/styles.css"
// import { Button } from "@repo/ui/components/button"

export function App() {


  return (
    <React.StrictMode>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold font-geist">Hello World</h1>
          <button className="font-geist" size="sm">Button</button>
        </div>
      </div>
    </React.StrictMode>
  );
}
export default App;
