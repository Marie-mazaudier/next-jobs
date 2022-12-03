import Head from "next/head";
import Link from "next/link";

import css from "./layout.module.css";

export interface LayoutProps {
  title: string;
  children?:any;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <title>Github Jobs | {title}</title>
    </Head>
    <div className={css.container}>
      <header className={css.header}>
      

        <h1>
        <Link href="/">
          <a><span className={css["header-brand"]}>Github</span> Jobs</a></Link>
        </h1>
        
      </header>
      <main className={css.main}>{children}</main>
      <footer className={css.footer}>Kelvin Mai @ DevChallenges.io</footer>
    </div>
  </>
);
