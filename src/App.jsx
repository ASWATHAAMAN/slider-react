import { Header, Hero, Footer } from "./components.jsx";
import { Data } from "./constants/.index.js";
import { useState } from "react";

const App = () => {
const [data ,setData] = useState(Data)
const [index,setIndex] = useState(0)
const slides = data[index];
  return (
    <>
      <main>
        <Header/>
        <Hero slides={slides} />
        <Footer/>
      </main>
    </>
  );
};

export default App;
