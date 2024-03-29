import Button from '@/components/atoms/Button';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import Link from 'next/link';

const PresenterSection = () => (
  <SectionWrapper left>
    <div className="py-28">
      <h2 className="mb-4 text-4xl font-bold text-gray-100">
        ¿Quiéres ser un orador en las meet ups?
      </h2>

      <p className="mb-8 px-12 text-gray-400 md:px-32 xl:px-72">
        Al compartir tus ideas, puedes influir en la forma en que otros abordan los desafíos y ayudar
        a avanzar en la evolución de ReactJS. Puede ser una experiencia transformadora que te ayude a
        crecer profesionalmente y a establecer nuevas conexiones con personas que comparten tus
        intereses y pasiones.
      </p>

      <Link href="/presenter/join">
        <Button type="button" variant="primary" outline>
          ¡Quiero ser orador!
        </Button>
      </Link>
    </div>
  </SectionWrapper>
);

export default PresenterSection;
