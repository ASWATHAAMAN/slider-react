const Hero = ({ slides }) => {
  const { title, h2, text } = slides;
  return (
    <>
      <main className="w-[90%] mx-auto mt-[5rem]">
        <div className="border-t-[6px] border-black w-[2%] rounded-md mb-[10px]"></div>
        <h1 className="font-[700] text-[18px]">{title}</h1>
        <h2 className="text-[80px] w-[20%] font-[900] font-sans leading-[5.5rem]">
          {h2}
        </h2>
        <p className="w-[35%] text-[14px] font-[700] ">{text}</p>
      </main>
    </>
  );
};

export { Hero };
