import type { ReactElement } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

const ApplicationLayout = ({ children }: { children: ReactElement }) => (
  <>
    <Header />

    <main className="min-h-screen overflow-x-hidden">{children}</main>

    <Footer />
  </>
);

export default ApplicationLayout;
