import { useEffect, useState } from "react";

export default function Intro() {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>I&apos;m <span>Purnama Anugrah</span><br />Web developer,<br />especially backend side</p>
        <a href="">Contact me</a>
      </div>
      <div>
        <img src="/img/me.png" alt="" />
      </div>
    </section>
  );
}