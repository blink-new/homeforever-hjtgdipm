function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-rose-500">HomeForever</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium">Mettez votre logement sur HomeForever</button>
              <div className="flex items-center space-x-2 border border-gray-300 rounded-full p-1 hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-gray-500 rounded-full p-1">
                  <div className="h-4 w-4 text-white">👤</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trouvez votre
              <span className="text-rose-500"> chez-vous </span>
              parfait
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez des logements uniques et vivez des expériences inoubliables partout dans le monde
            </p>
          </div>

          {/* Search Card */}
          <div className="max-w-4xl mx-auto p-6 shadow-xl bg-white rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Destination</label>
                <input
                  type="text"
                  placeholder="Où allez-vous ?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Arrivée</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Départ</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Voyageurs</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none">
                  <option>1 voyageur</option>
                  <option>2 voyageurs</option>
                  <option>3 voyageurs</option>
                  <option>4 voyageurs</option>
                  <option>5+ voyageurs</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-12 py-3 rounded-lg font-medium">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Logements populaires
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos hébergements les mieux notés par nos voyageurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Property Card 1 */}
            <div className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white rounded-lg border">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
                  alt="Appartement moderne"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white text-gray-900 px-2 py-1 rounded text-xs font-medium">
                  Appartement
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span>📍 Paris, France</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium ml-1">4.8</span>
                    <span className="text-sm text-gray-500 ml-1">(89)</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  Appartement moderne avec vue sur la Seine
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                  <span>4 voyageurs</span>
                  <span>•</span>
                  <span>2 chambres</span>
                  <span>•</span>
                  <span>1 sdb</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-gray-900">120€</span>
                    <span className="text-sm text-gray-600 ml-1">/ nuit</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white rounded-lg border">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop"
                  alt="Villa luxueuse"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white text-gray-900 px-2 py-1 rounded text-xs font-medium">
                  Villa
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span>📍 Nice, France</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium ml-1">4.9</span>
                    <span className="text-sm text-gray-500 ml-1">(156)</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  Villa luxueuse avec piscine privée
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                  <span>8 voyageurs</span>
                  <span>•</span>
                  <span>4 chambres</span>
                  <span>•</span>
                  <span>3 sdb</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-gray-900">350€</span>
                    <span className="text-sm text-gray-600 ml-1">/ nuit</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white rounded-lg border">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
                  alt="Loft artistique"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white text-gray-900 px-2 py-1 rounded text-xs font-medium">
                  Loft
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span>📍 Paris, France</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium ml-1">4.7</span>
                    <span className="text-sm text-gray-500 ml-1">(45)</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  Loft artistique dans le Marais
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                  <span>2 voyageurs</span>
                  <span>•</span>
                  <span>1 chambre</span>
                  <span>•</span>
                  <span>1 sdb</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-gray-900">95€</span>
                    <span className="text-sm text-gray-600 ml-1">/ nuit</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Card 4 */}
            <div className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white rounded-lg border">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
                  alt="Maison de campagne"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white text-gray-900 px-2 py-1 rounded text-xs font-medium">
                  Maison
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span>📍 Gordes, France</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium ml-1">4.8</span>
                    <span className="text-sm text-gray-500 ml-1">(67)</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  Maison de campagne authentique
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                  <span>6 voyageurs</span>
                  <span>•</span>
                  <span>3 chambres</span>
                  <span>•</span>
                  <span>2 sdb</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-gray-900">180€</span>
                    <span className="text-sm text-gray-600 ml-1">/ nuit</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Disponible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi choisir HomeForever ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vérification complète</h3>
                <p className="text-gray-600">Tous nos logements sont vérifiés pour garantir votre sécurité et votre confort.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support 24/7</h3>
                <p className="text-gray-600">Notre équipe est disponible à tout moment pour vous accompagner.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Annulation flexible</h3>
                <p className="text-gray-600">Modifiez ou annulez votre réservation facilement selon nos conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;