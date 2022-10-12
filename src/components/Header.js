/*
 * --------------------------------------------------------------------------- *
 * File: Header.js                                                             *
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

function Header() {
  const { cart } = useContext(AppContext);
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-danger text-light">
        <div className="container-fluid">
          <h1>Shop Online</h1>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-right"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
