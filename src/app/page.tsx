import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Headset Gamer RGB Pro",
    price: "R$ 299,90",
    image: "https://images.tcdn.com.br/img/img_prod/1163648/cooler_para_processador_dex_rgb_intel_e_amd_dx_7001_snf_3343_1_f225e0b0830ba727793f7f0b058eab36.jpeg",
    discount: "15% OFF"
  },
  {
    id: 2,
    name: "Mouse Gamer 16000 DPI",
    price: "R$ 199,90",
    image: "https://images.tcdn.com.br/img/img_prod/1163648/180_mouse_gamer_sem_fio_havit_ms969se_8000_dpi_6_botoes_wireless_bluetooth_e_usb_c_preto_snf_3161_1_34774a9c130fac982be78d999d617efe.jpeg",
    discount: "10% OFF"
  },
  {
    id: 3,
    name: "Teclado Mecânico RGB",
    price: "R$ 449,90",
    image: "https://images.tcdn.com.br/img/img_prod/1163648/180_teclado_gamer_mecanico_t_dagger_battleship_rainbow_switch_blue_abnt_black_t_tgk301_bl_snf_3189_1_55b3e74e51caf0795bf32f49738df490.jpg",
    tag: "NOVO"
  },
  {
    id: 4,
    name: "Monitor 4K Ultra HD",
    price: "R$ 1.299,90",
    image: "https://images.tcdn.com.br/img/img_prod/1163648/180_monitor_gamer_curvo_kbm_gaming_mg210_23_6_180hz_full_hd_1ms_displayport_e_hdmi_adaptive_sync_snf_3383_1_2fac55ebe5fb442b85103b703849b27e.jpg",
    discount: "20% OFF"
  }
];

const categories = [
  { name: "Periféricos", icon: "🎮" },
  { name: "Hardware", icon: "💻" },
  { name: "Notebooks", icon: "💻" },
  { name: "Monitores", icon: "🖥️" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Tech Store
            </h1>
            <p className="text-xl mb-8">
              Os melhores produtos de tecnologia você encontra aqui
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
              Ver Ofertas
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer text-center">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-medium text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="relative">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    {product.discount}
                  </span>
                )}
                {product.tag && (
                  <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2 text-gray-800">{product.name}</h3>
                <p className="text-lg font-bold text-blue-600">{product.price}</p>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Receba nossas ofertas
            </h2>
            <p className="mb-6 text-gray-600">
              Cadastre-se para receber as melhores ofertas em primeira mão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="px-4 py-2 rounded-lg flex-1 max-w-md border border-gray-300 text-gray-800"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
