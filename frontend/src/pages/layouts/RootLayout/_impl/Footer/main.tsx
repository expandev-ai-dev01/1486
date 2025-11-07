/**
 * @component Footer
 * @summary Application footer with copyright information
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>&copy; {currentYear} Catálogo de Bolos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
