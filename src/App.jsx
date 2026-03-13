import React, { useState, useEffect } from 'react';
import { Share2, Users, Calendar, MapPin, User, Home, Search, Plus, X, Check, Star, Edit, Trash2, TrendingDown, DollarSign } from 'lucide-react';

// Real events based on London data
const realEventsData = [
  {
    id: 'real-1',
    type: 'event',
    title: 'ABBA Voyage Concert',
    description: 'Share tickets to the digital ABBA concert experience',
    location: 'ABBA Arena, London',
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
    isReal: true
  },
  {
    id: 'real-2',
    type: 'food',
    title: 'DanDan Battersea - 40% Off',
    description: 'Chinese restaurant opening deal - split the bill',
    location: 'Battersea, London',
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
    isReal: true
  },
  {
    id: 'real-3',
    type: 'food',
    title: 'Gloria Shoreditch - Italian Lunch',
    description: 'Big Mamma\'s Pranzetto menu - Antipasti & Main £23',
    location: 'Shoreditch, London',
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
    isReal: true
  },
  {
    id: 'real-4',
    type: 'event',
    title: 'Wicked The Musical',
    description: 'West End show at Apollo Victoria - share tickets',
    location: 'Apollo Victoria Theatre',
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
    isReal: true
  },
  {
    id: 'real-5',
    type: 'taxi',
    title: 'Uber to O2 Arena',
    description: 'Concert night - share the ride from South Kensington',
    location: 'South Ken → O2 Arena',
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
    isReal: true
  },
  {
    id: 'real-6',
    type: 'food',
    title: 'Amazing Grace Canary Wharf - 50% Off',
    description: 'Pan-Asian dining with live music - Tues/Wed/Fri deal',
    location: 'Canary Wharf, London',
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
    isReal: true
  },
  {
    id: 'real-7',
    type: 'accommodation',
    title: 'Brighton Weekend Trip',
    description: 'Beach house for 4 - split the cost',
    location: 'Brighton, UK',
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
    isReal: true
  },
  {
    id: 'real-8',
    type: 'taxi',
    title: 'Heathrow Airport Run',
    description: 'Early morning flight - share Uber XL',
    location: 'Central London → Heathrow',
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
    isReal: true
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
    joinedDate: 'Jan 2024'
  },
  {
    id: 2,
    name: 'James Wilson',
    interests: ['Transport', 'Sports', 'Tech'],
    savings: 189,
    connections: 12,
    reliability: 4.9,
    joinedDate: 'Jan 2024'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    interests: ['Travel', 'Food', 'Events'],
    savings: 456,
    connections: 23,
    reliability: 5.0,
    joinedDate: 'Dec 2023'
  }
];

export default function CostSharePlatform() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [userTier, setUserTier] = useState('free');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  
  // Load events from localStorage
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('shareEvents');
    if (saved) {
      return JSON.parse(saved);
    }
    return realEventsData;
  });
  
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('shareEvents', JSON.stringify(events));
  }, [events]);
  
  // Calculator state
  const [calcCost, setCalcCost] = useState(100);
  const [calcPeople, setCalcPeople] = useState(4);
  
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

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesType = filterType === 'all' || event.type === filterType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Create/Update event
  const handleCreateEvent = () => {
    if (!newEvent.title || !newEvent.cost || !newEvent.date) {
      alert('Please fill in all required fields');
      return;
    }

    const eventToAdd = {
      id: editingEvent ? editingEvent.id : `user-${Date.now()}`,
      type: newEvent.type,
      title: newEvent.title,
      description: newEvent.description,
      location: newEvent.location,
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
      isUserCreated: true
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

  // Delete event
  const handleDeleteEvent = (eventId) => {
    if (window.confirm('Delete this event?')) {
      setEvents(events.filter(e => e.id !== eventId));
      setSelectedEvent(null);
    }
  };

  // Edit event
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

  const getEventEmoji = (type) => {
    const emojis = { food: '🍕', taxi: '🚕', accommodation: '🏠', event: '🎵' };
    return emojis[type] || '🎯';
  };

  // Home view
  const renderHome = () => (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-5xl font-light text-gray-900 mb-3">Share & Save</h1>
        <p className="text-xl text-gray-500 mb-8">Split costs on food, transport, events & accommodation</p>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowCreateEvent(true)}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium flex items-center gap-2"
          >
            <Plus size={20} />
            Create Event
          </button>
          <button 
            onClick={() => setShowCalculator(true)}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
          >
            Calculate Savings
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-sm text-gray-500 mb-1">Active Events</div>
          <div className="text-2xl font-semibold">{events.length}</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-sm text-gray-500 mb-1">Total Users</div>
          <div className="text-2xl font-semibold">1,234</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-sm text-gray-500 mb-1">Avg. Savings</div>
          <div className="text-2xl font-semibold">£234</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-sm text-gray-500 mb-1">Connections</div>
          <div className="text-2xl font-semibold">3,456</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filterType === 'all' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType('food')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filterType === 'food' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Food
          </button>
          <button
            onClick={() => setFilterType('taxi')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filterType === 'taxi' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Transport
          </button>
          <button
            onClick={() => setFilterType('accommodation')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filterType === 'accommodation' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Stays
          </button>
          <button
            onClick={() => setFilterType('event')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filterType === 'event' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Events
          </button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-64"
          />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-3 gap-4">
        {filteredEvents.map(event => (
          <div 
            key={event.id} 
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer group"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{event.image}</div>
                {event.savings > 0 && (
                  <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    {event.savings}% off
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-black">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{event.description}</p>
              
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} />
                  {event.currentPeople}/{event.maxPeople} people
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">Individual</span>
                  <span className="text-sm text-gray-400 line-through">£{event.individualCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Your cost</span>
                  <span className="text-xl font-semibold">£{event.sharedCost.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(event);
                  }}
                  className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
                >
                  View Details
                </button>
                {event.isUserCreated && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditEvent(event);
                      }}
                      className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteEvent(event.id);
                      }}
                      className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">No events found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your filters or create a new event</p>
          <button
            onClick={() => setShowCreateEvent(true)}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Create Event
          </button>
        </div>
      )}
    </div>
  );

  const renderDiscover = () => (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-light text-gray-900 mb-8">Discover People</h2>
      
      <div className="grid grid-cols-3 gap-4">
        {mockUsers.map(user => (
          <div key={user.id} className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Star size={14} fill="currentColor" className="text-yellow-400" />
                  {user.reliability}
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Savings</span>
                <span className="font-medium">£{user.savings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Connections</span>
                <span className="font-medium">{user.connections}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-2">Interests</div>
              <div className="flex flex-wrap gap-1">
                {user.interests.map((interest, idx) => (
                  <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm font-medium">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl font-medium">
              YN
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Your Name</h2>
              <p className="text-gray-500">Imperial College London</p>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <Star size={14} fill="currentColor" className="text-yellow-400" />
                <span className="font-medium">4.9</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">23 reviews</span>
              </div>
            </div>
          </div>
          
          <div className={`px-4 py-2 rounded-lg text-sm font-medium ${
            userTier === 'premium' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
          }`}>
            {userTier === 'premium' ? 'Premium' : 'Free'}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Total Savings</div>
            <div className="text-xl font-semibold">£456</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Events</div>
            <div className="text-xl font-semibold">34</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Connections</div>
            <div className="text-xl font-semibold">23</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">This Month</div>
            <div className="text-xl font-semibold">£89</div>
          </div>
        </div>
      </div>
      
      {/* Subscription Plans */}
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h3 className="text-xl font-semibold mb-6">Plans</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className={`border-2 rounded-lg p-5 ${
            userTier === 'free' ? 'border-black' : 'border-gray-200'
          }`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold">Free</h4>
                <p className="text-sm text-gray-500">Basic features</p>
              </div>
              <div className="text-2xl font-semibold">£0</div>
            </div>
            
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                Food splitting only
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                3 connections/day
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <X size={16} />
                All features
              </li>
            </ul>
            
            {userTier === 'free' ? (
              <div className="bg-black text-white py-2 rounded-lg text-center text-sm font-medium">
                Current Plan
              </div>
            ) : (
              <button
                onClick={() => setUserTier('free')}
                className="w-full border border-gray-300 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                Downgrade
              </button>
            )}
          </div>
          
          <div className={`border-2 rounded-lg p-5 ${
            userTier === 'premium' ? 'border-black' : 'border-gray-200'
          }`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold">Premium</h4>
                <p className="text-sm text-gray-500">Everything</p>
              </div>
              <div>
                <div className="text-2xl font-semibold">£5.99</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
            </div>
            
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                Unlimited connections
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                All features
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                Priority support
              </li>
            </ul>
            
            {userTier === 'premium' ? (
              <div className="bg-black text-white py-2 rounded-lg text-center text-sm font-medium">
                Current Plan
              </div>
            ) : (
              <button
                onClick={() => setUserTier('premium')}
                className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
              >
                Upgrade
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Calculator Modal
  const renderCalculator = () => {
    if (!showCalculator) return null;
    
    const perPersonCost = calcCost / calcPeople;
    const savingsPerPerson = calcCost - perPersonCost;
    const savingsPercent = ((savingsPerPerson / calcCost) * 100).toFixed(0);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">Savings Calculator</h3>
            <button onClick={() => setShowCalculator(false)} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Cost: £{calcCost}
              </label>
              <input
                type="range"
                min="10"
                max="500"
                value={calcCost}
                onChange={(e) => setCalcCost(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of People: {calcPeople}
              </label>
              <input
                type="range"
                min="2"
                max="10"
                value={calcPeople}
                onChange={(e) => setCalcPeople(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Cost Per Person</div>
                  <div className="text-2xl font-semibold">£{perPersonCost.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">You Save</div>
                  <div className="text-2xl font-semibold">{savingsPercent}%</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Savings Per Person</div>
                <div className="text-3xl font-semibold">£{savingsPerPerson.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Create/Edit Event Modal
  const renderCreateEvent = () => {
    if (!showCreateEvent) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
        <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4 my-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">{editingEvent ? 'Edit Event' : 'Create Event'}</h3>
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="food">Food</option>
                <option value="taxi">Transport</option>
                <option value="accommodation">Accommodation</option>
                <option value="event">Event</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                placeholder="Pizza Night"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                placeholder="Describe what you're sharing..."
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                  placeholder="Where?"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cost (£)</label>
                <input
                  type="number"
                  value={newEvent.cost}
                  onChange={(e) => setNewEvent({...newEvent, cost: e.target.value})}
                  placeholder="0.00"
                  step="0.01"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            {newEvent.cost && newEvent.maxPeople && (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Each person pays:</div>
                <div className="text-2xl font-semibold">
                  £{(Number(newEvent.cost) / newEvent.maxPeople).toFixed(2)}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Saving £{(Number(newEvent.cost) - (Number(newEvent.cost) / newEvent.maxPeople)).toFixed(2)} each
                </div>
              </div>
            )}
            
            <button
              onClick={handleCreateEvent}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium mt-6"
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
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="text-5xl">{selectedEvent.image}</div>
              <div>
                <h3 className="text-2xl font-semibold">{selectedEvent.title}</h3>
                <p className="text-gray-500">by {selectedEvent.organizer}</p>
              </div>
            </div>
            <button onClick={() => setSelectedEvent(null)} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500 mb-1">Full Price</div>
              <div className="text-2xl font-semibold text-gray-400 line-through">
                £{selectedEvent.individualCost.toFixed(2)}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-500 mb-1">Your Price</div>
              <div className="text-2xl font-semibold">
                £{selectedEvent.sharedCost.toFixed(2)}
              </div>
            </div>
          </div>
          
          {selectedEvent.savings > 0 && (
            <div className="bg-green-50 rounded-lg p-4 mb-6 text-center">
              <div className="text-sm text-gray-600 mb-1">You Save</div>
              <div className="text-3xl font-semibold">
                £{(selectedEvent.individualCost - selectedEvent.sharedCost).toFixed(2)}
              </div>
              <div className="text-sm text-gray-500 mt-1">({selectedEvent.savings}% off)</div>
            </div>
          )}
          
          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              {selectedEvent.location}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} />
              {selectedEvent.date} at {selectedEvent.time}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users size={16} />
              {selectedEvent.currentPeople}/{selectedEvent.maxPeople} people
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600">{selectedEvent.description}</p>
          </div>
          
          <button
            onClick={() => {
              alert('Joined event!');
              setSelectedEvent(null);
            }}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Join Event
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-xl font-semibold">ShareSave</div>
              
              <div className="flex gap-1">
                <button
                  onClick={() => setCurrentView('home')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    currentView === 'home' ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  Events
                </button>
                
                <button
                  onClick={() => setCurrentView('discover')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    currentView === 'discover' ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  People
                </button>
                
                <button
                  onClick={() => setCurrentView('profile')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    currentView === 'profile' ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  Profile
                </button>
              </div>
            </div>
            
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-medium cursor-pointer">
              YN
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
      {renderCalculator()}
      {renderCreateEvent()}
      {renderEventDetail()}
    </div>
  );
}