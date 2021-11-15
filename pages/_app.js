import { createStore } from "redux";
import allReducers from "../Redux/Reducers";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";

import "tailwindcss/tailwind.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {

  const store = createStore(allReducers)

  return (
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute='class'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true" />
        <link href='https://fonts.googleapis.com/css2?family=Oswald&family=Playfair+Display&family=Roboto&display=swap' rel='stylesheet' />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
  );
}

export default MyApp;
