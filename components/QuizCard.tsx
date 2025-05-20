// components/QuizCard.tsx
import { useState, useMemo } from "react";
import styles from "../styles/Quiz.module.css";
import { useRouter } from "next/router";

// 1) Your original 10 questions
const baseQuestions = [
  {
    question: "What’s your go-to mood on a lazy Sunday?",
    options: [
      "Netflix & snack attack",
      "Planning global domination (or laundry)",
      "Taking nature selfies",
      "Rewriting your existential crisis playlist",
    ],
  },
  {
    question:
      "Your phone is at 1% and you’re nowhere near a charger. What do you do?",
    options: [
      "Panic like it’s the season finale",
      "Calmly accept your fate",
      "Hunt for a power outlet like Indiana Jones",
      "Text your mom “I love you” just in case",
    ],
  },
  {
    question: "What’s your dream superpower?",
    options: [
      "Invisibility (no more awkward convos!)",
      "Reading minds (👀 tea everywhere)",
      "Teleportation (Goodbye, traffic)",
      "Speaking every language (including cat)",
    ],
  },
  {
    question: "Your friend just showed up with a surprise. You say:",
    options: [
      "“Is it food?”",
      "“I KNEW something was coming!”",
      "“You shouldn’t have… but I’m glad you did.”",
      "“What are we running from?”",
    ],
  },
  {
    question: "How do you handle drama?",
    options: [
      "Mute, block, repeat",
      "Grab popcorn",
      "Talk it out calmly",
      "Accidentally become the therapist",
    ],
  },
  {
    question: "Pick your dream vacation:",
    options: [
      "Cabin in the woods with zero WiFi",
      "Solo trip to Tokyo with 5 cameras",
      "Luxury island with 3 besties",
      "Backpacking Europe with strangers",
    ],
  },
  {
    question: "Which quote speaks to your soul?",
    options: [
      "“I’m not lazy, I’m on energy-saving mode.”",
      "“Don’t be eye candy, be soul food.”",
      "“If not now, when?”",
      "“Dance like the WiFi’s gone.”",
    ],
  },
  {
    question: "Your life is a movie. The genre is:",
    options: [
      "Comedy of errors",
      "Indie coming-of-age",
      "Heist thriller",
      "Fantasy epic",
    ],
  },
  {
    question: "What’s your reply when someone asks, “What’s your plan?”",
    options: [
      "“Survive the day.”",
      "“Take over the world, duh.”",
      "“Going with the flow.”",
      "“I’m not even sure where my shoes are.”",
    ],
  },
  {
    question: "How do you want to be remembered?",
    options: [
      "The kind one",
      "The bold trailblazer",
      "The quiet genius",
      "The chaos with a heart",
    ],
  },
];

// 2) Ninety more funny, interesting questions
const extraQuestions = [
  {
    question: "You find a magic remote—what do you press first?",
    options: [
      "Skip to weekend",
      "Mute my ex",
      "Rewind last Monday",
      "Fast-forward to retirement",
    ],
  },
  {
    question: "If your life had a theme song, it would be:",
    options: [
      "Rock anthem",
      "Sad piano ballad",
      "Electronic dance",
      "Country twang",
    ],
  },
  {
    question: "Your fridge is empty—what’s your move?",
    options: [
      "Order pizza",
      "Raid the neighbor",
      "Eat cereal for dinner",
      "Fast until tomorrow",
    ],
  },
  {
    question: "You get stuck on a desert island—pick one item:",
    options: [
      "A Swiss Army knife",
      "Your phone (no signal)",
      "Endless snacks",
      "A hammock",
    ],
  },
  {
    question: "Your spirit emoji is:",
    options: ["🔥", "🍕", "🦄", "🤖"],
  },
  {
    question: "Brunch with friends—what do you order?",
    options: [
      "Avocado toast",
      "Pancakes tower",
      "Omelette extravaganza",
      "Cereal & milk",
    ],
  },
  {
    question: "If you were a pizza topping, you’d be:",
    options: ["Extra cheese", "Pineapple", "Pepperoni", "Mushrooms"],
  },
  {
    question: "Your coffee order tells me you’re:",
    options: [
      "Basic & proud",
      "Extra AF",
      "I need sleep",
      "Just give me tea",
    ],
  },
  {
    question: "How do you react to spoilers?",
    options: [
      "Rage-quit",
      "Pretend you knew it all along",
      "Cry in a corner",
      "Spoil others back",
    ],
  },
  {
    question: "You discover you’re in a video game—what’s your hack?",
    options: [
      "Infinite lives",
      "Unlock all levels",
      "Max out speed",
      "Invisible cloak",
    ],
  },
  {
    question: "You’re a reality show judge—what’s your catchphrase?",
    options: ["You’re fired!", "I see potential", "Next!", "Heart"],
  },
  {
    question: "Your pet ran for president. Their slogan?",
    options: [
      "Paws of progress",
      "No more cats and dogs",
      "Fur the people",
      "Make belly rubs great",
    ],
  },
  {
    question: "Time travel or teleportation—your pick?",
    options: [
      "Time travel",
      "Teleportation",
      "Both if possible",
      "Neither, I’m fine",
    ],
  },
  {
    question: "You have to sing karaoke—what’s your song?",
    options: [
      "Bohemian Rhapsody",
      "Baby Shark",
      "Livin’ on a Prayer",
      "Don’t Stop Believin’",
    ],
  },
  {
    question: "If you were a snack, you’d be:",
    options: [
      "Chocolate chip cookie",
      "Spicy chips",
      "Fruit snack",
      "Granola bar",
    ],
  },
  {
    question: "Which emoji sums up your 2025 so far?",
    options: ["🤔", "😎", "🤯", "😭"],
  },
  {
    question: "Your perfect lazy-day outfit is:",
    options: ["Pajamas", "Onesie", "Yoga pants", "Business suit"],
  },
  {
    question: "You can only watch one movie forever; it is:",
    options: ["The Matrix", "Mean Girls", "Inception", "Frozen"],
  },
  {
    question: "If you could speak to one animal, it would be:",
    options: ["Dog", "Cat", "Bird", "Fish"],
  },
  {
    question: "Your dream zombie apocalypse weapon is:",
    options: ["Katana", "Water gun", "Banana", "Toaster"],
  },
  {
    question: "You find a genie—your first wish is:",
    options: ["Unlimited naps", "Money", "World peace", "More wishes"],
  },
  {
    question: "If you were a superhero, your weakness would be:",
    options: ["Chocolate", "Cats", "Coffee", "Bad WiFi"],
  },
  {
    question: "Your favorite dance move is:",
    options: ["The robot", "Moonwalk", "Floss", "Macarena"],
  },
  {
    question: "Pick a weird talent:",
    options: ["Tongue rolling", "Ear wiggling", "Whistling", "Knuckle cracking"],
  },
  {
    question: "Best way to survive Monday morning:",
    options: ["Coffee", "Snooze button", "Cry", "Meditate"],
  },
  {
    question: "Your browser bookmarks bar is full of:",
    options: ["Recipes", "Memes", "Shopping links", "Code tutorials"],
  },
  {
    question: "When someone calls your name, you:",
    options: [
      "Look around",
      "Ignore",
      "Yell back",
      "Pretend it wasn’t you",
    ],
  },
  {
    question: "If you saw a UFO, you'd:",
    options: [
      "Take a selfie",
      "Run",
      "Offer it coffee",
      "Ask for a ride",
    ],
  },
  {
    question: "Your ideal weekend project:",
    options: [
      "Build a pillow fort",
      "Learn knitting",
      "Paint",
      "Bake cookies",
    ],
  },
  {
    question: "If your mood was a weather, it’d be:",
    options: ["Sunny", "Rainy", "Stormy", "Snowy"],
  },
  {
    question: "What’s your karaoke persona?",
    options: ["Rockstar", "Balladeer", "DJ", "Mime"],
  },
  {
    question: "Your alarm tone is:",
    options: ["Rooster", "Siren", "Tuba", "Silence"],
  },
  {
    question: "Favorite secret indulgence:",
    options: [
      "Ice cream",
      "Reality TV",
      "Online shopping",
      "Midnight snacks",
    ],
  },
  {
    question: "Monday: coffee or tea?",
    options: ["Coffee", "Tea", "Neither", "Hot chocolate"],
  },
  {
    question: "Your go-to meme reaction is:",
    options: [
      "Facepalm",
      "Laughing",
      "Side-eye",
      "Tears of joy",
    ],
  },
  {
    question: "If you were a shoe, you’d be:",
    options: ["Sneaker", "High heel", "Flip flop", "Boot"],
  },
  {
    question: "Your superhero sidekick name?",
    options: [
      "Captain Nap",
      "The Procrastinator",
      "Snackman",
      "Sir Laughs-a-lot",
    ],
  },
  {
    question: "In a fantasy world, you’d be:",
    options: ["Wizard", "Elf", "Dragon", "Knight"],
  },
  {
    question: "Your signature dance floor move:",
    options: [
      "Twerk",
      "Salsa",
      "Breakdance",
      "Line dance",
    ],
  },
  {
    question: "Which cereal mascot are you?",
    options: [
      "Tony the Tiger",
      "Toucan Sam",
      "Lucky the Leprechaun",
      "Dig 'Em",
    ],
  },
  {
    question: "Your planner is:",
    options: ["Color-coded", "Sticky notes", "Digital", "Empty"],
  },
  {
    question: "Swap lives with a celebrity: who?",
    options: [
      "Taylor Swift",
      "Dwayne Johnson",
      "Zendaya",
      "Elon Musk",
    ],
  },
  {
    question: "Your karaoke duet partner?",
    options: [
      "Mom",
      "Best friend",
      "Stranger",
      "Your pet",
    ],
  },
  {
    question: "You’re banned from one thing; it would be:",
    options: [
      "Social media",
      "Facebook",
      "Wardrobe",
      "Gym",
    ],
  },
  {
    question: "Pick a useless superpower:",
    options: [
      "Speak spoon",
      "Teleport 1 inch",
      "Invisible in closets",
      "Read squirrel thoughts",
    ],
  },
  {
    question: "Your personal theme color:",
    options: [
      "Neon green",
      "Pastel pink",
      "Electric blue",
      "Charcoal",
    ],
  },
  {
    question: "Extra hour in your day: you",
    options: [
      "Sleep it off",
      "Learn skill",
      "Watch Netflix",
      "Scroll TikTok",
    ],
  },
  {
    question: "Your inbox is:",
    options: [
      "Empty",
      "1000 unread",
      "Spam central",
      "Organized chaos",
    ],
  },
  {
    question: "Rename your pet to:",
    options: ["Snuggles", "Chaos", "Pixel", "Whiskers"],
  },
  {
    question: "Your mug reads:",
    options: [
      "World's Okayest",
      "Not a morning person",
      "I need coffee",
      "#1 Boss",
    ],
  },
  {
    question: "Never start your day without:",
    options: ["Coffee", "Music", "Stretch", "Cursing"],
  },
  {
    question: "Phone battery at end of day:",
    options: ["100%", "50%", "5%", "0%"],
  },
  {
    question: "Best snack combo:",
    options: [
      "Popcorn & soda",
      "Chips & dip",
      "Granola & yogurt",
      "Fruit platter",
    ],
  },
  {
    question: "If you had custom pronouns, they’d be:",
    options: ["/nerd", "/cat", "/chaos", "/vibe"],
  },
  {
    question: "Your surprise party reaction:",
    options: ["Scream", "Cry", "Laugh", "Ghost"],
  },
  {
    question: "Choose a fictional sidekick:",
    options: ["Robin", "Donkey", "Samwise", "Jarvis"],
  },
  {
    question: "Your spirit cartoon:",
    options: [
      "SpongeBob",
      "Bugs Bunny",
      "Rick Sanchez",
      "Dora",
    ],
  },
  {
    question: "If life gives you lemons, you:",
    options: [
      "Make lemonade",
      "Throw them back",
      "Bake pie",
      "Squeeze drama",
    ],
  },
  {
    question: "Dream kid job:",
    options: [
      "Astronaut",
      "Dinosaur trainer",
      "Rock star",
      "Chef",
    ],
  },
  {
    question: "Wake up as your pet; first thought?",
    options: [
      "Feed self",
      "Nap",
      "Chase tail",
      "Bark",
    ],
  },
  {
    question: "Binge-worthy show:",
    options: [
      "Friends",
      "Stranger Things",
      "The Office",
      "Bridgerton",
    ],
  },
  {
    question: "Go-to reaction GIF:",
    options: [
      "John Travolta",
      "Kermit sipping",
      "Cat typing",
      "Michael scowl",
    ],
  },
  {
    question: "One cuisine forever:",
    options: ["Italian", "Mexican", "Chinese", "Indian"],
  },
  {
    question: "Your reading habit:",
    options: [
      "E-book",
      "Graphic novel",
      "Newspaper",
      "None",
    ],
  },
  {
    question: "Karaoke drink of choice:",
    options: ["Tequila", "Beer", "Wine", "Water"],
  },
  {
    question: "Emoji after a long day:",
    options: ["😵‍💫", "😌", "😤", "😏"],
  },
  {
    question: "Secret superhero power:",
    options: [
      "Invisible when awkward",
      "Refill coffee",
      "Summon snacks",
      "Teleport socks",
    ],
  },
  {
    question: "Your dance style:",
    options: [
      "Freestyle",
      "Choreographed",
      "Silent disco",
      "Robot",
    ],
  },
  {
    question: "Ideal pet sidekick:",
    options: [
      "Sloth",
      "Axolotl",
      "Parrot",
      "Hedgehog",
    ],
  },
  {
    question: "Worst flavor combo:",
    options: [
      "Chocolate & fish",
      "Pickles & ice cream",
      "Anchovies & candy",
      "Garlic & donuts",
    ],
  },
  {
    question: "Nostalgic toy choice:",
    options: [
      "Tamagotchi", "Furby", "Beanie Baby", "G.I. Joe"
    ],
  },
  {
    question: "Superglue superpower; first use?",
    options: [
      "Stick homework",
      "Trap neighbor",
      "Glue fridge",
      "Mend things",
    ],
  },
  {
    question: "Ideal pizza shape:",
    options: ["Triangle", "Square", "Star", "Heart"],
  },
  {
    question: "Dead language you'd speak:",
    options: [
      "Latin",
      "Sanskrit",
      "Ancient Greek",
      "Old English",
    ],
  },
  {
    question: "Your personal catchphrase:",
    options: [
      "Yasss queen",
      "It is what it is",
      "Plot twist",
      "Womp womp",
    ],
  },
  {
    question: "Dream car is:",
    options: [
      "Flying car",
      "Invisible car",
      "Mini Cooper",
      "Monster truck",
    ],
  },
  {
    question: "Restaurant theme:",
    options: [
      "Space diner",
      "Medieval feast",
      "Haunted kitchen",
      "Underwater grill",
    ],
  },
  {
    question: "Your TikTok bio reads:",
    options: [
      "Official chaos agent",
      "Snack enthusiast",
      "Sleep deprived",
      "Code wizard",
    ],
  },
  {
    question: "Fictional world to live in:",
    options: [
      "Hogwarts",
      "Middle-earth",
      "Wakanda",
      "Narnia",
    ],
  },
  {
    question: "Zombie apocalypse team:",
    options: [
      "Chef",
      "Scientist",
      "Musician",
      "YouTuber",
    ],
  },
  {
    question: "Karaoke punishment:",
    options: [
      "Sing in accent",
      "Dress silly",
      "Sing solo",
      "Dance outrageous",
    ],
  },
  {
    question: "Dream vacation activity:",
    options: [
      "Shark cage diving",
      "Hot air balloon",
      "Ice hotel",
      "Volcano hike",
    ],
  },
  {
    question: "Retro game to master:",
    options: [
      "Super Mario",
      "Pac-Man",
      "Tetris",
      "Street Fighter",
    ],
  },
  {
    question: "Guilty pleasure YouTube:",
    options: [
      "Makeup tutorials",
      "Conspiracy theories",
      "DIY fails",
      "Food reviews",
    ],
  },
  {
    question: "Write your memoir title:",
    options: [
      "Oops I Did It Again",
      "My Life in Snacks",
      "Unexpected Twists",
      "404 Not Found",
    ],
  },
  {
    question: "Ideal sleep schedule:",
    options: [
      "Night owl",
      "Early bird",
      "Bi-phasic",
      "Random",
    ],
  },
  {
    question: "Pick a pizza crust:",
    options: [
      "Thin & crispy",
      "Deep dish",
      "Stuffed",
      "Flatbread",
    ],
  },
  {
    question: "Favorite random skill:",
    options: [
      "Juggling",
      "Origami",
      "Speed typing",
      "Whistling",
    ],
  },
  {
    question: "Your theme park ride:",
    options: [
      "Roller coaster",
      "Haunted house",
      "Merry-go-round",
      "Bumper cars",
    ],
  },
  {
    question: "Your chaos soundtrack:",
    options: [
      "Epic orchestra",
      "Synthwave",
      "Heavy metal",
      "Lo-fi chill",
    ],
  },
];

// Simple shuffle utility
function shuffle<T>(arr: T[]): T[] {
  return arr
    .map((v) => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((x) => x.v);
}

export default function QuizCard() {
  const router = useRouter();

  // Shuffle full pool and take first 10
  const quizQuestions = useMemo(
    () => shuffle([...baseQuestions, ...extraQuestions]).slice(0, 10),
    []
  );

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const next = [...answers, answer];
    setAnswers(next);

    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      router.push({
        pathname: "/result",
        query: { answers: JSON.stringify(next) },
      });
    }
  };

  const q = quizQuestions[current];

  return (
    <div className={styles.container}>
      <h2>{q.question}</h2>
      {q.options.map((opt, i) => (
        <button
          key={i}
          className={styles.button}
          onClick={() => handleAnswer(opt)}
        >
          {opt}
        </button>
      ))}

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{
            width: `${((current + 1) / quizQuestions.length) * 100}%`,
          }}
        />
      </div>
      <p
        style={{
          textAlign: "right",
          fontSize: "0.8rem",
          color: "#00f2ea",
        }}
      >
        Question {current + 1} of {quizQuestions.length}
      </p>
    </div>
  );
}
