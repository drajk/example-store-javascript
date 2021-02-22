const MERCHANT_ID = "someMerchantID";
const SCRIPT_IDENTIFIER = "latitudeCheckoutScript";
const SRC =
  "https://develop.checkout.dev.merchant-services-np.lfscnp.com/assets/content.js?platform=magento2";

export const PAYMENT_CONTAINER_MAIN = "latitude-payment--main";
export const PAYMENT_CONTAINER_FOOTER = "latitude-payment--footer";

const loadLatitudeContent = (callback) => {
  const existingScript = document.getElementById(SCRIPT_IDENTIFIER);

  window.LatitudeCheckout = {
    page: "checkout",
    merchantId: MERCHANT_ID,
    currency: "AUD",
    container: {
      main: PAYMENT_CONTAINER_MAIN,
      footer: PAYMENT_CONTAINER_FOOTER,
    },
    checkout: {},
  };

  if (!existingScript) {
    const script = document.createElement("script");

    script.async = true;
    script.src = SRC;
    script.id = SCRIPT_IDENTIFIER;

    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export default loadLatitudeContent;
