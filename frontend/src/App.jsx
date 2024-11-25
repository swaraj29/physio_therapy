import React from "react";
import Header from "./components/Header";
import Tags from "./components/Tags";
import ExerciseProgramme from "./components/ExerciseProgramme";
import Controls from "./components/Controls";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import Schedule from "./components/schedule";

function App() {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <Header />
      <Tags />
      <ExerciseProgramme />
      <Controls />
      <Schedule/>
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
