import { Header, Hero, Footer } from "./components.jsx";
import { Data } from "./constants/.index.js";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const slides = data[index];
  const prevSlide = (slide) => {
    console.log(slide);
    const lastIndex = data.length - 1;
    if(index === 0){
      setIndex(lastIndex)
      return;
    }
    setIndex(slide - 1)
  };
  const nextSlide = (slide) => {
    const lastIndex = data.length -1
    if(index === lastIndex){
      setIndex(0)
      return;
    }
    setIndex(slide + 1)
  };
  console.log(index);
  return (
    <>
      <main>
        <Header />
        <Hero slides={slides} />
        <Footer prevSlide={prevSlide} nextSlide={nextSlide}index={index} />
      </main>
    </>
  );
};

export default App;
