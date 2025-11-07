import { useParams } from 'react-router-dom';

/**
 * @page ProductDetailPage
 * @summary Product detail page with images, description, reviews and add to cart
 * @domain catalog
 * @type detail-page
 * @category catalog
 */
export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Detalhes do Produto</h1>
      <div className="text-center text-gray-600 py-12">
        <p>Página de detalhes do produto {id} em desenvolvimento...</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
