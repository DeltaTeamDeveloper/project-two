import { useRouter } from "next/router";
//
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footer404 from "@/components/Footer404";
//
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }) {

  const router = useRouter();

  const newfooter =
    router.pathname == '/404';

  return (
    <>
      <Header />

      <Component {...pageProps} />

      {newfooter ? (

        <Footer404 />

      ) : (

        <Footer />

      )}

    </>
  );
}
