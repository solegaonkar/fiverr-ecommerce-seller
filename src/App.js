/*
 * --------------------------------------------------------------------------- *
 * File: App.js                                                                *
 * Project: seller                                                             *
 * Created Date: 12 Oct 2022                                                   *
 * Author: Vikas K Solegaonkar (vikas@crystalcloudsolutions.com)               *
 * Copyright (c) 2022 Vikas K Solegaonkar                                      *
 * Crystal Cloud Solutions (https://crystalcloudsolutions.com)                 *
 *                                                                             *
 * Last Modified: Wed Oct 12 2022                                              *
 * Modified By: Vikas K Solegaonkar                                            *
 *                                                                             *
 * HISTORY:                                                                    *
 * --------------------------------------------------------------------------- *
 * Date         By     Comments                                                *
 * --------------------------------------------------------------------------- *
 */

import { AppContext, AppContextProvider } from "./main/context";
import Header from "./components/Header";
import OrderList from "./components/OrderList";
import { useContext } from "react";
import Login from "./components/Login";

function Body() {
  const { authenticated } = useContext(AppContext);
  return authenticated ? (
    <>
      <Header />
      <OrderList />
    </>
  ) : (
    <Login></Login>
  );
}
function App() {
  return (
    <AppContextProvider>
      <Body />
    </AppContextProvider>
  );
}

export default App;
