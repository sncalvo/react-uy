import Highlight from "react-highlight";
import { SiReact } from "react-icons/si";

const Presentation = () => (
  <>
    <div className="col-span-1 -mt-44 p-10 md:mt-0 md:p-14">
      <div className="flex items-center justify-between py-2">
        <h1 className="mb-5 text-5xl font-bold text-white">React UY</h1>
        <div className="flex h-full items-center justify-center overflow-hidden rounded-full bg-gray-800 p-4 backdrop-blur-lg md:hidden">
          <SiReact
            className="h-16 w-16 duration-[10000ms] motion-safe:animate-spin-slow"
            color="#61DBFB"
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
    <div className="col-span-1 hidden h-full overflow-hidden bg-gray-800 p-12 backdrop-blur-lg md:block">
      <SiReact
        className="h-full w-full duration-[10000ms] motion-safe:animate-spin-slow"
        color="#61DBFB"
      />
    </div>
  </>
);

export default Presentation;
