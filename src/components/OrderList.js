/*
 * --------------------------------------------------------------------------- *
 * File: OrderList.js                                                          *
 * Project: seller                                                             *
 * Created Date: 12 Oct 2022                                                   *
 * Author: Vikas K Solegaonkar (vikas@crystalcloudsolutions.com)               *
 * Copyright (c) 2022 Vikas K Solegaonkar                                      *
 * Crystal Cloud Solutions (https://crystalcloudsolutions.com)                 *
 *                                                                             *
 * Last Modified: Sun Oct 16 2022                                              *
 * Modified By: Vikas K Solegaonkar                                            *
 *                                                                             *
 * HISTORY:                                                                    *
 * --------------------------------------------------------------------------- *
 * Date         By     Comments                                                *
 * --------------------------------------------------------------------------- *
 */

import React, { useContext, useEffect } from "react";
import { Constants } from "../main/constants";
import { AppContext } from "../main/context";
import OrderItem from "./OrderItem";
import { Cloud } from "../main/cloud";

function OrderList() {
  const { orderList, setOrderList } = useContext(AppContext);

  useEffect(() => {
    Cloud.post(Constants.API, { action: "ORDER_LIST" }).then((value) => setOrderList(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = async () => {
    Cloud.post(Constants.API, { action: "ORDER_LIST" }).then((value) => setOrderList(value));
  };

  return (
    <div className="container">
      <div className="row">
        {orderList.map((o) => (
          <OrderItem item={o} refresh={refresh} />
        ))}
      </div>
    </div>
  );
}

export default OrderList;
