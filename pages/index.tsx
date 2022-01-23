import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { relative } from "path/posix";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to1 <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <p>
          <Link href="/about" prefetch={false}>
            <a>Go to About Page</a>
          </Link>
        </p>

        <div>
          <Image
            src="http://demo.hadmedical.vn/fileserver/images/file/fixsize-1600x620/upload/addon/banner/W5e158ab3f05ca/homebanner2.png?v=1.00"
            alt="profile"
            width={1600}
            height={620}
            quality={100}
            loading="eager"
            priority
          />
        </div>

        <div>
          <Image
            src="/images/profile.jpg"
            alt="profile"
            width={200}
            height={200}
            quality={100}
            placeholder="blur"
            //blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkkAMAACQAIDzCSzIAAAAASUVORK5CYII="
            blurDataURL="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect style='fill:rgb(150,150,150);' width='100%' height='100%' /></svg>"
          />
        </div>

        <div
          className="abc"
          style={{ width: "100%", height: "400px", position: "relative" }}
        >
          {/* <img src="/images/profile.jpg" alt="profile" /> */}
          <Image
            src="/images/area-designs.jpg"
            alt="profile"
            // width={400}
            // height={400}
            layout="fill"
            objectFit="contain"
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect style='fill:rgb(245,245,245);' width='100%' height='100%' /></svg>"
          />
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
