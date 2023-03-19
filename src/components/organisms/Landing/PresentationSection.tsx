import Button from '@/components/atoms/Button';
import Rive from '@rive-app/react-canvas';

const PresentationSection = () => {
  return (
    <div className="flex min-h-screen w-full flex-row items-center justify-center px-8 xl:px-56">
      <div className="flex flex-col gap-5 md:w-1/2 lg:pr-24">
        <div className="flex items-center gap-4 self-start rounded-full bg-gray-200 p-3 px-5 text-center dark:bg-gray-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
          <p className="text-lg text-gray-900 dark:text-gray-200">
            La comunidad del framework más famoso
          </p>
        </div>

        <h2 className="text-6xl font-bold text-gray-900 dark:text-white">
          ¡Bienvenidos a la comunidad ReactJS Uruguay!
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Nuestra comunidad está formada por desarrolladores apasionados de ReactJS y su ecosistema.
          Creemos en el poder de esta tecnología y en su capacidad para transformar la forma en que
          se construyen aplicaciones web modernas. Como tal, nos hemos comprometido a ayudar a que
          la comunidad ReactJS en Uruguay crezca y se fortalezca.
        </p>

        <div className="flex flex-row gap-4 pt-3">
          <Button variant="primary">Empecemos!</Button>
          <Button variant="secondary">Registrarse</Button>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 lg:pl-24">
        <div className="aspect-square w-full max-w-lg rounded-full bg-white shadow duration-[10000ms] motion-safe:animate-spin-slow dark:bg-gray-800">
          <Rive
            src="/rive-animations/react.riv"
            aria-label="Rive logo by Dante from Rive community - https://creativecommons.org/licenses/by/4.0/"
          />
        </div>
      </div>
    </div>
  );
};

export default PresentationSection;
