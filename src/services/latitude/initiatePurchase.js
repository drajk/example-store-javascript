import axios from "axios";

import prepareRequest from "./prepareRequest";

const API_BASE_URL = process.env.LATITUDE_API_BASE_URL;
const MERCHANT_ID = process.env.LATITUDE_MERCHANT_ID;
const MERCHANT_SECRET = process.env.LATITUDE_MERCHANT_SECRET;

/**
 * Initiates request with Latitude Interest free
 * @param {object} quote
 */
const initiatePurchase = async (quote) => {
  try {
    const data = prepareRequest(quote);

    const response = await axios.post(`${API_BASE_URL}/purchase`, data, {
      // axios auto-generates authorisation header with auth.username and auth.password
      auth: {
        username: MERCHANT_ID,
        password: MERCHANT_SECRET,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response?.data;
  } catch (err) {
    return {
      result: "failed",
      redirectUrl: "/error",
    };
  }
};

export default initiatePurchase;
