import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Crickets Studios / Home";
  });

  return (
    <section className="container mt-5">
      <h1>Crickets Studios</h1>
    </section>
  );
}
