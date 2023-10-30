const Hero = ({ slides }) => {
  const {
    title,
    h2,
    text,
    imgOne,
    imgOneText,
    imgOneWord,
    imgTwo,
    imgTwoText,
    imgTwoWord,
    imgThree,
    imgThreeText,
    imgThreeWord,
    imgFour,
    imgFourText,
    imgFourWord,
    bgOneImg
  } = slides;
  return (
    <>
    <div><img src={bgOneImg} className="relative h-[30rem] w-full" alt="" /></div>
      <main className="w-[90%] mx-auto ml-[4rem] mt-[3rem] flex gap-[8rem] absolute top-[5rem] left-0 text-white">
        <div className="flex flex-col w-[55%] ">
          <div className="border-t-[6px] border-black w-[2%] rounded-md mb-[10px]"></div>
          <h1 className="font-[700] text-[18px]">{title}</h1>
          <h2 className="text-[80px] w-[20%] font-[900] font-sans leading-[5.5rem]">
            {h2}
          </h2>
          <p className="w-[50%] text-[14px] font-[700] mt-[1rem] ">{text}</p>
        </div>
        <div className="w-[15%] h-[20rem] flex gap-[1rem] ml-[-20rem] relative">
          <img src={imgOne} className="rounded-2xl" alt="img" />
          <img src={imgTwo} className="rounded-2xl" alt="img" />
          <img src={imgThree} className="rounded-2xl" alt="img" />
          <img src={imgFour} className="rounded-2xl" alt="img" />
          <div className="border-t-[6px] border-white w-[10%] rounded-md mb-[10px] absolute top-[14.5rem] left-[1rem] "></div>
          <span className="absolute top-[15rem] font-[700] text-white left-[1rem]">
            {imgOneText}
          </span>
          <span className="absolute top-[16rem] font-[800] text-[17px] text-white left-[1rem]">
            {imgOneWord}
          </span>
          <div className="border-t-[6px] border-white w-[10%] rounded-md mb-[10px] absolute top-[14.5rem] left-[14rem] "></div>
          <span className="absolute top-[15rem] font-[700] text-white left-[14rem]">
            {imgTwoText}
          </span>
          <span className="absolute top-[16rem] font-[800] text-[15px] text-white left-[14rem]">
            {imgTwoWord}
          </span>
          <div className="border-t-[6px] border-white w-[10%] rounded-md mb-[10px] absolute top-[14.5rem] left-[25rem] "></div>
          <span className="absolute top-[15rem] font-[700] text-white left-[25rem]">
            {imgThreeText}
          </span>
          <span className="absolute top-[16.3rem] font-[800] text-[15px] text-white left-[25rem]">
            {imgThreeWord}
          </span>
          <div className="border-t-[6px] border-white w-[10%] rounded-md mb-[10px] absolute top-[14.5rem] left-[37rem] "></div>
          <span className="absolute top-[15rem] font-[700] text-white left-[37rem]">
            {imgFourText}
          </span>
          <span className="absolute top-[16.2rem] font-[800] text-[15px] text-white left-[37rem]">
            {imgFourWord}
          </span>
        </div>
        
      </main>
    </>
  );
};

export { Hero };
