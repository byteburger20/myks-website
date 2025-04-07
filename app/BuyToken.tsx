
'use client';

import { useAddress, useContract, useMetamask, Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";

export default function BuyToken() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const { contract } = useContract("0xbae14e5a05030f6Bcff900Be3C02A260C96e5D6c"); // MYKS Token Contract

  const [amount, setAmount] = useState("");

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Buy MYKS Token</h2>

      {!address ? (
        <button
          onClick={connectWithMetamask}
          className="bg-blue-600 text-white py-3 px-6 rounded-xl w-full"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Amount of MYKS"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />
          <Web3Button
            contractAddress="0xbae14e5a05030f6Bcff900Be3C02A260C96e5D6c"
            action={async (contract) => {
              await contract.erc20.claim(amount);
            }}
            className="bg-yellow-500 text-white py-3 px-6 rounded-xl w-full"
          >
            Buy Token
          </Web3Button>
        </div>
      )}
    </div>
  );
}
