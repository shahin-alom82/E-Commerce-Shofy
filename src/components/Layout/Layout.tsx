"use client"

import { persistor, store } from "@/constants/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loaader from "./Loader";


const Layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <SessionProvider>
                  <Provider store={store}>
                        <PersistGate loading={<Loaader />} persistor={persistor}>
                              {children}
                        </PersistGate>
                  </Provider>
            </SessionProvider>
      );
};

export default Layout;