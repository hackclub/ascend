"use client";

import dynamic from "next/dynamic";

// The animation uses viewport dimensions and must mount in the browser.
const App = dynamic(() => import("../App"), { ssr: false });

export default function Page() {
  return <App />;
}
