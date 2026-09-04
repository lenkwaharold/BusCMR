const agenciesData = [
  { id: "general-express", name: "General Express", rating: 4.6, reviews: 128, location: "Nationwide" },
  { id: "finexs-voyages", name: "Finexs Voyages", rating: 4.4, reviews: 96, location: "Douala / Yaoundé" },
  { id: "magic-express", name: "Magic Express", rating: 4.3, reviews: 87, location: "Yaoundé" },
  { id: "royal-voyage", name: "Royal Voyage", rating: 4.5, reviews: 73, location: "Bamenda" },
  { id: "express-voyage", name: "Express Voyage", rating: 4.2, reviews: 61, location: "Nationwide" },
  { id: "cam-trans", name: "Cam Trans", rating: 4.3, reviews: 58, location: "Douala" }
];

const busesData = [
  // 1 to 5 - General Express
  { id: "bus-1", agencyId: "general-express", agencyName: "General Express", name: "Scania Touring VIP", seats: 45, class: "VIP", price: 15000, routeKey: "yd-dl" },
  { id: "bus-2", agencyId: "general-express", agencyName: "General Express", name: "Yutong ZK Cruiser", seats: 55, class: "Standard", price: 12000, routeKey: "dl-bm" },
  { id: "bus-3", agencyId: "general-express", agencyName: "General Express", name: "King Long Express", seats: 53, class: "Economy", price: 8500, routeKey: "yd-bf" },
  { id: "bus-4", agencyId: "general-express", agencyName: "General Express", name: "Golden Dragon Comfort", seats: 48, class: "Standard", price: 10000, routeKey: "dl-kb" },
  { id: "bus-5", agencyId: "general-express", agencyName: "General Express", name: "Volvo B11R Luxury", seats: 40, class: "VIP", price: 18000, routeKey: "yd-dl" },

  // 6 to 10 - Finexs Voyages
  { id: "bus-6", agencyId: "finexs-voyages", agencyName: "Finexs Voyages", name: "Finexs Prestige VIP", seats: 42, class: "VIP", price: 16000, routeKey: "yd-dl" },
  { id: "bus-7", agencyId: "finexs-voyages", agencyName: "Finexs Voyages", name: "Finexs Executive Cruiser", seats: 50, class: "Standard", price: 11000, routeKey: "dl-kb" },
  { id: "bus-8", agencyId: "finexs-voyages", agencyName: "Finexs Voyages", name: "Finexs Intercity Express", seats: 55, class: "Economy", price: 9000, routeKey: "yd-bf" },
  { id: "bus-9", agencyId: "finexs-voyages", agencyName: "Finexs Voyages", name: "Finexs First Class Liner", seats: 38, class: "VIP", price: 17500, routeKey: "yd-dl" },
  { id: "bus-10", agencyId: "finexs-voyages", agencyName: "Finexs Voyages", name: "Finexs Highway Star", seats: 48, class: "Standard", price: 10500, routeKey: "dl-bm" },

  // 11 to 15 - Magic Express
  { id: "bus-11", agencyId: "magic-express", agencyName: "Magic Express", name: "Magic Shuttle VIP", seats: 44, class: "VIP", price: 14000, routeKey: "yd-bf" },
  { id: "bus-12", agencyId: "magic-express", agencyName: "Magic Express", name: "Magic Trans Express", seats: 52, class: "Standard", price: 9500, routeKey: "yd-dl" },
  { id: "bus-13", agencyId: "magic-express", agencyName: "Magic Express", name: "Magic Traveler", seats: 56, class: "Economy", price: 8000, routeKey: "dl-bm" },
  { id: "bus-14", agencyId: "magic-express", agencyName: "Magic Express", name: "Magic Gold Class", seats: 40, class: "VIP", price: 15500, routeKey: "dl-kb" },
  { id: "bus-15", agencyId: "magic-express", agencyName: "Magic Express", name: "Magic Regional Liner", seats: 50, class: "Standard", price: 10000, routeKey: "yd-bf" },

  // 16 to 20 - Royal Voyage
  { id: "bus-16", agencyId: "royal-voyage", agencyName: "Royal Voyage", name: "Royal Sovereign VIP", seats: 36, class: "VIP", price: 18500, routeKey: "dl-bm" },
  { id: "bus-17", agencyId: "royal-voyage", agencyName: "Royal Voyage", name: "Royal Coach Standard", seats: 48, class: "Standard", price: 11500, routeKey: "yd-dl" },
  { id: "bus-18", agencyId: "royal-voyage", agencyName: "Royal Voyage", name: "Royal Express Shuttle", seats: 54, class: "Economy", price: 8500, routeKey: "yd-bf" },
  { id: "bus-19", agencyId: "royal-voyage", agencyName: "Royal Voyage", name: "Royal Crown VIP", seats: 42, class: "VIP", price: 16500, routeKey: "dl-kb" },
  { id: "bus-20", agencyId: "royal-voyage", agencyName: "Royal Voyage", name: "Royal Highway Cruiser", seats: 50, class: "Standard", price: 10500, routeKey: "dl-bm" }
];
