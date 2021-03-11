import axios from "axios";
import { AXIOS_CONFIG, ENDPOINTS } from "./common";

const ERROR_RESPONSE = {
  result: "failed",
};

/**
 * Verifies purchase request with Latitude Interest free
 * @param {string} merchantReference
 * @param {string} transactionRefeference
 * @param {string} gatewayReference
 */
export const verifyPurchase = async ({
  merchantReference = "",
  transactionRefeference = "",
  gatewayReference = "",
}) => {
  try {
    const data = {
      merchantReference,
      transactionRefeference,
      gatewayReference,
    };

    const response = await axios.get(
      ENDPOINTS.VERIFY_PURCHASE,
      data,
      AXIOS_CONFIG
    );

    return response?.data;
  } catch (err) {
    return ERROR_RESPONSE;
  }
};
