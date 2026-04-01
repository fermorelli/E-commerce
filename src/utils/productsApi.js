const COLLECTIONS = {
  electronics: new Set(['smartphones', 'laptops', 'tablets', 'mobile-accessories']),
  jewelry: new Set(['womens-jewellery', 'mens-watches', 'sunglasses']),
  clothing: new Set(['tops', 'womens-dresses', 'mens-shirts'])
};

const CATEGORY_LABELS = {
  electronics: 'Electronics',
  jewelry: 'Jewelry',
  clothing: 'Clothing'
};

const getCollection = (category) => {
  if (COLLECTIONS.electronics.has(category)) return 'electronics';
  if (COLLECTIONS.jewelry.has(category)) return 'jewelry';
  if (COLLECTIONS.clothing.has(category)) return 'clothing';
  return 'other';
};

const normalizeProduct = (product) => {
  const collection = getCollection(product.category);

  return {
    ...product,
    image: product.thumbnail || product.images?.[0] || '',
    category: CATEGORY_LABELS[collection] || product.category,
    collection,
    rating: {
      rate: product.rating ?? 0,
      count: product.stock ?? 0
    }
  };
};

export const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=0');
  const data = await response.json();
  return (data.products || []).map(normalizeProduct);
};

export const getProductById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return normalizeProduct(data);
};
