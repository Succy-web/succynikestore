import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from "./Component"
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from "./Data/data.js"

const App = () => {
  return (
    <>
    <Navbar/>
    <Cart />
   <main className=" flex flex-col gap-16 relative">
    <Hero heroapi={heroapi} />
    <Sales endpoint= {popularsales} ifExists/>
    <FlexContent endpoint={highlight} ifExists />
    <Sales endpoint= {toprateslaes}/>
    <FlexContent endpoint={sneaker}/>
    <Stories story={story}/>
   </main>
   <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
