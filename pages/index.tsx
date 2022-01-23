import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Curious Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>
        <div>
          <h1>CuriousityExploring is a place tto write, read and connect</h1>
          <h2>
            It is easy and free to post your thinking on any topic and connect
            with millions of folks
          </h2>
        </div>
        <div></div>
      </div>
    </div>
  );
}
