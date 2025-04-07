
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">MAS YUSWA KREMES SRAGEN</h1>
        <p className="text-lg max-w-xl mx-auto">
          Real Food. Real Business. Real Blockchain. Invest in MYKS and earn 17% monthly profit sharing from a thriving culinary venture.
        </p>
      
    <div className="text-center py-6">
      <a
        href="/BuyToken"
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-blue-700 transition"
      >
        Buy Token with Wallet
      </a>
    </div>

  </section>

      <section className="grid md:grid-cols-3 gap-6 py-8">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="/images/chicken-wings.jpg" alt="Chicken Wings" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Crispy Chicken Wings</h3>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="/images/ayam-kremes.jpg" alt="Ayam Kremes" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Ayam Kremes + Sambal</h3>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="/images/nasi-veggie.jpg" alt="Rice and Veggies" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Rice & Fresh Veggies</h3>
          </div>
        </div>
      
    <div className="text-center py-6">
      <a
        href="/BuyToken"
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-blue-700 transition"
      >
        Buy Token with Wallet
      </a>
    </div>

  </section>

      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Join the Token Sale</h2>
        <p className="mb-6">Phase 1 is live! Token price: Rp. 1,000 (~$0.06). Buy with MATIC, ETH, USDC, or BTC.</p>
        <a
          href="https://x.com/@MYKStoken"
          className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-yellow-600 transition"
        >
          Buy $MYKS Now
        </a>
      
    <div className="text-center py-6">
      <a
        href="/BuyToken"
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-blue-700 transition"
      >
        Buy Token with Wallet
      </a>
    </div>

  </section>

      <footer className="text-center text-sm text-gray-500 py-8">
        &copy; 2025 MYKS Project. Powered by Web3 & Thirdweb.
      </footer>
    </main>
  );
}
