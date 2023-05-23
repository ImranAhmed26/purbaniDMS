import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import DownloadCard from "../components/DownloadCard";
import GlanceCard from "../components/GlanceCard";
import MissionAndVision from "../components/MissionAndVission";
import OurValues from "../components/OurValues";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Purbani DMS</title>
        <meta name="description" content="this is the website of purbani DMS. purbani group is a crappa de coco" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-main-global h-screen">
        <Navbar />
        <DownloadCard />
        <GlanceCard />
        <MissionAndVision />
        <OurValues />
        <Footer />
      </main>

      <footer>
      </footer>
    </div>
  );
}
