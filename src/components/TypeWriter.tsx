import TypewriterComponent from 'typewriter-effect'; // Ensure you have this installed

const TypeWriter = () => {
  return (
    <div className="flex lg:items-start lg:justify-start items-center justify-center">
      <div className="text-white mr-3">
        <h1>{"Discover "}</h1>
      </div>
      <div className="bg-gradient-to-l from-amber-500 to-amber-800 bg-clip-text text-transparent">
        <TypewriterComponent
          options={{
            strings: ["Mr Kofi"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </div>
    </div>
  );
};

export default TypeWriter;


