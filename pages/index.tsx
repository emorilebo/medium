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
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              CuriousityExploring
            </span>{" "}
            is a place to write, read and connect
          </h1>
          <h2>
            It is easy and free to post your thinking on any topic and connect
            with millions of folks
          </h2>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
