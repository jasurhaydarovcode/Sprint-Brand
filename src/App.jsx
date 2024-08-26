import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductTwind from './components/ProductTwind'

const products = [
  {
    title: 'Soju',
    description: 'Soju is a clear and colorless distilled alcoholic beverage, traditionally made from rice, but later from other grains and has a flavor similar to vodka. It is usually consumed neat.',
    image: 'https://centaurusint.net/r_imgs.php?thumb=VOD2111.png&w=400&h=400',
    link: '#'
  },
  {
    title: 'Sake',
    description: 'Sake is a Japanese alcoholic beverage made from fermented rice. It can be served hot or cold and has a range of flavors depending on the type.',
    image: 'https://static.vecteezy.com/system/resources/previews/019/982/113/non_2x/japanese-sake-drink-flat-lay-png.png',
    link: '#'
  }
];

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container flex flex-wrap justify-center p-6 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <ProductTwind/>
    </div>
  );
};

export default App;
