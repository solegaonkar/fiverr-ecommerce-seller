/*
 * --------------------------------------------------------------------------- *
 * File: OrderItem.js                                                          *
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

import React from "react";
import { Cloud } from "../main/cloud";
import { Constants } from "../main/constants";

function OrderItem({ item, refresh }) {
  var { id, title, price, buyerName, buyerAddress, orderStatus } = item;

  const completeOrder = async () => {
    await Cloud.post(Constants.API, { action: "COMPLETE_ORDER", data: { id } });
    refresh();
  };

  const reopenOrder = async () => {
    await Cloud.post(Constants.API, { action: "REOPEN_ORDER", data: { id } });
    refresh();
  };
  return (
    <div className="col-12 col-md-6 text-dark">
      <div className="p-4 mt-4 shadow-lg border border-dark border-3 bg-light rounded-4">
        <h4 className="border border-dark border-0 rounded-2 p-2">{title}</h4>
        <hr />
        <div className="p-4 border border-dark border-1 rounded-2">
          <p className="">
            Product ID: {id} <br /> Price: ${price}
          </p>
          <p>
            <>Buyer: </> {buyerName}
            <br /> <>Address: </> {buyerAddress}
          </p>
          <div className=" text-right">
            {orderStatus === "CLOSED" ? (
              <button className="btn btn-sm btn-primary" onClick={(e) => reopenOrder()}>
                Reopen
              </button>
            ) : (
              <button className="btn btn-sm btn-danger" onClick={(e) => completeOrder()}>
                Mark Complete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
