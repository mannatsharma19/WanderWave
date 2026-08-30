export const wanderwiseData = {
  shimla: {
    name: "Shimla",
    tagline: "Queen of the Hills & Snowy Ridges",
    description: "Nestled in the towering Himalayas, Shimla offers majestic pine-covered vistas, historic colonial architecture, and vintage mountain charm.",
    duration: "2 Days",
    totalBudget: 20000,
    currency: "₹",
    formattedBudget: "₹20,000",
    heroImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhfGVufDB8fDB8fHww",
    hero_image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhfGVufDB8fDB8fHww",
    budgetBreakdown: [
      { name: "Stay", value: 9000, fill: "#264653" },
      { name: "Food", value: 4500, fill: "#E07A5F" },
      { name: "Travel", value: 3500, fill: "#2A9D8F" },
      { name: "Activities", value: 3000, fill: "#F4A261" }
    ],
    hotel: {
      name: "Wildflower Hall Resort",
      rating: "4.9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBoEt8q3NQw22QcXTyuP1czY8ZmwHzuElHo_LM2koTw&s=10",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBoEt8q3NQw22QcXTyuP1czY8ZmwHzuElHo_LM2koTw&s=10",
      checkIn: "02:00 PM",
      check_in: "02:00 PM",
      checkOut: "12:00 PM",
      check_out: "12:00 PM",
      price: "₹9,000/night",
      cost: "₹9,000/night",
      description: "A luxury sanctuary offering pine-forest views, indoor heated pools, and open-air jacuzzis in the clouds."
    },
    localEats: [
      {
        name: "Cafe Sol",
        vibe: "Upbeat Continental Rooftop",
        cost: "₹1,500 for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRjDTV2KEMXLPx3xjpijnhnoVQg5DoVUHTiRcXjrvcg&s=10",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRjDTV2KEMXLPx3xjpijnhnoVQg5DoVUHTiRcXjrvcg&s=10",
        details: "Famous for spicy tacos, fresh Greek salads, and panoramic mountain ridge sunset views. Open 11:00 AM - 11:00 PM."
      },
      {
        name: "Wake & Bake Cafe",
        vibe: "Cozy Timber Patisserie",
        cost: "₹600 for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96y2SYg720FPNqnu_KqJFoCiWlAYO4UwcOGm8M22EAQ&s",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96y2SYg720FPNqnu_KqJFoCiWlAYO4UwcOGm8M22EAQ&s",
        details: "Handmade apple pies, fresh waffles, and dark wood-roasted espresso on Mall Road. Open 09:30 AM - 10:00 PM."
      }
    ],
    itinerary: {
      day1: [
        {
          time: "09:00 AM - 12:00 PM",
          place: "Kalka-Shimla Toy Train Ride",
          duration: "3 hrs",
          highlight: true,
          image: "https://media.istockphoto.com/id/1223612918/photo/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrow-gauge-railway-in-north-india-which.jpg?s=612x612&w=0&k=20&c=fdZKeFOjd5ZD3O-O_FKagirAuXYnyK7kIt9AhPiQrn4=",
          image_url: "https://media.istockphoto.com/id/1223612918/photo/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrow-gauge-railway-in-north-india-which.jpg?s=612x612&w=0&k=20&c=fdZKeFOjd5ZD3O-O_FKagirAuXYnyK7kIt9AhPiQrn4=",
          description: "Ride the UNESCO World Heritage toy train traversing 102 historic bridges and tunnels into the misty hills.",
          feasibility: {
            travel: "🚂 Departs Kalka 09:15 AM to Shimla Station.",
            hours: "Verified: Departs 9:15 AM (Pre-book required)",
            status: "optimal",
            tip: "Sit on the right side when departing Shimla for the most sweeping valley panoramas."
          }
        },
        {
          time: "01:30 PM - 04:30 PM",
          place: "Jakhoo Temple & Hill",
          duration: "3 hrs",
          highlight: false,
          image: "https://images.unsplash.com/photo-1645173098154-59b9a701b6a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          image_url: "https://images.unsplash.com/photo-1645173098154-59b9a701b6a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Ascend pine-wrapped Jakhoo hill to visit the monumental 108-foot Hanuman statue overlooking the valley.",
          feasibility: {
            travel: "🚡 6-min ropeway ride from the Ridge center.",
            hours: "Verified: Open 7:00 AM - 8:00 PM",
            status: "optimal",
            tip: "Keep loose belongings inside bags due to curious monkeys."
          }
        }
      ],
      day2: [
        {
          time: "10:00 AM - 01:00 PM",
          place: "Viceregal Lodge",
          duration: "3 hrs",
          highlight: true,
          image: "https://images.unsplash.com/photo-1586881141091-1014c7c2cb79?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          image_url: "https://images.unsplash.com/photo-1586881141091-1014c7c2cb79?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Walk the historic corridors of the former British Viceregal estate, where key Indian independence papers were signed.",
          feasibility: {
            travel: "🚕 15-min cab from Mall Road.",
            hours: "Verified: Open 10:00 AM - 5:00 PM (Closed Mondays)",
            status: "optimal",
            tip: "Take the interior guided tour to view original teak woodwork and historical photos."
          }
        },
        {
          time: "03:00 PM - 06:00 PM",
          place: "The Ridge & Mall Road Walk",
          duration: "3 hrs",
          highlight: false,
          image: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          image_url: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "A pedestrian-only heritage promenade lined with colonial timber cafes, library squares, and mountain views.",
          feasibility: {
            travel: "🚶 Pedestrian zone only. Lift access available from Bypass.",
            hours: "Verified: Open 24/7 (Shops open 10:00 AM - 8:30 PM)",
            status: "optimal",
            tip: "Head to Scandal Point at sunset for unobstructed Himalayan vistas."
          }
        }
      ]
    },
    safety: {
      hospital: "IGMC Shimla",
      hospitalPhone: "+91 177 280 4251",
      hospitalDist: "1.8 km (approx 8 mins from Ridge)",
      police: "112 / +91 177 265 6565",
      touristHelpline: "+91 177 265 6565",
      isDomestic: true,
      embassy: null
    }
  },

  jaipur: {
    name: "Jaipur",
    tagline: "The Pink City of Palaces & Forts",
    description: "Immerse yourself in Rajasthani heritage, where towering sandstone forts loom over bustling, terracotta-hued bazaars.",
    duration: "2 Days",
    totalBudget: 20000,
    currency: "₹",
    formattedBudget: "₹20,000",
    heroImage: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?q=80&w=801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hero_image: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?q=80&w=801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    budgetBreakdown: [
      { name: "Stay", value: 8500, fill: "#264653" },
      { name: "Food", value: 4500, fill: "#E07A5F" },
      { name: "Travel", value: 3500, fill: "#2A9D8F" },
      { name: "Activities", value: 3500, fill: "#F4A261" }
    ],
    hotel: {
      name: "The Raj Palace Hotel",
      rating: "4.8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskEOb4FDIyAS0WqrWM3ei2nQ1i_at4EY6Rsw-ZkYFUQ&s=10",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskEOb4FDIyAS0WqrWM3ei2nQ1i_at4EY6Rsw-ZkYFUQ&s=10",
      checkIn: "12:00 PM",
      check_in: "12:00 PM",
      checkOut: "11:00 AM",
      check_out: "11:00 AM",
      price: "₹8,500/night",
      cost: "₹8,500/night",
      description: "A restored 1727 royal estate featuring high arched ceilings, crystal chandeliers, and traditional courtyard hospitality."
    },
    localEats: [
      {
        name: "Tattoo Cafe & Lounge",
        vibe: "Terrace Cafe with Wind Palace View",
        cost: "₹1,200 for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhDb7ihdjRr4DNPwPshz6gdDowYDjPK4KkjgdzDJLPic6KnPEkAb5EOVe&s=10",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhDb7ihdjRr4DNPwPshz6gdDowYDjPK4KkjgdzDJLPic6KnPEkAb5EOVe&s=10",
        details: "Enjoy traditional masala chai and woodfired pizzas directly overlooking the iconic façade of Hawa Mahal. Open 08:00 AM - 11:00 PM."
      },
      {
        name: "Lassiwala (Since 1944)",
        vibe: "Heritage Claypot Stall",
        cost: "₹150 for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHTqYchAqMR6NbxqA3FWsJS4s7SD6Qhm0mmzbVc732w&s=10",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHTqYchAqMR6NbxqA3FWsJS4s7SD6Qhm0mmzbVc732w&s=10",
        details: "Creamy, ice-cold sweet lassi served in traditional clay pots (kulhads) on MI Road. Open 07:00 AM - 04:00 PM."
      }
    ],
    itinerary: {
      day1: [
        {
          time: "09:00 AM - 12:00 PM",
          place: "Amer Fort",
          duration: "3 hrs",
          highlight: true,
          image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
          image_url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
          description: "Explore the hilltop fortress, intricate Sheesh Mahal mirror hall, and grand cobblestone courtyards.",
          feasibility: {
            travel: "🚗 25-min cab from hotel via NH48.",
            hours: "Verified: Open 9:00 AM - 5:00 PM",
            status: "optimal",
            tip: "Arrive right at 9 AM to catch soft sunlight reflecting off Maota Lake."
          }
        },
        {
          time: "12:30 PM - 02:00 PM",
          place: "Hawa Mahal",
          duration: "1.5 hrs",
          highlight: false,
          image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
          image_url: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
          description: "The Palace of Winds, a 5-story honeycomb screen built for royal women to observe street processions.",
          feasibility: {
            travel: "🚗 20-min drive from Amer Fort.",
            hours: "Verified: Open 9:00 AM - 4:30 PM",
            status: "optimal",
            tip: "Cross the street to Tattoo Cafe rooftop for iconic front facing photos."
          }
        }
      ],
      day2: [
        {
          time: "09:30 AM - 12:30 PM",
          place: "City Palace & Jantar Mantar",
          duration: "3 hrs",
          highlight: true,
          image: "https://images.unsplash.com/photo-1721572321878-46fbef2e4bbd?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          image_url: "https://images.unsplash.com/photo-1721572321878-46fbef2e4bbd?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Marvel at royal courtyards, Peacock Gate, and the world's largest stone sundial at UNESCO Jantar Mantar.",
          feasibility: {
            travel: "🚶 5-min walk between City Palace and Jantar Mantar.",
            hours: "Verified: Open 9:00 AM - 5:00 PM",
            status: "optimal",
            tip: "Combo tickets cover both sites and reduce queue times."
          }
        },
        {
          time: "02:30 PM - 05:30 PM",
          place: "Nahargarh Fort Sunset Point",
          duration: "3 hrs",
          highlight: false,
          image: "https://images.unsplash.com/photo-1648217516771-74a081268aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFoYXJnYXJoJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D",
          image_url: "https://images.unsplash.com/photo-1648217516771-74a081268aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFoYXJnYXJoJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D",
          description: "Perched on the Aravalli ridge, offering panoramic vistas over the entire Pink City at golden hour.",
          feasibility: {
            travel: "🚗 35-min winding hill drive from City Center.",
            hours: "Verified: Open 10:00 AM - 10:00 PM",
            status: "optimal",
            tip: "Pre-book return cab as app rides can be scarce after 7 PM."
          }
        }
      ]
    },
    safety: {
      hospital: "SMS Hospital",
      hospitalPhone: "+91 141 256 0291",
      hospitalDist: "3.2 km (approx 12 mins away)",
      police: "100 / 112 / +91 141 220 0004",
      touristHelpline: "+91 141 220 0004",
      isDomestic: true,
      embassy: null
    }
  },

  tokyo: {
    name: "Tokyo",
    tagline: "Tradition Meets Tomorrow",
    description: "Witness the neon future of Shibuya side-by-side with ancient shrines, high-tech installations, and world-leading rail transit.",
    duration: "2 Days",
    totalBudget: 30000,
    currency: "₹",
    foreignCurrency: "¥54,000",
    formattedBudget: "₹30,000 (approx. ¥54,000)",
    heroImage: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hero_image: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    budgetBreakdown: [
      { name: "Stay", value: 14000, fill: "#264653" },
      { name: "Food", value: 7000, fill: "#E07A5F" },
      { name: "Travel", value: 4500, fill: "#2A9D8F" },
      { name: "Activities", value: 4500, fill: "#F4A261" }
    ],
    hotel: {
      name: "Hotel Gracery Shinjuku",
      rating: "4.8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2Z1VBlX0BJF83LFItFPjmDHj49tA-ezKSc4AzJT34A&s=10",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2Z1VBlX0BJF83LFItFPjmDHj49tA-ezKSc4AzJT34A&s=10",
      checkIn: "03:00 PM",
      check_in: "03:00 PM",
      checkOut: "11:00 AM",
      check_out: "11:00 AM",
      price: "₹14,000 (¥25,000)/night",
      cost: "₹14,000 (¥25,000)/night",
      description: "Iconic high-rise stay in central Kabukicho featuring skyline views, Suica card integration, and direct subway access."
    },
    localEats: [
      {
        name: "Chatei Hatou Coffee",
        vibe: "Artisanal Kissaten",
        cost: "₹1,000 (¥1,800) for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0LXdN9iT-r0YB-Jy_-Ln-ijURc2zWJqiaiKHxqeuHw&s=10",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0LXdN9iT-r0YB-Jy_-Ln-ijURc2zWJqiaiKHxqeuHw&s=10",
        details: "Famous slow-pour pour-over coffee served in hand-selected vintage porcelain cups near Shibuya. Open 11:00 AM - 11:00 PM."
      },
      {
        name: "Afuri Ramen Ebisu",
        vibe: "Modern Yuzu Tonkotsu",
        cost: "₹1,400 (¥2,400) for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMpFaKUoJW21My5Y5-dVm9n00lTjjUYteupkzXf-zOw&s=10",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMpFaKUoJW21My5Y5-dVm9n00lTjjUYteupkzXf-zOw&s=10",
        details: "Light citrus-infused yuzu chicken broth served with charcoal-grilled chashu pork. Open 11:00 AM - 05:00 AM."
      }
    ],
    itinerary: {
      day1: [
        {
          time: "08:30 AM - 11:30 AM",
          place: "Senso-ji Temple & Nakamise Dori",
          duration: "3 hrs",
          highlight: true,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpItJG0pfNEg9rC89ZTI-ZneoFzZl4U3RFQSOAlyFrwg&s=10",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpItJG0pfNEg9rC89ZTI-ZneoFzZl4U3RFQSOAlyFrwg&s=10",
          description: "Pass through Kaminarimon Gate into Tokyo's oldest Buddhist temple complex and historic snack street.",
          feasibility: {
            travel: "🚇 15-min train via Ginza Line to Asakusa.",
            hours: "Verified: Open 6:00 AM - 5:00 PM",
            status: "optimal",
            tip: "Visit early morning to stroll Nakamise Dori before tour crowds arrive."
          }
        },
        {
          time: "02:00 PM - 05:00 PM",
          place: "Shibuya Crossing & Shibuya Sky",
          duration: "3 hrs",
          highlight: false,
          image: "https://images.unsplash.com/photo-1682319298536-33ac5b48d772?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          image_url: "https://images.unsplash.com/photo-1682319298536-33ac5b48d772?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Experience the world's busiest pedestrian scramble followed by 360-degree open-air sky views from 229m above.",
          feasibility: {
            travel: "🚇 20-min direct subway ride on Yamanote Line.",
            hours: "Verified: Open 10:00 AM - 10:30 PM",
            status: "optimal",
            tip: "Book Shibuya Sky tickets 4 weeks in advance for golden hour slots."
          }
        }
      ],
      day2: [
        {
          time: "09:00 AM - 11:30 AM",
          place: "Meiji Jingu Shrine & Yoyogi Park",
          duration: "2.5 hrs",
          highlight: true,
          image: "https://images.unsplash.com/photo-1618478344639-5d934b25a0f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVpamklMjBKaW5ndSUyMFNocmluZSUyMCUyNiUyMFlveW9naSUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
          image_url: "https://images.unsplash.com/photo-1618478344639-5d934b25a0f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVpamklMjBKaW5ndSUyMFNocmluZSUyMCUyNiUyMFlveW9naSUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
          description: "Walk under giant cedar Torii gates into a serene forest dedicated to Emperor Meiji in the heart of the city.",
          feasibility: {
            travel: "🚇 5-min walk from Harajuku Station.",
            hours: "Verified: Open 6:00 AM - 5:00 PM",
            status: "optimal",
            tip: "Write a wish on a wooden Ema plaque near the main courtyard sacred tree."
          }
        },
        {
          time: "01:00 PM - 04:00 PM",
          place: "Tsukiji Outer Market Testing Walk",
          duration: "3 hrs",
          highlight: false,
          image: "https://images.unsplash.com/photo-1709196316656-7a54a3e6afda?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          image_url: "https://images.unsplash.com/photo-1709196316656-7a54a3e6afda?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Sample fresh tamagoyaki rolled omelets, wagyu skewers, and fresh sashimi stalls in historic market alleys.",
          feasibility: {
            travel: "🚇 15-min train via Hibiya Line to Tsukiji.",
            hours: "Verified: Open 5:00 AM - 2:00 PM",
            status: "optimal",
            tip: "Bring cash (JPY yen) as smaller market vendors do not accept card."
          }
        }
      ]
    },
    safety: {
      hospital: "St. Luke's International Hospital",
      hospitalPhone: "+81 3-3541-5151",
      hospitalDist: "4.5 km (approx 15 mins. English spoken)",
      police: "110 (General) / 050-3816-2720 (English Tourist Hotline)",
      embassy: "Embassy of India: 2-2-11 Kudan-minami, Chiyoda-ku, Tokyo 102-0074. Ph: +81 3-3262-2391.",
      isDomestic: false
    }
  },

  dubai: {
    name: "Dubai",
    tagline: "Oasis of Heights & Desert Sands",
    description: "Step into a world of architectural records, from the clouds on the Burj Khalifa to camel safaris across red desert dunes.",
    duration: "2 Days",
    totalBudget: 30000,
    currency: "₹",
    foreignCurrency: "1,320 AED",
    formattedBudget: "₹30,000 (approx. 1,320 AED)",
    heroImage: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
    hero_image: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
    budgetBreakdown: [
      { name: "Stay", value: 14000, fill: "#264653" },
      { name: "Food", value: 6500, fill: "#E07A5F" },
      { name: "Travel", value: 4500, fill: "#2A9D8F" },
      { name: "Activities", value: 5000, fill: "#F4A261" }
    ],
    hotel: {
      name: "Atlantis The Palm",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1590765407066-12de51f9565b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXRsYW50aXMlMjB0aGUlMjBwYWxtfGVufDB8fDB8fHww",
      image_url: "https://images.unsplash.com/photo-1590765407066-12de51f9565b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXRsYW50aXMlMjB0aGUlMjBwYWxtfGVufDB8fDB8fHww",
      checkIn: "03:00 PM",
      check_in: "03:00 PM",
      checkOut: "12:00 PM",
      check_out: "12:00 PM",
      price: "₹14,000 (AED 615)/night",
      cost: "₹14,000 (AED 615)/night",
      description: "An ocean-themed crown jewel resort featuring private sand lagoons, record-breaking waterslides, and underwater aquarium halls."
    },
    localEats: [
      {
        name: "Arabian Tea House",
        vibe: "Historic Al Fahidi Courtyard",
        cost: "₹4,000 (AED 180) for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzee7f6oNe8UPg9xIz3ArLue55ameQViK84XOLG-ZVxA&s=10",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzee7f6oNe8UPg9xIz3ArLue55ameQViK84XOLG-ZVxA&s=10",
        details: "Authentic Emirati breakfasts, saffron tea, and fresh halloumi in a turquoise wooden courtyard. Open 07:30 AM - 11:00 PM."
      },
      {
        name: "Al Fanar Restaurant",
        vibe: "Traditional 1960s Emirati Dining",
        cost: "₹5,000 (AED 220) for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu029y3OnH6AYFL-b5uh89dNLb-NgZVa-ZxEdoFtcrqw&s=10",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu029y3OnH6AYFL-b5uh89dNLb-NgZVa-ZxEdoFtcrqw&s=10",
        details: "Heritage spice Machboos rice dishes, grilled tiger prawns, and sweet Luqaimat dumplings. Open 12:00 PM - 10:00 PM."
      }
    ],
    itinerary: {
      day1: [
        {
          time: "09:00 AM - 12:00 PM",
          place: "Burj Khalifa At The Top",
          duration: "3 hrs",
          highlight: true,
          image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
          image_url: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
          description: "Ascend the world's tallest building to the 124th/125th floor observation decks over the Arabian Gulf skyline.",
          feasibility: {
            travel: "🚕 15-min taxi from hotel or Metro Red Line to Dubai Mall.",
            hours: "Verified: Open 8:30 AM - 11:00 PM",
            status: "optimal",
            tip: "Pre-book morning slots to avoid afternoon peak ticket surcharges."
          }
        },
        {
          time: "02:00 PM - 05:00 PM",
          place: "Museum of the Future",
          duration: "3 hrs",
          highlight: false,
          image: "https://images.unsplash.com/photo-1667592441284-b590021411e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzZXVtJTIwb2YlMjB0aGUlMjBmdXR1cmV8ZW58MHx8MHx8fDA%3D",
          image_url: "https://images.unsplash.com/photo-1667592441284-b590021411e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzZXVtJTIwb2YlMjB0aGUlMjBmdXR1cmV8ZW58MHx8MHx8fDA%3D",
          description: "Step inside an architectural masterpiece showcasing futuristic space stations, AI biomes, and wellness exhibits.",
          feasibility: {
            travel: "🚇 Direct Red Line Metro connection to Emirates Towers.",
            hours: "Verified: Open 10:00 AM - 7:30 PM",
            status: "optimal",
            tip: "Timed entry tickets sell out weeks early; ensure date reservation."
          }
        }
      ],
      day2: [
        {
          time: "09:30 AM - 12:30 PM",
          place: "Al Fahidi Historical District & Gold Souk",
          duration: "3 hrs",
          highlight: true,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZFdKlJ3omlqSeCSDFQLtbd2WAh2mQF5kaDZEkOk9pQ&s=10",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZFdKlJ3omlqSeCSDFQLtbd2WAh2mQF5kaDZEkOk9pQ&s=10",
          description: "Wander wind-tower alleys, cross Dubai Creek on a traditional 1-dirham abra boat, and browse spice bazaars.",
          feasibility: {
            travel: "🚕 20-min drive via Sheikh Zayed Rd.",
            hours: "Verified: Open 9:00 AM - 9:00 PM",
            status: "optimal",
            tip: "Take the wooden Abra water taxi across the creek for the authentic heritage commute."
          }
        },
        {
          time: "03:30 PM - 08:30 PM",
          place: "Red Dune Desert Safari & Camp",
          duration: "5 hrs",
          highlight: false,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLaWkuKfzUBwPXXNYSiGUreY1QoMpdzBdKaiHApF4Qg&s=10",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLaWkuKfzUBwPXXNYSiGUreY1QoMpdzBdKaiHApF4Qg&s=10",
          description: "Dune bashing in 4x4 Land Cruisers, camel rides, sandboarding, and traditional barbecue dinner under desert stars.",
          feasibility: {
            travel: "🚙 Hotel pickup included in 4x4 safari vehicles.",
            hours: "Verified: Pickup 3:30 PM - Return 9:00 PM",
            status: "optimal",
            tip: "Wear light breathable clothing and bring sunglasses for desert winds."
          }
        }
      ]
    },
    safety: {
      hospital: "Rashid Hospital",
      hospitalPhone: "+971 4 219 2000",
      hospitalDist: "5.0 km (24/7 Trauma Center)",
      police: "999 (Emergency) / 901 (Tourist Police)",
      embassy: "Consulate General of India: Al Hamriya Diplomatic Enclave, Dubai. Ph: +971 4 397 1222.",
      isDomestic: false
    }
  },

  chandigarh: {
    name: "Chandigarh",
    tagline: "The City Beautiful & Le Corbusier Heritage",
    description: "India's premier planned city, blending modernist Le Corbusier urban design, sculpture gardens, and tranquil artificial lakes.",
    duration: "2 Days",
    totalBudget: 20000,
    currency: "₹",
    formattedBudget: "₹20,000",
    heroImage: "https://images.unsplash.com/photo-1589350033409-35701c4273d0?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hero_image: "https://images.unsplash.com/photo-1589350033409-35701c4273d0?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    budgetBreakdown: [
      { name: "Stay", value: 8500, fill: "#264653" },
      { name: "Food", value: 4500, fill: "#E07A5F" },
      { name: "Travel", value: 3500, fill: "#2A9D8F" },
      { name: "Activities", value: 3500, fill: "#F4A261" }
    ],
    hotel: {
      name: "JW Marriott Hotel Chandigarh",
      rating: "4.9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjytjD0qItwEuOF13zgufFRY-aoJgHD0GatcuHa6UClQ&s=10",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjytjD0qItwEuOF13zgufFRY-aoJgHD0GatcuHa6UClQ&s=10",
      checkIn: "03:00 PM",
      check_in: "03:00 PM",
      checkOut: "12:00 PM",
      check_out: "12:00 PM",
      price: "₹8,500/night",
      cost: "₹8,500/night",
      description: "A luxury 5-star urban sanctuary located in Sector 35 with rooftop infinity pools and fine dining."
    },
    localEats: [
      {
        name: "Virgin Courtyard",
        vibe: "Sunlit Italian Courtyard",
        cost: "₹1,800 for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpC7gEafEIeC-HD9_F_C5HdqnO6Iul0EzGiNhigpzMcA&s=10",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpC7gEafEIeC-HD9_F_C5HdqnO6Iul0EzGiNhigpzMcA&s=10",
        details: "White cobblestone courtyard serving wood-fired pizzas, truffle pastas, and sangria in Sector 7. Open 11:30 AM - 11:30 PM."
      },
      {
        name: "Willow Cafe",
        vibe: "English Garden Tea House",
        cost: "₹1,100 for two",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZ9OFa0QhBY-b1XzXW1viex0nNc84oFaKLqjPNgwEOLWmaAfN2w6XGwrd&s=10",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZ9OFa0QhBY-b1XzXW1viex0nNc84oFaKLqjPNgwEOLWmaAfN2w6XGwrd&s=10",
        details: "Plush floral upholstery, traditional English high tea, and Punjabi butter chicken rolls in Sector 10. Open 08:30 AM - 11:00 PM."
      }
    ],
    itinerary: {
      day1: [
        {
          time: "09:00 AM - 12:00 PM",
          place: "Nek Chand Rock Garden",
          duration: "3 hrs",
          highlight: true,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6p5jo_UcI2pDEDn6vrbnjGl74TNAPJtRBTI_eFquWXw&s=10",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6p5jo_UcI2pDEDn6vrbnjGl74TNAPJtRBTI_eFquWXw&s=10",
          description: "Explore a world-famous 40-acre outdoor sculpture garden made entirely from recycled industrial and home waste.",
          feasibility: {
            travel: "🚕 10-min cab from Sector 17.",
            hours: "Verified: Open 9:00 AM - 7:00 PM",
            status: "optimal",
            tip: "Wear comfortable walking shoes to navigate narrow stone doorways and courtyards."
          }
        },
        {
          time: "01:30 PM - 04:30 PM",
          place: "Sukhna Lake Promenade",
          duration: "3 hrs",
          highlight: false,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI28EpBlLfG_is0j90FYsabbbWaq-GOCZJlxoCtK7rgg&s",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI28EpBlLfG_is0j90FYsabbbWaq-GOCZJlxoCtK7rgg&s",
          description: "A serene 3-sq-km artificial lake nestled at the Shivalik foothills, featuring solar boat cruises and tree-lined walks.",
          feasibility: {
            travel: "🚶 5-min walk from Rock Garden.",
            hours: "Verified: Open 5:00 AM - 10:00 PM",
            status: "optimal",
            tip: "Rent a paddle boat in the late afternoon for sunset water views."
          }
        }
      ],
      day2: [
        {
          time: "09:30 AM - 12:00 PM",
          place: "Zakir Hussain Rose Garden",
          duration: "2.5 hrs",
          highlight: true,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbU5q4HaIlE_Gp4xNHNpbnxnT0nf2y58vPTyn02EZnkw&s=10",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbU5q4HaIlE_Gp4xNHNpbnxnT0nf2y58vPTyn02EZnkw&s=10",
          description: "Asia's largest botanical rose garden featuring 50,000 rose bushes spanning 1,600 distinct varieties.",
          feasibility: {
            travel: "🚕 10-min cab from hotel in Sector 16.",
            hours: "Verified: Open 6:00 AM - 8:00 PM",
            status: "optimal",
            tip: "Morning visits offer peak fragrance and dewy floral photography conditions."
          }
        },
        {
          time: "02:00 PM - 05:30 PM",
          place: "Sector 17 Plaza & Capitol Complex",
          duration: "3.5 hrs",
          highlight: false,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdRCOpUOqRMbAEsye8pdZfhIBwC2WNrJ1Dk9u_eGOXw&s=10",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdRCOpUOqRMbAEsye8pdZfhIBwC2WNrJ1Dk9u_eGOXw&s=10",
          description: "Walk the iconic Open Hand Monument and modernist pedestrian plazas designed by master architect Le Corbusier.",
          feasibility: {
            travel: "🚶 10-min walk from Rose Garden.",
            hours: "Verified: Open 10:00 AM - 8:00 PM",
            status: "optimal",
            tip: "Pre-register online at Capitol Complex tourist center for Open Hand Monument access."
          }
        }
      ]
    },
    safety: {
      hospital: "PGIMER",
      hospitalPhone: "+91 172 274 7585",
      hospitalDist: "2.5 km (approx 10 mins away)",
      police: "112 / +91 172 270 0025",
      touristHelpline: "112 / +91 172 270 0025",
      isDomestic: true,
      embassy: null
    }
  }
};

export default wanderwiseData;
