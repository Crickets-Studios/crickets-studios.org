import React, { useEffect } from "react";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Crickets Studios / Home";
  });

  return (
    <section className="container d-flex justify-content-center mt-5">
      <h1>Crickets Studios</h1>
    </section>
  );
}
