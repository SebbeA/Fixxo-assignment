import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import CollabSection from '../sections/CollabSection'
import TopPickSection from '../sections/TopPickSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import InfoSection from '../sections/InfoSection'
import FooterSection from '../sections/FooterSection'


const HomeView = ({products = []}) => {
  window.top.document.title = 'Fixxo.'
  
  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" products={products} />
      <ProductGridSection products={products} />
      <CollabSection />
      <TopPickSection products={products} />
      <FlashSaleSection products={products} />
      <InfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView