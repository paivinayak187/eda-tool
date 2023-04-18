import { Provider } from "react-redux";
import store from "../store/store";

export default function MyApp({ Component, pageProps }) {
    console.log("VPAI : MyApp called")
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}