// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];
// const sampleListings = [
//     {
//       title: "Urban Loft in San Francisco",
//       description:
//         "Experience city living at its finest in this modern loft apartment in downtown San Francisco.",
//       // image: "https://images.unsplash.com/photo-1572276596237-5ff39dbf7aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       image:"https://media.istockphoto.com/id/1435107133/photo/awe-view-on-japanese-garden-in-hamburg-with-palmate-maple-and-palmate-maple-dissectum.jpg?s=1024x1024&w=is&k=20&c=kJgTRDnef_34pva3vp9LE_T36aIAMqMDwWeTVP7gVsI=",
//       price: 1800,
//       location: "San Francisco",
//       country: "United States",
//     },
//     {
//       title: "Chic Studio in Paris",
//       description:
//         "Live like a Parisian in this stylish studio apartment located in the heart of the city.",
//       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 2000,
//       location: "Paris",
//       country: "France",
//     },
//     {
//       title: "Riverside Cabin in Oregon",
//       description:
//         "Escape to nature in this cozy cabin nestled along the tranquil riverside in Oregon.",
//       image: "https://images.unsplash.com/photo-1554290719-beb6ec048bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       // image:"https://media.istockphoto.com/id/1435107133/photo/awe-view-on-japanese-garden-in-hamburg-with-palmate-maple-and-palmate-maple-dissectum.jpg?s=1024x1024&w=is&k=20&c=kJgTRDnef_34pva3vp9LE_T36aIAMqMDwWeTVP7gVsI=",
//       price: 1200,
//       location: "Oregon",
//       country: "United States",
//     },
//     {
//       title: "Historic Townhouse in London",
//       description:
//         "Step into history in this elegant townhouse located in the heart of London's historic district.",
//       image: "https://images.unsplash.com/photo-1566444067709-43c3dd87e89f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 2500,
//       location: "London",
//       country: "United Kingdom",
//     },
//     {
//       title: "Ski Chalet in Whistler",
//       description:
//         "Hit the slopes in one of North America's premier ski resorts from this luxurious chalet in Whistler.",
//       image: "https://images.unsplash.com/photo-1592075491988-92f5e0b8e0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 2800,
//       location: "Whistler",
//       country: "Canada",
//     },
//     {
//       title: "Seaside Villa in Santorini",
//       description:
//         "Enjoy breathtaking views of the Aegean Sea from this stunning villa perched on the cliffs of Santorini.",
//       image: "https://images.unsplash.com/photo-1534120247760-9b69740bbd48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 3000,
//       location: "Santorini",
//       country: "Greece",
//     },
//     {
//       title: "Mountain Lodge in Colorado",
//       description:
//         "Experience the beauty of the Rocky Mountains from this cozy lodge nestled in the heart of Colorado.",
//       image: "https://images.unsplash.com/photo-1549880185-c00d84b15ee9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 1500,
//       location: "Colorado",
//       country: "United States",
//     },
//     {
//       title: "Rustic Farmhouse in Tuscany",
//       description:
//         "Experience the charm of rural Italy in this rustic farmhouse surrounded by vineyards and olive groves.",
//       image: "https://images.unsplash.com/photo-1542371763-659c204fc929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 2200,
//       location: "Tuscany",
//       country: "Italy",
//     },
//     {
//       title: "Luxury Penthouse in Sydney",
//       description:
//         "Indulge in luxury living with stunning views of Sydney Harbour from this opulent penthouse.",
//       image: "https://images.unsplash.com/photo-1566979972206-1c05e112b7d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 3500,
//       location: "Sydney",
//       country: "Australia",
//     },
//     {
//       title: "Ski Lodge in Jackson Hole",
//       description:
//         "Embark on a ski adventure in the rugged beauty of Wyoming's Teton Mountains from this cozy lodge in Jackson Hole.",
//       image: "https://images.unsplash.com/photo-1553528404-5233b2bb28ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 2600,
//       location: "Jackson Hole",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Villa in the Bahamas",
//       description:
//         "Escape to paradise in this luxurious beachfront villa on the pristine shores of the Bahamas.",
//       image: "https://images.unsplash.com/photo-1516684669013-056edf3d2cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 4000,
//       location: "Bahamas",
//       country: "Bahamas",
//     },
//     {
//       title: "Mountain Chalet in Switzerland",
//       description:
//         "Ski the slopes of the Swiss Alps from this traditional mountain chalet with panoramic views.",
//       image: "https://images.unsplash.com/photo-1602436530315-7d5ce7ba40fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 3200,
//       location: "Switzerland",
//       country: "Switzerland",
//     },
//     {
//       title: "Coastal Cottage in Cornwall",
//       description:
//         "Relax by the sea in this charming coastal cottage located in the picturesque region of Cornwall.",
//       image: "https://images.unsplash.com/photo-1559291001-283170e2a6f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 1700,
//       location: "Cornwall",
//       country: "United Kingdom",
//     },
//     {
//       title: "Treetop Retreat in Costa Rica",
//       description:
//         "Escape to the rainforest canopy in this unique treetop retreat offering unparalleled views and serenity.",
//       image: "https://images.unsplash.com/photo-1573866926629-1d51e7ef865f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 1300,
//       location: "Costa Rica",
//       country: "Costa Rica",
//     },
//     {
//       title: "Beachfront Condo in Miami Beach",
//       description:
//         "Enjoy the vibrant atmosphere of Miami Beach from this stylish beachfront condo with panoramic ocean views.",
//       image: "https://images.unsplash.com/photo-1533709750005-1032de5bf1f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 2200,
//       location: "Miami Beach",
//       country: "United States",
//     },
//     {
//       title: "Secluded Mountain Cabin in Alaska",
//       description:
//         "Unplug and unwind in the Alaskan wilderness from this secluded mountain cabin surrounded by breathtaking scenery.",
//       image: "https://images.unsplash.com/photo-1578571346902-5ec90b8fde4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 1900,
//       location: "Alaska",
//       country: "United States",
//     },
//     {
//       title: "Historic Riad in Marrakech",
//       description:
//         "Experience the rich culture of Marrakech in this beautifully restored historic riad with traditional Moroccan architecture.",
//       image: "https://images.unsplash.com/photo-1583753255531-e1a40d1fc44b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 1800,
//       location: "Marrakech",
//       country: "Morocco",
//     },
//     {
//       title: "Lakefront Retreat in Vermont",
//       description:
//         "Escape to the tranquility of Vermont's scenic lakeside from this charming retreat nestled in the Green Mountains.",
//       image: "https://images.unsplash.com/photo-1581098835005-baa0a5a5f0e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 1400,
//       location: "Vermont",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Resort in Phuket",
//       description:
//         "Experience luxury beachfront living in this exclusive resort on the island of Phuket.",
//       image: "https://images.unsplash.com/photo-1561542108-0a4a5b0e6b6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       price: 3000,
//       location: "Phuket",
//       country: "Thailand",
//     },

// ];
const sampleListings = [
  {
    title: "Urban Loft in San Francisco",
    description:
      "Experience city living at its finest in this modern loft apartment in downtown San Francisco.",
    image: {
      url: "https://source.unsplash.com/random/800x600/?city,loft",
      filename: "listing image"
    },
    price: 1800,
    location: "San Francisco",
    country: "United States",
  },
  {
    title: "Cozy Cabin in the Woods",
    description:
      "Escape to nature and enjoy the tranquility of this cozy cabin surrounded by lush forests.",
    image: {
      url: "https://source.unsplash.com/random/800x600/?cabin,woods",
      filename: "listing image"
    },
    price: 1200,
    location: "Woodland",
    country: "Canada",
  },
  {
    title: "Beachfront Villa in Bali",
    description:
      "Indulge in luxury with breathtaking ocean views from this stunning beachfront villa in Bali.",
    image: {
      url: "https://source.unsplash.com/random/800x600/?beachfront,villa",
      filename: "listing image"
    },
    price: 2500,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain Retreat in Switzerland",
    description:
      "Experience the beauty of the Swiss Alps with this cozy mountain retreat overlooking stunning landscapes.",
    image: {
      url: "https://source.unsplash.com/random/800x600/?mountain,retreat",
      filename: "listing image"
    },
    price: 2000,
    location: "Switzerland",
    country: "Switzerland",
  },
  {
    title: "Rustic Cottage in the Countryside",
    description:
      "Escape the hustle and bustle of city life in this charming rustic cottage nestled in the countryside.",
    image: {
      url: "https://source.unsplash.com/random/800x600/?rustic,cottage",
      filename: "listing image"
    },
    price: 1500,
    location: "Countryside",
    country: "United Kingdom",
  },
  {
    title: "Secluded Cabin by the Lake",
    description:
      "Find peace and serenity at this secluded cabin overlooking a tranquil lake.",
    image: {
      url: "https://source.unsplash.com/random/800x600/?cabin,lake",
      filename: "listing image"
    },
    price: 1700,
    location: "Lake District",
    country: "United Kingdom",
  },
  {
    title: "Luxurious Villa in Santorini",
    description:
      "Experience the ultimate luxury getaway in this stunning villa perched atop the cliffs of Santorini.",
    image: {
      url: "https://source.unsplash.com/random/800x600/?villa,Santorini",
      filename: "listing image"
    },
    price: 3000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Safari Tent in the Serengeti",
    description:
      "Immerse yourself in the beauty of the African wilderness with a stay in this luxury safari tent.",
    image: {
      url: "https://source.unsplash.com/random/800x600/?safari,tent",
      filename: "listing image"
    },
    price: 2200,
    location: "Serengeti",
    country: "Tanzania",
  },
  {
    title: "Lakeside Cabin in the Rockies",
    description:
      "Enjoy stunning mountain views from this cozy lakeside cabin nestled in the heart of the Rockies.",
    image: {
      url: "https://source.unsplash.com/random/800x600/?lakeside,cabin",
      filename: "listing image"
    },
    price: 1900,
    location: "Rocky Mountains",
    country: "Canada",
  },
];

module.exports = { data: sampleListings };
