import { Link } from 'react-router-dom';
import { useCartStore } from '@/domain/cart/stores/cartStore';

/**
 * @component Header
 * @summary Application header with navigation and cart indicator
 * @domain core
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  const cartItemsCount = useCartStore((state) => state.items.length);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Catálogo de Bolos
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Início
            </Link>
            <Link to="/catalogo" className="text-gray-700 hover:text-primary-600 transition-colors">
              Catálogo
            </Link>
            <Link
              to="/carrinho"
              className="relative text-gray-700 hover:text-primary-600 transition-colors"
            >
              Carrinho
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
