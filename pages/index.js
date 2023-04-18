import Head from 'next/head';
import EDAWizard from '../components/EDAWizard';

export default function EDAHome() {
  return (
    <>
      <Head>
        <title>Welcome to EDA</title>
      </Head>
      <h1>EDA</h1>
      <EDAWizard />
    </>
  )
}