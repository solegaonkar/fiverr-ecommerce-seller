/*
 * --------------------------------------------------------------------------- *
 * File: Login.js                                                              *
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

function Login() {
  const { setAuthenticated } = useContext(AppContext);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-12 col-md-6 text-center border border-danger border shadow rounded-3 p-4 mt-4 mb-4 ">
          <h3>Login</h3>
          <hr />
          <input type={"text"} className="wide p-2 mt-4" placeholder="User Name" />
          <input type={"password"} className="wide p-2 mt-4" placeholder="Password" />
          <button className="btn btn-danger mt-4" onClick={(e) => setAuthenticated(true)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
