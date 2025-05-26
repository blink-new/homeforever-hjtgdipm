import { Heart, Star } from 'lucide-react';
import { Property } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface PropertyCardProps {
  property: Property;
  onFavorite?: (id: string) => void;
  isFavorited?: boolean;
}

export default function PropertyCard({ property, onFavorite, isFavorited = false }: PropertyCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 rounded-full bg-white/80 hover:bg-white p-2"
          onClick={(e) => {
            e.stopPropagation();
            onFavorite?.(property.id);
          }}
        >
          <Heart 
            className={`h-4 w-4 ${isFavorited ? 'fill-rose-500 text-rose-500' : 'text-gray-600'}`} 
          />
        </Button>
        {property.host.superhost && (
          <Badge className="absolute top-3 left-3 bg-white text-gray-900 hover:bg-white">
            Superhost
          </Badge>
        )}
      </div>
      
      <div className="mt-3 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 truncate">{property.title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current text-yellow-400" />
            <span className="text-sm font-medium">{property.rating}</span>
            <span className="text-sm text-gray-500">({property.reviewCount})</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm">{property.location}</p>
        
        <div className="flex items-center justify-between pt-1">
          <div className="text-sm text-gray-500">
            {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
          </div>
        </div>
        
        <div className="flex items-baseline space-x-1 pt-1">
          <span className="text-lg font-semibold text-gray-900">${property.price}</span>
          <span className="text-gray-600 text-sm">night</span>
        </div>
      </div>
    </div>
  );
}