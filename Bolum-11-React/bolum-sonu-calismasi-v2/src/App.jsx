import { useState } from 'react';
import { products as productsObject } from './data/products';
import { ImgContainer, ImgNotSelected, ImgSelected } from './components';

function App() {
  const [products, setProducts] = useState(productsObject);
  const [activeProduct, setActiveProduct] = useState(
    products.find((item) => item.isActive)
  );

  const handleProductSelect = (productId) => {
    const selectedProduct = productsObject.find((item) => {
      return item.id === productId;
    });
    selectedProduct.isActive = true;

    setActiveProduct(selectedProduct);

    const notSelectedProducts = productsObject
      .filter((item) => item.id !== productId)
      .map((item) => {
        return {
          ...item,
          isActive: false,
        };
      });

    const newProducts = [selectedProduct, ...notSelectedProducts].sort(
      (a, b) => a.id - b.id
    );

    setProducts(newProducts);
  };

  return (
    <main className='container'>
      {activeProduct ? <ImgSelected {...activeProduct} /> : <ImgNotSelected />}
      <ImgContainer
        handleProductSelect={handleProductSelect}
        products={products}
      />
    </main>
  );
}

export default App;
