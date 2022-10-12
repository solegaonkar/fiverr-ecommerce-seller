/*
 * --------------------------------------------------------------------------- *
 * File: OrderList.js                                                          *
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

import React, { useContext } from "react";
import { AppContext } from "../main/context";
import OrderItem from "./OrderItem";

function OrderList() {
  const { orderList } = useContext(AppContext);

  return (
    <div className="container">
      <div className="row">
        {orderList.map((o) => (
          <OrderItem item={o} />
        ))}
      </div>
    </div>
  );
}

export default OrderList;
