export const MERCHANT_ID = process.env.LATITUDE_MERCHANT_ID;
export const IS_PRODUCTION = process.env.IS_PRODUCTION;

export const AXIOS_CONFIG = {
  // axios auto-generates authorisation header with auth.username and auth.password
  auth: {
    username: MERCHANT_ID,
    password: process.env.LATITUDE_MERCHANT_SECRET,
  },
  headers: {
    "Content-Type": "application/json",
  },
};

export const ENDPOINTS = {
  PURCHASE: `${API_BASE_URL}/purchase`,
  VERIFY_PURCHASE: `${API_BASE_URL}/purchase/verify`,
};
