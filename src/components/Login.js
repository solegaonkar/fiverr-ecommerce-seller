/*
 * --------------------------------------------------------------------------- *
 * File: Login.js                                                              *
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

import React, { useContext, useState } from "react";
import { Cloud } from "../main/cloud";
import { Constants } from "../main/constants";
import { AppContext } from "../main/context";

const sha1 = require("sha1");

function Login() {
  const { setAuthenticated } = useContext(AppContext);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    var response = await Cloud.post(Constants.API, { action: "LOGIN", data: { userId, password: sha1(password) } });
    if (response.token) {
      Cloud.setToken(response.token);
      setAuthenticated(true);
    } else {
      alert("Invalid username/password");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-12 col-md-6 text-center border border-danger border shadow rounded-3 p-4 mt-4 mb-4 ">
          <h3>Login</h3>
          <hr />
          <input
            type={"text"}
            className="wide p-2 mt-4"
            placeholder="User Name"
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type={"password"}
            className="wide p-2 mt-4"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-danger mt-4" onClick={(e) => login()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
