import { useEffect, useState } from 'react';
import styles from './shop.module.css';
import { Link } from 'react-router-dom';
import electronicsImage from '../../assets/electronics.webp';
import jewelryImage from '../../assets/jewelry.jpg';
import clothingImage from '../../assets/clothing.jpg';

const categories = [
  {
    title: 'Electronics',
    route: '/electronics',
    image: electronicsImage,
    eyebrow: 'Smart upgrades',
    description: 'Audio, screens, accessories and everyday devices selected for sharp routines.'
  },
  {
    title: 'Jewelry',
    route: '/jewelry',
    image: jewelryImage,
    eyebrow: 'Statement pieces',
    description: 'Polished accents, gift-worthy finishes and details designed to stand out.'
  },
  {
    title: 'Clothing',
    route: '/clothing',
    image: clothingImage,
    eyebrow: 'Wardrobe layers',
    description: 'Relaxed staples and elevated essentials for workdays, travel and weekends.'
  }
];

const Shop = () => {
  const [featuredItem, setFeaturedItem] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setFetching(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      const topRated = [...products].sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))[0];
      setFeaturedItem(topRated || null);
      setFetching(false);
    };

    loadProducts();
  }, []);

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.kicker}>Spring edit</span>
          <h1>Shop everyday essentials across electronics, jewelry and clothing.</h1>
          <p>
            Discover a cleaner storefront for practical upgrades, small luxuries and wardrobe
            staples. Browse by collection, open any item and keep the same shopping flow underneath.
          </p>
          <div className={styles.heroActions}>
            <Link to="/electronics" className={styles.primaryLink}>Shop electronics</Link>
            <Link to="/clothing" className={styles.secondaryLink}>Explore clothing</Link>
          </div>
        </div>
      </div>

      <div className={styles.collectionsHeader}>
        <div>
          <span className={styles.sectionLabel}>Shop by collection</span>
          <h2>Start with the department that matches what you are looking for.</h2>
        </div>
        <p>Each collection keeps the same logic, but the storefront now feels more like a traditional shop than a dashboard.</p>
      </div>

      <div className={styles.grid}>
        {categories.map((category) => (
          <Link
            key={category.title}
            className={styles.categoryCard}
            to={category.route}
            style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0.26)), url(${category.image})` }}
          >
            <div className={styles.cardContent}>
              <span>{category.eyebrow}</span>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <strong>View collection</strong>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.featuredSection}>
        <div className={styles.featuredIntro}>
          <span className={styles.sectionLabel}>Featured product</span>
          <h2>A highlighted item from the current catalog.</h2>
          <p>Loaded from the same product source as the rest of the store so the home page always points to a real product.</p>
        </div>

        <div className={styles.featuredCard}>
          {fetching ? (
            <div className={styles.heroLoader}>
              <div className={styles.heroSpinner} />
            </div>
          ) : featuredItem ? (
            <Link to={`/${featuredItem.id}`} className={styles.featuredLink}>
              <div className={styles.featuredMedia}>
                <img src={featuredItem.image} alt={featuredItem.title} />
              </div>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredCategory}>{featuredItem.category}</span>
                <strong>{featuredItem.title}</strong>
                <p>{featuredItem.description}</p>
                <div className={styles.featuredFooter}>
                  <span>${featuredItem.price}</span>
                  <em>View product</em>
                </div>
              </div>
            </Link>
          ) : (
            <p>Featured item unavailable right now.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
