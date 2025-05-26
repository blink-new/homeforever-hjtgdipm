import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Heart, Share, Star, MapPin, Users, Bed, Bath, Wifi, Car } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Separator } from '../components/ui/separator';
import { properties } from '../data/properties';

interface AmenityIcons {
  [key: string]: React.ComponentType<{ className?: string }> | string;
}

export function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  
  const property = properties.find(p => p.id === id) || properties[0];

  const amenityIcons: AmenityIcons = {
    'WiFi': Wifi,
    'Parking': Car,
    'Piscine': '🏊‍♂️',
    'Jardin': '🌿',
    'Vue mer': '🌊',
    'Climatisation': '❄️',
    'Chauffage': '🔥',
    'Cuisine équipée': '👨‍🍳',
    'Lave-linge': '🧺',
    'Terrasse': '🏡',
    'BBQ': '🔥',
    'Cheminée': '🔥',
    'Animaux acceptés': '🐕',
    'Concierge': '🛎️'
  };

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * property.price : 0;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Partager
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Sauvegarder
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Titre et localisation */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {property.title}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span className="font-medium">{property.rating}</span>
              <span>({property.reviewCount} avis)</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{property.location.city}, {property.location.country}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Galerie d'images */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-4 gap-2 h-96 rounded-xl overflow-hidden">
              <div className="col-span-2 row-span-2">
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-all"
                  onClick={() => setSelectedImage(0)}
                />
              </div>
              {property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`${property.title} ${index + 2}`}
                    className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-all"
                    onClick={() => setSelectedImage(index + 1)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carte de réservation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold">{property.price}€</span>
                    <span className="text-gray-600"> / nuit</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-900 mb-1">
                        ARRIVÉE
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-900 mb-1">
                        DÉPART
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      VOYAGEURS
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      {Array.from({ length: property.maxGuests }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} voyageur{i > 0 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 text-lg font-semibold">
                  Réserver
                </Button>

                {calculateTotal() > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="text-xl font-bold">{calculateTotal()}€</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Informations détaillées */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Hébergé par */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={property.host.avatar} />
                  <AvatarFallback>{property.host.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">
                    Hébergé par {property.host.name}
                  </h3>
                  {property.host.verified && (
                    <Badge variant="secondary" className="mt-1">
                      Hôte vérifié
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <Separator />

            {/* Caractéristiques */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gray-400" />
                  <span>{property.maxGuests} voyageurs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bed className="h-5 w-5 text-gray-400" />
                  <span>{property.bedrooms} chambres</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="h-5 w-5 text-gray-400" />
                  <span>{property.bathrooms} sdb</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-4">À propos de ce logement</h3>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            <Separator />

            {/* Équipements */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Équipements</h3>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity) => {
                  const IconComponent = amenityIcons[amenity];
                  return (
                    <div key={amenity} className="flex items-center space-x-3">
                      {typeof IconComponent === 'string' ? (
                        <span className="text-xl">{IconComponent}</span>
                      ) : IconComponent ? (
                        <IconComponent className="h-5 w-5 text-gray-400" />
                      ) : (
                        <div className="h-5 w-5 bg-gray-200 rounded" />
                      )}
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Carte */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Localisation</h3>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p>Carte interactive</p>
                    <p className="text-sm">{property.location.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}