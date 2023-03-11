import Highlight from "react-highlight";
import { SiReact } from "react-icons/si";

const Presentation = () => (
  <>
    <div className="col-span-1 p-14">
      <h1 className="mb-5 text-5xl font-bold text-white">React UY</h1>

      <div className="mockup-code rounded-lg bg-[#282c34] pt-5">
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
    <div className="col-span-1 h-full overflow-hidden bg-gray-800 p-12 backdrop-blur-lg">
      <SiReact
        className="h-full w-full duration-[10000ms] motion-safe:animate-spin-slow"
        color="#61DBFB"
      />
    </div>
  </>
);

export default Presentation;
