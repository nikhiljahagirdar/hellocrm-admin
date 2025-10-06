
interface Wallet {
    title: string;
    imgSrc: string;
    available: string;
    value: string;
    price: string;
  }

export const Wallets: Wallet[] = [
  {
    title: "BTC Wallet",
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Bitcoin.svg",
    available: "Available BTC",
    value: "0.05437 BTC",
    price: "$1646.94 USD",
  },
  {
    title: "ETH Wallet",
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Ethereum.svg",
    available: "Available ETH",
    value: "2.3892 ETH",
    price: "$4581.24 USD",
  },
  {
    title: "XRP Wallet",
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Ripple.svg",
    available: "Available XRP",
    value: "234.943 XRP",
    price: "$192.29 USD",
  },
  {
    title: "LTC Wallet",
    imgSrc: "../../../assets/images/crypto-currencies/square-color/Litecoin.svg",
    available: "Available LTC",
    value: "37.254 LTC",
    price: "$3519.01 USD",
  },
];

interface WalletAddress {
    id: string;
    title: string;
    walletAddress: string;
    imageSrc: string;
    received: string;
    sent: string;
    balance: string;
    currency: string;
}

export const WalletAddresses: WalletAddress[] = [
  {
    id: "btc-wallet-address1",
    title: "BTC Wallet Address",
    walletAddress: "afb0dc8bc84625587b85415c86ef43ed8df",
    imageSrc: "../../../assets/images/media/media-68.png",
    received: "6.2834",
    sent: "2.7382",
    balance: "12.5232",
    currency: "BTC",
  },
  {
    id: "btc-wallet-address2",
    title: "ETH Wallet Address",
    walletAddress: "afb0dc8bc84625587b85415c86ef43ed8df",
    imageSrc: "../../../assets/images/media/media-68.png",
    received: "6.2834",
    sent: "2.7382",
    balance: "12.5232",
    currency: "ETH",
  },
  {
    id: "btc-wallet-address3",
    title: "LTC Wallet Address",
    walletAddress: "afb0dc8bc84625587b85415c86ef43ed8df",
    imageSrc: "../../../assets/images/media/media-68.png",
    received: "6.2834",
    sent: "2.7382",
    balance: "12.5232",
    currency: "LTC",
  },
];

  
