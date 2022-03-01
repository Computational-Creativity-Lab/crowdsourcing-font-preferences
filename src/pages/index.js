import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import FontCard from "../components/FontCard";
import styles from "./index.module.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  const [qCount, setQCount] = useState(0);
  const handleQCount = () => {
    setQCount(qCount + 1);
    console.log("clicked");
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Crowdsourcing Font Preferences</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.globalContainer}>
        <Navbar></Navbar>
        <div className={styles.container}>
          <div className={styles.leftCol}>
            <div className={styles.topLeft}>
              <h2 className={styles.question}> Choose a font that feels</h2>
              <h1 className={styles.adjective}> Playful</h1>
            </div>

            <h3 className={styles.bottomLeft}>Q{qCount}/10</h3>
          </div>
          <div className={styles.rightCol}>
            <motion.div onClick={handleQCount} className={styles.topRight}>
              <FontCard></FontCard>
            </motion.div>
            <div onClick={handleQCount} className={styles.bottomRight}>
              <FontCard></FontCard>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
