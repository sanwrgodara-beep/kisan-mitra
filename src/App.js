 src/App.js
export default function KisanWebsite() { const products = [ { name: "कीटनाशक दवाई", desc: "फसल रोग और कीट नियंत्रण सलाह", }, { name: "उत्तम बीज", desc: "अच्छी पैदावार के लिए बीज जानकारी", }, { name: "खाद सलाह", desc: "फसल अनुसार खाद उपयोग जानकारी", }, ];

return ( <div className="min-h-screen bg-green-50 text-gray-800"> {/* Header */} <header className="bg-green-700 text-white p-5 shadow-lg"> <div className="max-w-6xl mx-auto flex justify-between items-center"> <h1 className="text-3xl font-bold">Kisan Mitra</h1> <button className="bg-white text-green-700 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"> WhatsApp Contact </button> </div> </header>

{/* Hero Section */}
  <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-5xl font-bold leading-tight text-green-800">
        किसानों के लिए सही सलाह और सही दवाई
      </h2>
      <p className="mt-5 text-lg text-gray-700">
        फसल रोग पहचान, दवाई जानकारी, बीज और खेती सलाह एक ही जगह।
      </p>

      <div className="mt-8 flex gap-4 flex-wrap">
        <button className="bg-green-700 text-white px-6 py-3 rounded-2xl text-lg shadow hover:scale-105 transition">
          सलाह लें
        </button>
        <button className="border border-green-700 text-green-700 px-6 py-3 rounded-2xl text-lg hover:bg-green-100 transition">
          उत्पाद देखें
        </button>
      </div>
    </div>

    <div>
      <img
        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop"
        alt="Farmer"
        className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
      />
    </div>
  </section>

  {/* Services */}
  <section className="bg-white py-14 px-6">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-4xl font-bold text-center text-green-800 mb-12">
        हमारी सेवाएं
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-3xl p-7 shadow-md hover:shadow-xl transition"
          >
            <h4 className="text-2xl font-bold text-green-700 mb-3">
              {item.name}
            </h4>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* About */}
  <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
    <img
      src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
      alt="Agriculture"
      className="rounded-3xl shadow-xl h-[350px] object-cover w-full"
    />

    <div>
      <h3 className="text-4xl font-bold text-green-800 mb-5">
        किसानों का भरोसेमंद साथी
      </h3>
      <p className="text-lg text-gray-700 leading-8">
        हमारी कोशिश है कि किसानों तक सही जानकारी सही समय पर पहुंचे।
        फसल रोग, दवाई, खाद और खेती से जुड़ी सलाह आसान भाषा में दी जाती है।
      </p>
    </div>
  </section>

  {/* Contact */}
  <section className="bg-green-700 text-white py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-4xl font-bold mb-5">
        संपर्क करें
      </h3>
      <p className="text-lg mb-8">
        फसल की फोटो भेजें और सही सलाह पाएं
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-white text-green-700 px-7 py-3 rounded-2xl font-bold hover:scale-105 transition">
          WhatsApp करें
        </button>
        <button className="border border-white px-7 py-3 rounded-2xl font-bold hover:bg-white hover:text-green-700 transition">
          कॉल करें
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-green-900 text-white text-center py-5">
    <p>© 2026 Kisan Mitra • सभी अधिकार सुरक्षित</p>
  </footer>
</div>

); }
