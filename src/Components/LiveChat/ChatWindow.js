import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";

const data = [
  {
    name: "Nikhil",
    message: "Hie it is system design practice",
    image:
      "https://yt3.ggpht.com/ytc/AIdro_kDVsj9hLvoBQOLzjE2nL1bDBX9GW_KSmsdaKSmAdiuJmsO7Wk2UinkxnzouI6qS8O9Pg=s88-c-k-c0x00ffffff-no-rj",
  },
];

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
function generateRandomNames() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState(data);
  const i = useRef(0);
  useEffect(() => {
    const interval = setInterval(fetchData, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = () => {
    const data = [
      {
        name: generateRandomNames()+" "+i.current++,
        image:"https://yt3.ggpht.com/ytc/AIdro_kDVsj9hLvoBQOLzjE2nL1bDBX9GW_KSmsdaKSmAdiuJmsO7Wk2UinkxnzouI6qS8O9Pg=s88-c-k-c0x00ffffff-no-rj",
        message:
          "This is a live streaming chat video in Namaste Frontend System Design series.",
      },
    ];
    setMessages((messages)=>{
        const newArr = [...data, ...messages].splice(0,50);
        return newArr
    })
  };

  return (
    <div className="border border-black p-2 h-[600px] m-2 w-full flex flex-col-reverse  overflow-y-scroll">

      {messages?.map((message, i) => {
        return <ChatMessage data={{...message, name:message?.name}} />;
      })}
    </div>
  );
};

export default ChatWindow;
