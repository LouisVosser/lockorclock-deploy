import Head from "next/head";

export default function Home() {
  return (
    <div className="text-center p-10">
      <Head>
        <title>LockOrClock</title>
      </Head>
      <h1 className="text-4xl font-bold">LOCK IN OR CLOCK IN</h1>
      <p className="mt-4 text-lg italic">Make your choice: generational wealth or eternal 9-to-5.</p>
    </div>
  );
}
