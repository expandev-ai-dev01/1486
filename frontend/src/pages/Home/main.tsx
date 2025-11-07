import { Link } from 'react-router-dom';

/**
 * @page HomePage
 * @summary Landing page with welcome message and call-to-action
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Bem-vindo ao Catálogo de Bolos</h1>
        <p className="text-xl text-gray-600 mb-8">
          Descubra os bolos mais deliciosos e especiais para todas as ocasiões. Navegue pelo nosso
          catálogo e encontre o bolo perfeito para você!
        </p>
        <Link
          to="/catalogo"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Ver Catálogo
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🎂</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Variedade</h3>
          <p className="text-gray-600">Diversos sabores e estilos para todos os gostos</p>
        </div>

        <div className="text-center">
          <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⭐</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
          <p className="text-gray-600">Produtos avaliados por nossos clientes</p>
        </div>

        <div className="text-center">
          <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🛒</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Fácil</h3>
          <p className="text-gray-600">Navegação simples e carrinho de compras intuitivo</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
