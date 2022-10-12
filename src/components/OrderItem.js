/*
 * --------------------------------------------------------------------------- *
 * File: OrderItem.js                                                          *
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

import React from "react";

function OrderItem({ item }) {
  var { id, title, price, buyerName, buyerAddress } = item;
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
            <button className="btn btn-sm btn-danger">Mark Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
