import '../css/main.css';
import { WithNinetailedProvider } from '../utils/ninetailed-helpers';

export default function MyApp({ Component, pageProps }) {
    return (
        <WithNinetailedProvider>
            <Component {...pageProps} />
        </WithNinetailedProvider>
    );
}
