import { AppProps } from 'next/app'
import Head from "next/head";
// add bootstrap css 
import { GlobalStyles } from 'twin.macro'
import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles/>
      <Component {...pageProps} />
    </div>
     
    
  );
  }

export default MyApp
