import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>ガス代不要！ひとジェネフリーミント会場へようこそ！</h1>
        <p className={styles.description}>ウォレットをお持ちでない方は「Continue as guest」からかんたんにウォレットが作れます！</p>
      </header>
      <main className={styles.main}>
        <h2 className={styles.subtitle}>フリーミント対象NFT</h2>
        <div className={styles.nftList}>
          <div className={styles.nft}>
            <Image src="https://ipfs.thirdwebcdn.com/ipfs/QmRjsrfxDTDpHMmgngEww1k2qSQpvuqej4PMKv26DmKooS/0.gif" alt="" width={300} height={300} />
            <h3 className={styles.nftTitle}>どちらのボタンでもいいのでウォレットを接続/作成し、その後「Mint!」を押してください。<br />OpenSeaではHiddenに入ります。</h3>
            <div className={styles.buttonsWrapper}>
              <div className={styles.button}>
                <ConnectWallet />
              </div>
              <div className={styles.button}>
                <Web3Button
                  className={styles.nftButton}
                  contractAddress="0xb515bc792E5C9dB2C7b920DA641FCBbC41519285"
                  action={(contract) => contract.erc1155.claim(0, 1)}
                >
                  Mint!
                </Web3Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a className={styles.footerLink} href="https://discord.gg/FCDqbk53PG" target="_blank" rel="noopener noreferrer">
          <div className={styles.center}>
            ひとりでジェネるもんDiscordサーバーはこちら
          </div>
        </a>
      </footer>
    </div>
  );
};

export default Home;
