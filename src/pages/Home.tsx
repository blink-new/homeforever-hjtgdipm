import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import { mockProperties } from '../data/properties';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PropertyGrid properties={mockProperties} />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-lg text-gray-600">Find the perfect type of accommodation for your trip</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Beachfront', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop', count: '2,847' },
              { name: 'Mountain', image: 'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=300&fit=crop', count: '1,923' },
              { name: 'City', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop', count: '5,672' },
              { name: 'Countryside', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop', count: '3,456' }
            ].map((category) => (
              <div key={category.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} properties</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose HomeForever?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Verified Properties',
                description: 'Every property is personally verified by our team to ensure quality and accuracy.',
                icon: '✓'
              },
              {
                title: '24/7 Support',
                description: 'Our customer support team is available around the clock to help with any questions.',
                icon: '🏠'
              },
              {
                title: 'Best Price Guarantee',
                description: 'Find a lower price elsewhere? We\'ll match it and give you an additional 5% off.',
                icon: '💰'
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}