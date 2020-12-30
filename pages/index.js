import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Nosotros } from '../components/Nosotros';
import { Services } from '../components/Services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner />
      <Nosotros />
      <Services />
      <Contact />
    </div>
  );
}
