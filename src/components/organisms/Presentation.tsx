import Highlight from "react-highlight";
import Rive from "@rive-app/react-canvas";

const Presentation = () => (
  <div className="relative grid min-h-screen grid-cols-1 flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-700 md:grid-cols-2 md:p-12">
    <div className="col-span-1 -mt-44 p-8 md:mt-0 md:p-14">
      <div className="-mx-5 flex items-center justify-between py-2">
        <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">
          React UY
        </h1>
        <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gray-800 backdrop-blur-lg md:hidden">
          <Rive
            src="/rive-animations/react.riv"
            aria-label="Rive logo by Dante from Rive community - https://creativecommons.org/licenses/by/4.0/"
          />
        </div>
      </div>

      <div className="mockup-code -mx-6 rounded-lg bg-[#282c34] pt-5">
        <div className="p-8">
          <Highlight>
            {`const Home = () => {
  return (
    <div>
      <h1>React UY</h1>
      <p>Bienvenido a la comunidad de react UY</p>
    </div>
  );
};`}
          </Highlight>
        </div>
      </div>
    </div>
    <div className="col-span-1 hidden items-center justify-center overflow-hidden md:flex">
      <div className="h-[500px] w-[500px] rounded-full bg-gray-800 shadow duration-[10000ms] motion-safe:animate-spin-slow">
        <Rive
          src="/rive-animations/react.riv"
          aria-label="Rive logo by Dante from Rive community - https://creativecommons.org/licenses/by/4.0/"
        />
      </div>
    </div>
  </div>
);

export default Presentation;
