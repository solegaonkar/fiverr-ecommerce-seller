/*
 * --------------------------------------------------------------------------- *
 * File: context.js                                                            *
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

import React, { useState, createContext } from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [orderList, setOrderList] = useState([
    {
      id: "1",
      image: "images/product01.jpg",
      price: 10,
      title: "Tank Top",
      buyerName: "Mark Zucherberg",
      buyerAddress: "1 Hacker Way, Menlo Park, 94025 CA, United States of America.",
    },
    {
      id: "2",
      image: "images/product02.jpg",
      price: 10,
      title: "Polo-Shirt",
      buyerName: "Sundar Pitchai",
      buyerAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    },
    {
      id: "3",
      image: "images/product03.jpg",
      price: 10,
      title: "T-Shirt",
      buyerName: "Andy Jassy",
      buyerAddress: "410 Terry Ave N, Seattle, Washington 98109, US",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        orderList,
        setOrderList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
