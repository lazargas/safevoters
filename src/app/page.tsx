import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>Voter DAO</title>
      </Head>
      <Navbar />
      <div className="bckground">
        <p className="heading cursor-none">Cast Your Vote Today</p>
        <p className="heading cursor-none ">
          Use our end to end encrypted decentralised Voting DAO
        </p>
        <Footer />
      </div>
    </>
  );
}
