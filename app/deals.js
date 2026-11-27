// The deals. Every deal was found and checked by the builder in-session on
// 27 Nov 2026 (see DEALS-RESEARCH.md in the bounty dir for the source behind
// each price). Each entry carries its product, the store selling it, a
// category, the sale price and the usual price in US dollars, a link to the
// product at that store (the store's own search page for it), when the price
// was checked (UTC) and the deals source that showed it. `flag` marks the
// few deals with evidence beyond the two prices: "low" = a source reported
// an all-time or best-ever price; "raised" = the store lifted the list price
// earlier this year, so the cut is measured off a higher base; "refurb" =
// a certified refurbished unit, not a new one.

export const CHECKED_AT = "2026-11-27T08:00:00Z";

export const deals = [
  // Audio
  { id: "airpods-pro-3", title: "Apple AirPods Pro 3", store: "Amazon", category: "Audio", price: 149, was: 249, url: "https://www.amazon.com/s?k=Apple+AirPods+Pro+3", source: "Tom's Guide", flag: "low" },
  { id: "sony-xm5", title: "Sony WH-1000XM5 noise-canceling headphones", store: "Best Buy", category: "Audio", price: 169.99, was: 398, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Sony+WH-1000XM5", source: "SammyGuru", flag: "low" },
  { id: "sony-xm6", title: "Sony WH-1000XM6 noise-canceling headphones", store: "Best Buy", category: "Audio", price: 348, was: 458, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Sony+WH-1000XM6", source: "SammyGuru" },
  { id: "bose-qc-1", title: "Bose QuietComfort Headphones (1st gen)", store: "Amazon", category: "Audio", price: 167, was: 359, url: "https://www.amazon.com/s?k=Bose+QuietComfort+Headphones", source: "Gizmochina" },
  { id: "bose-qc-ultra-2", title: "Bose QuietComfort Ultra Headphones (2nd gen)", store: "Best Buy", category: "Audio", price: 369, was: 449, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Bose+QuietComfort+Ultra+Headphones", source: "SammyGuru" },
  { id: "beats-studio-pro", title: "Beats Studio Pro over-ear headphones", store: "Amazon", category: "Audio", price: 149, was: 299.99, url: "https://www.amazon.com/s?k=Beats+Studio+Pro", source: "Gizmochina" },
  { id: "beats-solo-4", title: "Beats Solo 4 on-ear headphones", store: "Target", category: "Audio", price: 79.99, was: 199.99, url: "https://www.target.com/s?searchTerm=Beats+Solo+4", source: "TradingView" },
  { id: "jbl-tour-one-m3", title: "JBL Tour One M3 noise-canceling headphones", store: "Best Buy", category: "Audio", price: 149.95, was: 449.95, url: "https://www.bestbuy.com/site/searchpage.jsp?st=JBL+Tour+One+M3", source: "SammyGuru" },
  { id: "airpods-4", title: "Apple AirPods 4", store: "Walmart", category: "Audio", price: 99, was: 129.99, url: "https://www.walmart.com/search?q=Apple+AirPods+4", source: "TechResearchOnline" },
  // TV
  { id: "tcl-65-s4", title: "TCL 65-inch S4 4K Fire TV", store: "Best Buy", category: "TV", price: 229.99, was: 469.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=TCL+65+S4+4K+Fire+TV", source: "BeeBulletin" },
  { id: "hisense-65-h5r1", title: "Hisense 65-inch H5R1 4K Roku TV", store: "Walmart", category: "TV", price: 228, was: 398, url: "https://www.walmart.com/search?q=Hisense+65+H5R1+4K+Roku+TV", source: "TradingView" },
  { id: "lg-b6e-55", title: "LG 55-inch B6E OLED AI 4K TV", store: "Best Buy", category: "TV", price: 699.99, was: 1399.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=LG+B6E+OLED+TV", source: "AppleInsider" },
  { id: "lg-b6e-65", title: "LG 65-inch B6E OLED AI 4K TV", store: "Best Buy", category: "TV", price: 999.99, was: 1999.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=LG+B6E+OLED+TV", source: "The Gadgeteer" },
  { id: "sony-bravia6-65", title: "Sony 65-inch BRAVIA 6 OLED 4K TV", store: "Best Buy", category: "TV", price: 1199.99, was: 1999.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Sony+BRAVIA+6+OLED+TV", source: "AppleInsider" },
  { id: "samsung-s90h-65", title: "Samsung 65-inch S90H OLED 4K TV", store: "Amazon", category: "TV", price: 1397.99, was: 2699.99, url: "https://www.amazon.com/s?k=Samsung+S90H+OLED+TV", source: "The Gadgeteer" },
  { id: "samsung-frame-65", title: "Samsung 65-inch The Frame TV (2026)", store: "Samsung", category: "TV", price: 999.99, was: 1499.99, url: "https://www.samsung.com/us/search/?searchvalue=The+Frame+TV", source: "MacRumors" },
  { id: "ember-50", title: "Amazon Ember 50-inch 4-Series Fire TV", store: "Amazon", category: "TV", price: 239.99, was: 399.99, url: "https://www.amazon.com/s?k=Amazon+Ember+4-Series+Fire+TV", source: "GearBrain" },
  // Laptops
  { id: "macbook-air-m5-13", title: "Apple MacBook Air 13-inch (M5, 16GB/512GB)", store: "Best Buy", category: "Laptops", price: 1049, was: 1299, url: "https://www.bestbuy.com/site/searchpage.jsp?st=MacBook+Air+M5+13-inch", source: "AppleScoop" },
  { id: "macbook-neo", title: "Apple MacBook Neo 256GB", store: "Amazon", category: "Laptops", price: 599, was: 700, url: "https://www.amazon.com/s?k=Apple+MacBook+Neo", source: "TechSpot" },
  { id: "hp-omnibook-5-oled", title: "HP OmniBook 5 14-inch OLED touchscreen laptop", store: "Best Buy", category: "Laptops", price: 449.99, was: 799.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=HP+OmniBook+5+OLED", source: "TradingView" },
  { id: "dell-xps-13", title: "Dell XPS 13 laptop (Core 5, 8GB/256GB)", store: "Dell", category: "Laptops", price: 549.99, was: 750, url: "https://www.dell.com/en-us/search/XPS+13", source: "TechSpot" },
  { id: "surface-laptop-7", title: "Microsoft Surface Laptop 7 (Snapdragon X Elite, 16GB)", store: "Amazon", category: "Laptops", price: 899.99, was: 1370, url: "https://www.amazon.com/s?k=Microsoft+Surface+Laptop+7", source: "TechSpot" },
  // Gaming
  { id: "switch2-mkw-bundle", title: "Nintendo Switch 2 + Mario Kart World bundle", store: "Amazon", category: "Gaming", price: 499.99, was: 549.99, url: "https://www.amazon.com/s?k=Nintendo+Switch+2+Mario+Kart+World+bundle", source: "2ndShift" },
  { id: "dualsense", title: "DualSense wireless controller (PS5)", store: "Amazon", category: "Gaming", price: 54, was: 74.99, url: "https://www.amazon.com/s?k=DualSense+wireless+controller", source: "2ndShift" },
  { id: "xbox-controller", title: "Xbox Wireless Controller", store: "Amazon", category: "Gaming", price: 42.99, was: 64.99, url: "https://www.amazon.com/s?k=Xbox+Wireless+Controller", source: "2ndShift" },
  { id: "samsung-p9-256", title: "Samsung P9 256GB microSD Express card (Switch 2)", store: "Amazon", category: "Gaming", price: 44.99, was: 79.99, url: "https://www.amazon.com/s?k=Samsung+P9+microSD+Express", source: "2ndShift" },
  { id: "ac-black-flag", title: "Assassin's Creed Black Flag Resynced (PS5)", store: "Amazon", category: "Gaming", price: 30, was: 59.99, url: "https://www.amazon.com/s?k=Assassin%27s+Creed+Black+Flag+Resynced+PS5", source: "2ndShift" },
  { id: "ps5-refurb-digital", title: "PlayStation 5 Digital Edition, certified refurbished", store: "PlayStation Direct", category: "Gaming", price: 499, was: 599, url: "https://direct.playstation.com/en-us/search?q=PlayStation+5+Digital+Edition", source: "2ndShift", flag: "refurb" },
  // Home
  { id: "dyson-v9", title: "Dyson V9 Motorbar cordless vacuum", store: "Amazon", category: "Home", price: 269.95, was: 600, url: "https://www.amazon.com/s?k=Dyson+V9+Motorbar", source: "9to5Toys" },
  { id: "dyson-v15", title: "Dyson V15 Detect cordless vacuum", store: "Amazon", category: "Home", price: 599, was: 850, url: "https://www.amazon.com/s?k=Dyson+V15+Detect", source: "9to5Toys" },
  { id: "dyson-v8-plus", title: "Dyson V8 Plus cordless vacuum", store: "Amazon", category: "Home", price: 300, was: 450, url: "https://www.amazon.com/s?k=Dyson+V8+Plus", source: "9to5Toys" },
  { id: "shark-powerdetect-robot", title: "Shark PowerDetect 2-in-1 robot vacuum and mop", store: "Walmart", category: "Home", price: 499.99, was: 999.99, url: "https://www.walmart.com/search?q=Shark+PowerDetect+robot+vacuum+mop", source: "TechWithAI2" },
  { id: "roomba-105", title: "iRobot Roomba 105 robot vacuum", store: "Walmart", category: "Home", price: 189, was: 299.99, url: "https://www.walmart.com/search?q=iRobot+Roomba+105", source: "TechWithAI2" },
  { id: "dyson-v12", title: "Dyson V12 Detect Slim cordless vacuum", store: "Walmart", category: "Home", price: 449.99, was: 729.99, url: "https://www.walmart.com/search?q=Dyson+V12+Detect+Slim", source: "TechWithAI2" },
  // Kitchen
  { id: "kitchenaid-artisan-5", title: "KitchenAid Artisan 5-quart tilt-head stand mixer", store: "Amazon", category: "Kitchen", price: 349.95, was: 499.99, url: "https://www.amazon.com/s?k=KitchenAid+Artisan+5-quart+stand+mixer", source: "PopSci" },
  { id: "ninja-airfryer-pro-xl", title: "Ninja Air Fryer Pro XL 6.5-quart", store: "Amazon", category: "Kitchen", price: 99.99, was: 189.99, url: "https://www.amazon.com/s?k=Ninja+Air+Fryer+Pro+XL", source: "PopSci" },
  { id: "breville-barista-pro", title: "Breville Barista Pro espresso machine", store: "Amazon", category: "Kitchen", price: 564.95, was: 849.95, url: "https://www.amazon.com/s?k=Breville+Barista+Pro", source: "PopSci" },
  { id: "instant-pot-pro-6", title: "Instant Pot Pro 6-quart pressure cooker", store: "Amazon", category: "Kitchen", price: 99.99, was: 169.99, url: "https://www.amazon.com/s?k=Instant+Pot+Pro+6-quart", source: "PopSci" },
  { id: "crockpot-7qt", title: "Crock-Pot 7-quart slow cooker", store: "Walmart", category: "Kitchen", price: 32, was: 80, url: "https://www.walmart.com/search?q=Crock-Pot+7-quart+slow+cooker", source: "The GrayVine" },
  { id: "ninja-flip", title: "Ninja Flip toaster oven and air fryer", store: "Amazon", category: "Kitchen", price: 140, was: 250, url: "https://www.amazon.com/s?k=Ninja+Flip+toaster+oven+air+fryer", source: "The GrayVine" },
  { id: "kitchenaid-bowl-lift-55", title: "KitchenAid 5.5-quart bowl-lift stand mixer", store: "Target", category: "Kitchen", price: 299.99, was: 499.99, url: "https://www.target.com/s?searchTerm=KitchenAid+5.5-quart+bowl-lift+stand+mixer", source: "ClarkDeals" },
  // Toys
  { id: "lego-parrot", title: "LEGO Creator 3-in-1 Exotic Parrot", store: "Amazon", category: "Toys", price: 11, was: 20, url: "https://www.amazon.com/s?k=LEGO+Creator+Exotic+Parrot", source: "DealNews", flag: "low" },
  { id: "lego-jet-car", title: "LEGO City Jet vs Car", store: "Amazon", category: "Toys", price: 15, was: 30, url: "https://www.amazon.com/s?k=LEGO+City+Jet+vs+Car", source: "DealNews" },
  { id: "lego-jango-helmet", title: "LEGO Star Wars Jango Fett Helmet", store: "Walmart", category: "Toys", price: 35, was: 70, url: "https://www.walmart.com/search?q=LEGO+Star+Wars+Jango+Fett+Helmet", source: "DealNews", flag: "low" },
  { id: "lego-red-panda", title: "LEGO Creator 3-in-1 Red Panda", store: "Walmart", category: "Toys", price: 15, was: 30, url: "https://www.walmart.com/search?q=LEGO+Creator+Red+Panda", source: "DealNews" },
  { id: "lego-cantina", title: "LEGO Star Wars Mos Eisley Cantina", store: "Target", category: "Toys", price: 39, was: 65, url: "https://www.target.com/s?searchTerm=LEGO+Star+Wars+Mos+Eisley+Cantina", source: "DealNews" },
  { id: "lego-volvo-loader", title: "LEGO Technic Volvo L120 Electric Wheel Loader", store: "LEGO", category: "Toys", price: 84, was: 120, url: "https://www.lego.com/en-us/search?q=Volvo+L120+Electric+Wheel+Loader", source: "DealNews" },
  { id: "lego-k2so", title: "LEGO Star Wars K-2SO droid", store: "Amazon", category: "Toys", price: 43, was: 90, url: "https://www.amazon.com/s?k=LEGO+Star+Wars+K-2SO", source: "DealNews", flag: "low" },
  { id: "lego-n1", title: "LEGO Star Wars The Mandalorian's N-1 Starfighter", store: "Amazon", category: "Toys", price: 41.99, was: 59.99, url: "https://www.amazon.com/s?k=LEGO+Star+Wars+N-1+Starfighter", source: "StarWars-Fans" },
  // Smart home
  { id: "ring-doorbell-2k-battery", title: "Ring Battery Doorbell 2K", store: "Amazon", category: "Smart home", price: 39.99, was: 99.99, url: "https://www.amazon.com/s?k=Ring+Battery+Doorbell+2K", source: "SmartHomeGen" },
  { id: "ring-doorbell-2k-wired", title: "Ring Wired Doorbell 2K", store: "Amazon", category: "Smart home", price: 39.99, was: 79.99, url: "https://www.amazon.com/s?k=Ring+Wired+Doorbell+2K", source: "HomeAutomationWeekly" },
  { id: "echo-dot-2026", title: "Amazon Echo Dot (newest, 2026)", store: "Amazon", category: "Smart home", price: 49.99, was: 99.99, url: "https://www.amazon.com/s?k=Amazon+Echo+Dot+2026", source: "HomeAutomationWeekly", flag: "raised" },
  { id: "ring-indoor-cam-2k", title: "Ring Indoor Cam 2K", store: "Amazon", category: "Smart home", price: 24.99, was: 59.99, url: "https://www.amazon.com/s?k=Ring+Indoor+Cam+2K", source: "SmartHomeGen" },
  { id: "google-home-speaker", title: "Google Home Speaker", store: "Google Store", category: "Smart home", price: 79.99, was: 99.99, url: "https://store.google.com/us/search?q=Google+Home+Speaker", source: "HomeAutomationWeekly" },
  // Fashion
  { id: "ugg-ultra-mini", title: "UGG Classic Ultra Mini Stitched Boot", store: "Nordstrom", category: "Fashion", price: 114, was: 190, url: "https://www.nordstrom.com/sr?keyword=UGG+Classic+Ultra+Mini+Stitched+Boot", source: "MobilePressRegister" },
  { id: "ugg-neuman", title: "UGG Neuman Slipper", store: "Nordstrom", category: "Fashion", price: 75, was: 130, url: "https://www.nordstrom.com/sr?keyword=UGG+Neuman+Slipper", source: "MobilePressRegister" },
  { id: "nb-327", title: "New Balance 327 Sneaker", store: "Nordstrom", category: "Fashion", price: 63, was: 105, url: "https://www.nordstrom.com/sr?keyword=New+Balance+327+Sneaker", source: "MobilePressRegister" },
  { id: "tory-romy", title: "Tory Burch Romy Zip Top Leather Crossbody Bag", store: "Nordstrom", category: "Fashion", price: 155, was: 230, url: "https://www.nordstrom.com/sr?keyword=Tory+Burch+Romy+Crossbody+Bag", source: "MobilePressRegister" },
  { id: "adidas-tokyo-mj", title: "Adidas Tokyo Mary Jane Shoe", store: "Nordstrom", category: "Fashion", price: 54, was: 90, url: "https://www.nordstrom.com/sr?keyword=Adidas+Tokyo+Mary+Jane+Shoe", source: "MobilePressRegister" },
  // Beauty
  { id: "dyson-airwrap-id", title: "Dyson Airwrap i.d. Multi-styler", store: "Nordstrom", category: "Beauty", price: 499, was: 649.99, url: "https://www.nordstrom.com/sr?keyword=Dyson+Airwrap+i.d.+Multi-styler", source: "BuzzFeed" },
  { id: "dyson-supersonic-nural", title: "Dyson Supersonic Nural hair dryer", store: "Amazon", category: "Beauty", price: 349.99, was: 449.99, url: "https://www.amazon.com/s?k=Dyson+Supersonic+Nural", source: "Couture & Beyond" },
  { id: "lancome-collagen", title: "Lancôme collagen cream", store: "Nordstrom", category: "Beauty", price: 98, was: 140, url: "https://www.nordstrom.com/sr?keyword=Lancome+collagen+cream", source: "BuzzFeed" },
  { id: "sam-edelman-boots", title: "Sam Edelman tall heeled boots", store: "Nordstrom", category: "Fashion", price: 119.9, was: 200, url: "https://www.nordstrom.com/sr?keyword=Sam+Edelman+tall+heeled+boots", source: "BuzzFeed" },
];
