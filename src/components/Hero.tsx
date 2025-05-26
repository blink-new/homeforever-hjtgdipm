import { Search, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find your perfect
            <span className="text-rose-500 block">home away from home</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover unique places to stay around the world. From cozy cabins to luxury villas, 
            find accommodations that feel like home.
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-2 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="relative">
                  <div className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <Search className="h-5 w-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-700 mb-1">Where</label>
                      <Input 
                        placeholder="Search destinations" 
                        className="border-0 p-0 text-sm focus:ring-0 focus:border-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-700 mb-1">Check in</label>
                      <Input 
                        placeholder="Add dates" 
                        className="border-0 p-0 text-sm focus:ring-0 focus:border-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-700 mb-1">Check out</label>
                      <Input 
                        placeholder="Add dates" 
                        className="border-0 p-0 text-sm focus:ring-0 focus:border-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <Users className="h-5 w-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-700 mb-1">Who</label>
                      <Input 
                        placeholder="Add guests" 
                        className="border-0 p-0 text-sm focus:ring-0 focus:border-0"
                      />
                    </div>
                    <Button className="ml-2 bg-rose-500 hover:bg-rose-600 rounded-xl px-6">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Beachfront', 'Mountain', 'City', 'Countryside', 'Luxury', 'Budget-friendly'].map((filter) => (
              <Button 
                key={filter} 
                variant="outline" 
                className="rounded-full border-gray-300 hover:border-rose-500 hover:text-rose-500"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}