import { Menu, Search, User, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-rose-500">HomeForever</h1>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Input
                  type="text"
                  placeholder="Where are you going?"
                  className="border-0 rounded-l-full focus:ring-0 focus:border-0 pl-6"
                />
                <div className="border-l border-gray-300 px-4 py-2">
                  <span className="text-sm text-gray-600">Any week</span>
                </div>
                <div className="border-l border-gray-300 px-4 py-2">
                  <span className="text-sm text-gray-600">Add guests</span>
                </div>
                <Button size="sm" className="rounded-full bg-rose-500 hover:bg-rose-600 m-1">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right side menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex text-sm font-medium">
              HomeForever your home
            </Button>
            <Button variant="ghost" size="sm">
              <Globe className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center space-x-2 border border-gray-300 rounded-full p-1 hover:shadow-md transition-shadow">
              <Button variant="ghost" size="sm" className="rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile search - shown when menu is open */}
        <div className="md:hidden pb-4">
          <div className="flex items-center border border-gray-300 rounded-full shadow-sm">
            <Input
              type="text"
              placeholder="Where are you going?"
              className="border-0 rounded-l-full focus:ring-0 focus:border-0"
            />
            <Button size="sm" className="rounded-full bg-rose-500 hover:bg-rose-600 m-1">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}