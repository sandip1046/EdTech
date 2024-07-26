
const loadPayPalScript = (clientId:string) => {
  const script = document.createElement('script');
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
  script.async = true;
  document.body.appendChild(script);
};

export default loadPayPalScript;