export const uiConfig = [
  {
    type: "banner",
    className: "w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden",
    data: {
      imageUrl: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
      alt: "Delicious Food Banner",
      className:"h-full max-w-[600px] object-contain"
    }
  },
  {
    type: "cardRow",
    className: "bg-orange-50 p-4 rounded-xl",
    data: {
      title: "Top Restaurants",
      cards: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
          name: "Biryani House",
          description: "Authentic Hyderabadi Biryani"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
          name: "Pizza Villa",
          description: "Wood-fired Neapolitan Pizzas"
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
          name: "Chowmein Corner",
          description: "Hot & Spicy Indo-Chinese"
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          name: "Burger Point",
          description: "Juicy grilled burgers"
        }
      ]
    }
  },
  {
    type: "accordion",
    className: "mt-8",
    data: {
      title: "FAQs",
      items: [
        {
          question: "What is this app?",
          answer: "This is a config-driven food delivery UI inspired by Swiggy."
        },
        {
          question: "Can I customize layout?",
          answer: "Yes! Just update the config — no need to change code."
        },
        {
          question: "How can I add new sections?",
          answer: "Create a new component and add a new type in Renderer."
        }
      ]
    }
  }
];
