import Head from 'next/head';
import EDAWizard from '../components/wizards/EDAWizard';

export default function EDAHome() {
  return (
    <>
      <Head>
        <title>EDA</title>
      </Head>
      <h1>Escaped Defect Analysis</h1>
      <hr/>
      <EDAWizard />
    </>
  )
}