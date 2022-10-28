import React from 'react';
import { StateContext } from '../context/StateContext';
import NextNProgress from 'nextjs-progressbar';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <NextNProgress
                color="orange"
                startPosition={0.1}
                stopDelayMs={20}
                height={5}
            />
            {/* <NotificationContainer /> */}
            <ReactNotifications />

            <Component {...pageProps} />
        </StateContext>
    );
}
export default MyApp;
