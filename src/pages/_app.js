import "@/styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
