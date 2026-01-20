import React, { useState } from 'react'
import HomePage from './HomePage.jsx'
import BlueFreesiaProduct from './BlueFreesiaProduct.jsx'
import Collection from './Collection.jsx'
import BaboskiLogo from './BaboskiLogo.jsx'
import WidgetManager from './WidgetManager.jsx'
import { defaultProduct } from './productsData.js'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home') // 'home', 'shop', or 'product'
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct)
  const [showWOM, setShowWOM] = useState(false) // Global toggle for showing WOM across all pages (default: off)
  const [activeWidget, setActiveWidget] = useState(null) // Current widget to display
  const [pageMessages, setPageMessages] = useState([]) // Messages from current page

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setCurrentPage('product')
  }

  const handleHomeClick = () => {
    setCurrentPage('home')
  }

  const handleShopClick = () => {
    setCurrentPage('shop')
  }

  return (
    <div className="w-full min-h-screen bg-[#F8F6F3]">
      {/* Beautiful Header */}
      <header className="bg-gradient-to-r from-[#c9a9bd] via-[#a58296] to-[#8e6d82] px-4 py-4 md:px-6 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md sticky top-0 z-50 border-b-2 border-[#8e6d82]">
        <div className="flex items-center gap-3">
          <BaboskiLogo size="large" color="brand" />
        </div>
        <nav className="flex gap-4 md:gap-6 lg:gap-8 items-center flex-wrap justify-center">
          <button 
            onClick={handleHomeClick}
            className={`text-sm md:text-base font-medium transition-all duration-300 font-['Space_Grotesk'] no-underline border-none bg-transparent cursor-pointer px-3 py-2 rounded-lg ${
              currentPage === 'home' 
                ? 'text-white font-semibold bg-white/20 backdrop-blur-sm' 
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            Home
          </button>
          <button 
            onClick={handleShopClick}
            className={`text-sm md:text-base font-medium transition-all duration-300 font-['Space_Grotesk'] no-underline border-none bg-transparent cursor-pointer px-3 py-2 rounded-lg ${
              currentPage === 'shop' 
                ? 'text-white font-semibold bg-white/20 backdrop-blur-sm' 
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            Shop All
          </button>
          
          {/* Show Extras Toggle - show on product page and homepage */}
          {(currentPage === 'product' || currentPage === 'home') && (
            <div className="flex items-center gap-3 px-3 py-2">
              <span className="text-sm md:text-base text-white/90 font-medium font-['Space_Grotesk'] whitespace-nowrap">
                {showWOM ? 'With WOM' : 'Without WOM'}
              </span>
              <button
                onClick={() => setShowWOM(!showWOM)}
                className="relative w-14 h-7 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Toggle WOM"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    showWOM ? 'translate-x-7' : 'translate-x-0'
                  }`}
                ></span>
              </button>
            </div>
          )}
          
          {/* Widget Manager Button - Only show when WOM is active */}
          {showWOM && (
            <WidgetManager 
              messages={pageMessages} 
              onWidgetShow={setActiveWidget}
            />
          )}
        </nav>
      </header>

      {/* Active Widget Display */}
      {activeWidget && (
        <div className="fixed bottom-5 left-5 z-[998] md:bottom-[100px] md:left-auto md:right-5" style={{ animation: 'slideInFromRight 0.5s ease-out' }}>
          <div className="bg-white rounded-xl p-3 shadow-lg border border-[rgba(165,130,150,0.2)] flex items-start gap-2.5 max-w-[280px] relative md:max-w-[280px] w-full">
            {activeWidget.image && (
              <img src={activeWidget.image} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-[rgba(165,130,150,0.2)] flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs leading-snug text-[#2d2d2d] mb-1 font-medium">{activeWidget.text}</p>
              <span className="text-[10px] text-[#666] block">{activeWidget.time}</span>
            </div>
            <button 
              onClick={() => setActiveWidget(null)} 
              className="absolute top-2 right-2 w-5 h-5 border-none bg-transparent text-[#999] text-lg leading-none cursor-pointer flex items-center justify-center rounded transition-all duration-200 p-0 hover:bg-[#f5f5f5] hover:text-[#666]"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="w-full">
            {currentPage === 'home' && (
              <HomePage 
                onProductClick={handleProductClick} 
                onShopClick={handleShopClick}
                showRatings={showWOM}
                onMessagesReady={setPageMessages}
              />
            )}
        {currentPage === 'shop' && (
          <Collection 
            onProductClick={handleProductClick} 
            showRatings={showWOM}
            onMessagesReady={setPageMessages}
          />
        )}
        {currentPage === 'product' && (
          <BlueFreesiaProduct 
            showExtras={showWOM} 
            product={selectedProduct} 
            onProductClick={handleProductClick}
            onMessagesReady={setPageMessages}
          />
        )}
      </div>
    </div>
  )
}

export default App
