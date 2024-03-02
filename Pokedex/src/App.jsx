import React from "react";
import Aside from "./components/aside";
import Pokemons from "./components/pokemons";

function App() {
  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto px-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[lfr_350px]">
        <Pokemons/>
        <Aside/>
      </main>
    </section>
  );
}

export default App;
