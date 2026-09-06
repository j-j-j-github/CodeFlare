export const epics = {
  ramayana: {
    id: "ramayana",
    name: "The Ramayana",
    tradition: "One of India's two great epic traditions",
    description: "An ancient epic tradition centered on Rama, Sita, Lakshmana, Hanuman and the journey from exile to the conflict in Lanka. The Ramayana explores themes of duty, devotion, sacrifice, and the triumph of dharma.",
    stages: [
      {
        id: "ayodhya",
        name: "Ayodhya",
        subtitle: "The Kingdom of Light",
        description: "The story begins in the prosperous kingdom of Ayodhya, where Prince Rama — eldest son of King Dasharatha — is beloved by all. But palace intrigue and a promise bind the king's hands, and Rama is sent into exile for fourteen years.",
        characters: ["Rama", "Sita", "Lakshmana", "Dasharatha", "Kaikeyi"],
        event: "Rama's exile from Ayodhya"
      },
      {
        id: "exile",
        name: "The Exile",
        subtitle: "Into the Forest",
        description: "Rama, Sita, and Lakshmana enter the Dandaka forest, where they live as ascetics. They encounter sages, defeat demons threatening the forest hermitages, and form bonds that will shape the events to come.",
        characters: ["Rama", "Sita", "Lakshmana"],
        event: "Life in the Dandaka Forest"
      },
      {
        id: "panchavati",
        name: "Panchavati",
        subtitle: "The Turning Point",
        description: "At Panchavati, the demoness Surpanakha's encounter with Rama sets in motion the central crisis of the epic. Ravana, the powerful king of Lanka, learns of Sita's beauty and devises a plan to abduct her using the golden deer as a distraction.",
        characters: ["Rama", "Sita", "Surpanakha", "Maricha", "Ravana"],
        event: "The abduction of Sita"
      },
      {
        id: "kishkindha",
        name: "Kishkindha",
        subtitle: "The Alliance",
        description: "In their desperate search for Sita, Rama and Lakshmana arrive at Kishkindha, where they forge an alliance with the Vanara king Sugriva and meet Hanuman — the devoted warrior who will become central to Sita's rescue.",
        characters: ["Rama", "Hanuman", "Sugriva", "Jatayu"],
        event: "The alliance with the Vanaras"
      },
      {
        id: "lanka",
        name: "Lanka",
        subtitle: "The Great War",
        description: "Hanuman leaps across the ocean and discovers Sita held captive in Lanka. A great bridge is built across the sea, and an epic war unfolds between Rama's forces and Ravana's armies, culminating in the final confrontation between the two.",
        characters: ["Rama", "Hanuman", "Ravana", "Vibhishana", "Sita"],
        event: "The battle for Lanka and the defeat of Ravana"
      },
      {
        id: "return",
        name: "The Return",
        subtitle: "Light Restored",
        description: "With Ravana defeated and Sita freed, Rama returns to Ayodhya. The kingdom celebrates with rows of oil lamps — a tradition associated with the festival of Diwali. Rama is crowned king, and an era of righteous rule begins.",
        characters: ["Rama", "Sita", "Lakshmana", "Hanuman", "Bharata"],
        event: "The coronation and the festival of lights"
      }
    ]
  },
  mahabharata: {
    id: "mahabharata",
    name: "The Mahabharata",
    tradition: "One of India's two great epic traditions",
    description: "One of India's great epic traditions, exploring family, duty, conflict, morality and the consequences of war. The Mahabharata is not a simple tale of good versus evil — it is a complex meditation on dharma, karma, and the moral ambiguities of human existence.",
    stages: [
      {
        id: "hastinapura",
        name: "Hastinapura",
        subtitle: "The Kuru Dynasty",
        description: "The ancient kingdom of Hastinapura is ruled by the Kuru dynasty. The blind king Dhritarashtra and his brother Pandu have sons — the Kauravas and Pandavas — whose rivalry will consume the kingdom and lead to the greatest war in the epic tradition.",
        characters: ["Dhritarashtra", "Pandu", "Bhishma", "Vidura"],
        event: "The origins of the Kuru conflict"
      },
      {
        id: "pandavas-kauravas",
        name: "The Pandavas & Kauravas",
        subtitle: "Brothers in Conflict",
        description: "The five Pandava brothers — Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva — and the hundred Kaurava brothers grow up together but are divided by jealousy, ambition, and the question of who will inherit the throne.",
        characters: ["Yudhishthira", "Bhima", "Arjuna", "Duryodhana", "Draupadi"],
        event: "The growing rivalry between cousins"
      },
      {
        id: "dice-game",
        name: "The Dice Game",
        subtitle: "The Fatal Gamble",
        description: "In one of the most dramatic moments in world literature, Yudhishthira loses everything in a rigged game of dice — his kingdom, his wealth, his brothers, himself, and finally Draupadi. Her public humiliation in the Kaurava court becomes the wound that can never heal.",
        characters: ["Yudhishthira", "Draupadi", "Duryodhana", "Shakuni", "Dushasana"],
        event: "The humiliation of Draupadi"
      },
      {
        id: "exile-mb",
        name: "Exile",
        subtitle: "Thirteen Years",
        description: "The Pandavas endure thirteen years of exile — twelve in the forest and one in disguise. During this time, they gather allies, acquire divine weapons, and prepare for the inevitable confrontation that awaits them.",
        characters: ["Yudhishthira", "Bhima", "Arjuna", "Draupadi", "Krishna"],
        event: "Preparation for war"
      },
      {
        id: "kurukshetra",
        name: "Kurukshetra",
        subtitle: "The Great War",
        description: "The eighteen-day war of Kurukshetra is the climax of the Mahabharata. Millions of warriors clash in a devastating conflict that destroys entire lineages. The war raises profound questions about duty, morality, and the cost of victory.",
        characters: ["Arjuna", "Karna", "Bhishma", "Drona", "Duryodhana"],
        event: "The eighteen-day war"
      },
      {
        id: "bhagavad-gita",
        name: "Bhagavad Gita",
        subtitle: "The Song of God",
        description: "On the eve of battle, Arjuna falters — unwilling to fight his own kin. Krishna delivers the Bhagavad Gita, a profound philosophical discourse on duty, action, knowledge, and devotion that has become one of the most influential texts in world philosophy.",
        characters: ["Krishna", "Arjuna"],
        event: "Krishna's teachings on the battlefield"
      }
    ]
  }
};
