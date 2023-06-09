import Head from "next/head";
import DownloadCard from "../components/landingPage/DownloadCard";
import GlanceCard from "../components/landingPage/GlanceCard";
import MissionAndVision from "../components/landingPage/MissionAndVission";
import OurValues from "../components/landingPage/OurValues";
import Footer from "../components/landingPage/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Purbani Document Management System</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* <Navbar /> */}
        <DownloadCard />
        <GlanceCard />
        <MissionAndVision />
        <OurValues />
        <Footer />
      </main>

      <footer></footer>
    </div>
  );
}
