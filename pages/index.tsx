
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState( );
  const [hours, setHours] = useState( );
  const [minutes, setMinutes] = useState( );
  const [seconds, setSeconds] = useState( );

  useEffect(() => {
    const target = new Date("12/31/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      {partyTime ? (
        <>
          <h1>Happy new year!</h1>
          <video autoPlay loop muted>
            <source src="/party.mp4" />
          </video>
        </>
      ) : (
        <>
          <div className="timer-wrapper">
            <div className="timer-inner">
              <div className="timer-segment">
                <span className="time">{days}</span>
                <span className="label"></span>
              </div>
              <span className="divider"></span>
              <div className="timer-segment">
                <span className="time">{hours}</span>
                <span className="label"></span>
              </div>
              <span className="divider"></span>
              <div className="timer-segment">
                <span className="time">{minutes}</span>
                <span className="label"></span>
              </div>
              <span className="divider"></span>
              <div className="timer-segment">
                <span className="time">{seconds}</span>
                <span className="label"></span>
              </div>
            </div>
          </div>
         
        </>
      )}
    </div>
  );
};

export default Home;
