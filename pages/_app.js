import { createWrapper } from "next-redux-wrapper";
import { makeStore } from "../src/redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp, { debug: true });
