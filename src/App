import React, { useState, useEffect } from 'react';
import { Share2, Users, Calendar, MapPin, User, Home, Search, Plus, X, Check, Star, Edit, Trash2, TrendingDown, DollarSign, ExternalLink, Map as MapIcon, RefreshCw, Mail, Twitter, Instagram, Facebook, LogOut, Bell, MessageCircle, Heart, Filter, ChevronDown, Award, Zap, TrendingUp } from 'lucide-react';

// Real events with actual coordinates for Google Maps
const realEventsData = [
  {
    id: 'real-1',
    type: 'event',
    category: 'Concert',
    title: 'ABBA Voyage Concert',
    description: 'Share tickets to the digital ABBA concert experience',
    location: 'ABBA Arena, Pudding Mill Lane, London E20 2AW',
    address: 'ABBA Arena, Pudding Mill Lane, London E20 2AW',
    lat: 51.5334,
    lng: -0.0098,
    date: '2026-03-18',
    time: '20:00',
    individualCost: 75.00,
    sharedCost: 75.00,
    currentPeople: 1,
    maxPeople: 4,
    savings: 0,
    organizer: 'Music Lover',
    tags: ['Concert', 'Music'],
    image: '🎤',
    isReal: true,
    source: 'Manual',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'real-2',
    type: 'food',
    category: 'Restaurant',
    title: 'DanDan Battersea - 40% Off',
    description: 'Chinese restaurant opening deal - split the bill',
    location: 'Battersea Power Station, London SW11 8BZ',
    address: 'Battersea Power Station, London SW11 8BZ',
    lat: 51.4813,
    lng: -0.1447,
    date: '2026-03-16',
    time: '19:00',
    individualCost: 40.00,
    sharedCost: 10.00,
    currentPeople: 2,
    maxPeople: 4,
    savings: 75,
    organizer: 'Food Explorer',
    tags: ['Chinese', 'Restaurant'],
    image: '🥟',
    isReal: true,
    source: 'SoftLaunchLondon',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'real-3',
    type: 'food',
    category: 'Restaurant',
    title: 'Gloria Shoreditch - Italian Lunch',
    description: 'Big Mamma\'s Pranzetto menu - Antipasti & Main £23',
    location: '54-56 Great Eastern Street, Shoreditch, London EC2A 3QR',
    address: '54-56 Great Eastern Street, Shoreditch, London EC2A 3QR',
    lat: 51.5252,
    lng: -0.0807,
    date: '2026-03-14',
    time: '13:00',
    individualCost: 23.00,
    sharedCost: 23.00,
    currentPeople: 3,
    maxPeople: 4,
    savings: 0,
    organizer: 'Pasta Fan',
    tags: ['Italian', 'Lunch'],
    image: '🍝',
    isReal: true,
    source: 'BigMamma',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'real-4',
    type: 'event',
    category: 'Musical',
    title: 'Wicked The Musical',
    description: 'West End show at Apollo Victoria - share tickets',
    location: 'Apollo Victoria Theatre, 17 Wilton Rd, London SW1V 1LG',
    address: 'Apollo Victoria Theatre, 17 Wilton Rd, London SW1V 1LG',
    lat: 51.4951,
    lng: -0.1424,
    date: '2026-03-20',
    time: '19:30',
    individualCost: 85.00,
    sharedCost: 85.00,
    currentPeople: 2,
    maxPeople: 4,
    savings: 0,
    organizer: 'Theatre Enthusiast',
    tags: ['Theatre', 'Musical'],
    image: '🎭',
    isReal: true,
    source: 'WestEnd',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'real-5',
    type: 'taxi',
    category: 'Ride Share',
    title: 'Uber to O2 Arena',
    description: 'Concert night - share the ride from South Kensington',
    location: 'The O2, Peninsula Square, London SE10 0DX',
    address: 'The O2, Peninsula Square, London SE10 0DX',
    lat: 51.5033,
    lng: 0.0031,
    date: '2026-03-15',
    time: '18:30',
    individualCost: 35.00,
    sharedCost: 8.75,
    currentPeople: 1,
    maxPeople: 4,
    savings: 75,
    organizer: 'Concert Goer',
    tags: ['Transport', 'Concert'],
    image: '🚗',
    isReal: true,
    source: 'User',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'real-6',
    type: 'food',
    category: 'Restaurant',
    title: 'Amazing Grace Canary Wharf - 50% Off',
    description: 'Pan-Asian dining with live music - Tues/Wed/Fri deal',
    location: '1 Westferry Circus, Canary Wharf, London E14 4HD',
    address: '1 Westferry Circus, Canary Wharf, London E14 4HD',
    lat: 51.5045,
    lng: -0.0197,
    date: '2026-03-17',
    time: '20:00',
    individualCost: 50.00,
    sharedCost: 12.50,
    currentPeople: 2,
    maxPeople: 4,
    savings: 75,
    organizer: 'Jazz Foodie',
    tags: ['Asian', 'Live Music'],
    image: '🍱',
    isReal: true,
    source: 'SoftLaunchLondon',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'real-7',
    type: 'accommodation',
    category: 'Accommodation',
    title: 'Brighton Weekend Trip',
    description: 'Beach house for 4 - split the cost',
    location: 'Brighton Beach, Brighton BN1',
    address: 'Brighton Beach, Brighton BN1',
    lat: 50.8225,
    lng: -0.1372,
    date: '2026-03-21',
    time: 'Weekend',
    individualCost: 200.00,
    sharedCost: 50.00,
    currentPeople: 1,
    maxPeople: 4,
    savings: 75,
    organizer: 'Beach Lover',
    tags: ['Weekend', 'Beach'],
    image: '🏖️',
    isReal: true,
    source: 'Airbnb',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'real-8',
    type: 'taxi',
    category: 'Ride Share',
    title: 'Heathrow Airport Run',
    description: 'Early morning flight - share Uber XL',
    location: 'Heathrow Airport, Longford TW6',
    address: 'Heathrow Airport, Longford TW6',
    lat: 51.4700,
    lng: -0.4543,
    date: '2026-03-19',
    time: '05:00',
    individualCost: 55.00,
    sharedCost: 18.33,
    currentPeople: 2,
    maxPeople: 3,
    savings: 67,
    organizer: 'Frequent Flyer',
    tags: ['Airport', 'Morning'],
    image: '✈️',
    isReal: true,
    source: 'User',
    lastUpdated: new Date().toISOString()
  }
];

const mockUsers = [
  {
    id: 1,
    name: 'Sarah Chen',
    interests: ['Food', 'Music', 'Travel'],
    savings: 234,
    connections: 15,
    reliability: 4.8,
    joinedDate: 'Jan 2024',
    avatar: '👩'
  },
  {
    id: 2,
    name: 'James Wilson',
    interests: ['Transport', 'Sports', 'Tech'],
    savings: 189,
    connections: 12,
    reliability: 4.9,
    joinedDate: 'Jan 2024',
    avatar: '👨'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    interests: ['Travel', 'Food', 'Events'],
    savings: 456,
    connections: 23,
    reliability: 5.0,
    joinedDate: 'Dec 2023',
    avatar: '👱‍♀️'
  }
];

export default function CostSharePlatform() {
  // Authentication & Location
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLocation, setUserLocation] = useState('');
  const [showSignup, setShowSignup] = useState(true);
  
  // Views & Modals
  const [currentView, setCurrentView] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  
  // User State
  const [userTier, setUserTier] = useState('free');
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [likedEvents, setLikedEvents] = useState([]);
  
  // Filters & Search
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Calculator state
  const [calcCost, setCalcCost] = useState(100);
  const [calcPeople, setCalcPeople] = useState(4);
  
  // Events - Load from localStorage or use defaults
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('shareEvents');
    if (saved) {
      return JSON.parse(saved);
    }
    return realEventsData;
  });
  
  // New event state
  const [newEvent, setNewEvent] = useState({
    type: 'food',
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    cost: '',
    maxPeople: 4
  });

  // Save events to localStorage
  useEffect(() => {
    localStorage.setItem('shareEvents', JSON.stringify(events));
  }, [events]);
  
  // Load authentication state
  useEffect(() => {
    const savedJoined = localStorage.getItem('joinedEvents');
    if (savedJoined) {
      setJoinedEvents(JSON.parse(savedJoined));
    }
    
    const savedLiked = localStorage.getItem('likedEvents');
    if (savedLiked) {
      setLikedEvents(JSON.parse(savedLiked));
    }
    
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedLocation = localStorage.getItem('userLocation');
    if (savedAuth === 'true' && savedLocation) {
      setIsAuthenticated(true);
      setUserLocation(savedLocation);
      setShowSignup(false);
    }
  }, []);

  // Calculate total savings
  const calculateTotalSavings = () => {
    return joinedEvents.reduce((total, eventId) => {
      const event = events.find(e => e.id === eventId);
      if (event && event.savings > 0) {
        return total + (event.individualCost - event.sharedCost);
      }
      return total;
    }, 0);
  };

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (userLocation.trim()) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userLocation', userLocation);
      setIsAuthenticated(true);
      setShowSignup(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userLocation');
    setIsAuthenticated(false);
    setUserLocation('');
    setShowSignup(true);
    setCurrentView('home');
  };

  // Join event
  const handleJoinEvent = (eventId) => {
    if (!joinedEvents.includes(eventId)) {
      const newJoined = [...joinedEvents, eventId];
      setJoinedEvents(newJoined);
      localStorage.setItem('joinedEvents', JSON.stringify(newJoined));
    }
    setSelectedEvent(null);
  };

  // Like event
  const handleLikeEvent = (eventId) => {
    if (likedEvents.includes(eventId)) {
      const newLiked = likedEvents.filter(id => id !== eventId);
      setLikedEvents(newLiked);
      localStorage.setItem('likedEvents', JSON.stringify(newLiked));
    } else {
      const newLiked = [...likedEvents, eventId];
      setLikedEvents(newLiked);
      localStorage.setItem('likedEvents', JSON.stringify(newLiked));
    }
  };

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesType = filterType === 'all' || event.type === filterType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (event.category && event.category.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesSearch;
  });

  // Refresh events
  const handleRefreshEvents = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const updatedEvents = events.map(event => ({
      ...event,
      lastUpdated: new Date().toISOString()
    }));
    setEvents(updatedEvents);
    setIsRefreshing(false);
  };

  // Google Maps URLs - WORKING VERSION
  const getGoogleMapsUrl = (event) => {
    if (event.lat && event.lng) {
      // Use coordinates for precise location
      return `https://www.google.com/maps/search/?api=1&query=${event.lat},${event.lng}`;
    }
    // Fallback to address search
    const encoded = encodeURIComponent(event.address);
    return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  };

  const getDirectionsUrl = (event) => {
    if (event.lat && event.lng) {
      return `https://www.google.com/maps/dir/?api=1&destination=${event.lat},${event.lng}`;
    }
    const encoded = encodeURIComponent(event.address);
    return `https://www.google.com/maps/dir/?api=1&destination=${encoded}`;
  };

  // Create/Update event
  const handleCreateEvent = () => {
    if (!newEvent.title || !newEvent.cost || !newEvent.date) {
      alert('Please fill in all required fields');
      return;
    }

    const eventToAdd = {
      id: editingEvent ? editingEvent.id : `user-${Date.now()}`,
      type: newEvent.type,
      category: getCategoryName(newEvent.type),
      title: newEvent.title,
      description: newEvent.description,
      location: newEvent.location,
      address: newEvent.location,
      lat: 51.5074, // Default to London center
      lng: -0.1278,
      date: newEvent.date,
      time: newEvent.time,
      individualCost: parseFloat(newEvent.cost),
      sharedCost: parseFloat(newEvent.cost) / newEvent.maxPeople,
      currentPeople: 1,
      maxPeople: newEvent.maxPeople,
      savings: Math.round((1 - (1 / newEvent.maxPeople)) * 100),
      organizer: 'You',
      tags: [newEvent.type.charAt(0).toUpperCase() + newEvent.type.slice(1)],
      image: getEventEmoji(newEvent.type),
      isUserCreated: true,
      source: 'User',
      lastUpdated: new Date().toISOString()
    };

    if (editingEvent) {
      setEvents(events.map(e => e.id === editingEvent.id ? eventToAdd : e));
    } else {
      setEvents([eventToAdd, ...events]);
    }

    setNewEvent({ type: 'food', title: '', description: '', location: '', date: '', time: '', cost: '', maxPeople: 4 });
    setEditingEvent(null);
    setShowCreateEvent(false);
  };

  const handleDeleteEvent = (eventId) => {
    if (window.confirm('Delete this event?')) {
      setEvents(events.filter(e => e.id !== eventId));
      setSelectedEvent(null);
    }
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent({
      type: event.type,
      title: event.title,
      description: event.description,
      location: event.location,
      date: event.date,
      time: event.time,
      cost: event.individualCost.toString(),
      maxPeople: event.maxPeople
    });
    setShowCreateEvent(true);
  };

  const getCategoryName = (type) => {
    const categories = {
      food: 'Restaurant',
      taxi: 'Ride Share',
      accommodation: 'Accommodation',
      event: 'Concert'
    };
    return categories[type] || 'Event';
  };

  const getEventEmoji = (type) => {
    const emojis = { food: '🍕', taxi: '🚕', accommodation: '🏠', event: '🎵' };
    return emojis[type] || '🎯';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Restaurant': 'bg-orange-100 text-orange-700 border-orange-200',
      'Concert': 'bg-purple-100 text-purple-700 border-purple-200',
      'Musical': 'bg-pink-100 text-pink-700 border-pink-200',
      'Ride Share': 'bg-blue-100 text-blue-700 border-blue-200',
      'Accommodation': 'bg-green-100 text-green-700 border-green-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ShareSave
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The smart way to share costs and save money on everyday experiences.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">How it works</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Safety</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex items-center justify-between text-sm text-gray-400">
          <p>© 2026 ShareSave. All rights reserved.</p>
          <p>Made with ❤️ for students</p>
        </div>
      </div>
    </footer>
  );

  // Signup Modal with Background Image
  if (!isAuthenticated && showSignup) {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%232563eb"/><stop offset="50%" style="stop-color:%239333ea"/><stop offset="100%" style="stop-color:%23ec4899"/></linearGradient></defs><rect width="1200" height="800" fill="url(%23g)"/></svg>')`,
          }}
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-md w-full relative z-10">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🤝</div>
            <h1 className="text-5xl font-bold mb-2 text-white drop-shadow-lg">Welcome to ShareSave</h1>
            <p className="text-xl text-white opacity-90 drop-shadow">Enter your location to discover events near you</p>
          </div>
          
          <form onSubmit={handleSignup} className="bg-white rounded-2xl p-8 shadow-2xl backdrop-blur-sm bg-opacity-95">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Postcode or Location
            </label>
            <input
              type="text"
              value={userLocation}
              onChange={(e) => setUserLocation(e.target.value)}
              placeholder="e.g., SW1A 1AA or London"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4 text-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold text-lg shadow-lg"
            >
              Continue to Events
            </button>
          </form>
          
          <p className="text-center text-sm text-white mt-4 opacity-90 drop-shadow">
            We'll show you events happening in your area
          </p>
        </div>
      </div>
    );
  }

  // Calculator Modal
  const renderCalculator = () => {
    if (!showCalculator) return null;
    
    const perPersonCost = calcCost / calcPeople;
    const savingsPerPerson = calcCost - perPersonCost;
    const savingsPercent = ((savingsPerPerson / calcCost) * 100).toFixed(0);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Savings Calculator
            </h3>
            <button onClick={() => setShowCalculator(false)} className="text-gray-400 hover:text-gray-600">
              <X size={28} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Total Cost: £{calcCost}
              </label>
              <input
                type="range"
                min="10"
                max="500"
                value={calcCost}
                onChange={(e) => setCalcCost(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Number of People: {calcPeople}
              </label>
              <input
                type="range"
                min="2"
                max="10"
                value={calcPeople}
                onChange={(e) => setCalcPeople(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-xl p-8 mt-6 border-2 border-green-200">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2 font-medium">Cost Per Person</div>
                  <div className="text-5xl font-bold text-green-600">£{perPersonCost.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2 font-medium">You Save</div>
                  <div className="text-5xl font-bold text-blue-600">{savingsPercent}%</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t-2 border-white">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2 font-medium">Total Savings Per Person</div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    £{savingsPerPerson.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // WORKING Map View with coordinates
  const renderMap = () => {
    if (!showMap) return null;
    
    // Calculate center point of all events
    const avgLat = filteredEvents.reduce((sum, e) => sum + (e.lat || 51.5074), 0) / filteredEvents.length;
    const avgLng = filteredEvents.reduce((sum, e) => sum + (e.lng || -0.1278), 0) / filteredEvents.length;
    
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="border-b border-gray-200 p-4 flex items-center justify-between bg-white shadow-sm">
          <h2 className="text-2xl font-bold">Events Near {userLocation}</h2>
          <button onClick={() => setShowMap(false)} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 flex">
          {/* Map with actual coordinates */}
          <div className="flex-1 relative">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${avgLat},${avgLng}&zoom=12`}
            />
          </div>
          
          {/* Event List on Right Side */}
          <div className="w-96 border-l border-gray-200 overflow-y-auto bg-white">
            <div className="p-4">
              <h3 className="font-semibold mb-4 text-lg">Events on Map ({filteredEvents.length})</h3>
              <div className="space-y-3">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition cursor-pointer hover:border-blue-300"
                    onClick={() => {
                      setSelectedEvent(event);
                      setShowMap(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{event.image}</div>
                      <div className="flex-1 min-w-0">
                        <div className={`px-2 py-0.5 rounded text-xs font-semibold border inline-block mb-2 ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </div>
                        <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                        <p className="text-xs text-gray-500 mb-2">{event.location}</p>
                        
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold text-blue-600">£{event.sharedCost.toFixed(2)}</span>
                          {event.savings > 0 && (
                            <span className="text-xs font-semibold text-green-600">Save {event.savings}%</span>
                          )}
                        </div>
                        
                        {/* Working Google Maps Links */}
                        <div className="flex gap-2">
                          <a
                            href={getGoogleMapsUrl(event)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-1 text-xs text-blue-600 hover:text-blue-800 border border-blue-300 rounded px-2 py-1.5 hover:bg-blue-50 transition font-medium"
                          >
                            <MapIcon size={12} />
                            View
                          </a>
                          <a
                            href={getDirectionsUrl(event)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-1 text-xs text-blue-600 hover:text-blue-800 border border-blue-300 rounded px-2 py-1.5 hover:bg-blue-50 transition font-medium"
                          >
                            <ExternalLink size={12} />
                            Directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Home view with background images
  const renderHome = () => {
    const totalSavings = calculateTotalSavings();
    
    return (
      <div className="bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Hero Section with Background Image */}
        <div className="relative overflow-hidden min-h-[500px]">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%232563eb"/><stop offset="100%" style="stop-color:%237c3aed"/></linearGradient></defs><rect width="1200" height="600" fill="url(%23heroGrad)"/><circle cx="100" cy="100" r="80" fill="%23fff" opacity="0.1"/><circle cx="1100" cy="500" r="120" fill="%23fff" opacity="0.1"/><circle cx="600" cy="300" r="60" fill="%23fff" opacity="0.05"/></svg>')`,
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 opacity-90" />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-20 text-white">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Share & Save Together</h1>
              <p className="text-2xl text-blue-100 mb-8 drop-shadow">
                Join thousands of students in {userLocation} splitting costs on food, transport & events
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button 
                  onClick={() => setShowCreateEvent(true)}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold flex items-center gap-2 shadow-lg"
                >
                  <Plus size={20} />
                  Create Event
                </button>
                <button 
                  onClick={() => setShowMap(true)}
                  className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-lg hover:bg-opacity-30 transition font-semibold flex items-center gap-2 border-2 border-white border-opacity-50 shadow-lg"
                >
                  <MapIcon size={20} />
                  View on Map
                </button>
                <button 
                  onClick={() => setShowCalculator(true)}
                  className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-lg hover:bg-opacity-30 transition font-semibold flex items-center gap-2 border-2 border-white border-opacity-50 shadow-lg"
                >
                  <DollarSign size={20} />
                  Calculate Savings
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-30 hover:bg-opacity-20 transition shadow-xl">
                <div className="text-4xl font-bold mb-1">{events.length}</div>
                <div className="text-blue-100 text-sm">Active Events</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-30 hover:bg-opacity-20 transition shadow-xl">
                <div className="text-4xl font-bold mb-1">£{totalSavings.toFixed(0)}</div>
                <div className="text-blue-100 text-sm">Your Savings</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-30 hover:bg-opacity-20 transition shadow-xl">
                <div className="text-4xl font-bold mb-1">{joinedEvents.length}</div>
                <div className="text-blue-100 text-sm">Events Joined</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-30 hover:bg-opacity-20 transition shadow-xl">
                <div className="text-4xl font-bold mb-1">1,234</div>
                <div className="text-blue-100 text-sm">Active Users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for restaurants, concerts, rides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Discover Events</h2>
              <p className="text-gray-600">Find the perfect event to share and save</p>
            </div>
            
            <button
              onClick={handleRefreshEvents}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium disabled:opacity-50"
            >
              <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
              {isRefreshing ? 'Updating...' : 'Refresh'}
            </button>
          </div>

          <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
            <button
              onClick={() => setFilterType('all')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${
                filterType === 'all' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilterType('food')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${
                filterType === 'food' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              🍕 Food & Dining
            </button>
            <button
              onClick={() => setFilterType('taxi')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${
                filterType === 'taxi' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              🚗 Ride Share
            </button>
            <button
              onClick={() => setFilterType('accommodation')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${
                filterType === 'accommodation' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              🏠 Accommodation
            </button>
            <button
              onClick={() => setFilterType('event')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${
                filterType === 'event' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              🎵 Concerts & Shows
            </button>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-3 gap-6">
            {filteredEvents.map(event => {
              const isJoined = joinedEvents.includes(event.id);
              const isLiked = likedEvents.includes(event.id);
              
              return (
                <div 
                  key={event.id} 
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group relative"
                >
                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeEvent(event.id);
                    }}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition"
                  >
                    <Heart size={20} className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
                  </button>

                  <div className="p-6" onClick={() => setSelectedEvent(event)}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </div>
                      <div className="text-4xl">{event.image}</div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} />
                        {event.currentPeople}/{event.maxPeople} people
                      </div>
                    </div>
                    
                    {/* Working Google Maps Link */}
                    <div className="mb-4">
                      <a
                        href={getGoogleMapsUrl(event)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <ExternalLink size={14} />
                        Open in Google Maps
                      </a>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 mb-4 border border-blue-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-600">Individual cost:</span>
                        <span className="text-lg font-bold text-gray-400 line-through">£{event.individualCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">Your cost:</span>
                        <span className="text-2xl font-bold text-blue-600">£{event.sharedCost.toFixed(2)}</span>
                      </div>
                      {event.savings > 0 && (
                        <div className="mt-2 pt-2 border-t border-blue-200">
                          <div className="text-xs text-green-600 font-semibold flex items-center gap-1">
                            <TrendingDown size={14} />
                            Save £{(event.individualCost - event.sharedCost).toFixed(2)} ({event.savings}% off)
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEvent(event);
                        }}
                        className={`flex-1 py-3 rounded-lg transition text-sm font-semibold shadow-md ${
                          isJoined 
                            ? 'bg-green-100 text-green-700 border border-green-300' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        }`}
                      >
                        {isJoined ? '✓ Joined' : 'View Details'}
                      </button>
                      {event.isUserCreated && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditEvent(event);
                            }}
                            className="border border-gray-300 px-3 py-3 rounded-lg hover:bg-gray-50 transition"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteEvent(event.id);
                            }}
                            className="border border-gray-300 px-3 py-3 rounded-lg hover:bg-gray-50 transition"
                          >
                            <Trash2 size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or create a new event</p>
              <button
                onClick={() => setShowCreateEvent(true)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold shadow-md"
              >
                Create Event
              </button>
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  };

  // Discover People View
  const renderDiscover = () => (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Discover People</h2>
        <p className="text-gray-600 mb-8">Connect with others who share your interests</p>
        
        <div className="grid grid-cols-3 gap-6">
          {mockUsers.map(user => (
            <div key={user.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl shadow-md">
                  {user.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Star size={14} fill="currentColor" className="text-yellow-400" />
                    <span className="text-gray-600">{user.reliability}/5.0</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Savings:</span>
                  <span className="font-semibold text-green-600">£{user.savings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Connections:</span>
                  <span className="font-semibold text-gray-900">{user.connections}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member since:</span>
                  <span className="font-semibold text-gray-900">{user.joinedDate}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2 font-medium">Interests:</div>
                <div className="flex flex-wrap gap-2">
                  {user.interests.map((interest, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold">
                  Connect
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition">
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );

  // Profile with complete statistics
  const renderProfile = () => {
    const totalSavings = calculateTotalSavings();
    const avgSavingsPerEvent = joinedEvents.length > 0 ? totalSavings / joinedEvents.length : 0;
    
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6 shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  YN
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Your Name</h2>
                  <p className="text-gray-600">{userLocation}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <Star size={14} fill="currentColor" className="text-yellow-400" />
                    <span className="font-medium">4.9</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">23 reviews</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-sm ${
                  userTier === 'premium' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}>
                  {userTier === 'premium' ? '⭐ Premium' : 'Free'}
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium flex items-center gap-2 text-sm"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
            
            {/* Savings Statistics */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Your Savings</h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 mb-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2 font-medium">Total Saved</div>
                  <div className="text-6xl font-bold text-green-600 mb-2">£{totalSavings.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">Across {joinedEvents.length} events</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                  <div className="text-xs text-blue-700 mb-1 font-medium">Events Joined</div>
                  <div className="text-3xl font-bold text-blue-700">{joinedEvents.length}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                  <div className="text-xs text-purple-700 mb-1 font-medium">Avg per Event</div>
                  <div className="text-3xl font-bold text-purple-700">£{avgSavingsPerEvent.toFixed(2)}</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                  <div className="text-xs text-orange-700 mb-1 font-medium">This Month</div>
                  <div className="text-3xl font-bold text-orange-700">£{(totalSavings * 0.6).toFixed(2)}</div>
                </div>
              </div>
            </div>
            
            {/* Joined Events */}
            {joinedEvents.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Your Events</h3>
                <div className="space-y-3">
                  {joinedEvents.map(eventId => {
                    const event = events.find(e => e.id === eventId);
                    if (!event) return null;
                    
                    return (
                      <div key={eventId} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100 rounded-lg hover:shadow-md transition">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{event.image}</div>
                          <div>
                            <div className="font-semibold">{event.title}</div>
                            <div className="text-sm text-gray-500">{event.date} at {event.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Saved</div>
                          <div className="text-2xl font-bold text-green-600">
                            £{(event.individualCost - event.sharedCost).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          {/* Subscription Plans */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Subscription Plans</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className={`border-2 rounded-xl p-6 transition ${
                userTier === 'free' ? 'border-blue-600 bg-blue-50 shadow-lg' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Free</h4>
                    <p className="text-sm text-gray-600">Get started</p>
                  </div>
                  <div className="text-3xl font-bold">£0</div>
                </div>
                
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-green-600" />
                    Food splitting only
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-green-600" />
                    3 events per month
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <X size={18} />
                    <span className="line-through">All features</span>
                  </li>
                </ul>
                
                {userTier === 'free' ? (
                  <div className="bg-blue-600 text-white py-3 rounded-lg text-center font-semibold shadow-md">
                    Current Plan
                  </div>
                ) : (
                  <button
                    onClick={() => setUserTier('free')}
                    className="w-full border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Downgrade
                  </button>
                )}
              </div>
              
              <div className={`border-2 rounded-xl p-6 transition relative ${
                userTier === 'premium' ? 'border-purple-600 bg-gradient-to-br from-purple-50 to-blue-50 shadow-xl' : 'border-gray-200 hover:border-gray-300'
              }`}>
                {userTier !== 'premium' && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Premium</h4>
                    <p className="text-sm text-gray-600">Everything</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">£5.99</div>
                    <div className="text-xs text-gray-500">/month</div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-green-600" />
                    Unlimited events
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-green-600" />
                    All categories
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-green-600" />
                    Priority support
                  </li>
                </ul>
                
                {userTier === 'premium' ? (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg text-center font-semibold shadow-md">
                    ⭐ Current Plan
                  </div>
                ) : (
                  <button
                    onClick={() => setUserTier('premium')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-md"
                  >
                    Upgrade Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  // Create/Edit Event Modal
  const renderCreateEvent = () => {
    if (!showCreateEvent) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 my-8 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">{editingEvent ? 'Edit Event' : 'Create Event'}</h3>
            <button 
              onClick={() => {
                setShowCreateEvent(false);
                setEditingEvent(null);
                setNewEvent({ type: 'food', title: '', description: '', location: '', date: '', time: '', cost: '', maxPeople: 4 });
              }} 
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={newEvent.type}
                onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="food">Food</option>
                <option value="taxi">Transport</option>
                <option value="accommodation">Accommodation</option>
                <option value="event">Event</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                placeholder="Pizza Night"
                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                placeholder="Describe what you're sharing..."
                rows="3"
                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <input
                  type="text"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                  placeholder="Full address"
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cost (£) *</label>
                <input
                  type="number"
                  value={newEvent.cost}
                  onChange={(e) => setNewEvent({...newEvent, cost: e.target.value})}
                  placeholder="0.00"
                  step="0.01"
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max People</label>
              <input
                type="number"
                value={newEvent.maxPeople}
                onChange={(e) => setNewEvent({...newEvent, maxPeople: Number(e.target.value)})}
                min="2"
                max="10"
                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {newEvent.cost && newEvent.maxPeople && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-blue-200">
                <div className="text-sm text-gray-700 mb-1">Each person pays:</div>
                <div className="text-3xl font-bold text-blue-600">
                  £{(Number(newEvent.cost) / newEvent.maxPeople).toFixed(2)}
                </div>
                <div className="text-sm text-green-600 font-semibold mt-1">
                  Saving £{(Number(newEvent.cost) - (Number(newEvent.cost) / newEvent.maxPeople)).toFixed(2)} each!
                </div>
              </div>
            )}
            
            <button
              onClick={handleCreateEvent}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold shadow-md mt-6 text-lg"
            >
              {editingEvent ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Event Detail Modal
  const renderEventDetail = () => {
    if (!selectedEvent) return null;
    
    const alreadyJoined = joinedEvents.includes(selectedEvent.id);
    const isLiked = likedEvents.includes(selectedEvent.id);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="text-6xl">{selectedEvent.image}</div>
              <div>
                <div className={`px-3 py-1 rounded-lg text-xs font-semibold border inline-block mb-2 ${getCategoryColor(selectedEvent.category)}`}>
                  {selectedEvent.category}
                </div>
                <h3 className="text-3xl font-bold">{selectedEvent.title}</h3>
                <p className="text-gray-600">by {selectedEvent.organizer}</p>
              </div>
            </div>
            <button onClick={() => setSelectedEvent(null)} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Full Price</div>
              <div className="text-3xl font-bold text-gray-400 line-through">
                £{selectedEvent.individualCost.toFixed(2)}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
              <div className="text-sm text-gray-600 mb-1">Your Price</div>
              <div className="text-3xl font-bold text-blue-600">
                £{selectedEvent.sharedCost.toFixed(2)}
              </div>
            </div>
          </div>
          
          {selectedEvent.savings > 0 && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6 text-center border-2 border-green-200">
              <div className="text-sm text-gray-600 mb-2">You'll Save</div>
              <div className="text-5xl font-bold text-green-600 mb-1">
                £{(selectedEvent.individualCost - selectedEvent.sharedCost).toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">({selectedEvent.savings}% discount)</div>
            </div>
          )}
          
          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={16} />
              {selectedEvent.location}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar size={16} />
              {selectedEvent.date} at {selectedEvent.time}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Users size={16} />
              {selectedEvent.currentPeople}/{selectedEvent.maxPeople} people joined
            </div>
          </div>
          
          {/* Working Google Maps Links */}
          <div className="flex gap-3 mb-6">
            <a
              href={getGoogleMapsUrl(selectedEvent)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              <MapIcon size={18} />
              View on Google Maps
            </a>
            <a
              href={getDirectionsUrl(selectedEvent)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold"
            >
              <ExternalLink size={18} />
              Get Directions
            </a>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 text-lg">{selectedEvent.description}</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => handleJoinEvent(selectedEvent.id)}
              disabled={alreadyJoined}
              className={`flex-1 py-4 rounded-lg font-semibold shadow-lg text-lg transition ${
                alreadyJoined 
                  ? 'bg-green-100 text-green-700 cursor-not-allowed border-2 border-green-300' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {alreadyJoined ? '✓ Joined Event' : 'Join Event & Start Saving'}
            </button>
            <button
              onClick={() => handleLikeEvent(selectedEvent.id)}
              className={`px-6 py-4 rounded-lg border-2 transition ${
                isLiked 
                  ? 'bg-red-50 border-red-500' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Heart size={24} className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-40 bg-white backdrop-blur-lg bg-opacity-95 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShareSave
              </div>
              
              <div className="flex gap-1">
                <button
                  onClick={() => setCurrentView('home')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    currentView === 'home' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'hover:bg-gray-50'
                  }`}
                >
                  <Home size={16} className="inline mr-1" />
                  Events
                </button>
                
                <button
                  onClick={() => setCurrentView('discover')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    currentView === 'discover' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'hover:bg-gray-50'
                  }`}
                >
                  <Users size={16} className="inline mr-1" />
                  People
                </button>
                
                <button
                  onClick={() => setCurrentView('profile')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    currentView === 'profile' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'hover:bg-gray-50'
                  }`}
                >
                  <User size={16} className="inline mr-1" />
                  Profile
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="relative text-gray-600 hover:text-gray-900">
                <Bell size={22} />
                {joinedEvents.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md">
                    {joinedEvents.length}
                  </span>
                )}
              </button>
              
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer shadow-md hover:shadow-lg transition">
                YN
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentView === 'home' && renderHome()}
        {currentView === 'discover' && renderDiscover()}
        {currentView === 'profile' && renderProfile()}
      </main>

      {/* Modals */}
      {renderMap()}
      {renderCalculator()}
      {renderCreateEvent()}
      {renderEventDetail()}
    </div>
  );
}
