import type { ReactElement } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

const ApplicationLayout = (page: ReactElement) => (
  <>
    <Header />

    <main className="overflow-x-hidden">{page}</main>

    <Footer />
  </>
);

export default ApplicationLayout;
