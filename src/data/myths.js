// Nightfall — myth data module.
// Every view (doors grid, filter chips, sky constellations, tonight's pick,
// story pages) derives from the `myths` array. To add a myth, append one
// object here and give it a sky position; a new culture also needs an entry
// in `cultures`, and a new realm becomes a filter chip automatically.

// Sky layout notes: every named star draws its title + meta caption below the
// dot, roughly 13% of the canvas wide and 10% tall. Keep named stars ~12% apart
// on at least one axis, and keep minors/labels out of that caption box, so no
// text ever collides. Each culture owns a region of the canvas: Māori top-left,
// Norse top-center, Hindu top-right, Greek left, Japanese right, Akan
// bottom-center, Aztec bottom-left. Minors lean toward the middle so the
// center of the sky never reads as empty.
export const cultures = {
  Greek: {
    color: '#8fb8ff',
    lineAlpha: 0.3,
    minorAlpha: 0.5,
    label: { x: 9, y: 34 },
    minors: [[26, 42], [36, 48]],
    lines: [
      [[20, 30], [26, 42]],
      [[26, 42], [28, 58]],
      [[12, 46], [26, 42]],
      [[26, 42], [36, 48]],
    ],
  },
  Norse: {
    color: '#d96b2f',
    lineAlpha: 0.35,
    minorAlpha: 0.55,
    label: { x: 70, y: 9 },
    minors: [[63, 42]],
    lines: [
      [[62, 16], [56, 30]],
      [[62, 16], [70, 30]],
      [[56, 30], [63, 42]],
      [[70, 30], [63, 42]],
    ],
  },
  Japanese: {
    color: '#f5c96a',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 88, y: 74 },
    minors: [[93, 64], [76, 56]],
    lines: [
      [[85, 56], [93, 64]],
      [[85, 56], [76, 56]],
      [[76, 56], [73, 70]],
    ],
  },
  Akan: {
    color: '#9fe8c9',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 36, y: 86 },
    minors: [[38, 74], [54, 54]],
    lines: [
      [[46, 64], [38, 74]],
      [[46, 64], [54, 54]],
      [[38, 74], [58, 78]],
      [[54, 54], [58, 78]],
    ],
  },
  Aztec: {
    color: '#ef6a4d',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 9, y: 90 },
    minors: [[10, 68], [26, 88]],
    lines: [
      [[16, 78], [10, 68]],
      [[16, 78], [26, 88]],
    ],
  },
  'Māori': {
    color: '#ec7d9e',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 24, y: 8 },
    minors: [[26, 20], [54, 16]],
    lines: [
      [[34, 12], [26, 20]],
      [[34, 12], [54, 16]],
      [[54, 16], [42, 26]],
    ],
  },
  Hindu: {
    color: '#7fd8e8',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 93, y: 42 },
    minors: [[94, 26]],
    lines: [
      [[88, 16], [94, 26]],
      [[88, 16], [83, 32]],
      [[83, 32], [94, 26]],
    ],
  },
};

// Star position of each myth on the sky canvas, in % of the canvas.
export const skyPos = {
  icarus: [20, 30],
  orpheus: [28, 58],
  ragnarok: [62, 16],
  amaterasu: [85, 56],
  anansi: [46, 64],
  fifthsun: [16, 78],
  maui: [34, 12],
  churning: [88, 16],
  izanami: [73, 70],
  jormungandr: [56, 30],
  hermes: [12, 46],
  baldr: [70, 30],
  savitri: [83, 32],
  mauifish: [42, 26],
  wisdompot: [58, 78],
};

export const myths = [
  {
    id: 'icarus',
    name: 'The Fall of Icarus',
    short: 'Icarus',
    culture: 'Greek',
    realm: 'The Sky',
    time: '6 min read',
    accent: '#f0a04b',
    pageBg: '#0b0e22',
    kicker: 'Greek · Told in three nights',
    epigraph: 'He was warned about the sun. He flew toward it anyway.',
    about:
      'A Greek myth best known from Ovid’s Metamorphoses, where the craftsman Daedalus builds wings of feathers and wax to escape King Minos of Crete. Icarus ignores his father’s warning to keep the middle way and falls when the sun melts the wax. The waters where he drowned were called the Icarian Sea, and the nearby island Icaria still carries his name.',
    doorGrad: 'linear-gradient(180deg,#1c1740,#080c20)',
    doorBorder: 'rgba(143,184,255,.28)',
    emblem:
      'width:36px;height:36px;border-radius:50%;background:radial-gradient(circle,#ffd98f,rgba(255,217,143,0) 70%);animation:sunrise 5s ease-in-out infinite',
    orb: 'radial-gradient(circle,#ffd98f 0%,#f0a04b 55%,rgba(240,160,75,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#070a1c 0%,#141234 60%,#2a1e4f 100%)',
      'linear-gradient(180deg,#0b0e26 0%,#241a48 55%,#5a3055 100%)',
      'linear-gradient(180deg,#141838 0%,#4a2a55 55%,#b0603c 85%,#d9884a 100%)',
    ],
    nights: [
      {
        title: 'The Labyrinth',
        paras: [
          'Daedalus built the maze so well that even he could barely leave it. When the king turned jailer, the inventor looked up — the one road Minos did not own — and began collecting feathers, and wax, and courage.',
          'Icarus watched his father work by lamplight, laying quills in rows like a scribe setting lines. He was young enough to think of escape as flying, and not, as his father did, of flying as falling slowly and on purpose.',
        ],
      },
      {
        title: 'The Wings',
        paras: [
          'On the morning they were finished, Daedalus bound the wings to his son’s shoulders and found he could not let go of the straps. “Keep the middle way,” he said. “Not so low the sea weighs your wings, not so high the sun unmakes them.”',
          'Icarus nodded the way children nod at warnings — hearing the love, missing the arithmetic. Then the cliff, the lean, the drop; and the sound the boy made when the air caught him was not fear. It was joy, which is harder to steer.',
        ],
      },
      {
        title: 'The Sun',
        paras: [
          'He rose. Fishermen below mistook them for gods, and Icarus, feeling the warmth spread along his arms like praise, did not disagree. Each beat carried him higher, and the sun — patient, ancient, incapable of malice — simply did what it always does.',
          'The wax let go one feather at a time, politely, and then all at once. Daedalus flew on to Sicily and hung up his own wings in a temple, and never flew again. The sea that took the boy still bears his name — which is, perhaps, the only way the sky apologizes.',
        ],
      },
    ],
  },
  {
    id: 'ragnarok',
    name: 'Ragnarök',
    short: 'Ragnarök',
    culture: 'Norse',
    realm: 'Fire & Ending',
    time: '6 min read',
    accent: '#d96b2f',
    pageBg: '#0d0c0a',
    kicker: 'Norse · Told in three nights',
    epigraph: 'The gods know exactly how they will die. They go anyway.',
    about:
      'The Norse doom of the gods, preserved in the Old Norse poem Völuspá in the Poetic Edda and retold by Snorri Sturluson in the Prose Edda. After the great winter Fimbulvetr, gods and monsters destroy each other and the world burns and drowns. Both sources end with rebirth: a green earth rises again, and two humans, Líf and Lífþrasir, survive to repeople it.',
    doorGrad: 'linear-gradient(180deg,#241207,#0f0703)',
    doorBorder: 'rgba(217,107,47,.32)',
    emblem:
      'width:24px;height:24px;background:#d96b2f;transform:rotate(45deg);opacity:.85;animation:drift 4s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#f2a26a 0%,#d96b2f 50%,rgba(217,107,47,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0a0b0d 0%,#15161a 60%,#26242a 100%)',
      'linear-gradient(180deg,#0c0b09 0%,#241207 55%,#4a1e0c 100%)',
      'linear-gradient(180deg,#0b100d 0%,#14261c 60%,#2c503a 100%)',
    ],
    nights: [
      {
        title: 'The Winter That Does Not End',
        paras: [
          'It began, as endings do, with weather. Three winters came and no summer stood between them. Snow drove in from every direction at once, and the sun gave no warmth though it still crossed the sky, pale as a coin at the bottom of a well.',
          'In the halls of Asgard, Odin sat with his ravens and said nothing. He had traded an eye for wisdom long ago, and wisdom, he had learned, is mostly the ability to see what cannot be prevented.',
        ],
      },
      {
        title: 'The Ship of Nails',
        paras: [
          'Far to the east, a ship slipped its moorings — Naglfar, built from the unclipped nails of the dead, a fleet’s worth of neglect made seaworthy. Loki held the tiller. The wolf Fenrir ran ahead of the tide, his lower jaw scraping the earth, his upper jaw against the sky.',
          'The watchman Heimdall drew one great breath and blew the horn that had waited an age to be blown. And the gods, who had known this day since before the world had a name for days, put on their armor without hurry, the way people dress for work.',
        ],
      },
      {
        title: 'The World After',
        paras: [
          'They fell in pairs, god and monster, each taking the other: Thor and the serpent, Odin and the wolf, fire and the world. The sea rose over the ashes, and for a while there was nothing to tell a story about, and no one to tell it.',
          'Then the sea drew back. Land came up green, washed clean, and two humans who had hidden in the world-tree stepped out into a morning nothing had ever ruined. Somewhere in the grass lay the golden game-pieces the gods had played with when the world was young — waiting, as stories do, to be picked up again.',
        ],
      },
    ],
  },
  {
    id: 'amaterasu',
    name: 'Amaterasu and the Cave',
    short: 'Amaterasu',
    culture: 'Japanese',
    realm: 'The Sky',
    time: '6 min read',
    accent: '#f5c96a',
    pageBg: '#120c16',
    kicker: 'Japanese · Told in three nights',
    epigraph: 'They could not force the sun to come back. So they made her curious.',
    about:
      'A foundational Shinto myth recorded in Japan’s oldest chronicles, the Kojiki (712 CE) and the Nihon Shoki. The sun goddess Amaterasu hides in the heavenly rock cave Ame-no-Iwato after her brother Susanoo’s rampage, and is drawn out by Uzume’s dance and a mirror. That mirror is identified with Yata no Kagami, one of the three imperial regalia of Japan, and Uzume’s dance is remembered as the origin of kagura.',
    doorGrad: 'linear-gradient(180deg,#301636,#0f0512)',
    doorBorder: 'rgba(245,201,106,.3)',
    emblem:
      'width:30px;height:30px;border-radius:50%;border:3px solid #f5c96a;box-sizing:border-box;box-shadow:0 0 18px rgba(245,201,106,.5);animation:sunrise 6s ease-in-out infinite',
    orb: 'radial-gradient(circle,#ffe8b0 0%,#f5c96a 50%,rgba(245,201,106,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#120a14 0%,#2b1430 60%,#4a2440 100%)',
      'linear-gradient(180deg,#050408 0%,#0c0a12 60%,#141020 100%)',
      'linear-gradient(180deg,#241536 0%,#6a3a48 55%,#c98a4a 85%,#f0c06a 100%)',
    ],
    nights: [
      {
        title: 'The Brother of Storms',
        paras: [
          'Susanoo was the kind of god who broke things to see if they would break. He flooded the rice fields his sister had laid in careful rows; he flung a flayed horse through the roof of her weaving hall, and one of her maidens died of the fright.',
          'Amaterasu did not rage. That was the frightening part. The goddess of the sun looked at her brother’s grin, walked into the cave of heaven, and rolled a boulder across the door. The light of the world went out like a held breath.',
        ],
      },
      {
        title: 'The Dark',
        paras: [
          'Eight hundred myriad gods gathered at the cave mouth and learned how little divinity is worth in the dark. Crops stopped. Demons grew bold. The gods shouted apologies at the stone and heard nothing back; you cannot argue a wound into healing.',
          'It was Omoikane, the god who thinks, who saw the flaw in their approach. The sun could not be forced, threatened, or begged. But she had never once, in all the ages of heaven, been left out of something interesting.',
        ],
      },
      {
        title: 'The Mirror',
        paras: [
          'So they threw a party. Roosters crowed at nothing. A mirror was hung on a tree, and Uzume, goddess of revelry, danced on an overturned tub — badly, gloriously — until eight hundred myriad gods were laughing at once.',
          'Inside the cave, the sun sat up. She opened the door a crack to ask how there could be joy without her — and saw, in the mirror, a radiant goddess she did not recognize. She leaned closer. Strong hands pulled the door wide, a rope of straw was drawn across the entrance behind her, and dawn — this is true of every dawn since — came back because someone laughed.',
        ],
      },
    ],
  },
  {
    id: 'anansi',
    name: 'How Anansi Got the Stories',
    short: 'Anansi',
    culture: 'Akan',
    realm: 'The Crossroads',
    time: '6 min read',
    accent: '#9fe8c9',
    pageBg: '#08130e',
    kicker: 'Akan · Told in three nights',
    epigraph: 'All the stories in the world once belonged to the sky god. A spider bought them.',
    about:
      'An Akan story from Ghana explaining why folktales are called anansesem — “spider stories.” Anansi wins the sky god Nyame’s story-box by capturing seemingly uncatchable creatures through cleverness; the price varies by telling and sometimes includes the fairy Mmoatia. Carried across the Atlantic by enslaved Africans, Anansi lives on in Caribbean and American traditions as Anancy and Aunt Nancy.',
    doorGrad: 'linear-gradient(180deg,#0d2b22,#04120c)',
    doorBorder: 'rgba(159,232,201,.28)',
    emblem:
      'width:32px;height:26px;background:repeating-linear-gradient(90deg,#9fe8c9 0 6px,transparent 6px 13px);border-radius:3px;opacity:.85;animation:drift 4.4s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#d2f7e6 0%,#9fe8c9 45%,rgba(159,232,201,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#04110c 0%,#0a2418 60%,#123626 100%)',
      'linear-gradient(180deg,#061410 0%,#0d2b22 60%,#1a4636 100%)',
      'linear-gradient(180deg,#0a1f14 0%,#1d5038 60%,#3a7a52 100%)',
    ],
    nights: [
      {
        title: 'The Price of Stories',
        paras: [
          'In the beginning there were no stories on the earth. They were kept in a wooden box beside the throne of Nyame, the sky god, who did not use them but liked owning them. Anansi the spider climbed his web up to heaven and asked the price.',
          'Nyame laughed until the clouds shook. The price was Onini the python, who swallows goats whole; Osebo the leopard, whose teeth are spears; and the Mmoboro hornets, whose temper is a weather. Kings with armies had tried and failed. “Bring them,” said the sky god, “and the stories are yours.” “Done,” said the spider.',
        ],
      },
      {
        title: 'The Three Catches',
        paras: [
          'Anansi cut a bamboo pole and walked past the python’s tree arguing loudly with himself: is Onini longer than the pole, or shorter? The python, insulted on behalf of his own magnificence, stretched himself along the bamboo to settle the question — and raised no objection to being tied to it, for accuracy.',
          'He caught the hornets with a gourd and a lie about rain, and the leopard with a pit and a favor. It is worth noticing that Anansi never fought anyone. He simply asked each creature to be exactly what it was proudest of being, and each one climbed into the trap personally.',
        ],
      },
      {
        title: 'Spider Stories',
        paras: [
          'Nyame kept his word — sky gods must; it is the physics of their office. He called all of heaven to witness and said: from this day, every story belongs to Anansi. Let them be called spider stories, forever.',
          'Anansi carried the box down the long web and, being a spider, fumbled it. Stories spilled out across the whole earth — into kitchens and courts and ships and prisons — which is why every people has them, and why no one can ever gather them back into one box. This story is one of the spilled ones. Now it is yours.',
        ],
      },
    ],
  },
  {
    id: 'orpheus',
    name: 'Orpheus Looks Back',
    short: 'Orpheus',
    culture: 'Greek',
    realm: 'The Underworld',
    time: '6 min read',
    accent: '#c9a2ff',
    pageBg: '#0d0a18',
    kicker: 'Greek · Told in three nights',
    epigraph: 'One rule. Do not look back.',
    about:
      'A Greek myth told most fully by Virgil in the Georgics and Ovid in the Metamorphoses: the musician Orpheus wins his wife Eurydice back from Hades on the condition that he not look back, and fails at the threshold. Variants disagree on details — Plato has him shown only a phantom — and later tradition places his lyre in the sky as the constellation Lyra.',
    doorGrad: 'linear-gradient(180deg,#241a3f,#0d0716)',
    doorBorder: 'rgba(201,162,255,.28)',
    emblem:
      'width:28px;height:14px;border-radius:28px 28px 0 0;background:#c9a2ff;opacity:.8;animation:drift 4.2s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#e6d4ff 0%,#c9a2ff 48%,rgba(201,162,255,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0d0a1a 0%,#241a3f 60%,#3f2a5f 100%)',
      'linear-gradient(180deg,#070510 0%,#120b24 60%,#241540 100%)',
      'linear-gradient(180deg,#0c0a16 0%,#1c1630 60%,#4a3a5f 100%)',
    ],
    nights: [
      {
        title: 'The Viper',
        paras: [
          'Orpheus played the lyre so well that rivers slowed to listen and oaks pulled up their roots to follow him. He married Eurydice in the spring. Before the wedding garlands had wilted, a viper found her heel in the tall grass, and the greatest musician in the world learned the one song everyone learns.',
          'He did not accept it. That is the whole of his character: he did not accept it. Orpheus walked south until the ground opened, and went down into the dark with nothing but a lyre and the unreasonable conviction that death was a negotiation.',
        ],
      },
      {
        title: 'The Song Below',
        paras: [
          'He sang his grief to the boatman, and Charon ferried him across for free. He sang to the three-headed dog, and it lay down like a puppy. He sang before the thrones of Hades and Persephone — not a clever song, not a flattering one; he simply told the truth about loss to the two beings who administer it.',
          'Iron Hades wept. Persephone, who spends half of every year being missed, touched her husband’s arm. Eurydice was summoned. One condition — there is always one condition. Walk ahead of her to the upper air, and do not look back.',
        ],
      },
      {
        title: 'The Look Back',
        paras: [
          'The path up is long, and a footstep behind you is a faint thing to stake a life on. He listened for her breathing and heard only his own. What if they had tricked him? What if she had stumbled? He was three steps from the sunlight — some say one — when love did what love does, and turned to check.',
          'She was there. She had been there the whole time. She said a single word — some say it was “already,” some say his name — and the dark drew her back like a tide. When Orpheus died, the Muses set his lyre among the stars, where you can still find it on clear nights: Lyra, the constellation of looking back.',
        ],
      },
    ],
  },
  {
    id: 'fifthsun',
    name: 'The Fifth Sun',
    short: 'Fifth Sun',
    culture: 'Aztec',
    realm: 'Fire & Ending',
    time: '6 min read',
    accent: '#ef6a4d',
    pageBg: '#140806',
    kicker: 'Aztec · Told in three nights',
    epigraph: 'Four worlds had already ended. To light the fifth, a god had to burn.',
    about:
      'The central Mexica creation myth, recorded in the sixteenth century in the Florentine Codex and the Leyenda de los Soles. Four earlier suns had each been destroyed, and the fifth was kindled at Teotihuacan by the sacrifice of the humble god Nanahuatzin, with the rabbit thrown at proud Tecciztecatl explaining the markings on the moon. This age — Nahui Ollin, “Four Movement” — was held to be destined to end in earthquakes.',
    doorGrad: 'linear-gradient(180deg,#33110c,#120503)',
    doorBorder: 'rgba(239,106,77,.3)',
    emblem:
      'width:30px;height:30px;border-radius:50%;border:3px solid #ef6a4d;box-sizing:border-box;box-shadow:0 0 0 6px rgba(239,106,77,.22),0 0 18px rgba(239,106,77,.5);animation:sunrise 5.5s ease-in-out infinite',
    orb: 'radial-gradient(circle,#ffc08a 0%,#ef6a4d 52%,rgba(239,106,77,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0a0507 0%,#1a0b0d 60%,#2c1210 100%)',
      'linear-gradient(180deg,#120705 0%,#331109 55%,#61200f 100%)',
      'linear-gradient(180deg,#1c0c10 0%,#5a2413 55%,#b0512a 85%,#e88a4a 100%)',
    ],
    nights: [
      {
        title: 'The Council in the Dark',
        paras: [
          'When the fourth sun drowned, the gods gathered at Teotihuacan in a darkness with no edges and asked the only question that mattered: who will carry the light? Tecciztecatl stood at once — rich, splendid, already composing the story of his own courage. The gods waited politely for a second volunteer, and when none came, they looked at Nanahuatzin, the small pimpled god whom nobody looked at, and chose for him. He bowed. It is easy to be brave, he found, when no one expects anything else of you.',
          'For four days the two did penance on twin pyramids. Tecciztecatl offered quetzal feathers, balls of gold, thorns carved from jade — precious things, offered precisely because they cost him nothing. Nanahuatzin offered green reeds, balls of grass, and maguey spines reddened with his own blood, which was all he had, and therefore everything.',
        ],
      },
      {
        title: 'The Fire',
        paras: [
          'The gods built a great fire and let it rage four days, until its heart was white and it made a sound like weather. Tecciztecatl went first, as befitted his splendor. He ran at the flames and his body refused him. Four times he ran; four times he stopped at the heat, and the fourth refusal is the one the fire remembered.',
          'Then the gods called Nanahuatzin. He closed his eyes so he would not have to consult his fear, and walked in. The fire took him the way night takes a lamp — completely, and without ceremony. An eagle followed him into the blaze, which is why its feathers are scorched black at the tips; a jaguar leapt across the embers, which is why its coat is stamped with soot. And Tecciztecatl, ashamed at last into a kind of courage, threw himself onto the ashes that were left.',
        ],
      },
      {
        title: 'Four Movement',
        paras: [
          'Two suns rose that morning, equal and unbearable, and the gods saw that shame had made the second one too bright. One of them took a rabbit and flung it into Tecciztecatl’s face, dimming him into the moon — look up on a clear night and the rabbit is printed there still. But the true sun, who had been humble, hung at the horizon and did not move. He wanted what fire always wants: more. He would not cross the sky until every god had given blood.',
          'So the gods died to set the day in motion, and Ehecatl, god of wind, blew until the sun consented to travel. This world is the Fifth Sun, called Four Movement — and it was born owing a debt, which is why the Mexica fed it, and why its priests watched the sky with the particular attention of people who have read the terms. The fifth age, the old books say, will end in earthquake. Every age ends. The point of the story is what it cost to begin one.',
        ],
      },
    ],
  },
  {
    id: 'maui',
    name: 'How Māui Snared the Sun',
    short: 'Māui',
    culture: 'Māori',
    realm: 'The Sky',
    time: '6 min read',
    accent: '#ec7d9e',
    pageBg: '#150a13',
    kicker: 'Māori · Told in three nights',
    epigraph: 'The days were too short for living. So Māui went to have a word with the sun.',
    about:
      'A Māori telling of one of the most widespread stories in Polynesia — in Hawai‘i, Māui snares the sun atop the mountain Haleakalā. In the Māori version the trickster-hero and his brothers plait ropes of flax, wait at the pit where the sun rises, and Māui beats him with the enchanted jawbone of his ancestress Muri-ranga-whenua until he agrees to travel slowly. Some tellings add that ropes still trail from the sun, visible as its rays at dawn and dusk.',
    doorGrad: 'linear-gradient(180deg,#2e1226,#10050e)',
    doorBorder: 'rgba(236,125,158,.28)',
    emblem:
      'width:28px;height:28px;border-radius:50%;border:3px solid #ec7d9e;border-top-color:transparent;box-sizing:border-box;transform:rotate(45deg);opacity:.85;animation:drift 4.6s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#ffd2df 0%,#ec7d9e 50%,rgba(236,125,158,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0c060f 0%,#1e0c1c 60%,#341430 100%)',
      'linear-gradient(180deg,#0e0710 0%,#2a1026 55%,#4a1a34 100%)',
      'linear-gradient(180deg,#1c0c1e 0%,#54203c 55%,#a04a4e 85%,#e08a6a 100%)',
    ],
    nights: [
      {
        title: 'The Short Days',
        paras: [
          'In those days Tama-nui-te-rā, the great sun, crossed the sky at a sprint. He rose, glanced at the world, and was gone; and people ate in the dark, fished in the dark, and mended their nets by feel. The days were too short to cook a meal in, let alone live one.',
          'It was Māui — youngest of his brothers, and the kind of hero who solves problems nobody had agreed were his — who announced that he would catch the sun and teach it patience. His brothers laughed: no rope could hold that heat. But Māui had the jawbone of his ancestress Muri-ranga-whenua, which was enchanted, and a plan, which was worse. He set the brothers to plaiting ropes of flax — flat ropes and round ropes, ropes like the ones that still hold canoes against a tide — until the pile of them looked like a sleeping taniwha.',
        ],
      },
      {
        title: 'The Pit of the Sun',
        paras: [
          'They traveled east by night and hid by day under brush and cloaks, so the sun would not look down and learn their errand. At the edge of the world they found the pit out of which the sun climbs each morning, and they built walls of clay to hide behind, and stretched the great noose across the mouth of it.',
          '“Do not move until he is in to the shoulders,” Māui whispered. “Not at the light. Not at the heat. At the shoulders.” Dawn came up like a furnace door opening. The sun rose into the snare head first, magnificent and unsuspecting, and when his shoulders passed the rim Māui shouted, and the brothers hauled, and the ropes shut on the brightest thing in the world.',
        ],
      },
      {
        title: 'The Slow Sun',
        paras: [
          'The sun thrashed and the ropes smoked and held. Then Māui stepped out from the clay wall with the jawbone of his ancestress and beat the sun — soundly, thoroughly, without apology — while the sun roared and wept and finally cried out his own sacred name, Tama-nui-te-rā, which is how humans came to know it. “Why do you strike me?” he begged. “Because you run,” said Māui, “and the world cannot keep up.”',
          'They let him go at last, and the sun pulled himself out of the snare and limped across the sky — slowly, the way he has gone ever since. Now there was time: to plant and to haul nets, to build, to argue, to sit by the fire while the evening lasted. And some say the ropes were never fully cut, that they trail from the sun still. Look at dusk, when he goes down streaming light in long lines toward the sea. Those are the ropes of Māui, paying out.',
        ],
      },
    ],
  },
  {
    id: 'churning',
    name: 'The Churning of the Ocean',
    short: 'The Churning',
    culture: 'Hindu',
    realm: 'The Deep',
    time: '6 min read',
    accent: '#7fd8e8',
    pageBg: '#061018',
    kicker: 'Hindu · Told in three nights',
    epigraph: 'Gods and demons agreed on exactly one project. It nearly poisoned the world.',
    about:
      'The Samudra Manthana, told in the Bhagavata Purana, the Vishnu Purana, and the Mahabharata. Gods and asuras churn the cosmic ocean of milk with Mount Mandara as the rod and the serpent Vasuki as the rope, yielding first the world-poison halāhala — swallowed by Shiva, whose throat turns blue — then treasures, the goddess Lakshmi, and the nectar of immortality. Rahu’s severed, deathless head still swallows the sun and moon from time to time, which is how the tradition explains eclipses.',
    doorGrad: 'linear-gradient(180deg,#0a2230,#04101a)',
    doorBorder: 'rgba(127,216,232,.28)',
    emblem:
      'width:34px;height:22px;background:repeating-linear-gradient(180deg,#7fd8e8 0 2px,transparent 2px 7px);border-radius:3px;opacity:.85;animation:drift 4.8s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#e8fbff 0%,#7fd8e8 48%,rgba(127,216,232,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#050a12 0%,#0a1a28 60%,#12303e 100%)',
      'linear-gradient(180deg,#04101a 0%,#0e2836 55%,#1a4a52 100%)',
      'linear-gradient(180deg,#0a1c26 0%,#1e5060 55%,#3e8a90 85%,#7fc8c0 100%)',
    ],
    nights: [
      {
        title: 'The Bargain',
        paras: [
          'It began with a garland. The sage Durvasa offered one to Indra, king of the gods, who draped it on his elephant, who threw it on the ground — and the sage’s curse drained the fortune of heaven like water from a cracked jar. The gods weakened. Their old enemies the asuras pressed in. So Vishnu proposed the unthinkable: a joint venture. At the bottom of the ocean of milk lay amrita, the nectar of immortality, and churning it up would take every hand in creation — including the enemy’s.',
          'They uprooted Mount Mandara for a churning rod and persuaded Vasuki, king of serpents, to serve as the rope. The asuras, being proud, demanded the head end, and got it, along with the smoke of the serpent’s breath. The gods took the tail. And when the mountain began to sink through the sea floor, Vishnu became Kurma, a turtle the size of a continent, and slid his shell beneath it. On his back the whole enterprise turned.',
        ],
      },
      {
        title: 'The Poison',
        paras: [
          'The first thing the ocean gave up was not treasure. It was halāhala, the poison of everything, a smoke that withered whatever it touched, and both armies dropped the serpent and fled. It was Shiva who walked toward it — someone had to, and it is the nature of Shiva to be the one — and gathered the poison in his cupped palm and drank it. Parvati caught his throat in her two hands to keep it from going down, and there it stays; his throat is blue with it, and they call him Nīlakaṇṭha for it, the blue-throated one.',
          'After that the sea began to pay. Up came Kamadhenu, the cow who grants wishes; Ucchaihshravas, the white horse of seven heads; Airavata the elephant; the jewel Kaustubha, which Vishnu took for his chest. Up came Lakshmi herself, fortune walking on the waves, who surveyed all three worlds and chose Vishnu. And last came Dhanvantari, physician of the gods, holding the pot everyone had been churning for.',
        ],
      },
      {
        title: 'The Nectar',
        paras: [
          'The asuras did what anyone would do and grabbed the pot. Then a woman was suddenly among them — Mohini, beautiful past argument, who was Vishnu wearing a smile — and she offered, sweetly, to pour. The asuras, each certain the enchantress favored him, sat down in a row to wait their turn. She served the gods first. She was still serving the gods when the pot ran dry.',
          'One asura, Rahu, had seen the trick coming and sat disguised among the gods; the sun and the moon, who miss nothing, pointed him out just as the nectar touched his lips. Vishnu’s discus took his head off in the same instant — too late by a swallow. The head lives forever. It hunts the two who betrayed it across the sky, and now and then it catches one and swallows it, and the world goes briefly dark. Then the sun or the moon slides out of the severed throat, as it must, and shines on. Eclipses pass. Grudges, the story observes, do not.',
        ],
      },
    ],
  },
  {
    id: 'izanami',
    name: 'Izanami and Izanagi',
    short: 'Izanami',
    culture: 'Japanese',
    realm: 'The Underworld',
    time: '6 min read',
    accent: '#adb8e6',
    pageBg: '#0c0b15',
    kicker: 'Japanese · Told in three nights',
    epigraph: 'He followed his wife into the land of the dead. She asked him not to look.',
    about:
      'A foundational myth from the opening books of the Kojiki (712 CE) and the Nihon Shoki. The creator pair Izanagi and Izanami stir the first island out of the sea and give birth to the land of Japan; when Izanami dies bearing the fire god Kagutsuchi, Izanagi follows her into Yomi, the land of the dead, and breaks his promise not to look at her. Their parting at the blocked pass of Yomotsu Hirasaka is the tradition’s account of why people die — and Izanagi’s purification afterward brings Amaterasu, Tsukuyomi, and Susanoo into the world, which is why this door stands a few steps from the door of the cave.',
    doorGrad: 'linear-gradient(180deg,#1d1b33,#0a0912)',
    doorBorder: 'rgba(173,184,230,.28)',
    emblem:
      'width:22px;height:22px;border-radius:0 50% 50% 50%;background:#adb8e6;opacity:.8;transform:rotate(45deg);animation:drift 4.4s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#dfe4ff 0%,#adb8e6 50%,rgba(173,184,230,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0d0a16 0%,#1e1430 60%,#4a2333 100%)',
      'linear-gradient(180deg,#050408 0%,#0b0a14 60%,#161226 100%)',
      'linear-gradient(180deg,#0c1018 0%,#1c2a3e 55%,#3e5a72 85%,#8fb0c9 100%)',
    ],
    nights: [
      {
        title: 'The Fire Child',
        paras: [
          'Before there was a Japan there were two gods on the floating bridge of heaven, dipping a jeweled spear into the sea below. The brine that dripped from its point piled up into the first island, and Izanagi and Izanami went down onto it together and made the rest by hand: island after island, then rivers, mountains, wind — a world assembled by a married couple, each birth a place you can still stand on.',
          'The last child was fire. Kagutsuchi came into the world burning, as fire does, and Izanami did not survive him. Izanagi wept until his tears became gods, and then he did the thing this hall keeps a whole realm for: he refused. His wife had gone down to Yomi, the land of the dead. Very well. He knew the road, and he went.',
        ],
      },
      {
        title: 'The Land of Yomi',
        paras: [
          'Yomi is not a punishment. It is only dark, and downhill, and easier to enter than to leave. Izanagi felt his way along its halls calling her name, and her voice came back to him from the shadows — close, familiar, and wrong in a way he chose not to hear. “You are late,” she said. “I have already eaten the food of this land.” Those who eat in the dark country belong to it; every underworld in this hall agrees on that one law. Still, she said, she would go and ask the lords of Yomi to release her. “Wait for me. And do not look at me. Whatever else you do, do not put a light to the dark.”',
          'He waited. The dark went on being dark, and waiting in it went on being unbearable — and Izanagi did what Orpheus did, what the loving always do, which is to trust his fear instead of his instructions. He broke a tooth from the comb in his hair, lit it, and held the little flame up. What lay before him was not his wife. It was what death actually is when the flattering dark is taken away: ruin, and crawling things, and eight thunders coiled asleep in the body he had loved. He dropped the light and ran.',
        ],
      },
      {
        title: 'The Boulder',
        paras: [
          'All Yomi came after him. He threw down his headdress and it burst into wild grapes; the hags of the dead stopped to eat them, because hunger outranks orders even in hell. He threw his comb and it sprang up as bamboo shoots, and bought a few steps more. At the mouth of the pass he seized three peaches from a tree that grows at the border of every world and hurled them into the dark, and the dead broke like a wave. Then he rolled a boulder it would take a thousand men to lift across the pass of Yomotsu Hirasaka, and the road between the living and the dead was closed forever.',
          'She came to the far side of the stone. “Beloved,” said Izanami, “if you leave me here, I will strangle a thousand of your people every day.” And Izanagi answered, “Then every day I will raise one thousand five hundred to be born.” That is the arithmetic of the world you live in — more cradles than graves, by a margin set in an argument between two people who loved each other. Afterward Izanagi washed the death from his skin in a river, and gods poured off him like water: from his left eye the sun, from his right the moon, from his nose the storm. The sun was Amaterasu. Her door stands open in this hall, a few steps from this one — which is the way of myths, and of families.',
        ],
      },
    ],
  },
  {
    id: 'jormungandr',
    name: 'Thor Goes Fishing',
    short: 'The Serpent',
    culture: 'Norse',
    realm: 'The Deep',
    time: '6 min read',
    accent: '#84aec6',
    pageBg: '#070d12',
    kicker: 'Norse · Told in three nights',
    epigraph: 'A serpent circles the world with its tail in its teeth. Thor rowed out to catch it.',
    about:
      'One of the best-loved Norse myths, told in the poem Hymiskviða in the Poetic Edda and retold by Snorri Sturluson in the Prose Edda — and carved, centuries earlier, on picture stones like the Altuna stone in Sweden, which shows Thor’s foot punched through the bottom of the boat. Fishing with the giant Hymir, Thor baits his hook with an ox head and pulls up Jörmungandr, the Midgard Serpent, before the line is cut. Serpent and god are fated to meet once more at Ragnarök, and to kill each other there.',
    doorGrad: 'linear-gradient(180deg,#0e1e2a,#050b10)',
    doorBorder: 'rgba(132,174,198,.28)',
    emblem:
      'width:28px;height:28px;border-radius:50%;border:3px solid #84aec6;border-left-color:transparent;box-sizing:border-box;opacity:.85;animation:drift 4.6s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#d2e8f2 0%,#84aec6 50%,rgba(132,174,198,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#070b10 0%,#122230 60%,#204050 100%)',
      'linear-gradient(180deg,#04080c 0%,#0a1a26 55%,#123a4a 100%)',
      'linear-gradient(180deg,#081018 0%,#16303e 55%,#2e5a66 85%,#6a9aa0 100%)',
    ],
    nights: [
      {
        title: 'The Giant’s Table',
        paras: [
          'The gods wanted to brew ale for a feast, and the only cauldron deep enough belonged to the giant Hymir, who lived at the edge of the sky where the sea gives up pretending to have a floor. So Thor went visiting. He arrived as a guest and behaved like weather: at dinner he ate two of Hymir’s oxen by himself, and the giant, doing grim arithmetic at the head of his own table, announced that tomorrow they would have to fish, or go hungry.',
          '“Then we fish,” said Thor, delighted, for he had his own reasons for wanting a day on deep water. Hymir told him to find his own bait, meaning it as an insult. Thor walked into the pasture, took the giant’s best ox — Himinhrjóð, Sky-Bellower, a beast the size of a hillside — and twisted its head off. He came down to the boat carrying it under one arm. Hymir said nothing. There is a kind of guest it is wisest to simply row with.',
        ],
      },
      {
        title: 'Beyond the Fishing Grounds',
        paras: [
          'Hymir’s usual grounds came and went. “Here,” said the giant. “The whales are here.” Thor kept rowing. The water under them went from green to gray to a black that light has never bothered visiting, and Hymir began to talk, too casually, about turning back — because every giant knew what lay in the deepest water. Long ago Odin had taken one of Loki’s children, a serpent no bigger than a worry, and thrown it into the sea. And the sea had fed it, as the sea feeds everything, until the serpent lay coiled around the whole world with its tail held in its teeth, and sailors called it Jörmungandr, and did not call it anything else, quietly.',
          'Thor shipped the oars, threaded the ox head onto a hook forged to hold what cannot be held, and paid the line out into the dark. What happened next happened to the whole ocean at once. The line snapped taut, the boat lurched, and Thor braced — so hard his feet went through the planking and found the sea floor itself, and he stood on the bottom of the ocean and hauled. Up out of the black came the head of the Midgard Serpent, venom running off it like rain off a roof, and the god and the serpent looked at each other. It is said no two beings ever understood one another faster.',
        ],
      },
      {
        title: 'The Line',
        paras: [
          'Thor raised the hammer. And Hymir — who was, remember, sitting in a small wooden boat between a god and the thing that circles the world — did the sensible, unforgivable thing: he leaned over with his bait-knife and cut the line. The serpent’s head went back under the sea like a mountain deciding against sunrise. The hammer flew anyway; some say it found the serpent among the waves, but the deep keeps no records. What is certain is that Thor knocked the giant overboard with a fist, waded ashore carrying the boat, and went home without the whales, the cauldron, or a word.',
          'It was not the end, and that is the point of the story. The serpent still lies down there with the world in the circle of its body, and Thor knows it, and it knows Thor. At Ragnarök — that door stands open in this hall, if you have the nerve for it — they will finish what the fishing trip started: the god will kill the serpent and walk nine steps and fall to its venom, and the sea will take back everything, including its secrets. Until then the tide rises and falls twice a day. Fishermen in the old times said that was the serpent, shifting its grip. They said it quietly, and rowed for home.',
        ],
      },
    ],
  },
  {
    id: 'hermes',
    name: 'The First Day of Hermes',
    short: 'Hermes',
    culture: 'Greek',
    realm: 'The Crossroads',
    time: '6 min read',
    accent: '#b8c8d9',
    pageBg: '#0a0d18',
    kicker: 'Greek · Told in three nights',
    epigraph: 'Born at dawn. Invented the lyre by noon. Stole fifty cattle before dark.',
    about:
      'The Homeric Hymn to Hermes, composed around the sixth century BCE, tells the god’s entire first day: born in a cave on Mount Kyllene, he builds the first lyre from a tortoise shell by midday and steals fifty of Apollo’s cattle by nightfall, driving them backwards to confuse the trail. Judged before Zeus, he trades the lyre for the herd, and the rivals part as friends. Hermes became the god of roads, travelers, merchants, and thieves — his stone markers, called herms, stood at Greek crossroads, and a lucky find on the road is still a hermaion, a gift of Hermes.',
    doorGrad: 'linear-gradient(180deg,#1a2030,#090b14)',
    doorBorder: 'rgba(184,200,217,.28)',
    emblem:
      'width:28px;height:28px;background:linear-gradient(#b8c8d9,#b8c8d9) center/100% 3px no-repeat,linear-gradient(#b8c8d9,#b8c8d9) center/3px 100% no-repeat;opacity:.85;animation:drift 4.2s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#eef4f8 0%,#b8c8d9 50%,rgba(184,200,217,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0a0d18 0%,#1c2236 60%,#3a4a66 100%)',
      'linear-gradient(180deg,#060810 0%,#10141f 60%,#1e2433 100%)',
      'linear-gradient(180deg,#101426 0%,#2e3a56 55%,#6a7a96 85%,#c9b48a 100%)',
    ],
    nights: [
      {
        title: 'Born at Dawn',
        paras: [
          'He was born at dawn in a cave on Mount Kyllene, to Maia, a goddess so quiet the other gods kept forgetting she existed — which was, her son would soon demonstrate, an inheritable talent. By mid-morning Hermes had had enough of the cradle. He climbed out, toddled to the cave mouth, and met a tortoise ambling through the dew. He greeted it with enormous courtesy, told it that it would be far more useful indoors, and was carving it into something the world had never heard before within the hour.',
          'Seven strings of sheep-gut across the hollow shell, and he struck them, and the first lyre sounded in a cave that had never expected to be famous. And what did the newest god sing about, with the first instrument, on the first morning of his life? Himself. His own birth, his mother’s cave, his splendid prospects. It was the world’s first song and its first autobiography, and when he finished, he set the lyre in his cradle and turned to the second item of business: he was hungry, and Apollo — his grown, golden, extremely important half-brother — kept cattle.',
        ],
      },
      {
        title: 'Fifty Cattle, Walking Backwards',
        paras: [
          'At sundown he came to the meadows of Pieria, where the immortal herd grazed, and cut fifty cows out of it with the calm of a professional. Then the trick that made him a god of something: he drove them backwards, tail-first, the whole way — so their hooves printed a story about fifty cattle arriving in a meadow they were in fact leaving — while he walked behind in sandals woven of myrtle twigs and tamarisk, which left tracks like nothing that walks. An old man tending vines saw him pass. “You saw nothing,” said the baby with fifty cows, and the old man mostly agreed.',
          'By a river he stopped, built a fire — some say the first fire ever kindled from rubbing sticks — and slaughtered two cows, dividing the meat into twelve equal portions, one for each of the gods. Himself included; he was making a point about the shape of the family going forward. Then the god of appetite did the most impressive thing in the whole hymn: though the smell of the roasting meat nearly killed him, he ate none of it, because gods don’t, and he had decided to be one. He was home by dawn, through the keyhole like a wisp of mist, and in his cradle looking like the one thing in Greece that could not possibly have done it.',
        ],
      },
      {
        title: 'The Judgment of Zeus',
        paras: [
          'Apollo, who among his other offices was the god of finding things out, arrived at the cave by noon and hauled his day-old brother to Olympus. The defense was memorable. “I was born yesterday,” said Hermes, gazing up. “I care only for sleep, and warm milk.” Zeus looked from the sun god, rigid with fury, to the infant, wearing the blanket like a courtroom exhibit, and laughed until the mountain shook — then ordered the brothers to make peace, because that is what fathers are for.',
          'At the cattle pens Hermes reached into the cradle-blanket and produced the lyre, and played, and Apollo — god of music, who had never heard music like this — stood transfixed. So the trade was made at the fence rail: the lyre for the herd, song for cattle, and each god walked away certain he had robbed the other, which is the definition of a good bargain. Apollo gave him a golden staff to seal it, and Zeus gave him the roads. Every traveler became his charge; every stone cairn at a fork in the road became his altar; even the dead go down behind his lamp, for he is the one god with a key to every door in this hall. The Greeks said that when you find luck lying in the road, it is his. Say thank you at the crossroads. He hears it there.',
        ],
      },
    ],
  },
  {
    id: 'baldr',
    name: 'The Death of Baldr',
    short: 'Baldr',
    culture: 'Norse',
    realm: 'Fire & Ending',
    time: '6 min read',
    accent: '#e8d9a3',
    pageBg: '#0d0c12',
    kicker: 'Norse · Told in three nights',
    epigraph: 'Everything in the world swore never to hurt him. Almost everything.',
    about:
      'The death of Baldr is told in Snorri Sturluson’s Prose Edda and foretold in the Old Norse poem Völuspá; the Danish historian Saxo Grammaticus preserves a stranger, older-feeling variant. Frigg takes oaths from all things not to harm her shining son, overlooking the mistletoe, and Loki guides the blind god Höðr’s throw. Hermóðr’s ride to Hel wins one condition — Baldr may return if all things weep for him — and a single giantess refuses. Both Eddas agree on the ending after the ending: when Ragnarök has burned itself out, Baldr comes back into the green world that follows.',
    doorGrad: 'linear-gradient(180deg,#26221a,#0e0c08)',
    doorBorder: 'rgba(232,217,163,.3)',
    emblem:
      'width:28px;height:28px;border-radius:50%;background:radial-gradient(circle,#fff6d8,rgba(232,217,163,0) 70%);animation:sunrise 5.2s ease-in-out infinite',
    orb: 'radial-gradient(circle,#fff6d8 0%,#e8d9a3 50%,rgba(232,217,163,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0d0e14 0%,#1e2030 60%,#3a3c52 100%)',
      'linear-gradient(180deg,#0a0a0e 0%,#16141e 60%,#262032 100%)',
      'linear-gradient(180deg,#140e0e 0%,#33201a 55%,#71422a 85%,#c98a4a 100%)',
    ],
    nights: [
      {
        title: 'The Oaths',
        paras: [
          'Baldr was the god it did not hurt to look at. Where the others were storms and bargains and appetites, he was simply light in the shape of a person, and even the frost giants found it difficult to want him dead. So when Baldr began to dream of his own death, night after night, the whole of Asgard took it personally.',
          'His mother Frigg did what mothers do, only at scale. She went out into the nine worlds and took an oath from every thing in them — from fire and water, iron and every ore, stones, earth, trees, sicknesses, beasts, birds, and serpents — that none of them would harm her son. She was thorough the way only terror makes you thorough. One small plant west of Valhalla she passed over: the mistletoe, too young, she judged, to swear anything. Remember that it was mercy. It will not look like mercy later.',
        ],
      },
      {
        title: 'The Game',
        paras: [
          'What the gods did with Baldr’s new invulnerability tells you everything about gods. They made it a game. Baldr stood in the middle of the assembly while everything in creation was thrown at him — axes, spears, whole boulders — and glanced off like rain off a roof, and the halls rang with laughter. Only one person at the edge of the field was not laughing. Loki had counted the oaths, and found the arithmetic imperfect.',
          'An old woman visited Frigg that afternoon — polite, curious, wearing Loki the way Loki wore everything — and asked whether it was true that all things had sworn. Nearly all, said Frigg, who had kept the secret from everyone but her own relief. There was one sprig too young to swear. By evening Loki stood at the shoulder of blind Höðr, Baldr’s own brother, who alone had no way to join the game. “I will guide your hand,” said Loki kindly, and set in it a dart of mistletoe. Höðr threw, because his brother was beloved and he wished to honor him. It is the cruelest throw in any story: made entirely of love, aimed entirely by spite.',
        ],
      },
      {
        title: 'The Weeping',
        paras: [
          'The dart went through Baldr and the light went out of him, and the gods stood in a silence none of them had rehearsed. They laid him in his ship Hringhorni and burned it on the tide. And his brother Hermóðr took Odin’s own horse and rode nine nights down roads dark and deep to the hall of Hel, to ask death to make an exception. Hel considered. Let all things weep for Baldr, she said — every thing, as once every thing swore — and I will send him back.',
          'And all things did weep: fire wept, iron wept, the stones wept as stones do when they pass from frost into thaw. All things but one. In a cave sat a giantess called Þökk, who said, dry-eyed: let Hel hold what she has. Most agree it was Loki, wearing his last disguise. So Baldr stayed — but hear the ending under the ending. When Ragnarök comes and the fire has taken gods, wolf, serpent, and sea — that door stands open a few steps from this one — the world rises green again, and up from Hel, blinking in the new light, comes Baldr, with Höðr beside him, forgiven. The Norse knew a secret the end of the world keeps badly: the brightest things are only ever lent to the dark.',
        ],
      },
    ],
  },
  {
    id: 'savitri',
    name: 'Savitri and the Lord of Death',
    short: 'Savitri',
    culture: 'Hindu',
    realm: 'The Underworld',
    time: '6 min read',
    accent: '#f0a878',
    pageBg: '#100b12',
    kicker: 'Hindu · Told in three nights',
    epigraph: 'Death carried her husband’s soul away at noon. She followed, making conversation.',
    about:
      'Told in the Vana Parva, the forest book of the Mahabharata, where the sage Markandeya recounts it to comfort the exiled Pandavas. Princess Savitri chooses the doomed prince Satyavan knowing he has a year to live, and when Yama, the lord of death, comes for his soul, she follows and wins him back boon by boon. The tale is still honored across India in the Vat Savitri festival, when married women tie threads around banyan trees — the tree under which Satyavan laid down his head.',
    doorGrad: 'linear-gradient(180deg,#2b1a10,#100804)',
    doorBorder: 'rgba(240,168,120,.3)',
    emblem:
      'width:30px;height:15px;border-radius:0 0 30px 30px;background:#f0a878;opacity:.85;animation:drift 4.4s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#ffd9b8 0%,#f0a878 50%,rgba(240,168,120,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0f0a10 0%,#241426 60%,#48263e 100%)',
      'linear-gradient(180deg,#0c0810 0%,#1e1224 55%,#3a1e30 100%)',
      'linear-gradient(180deg,#160e14 0%,#48232a 55%,#9c5432 85%,#e8a05a 100%)',
    ],
    nights: [
      {
        title: 'The Choosing',
        paras: [
          'Savitri was born of a king’s long prayer, and grew so radiant and so exact of mind that the princes who should have courted her found excuses to be elsewhere; it is uncomfortable, being seen clearly. So her father sent her out to choose for herself. She crossed kingdoms and passed over crowns, and in a forest hermitage she found Satyavan — a king’s son raised in exile, splitting wood for a blind father, singing while he worked. Him, she said, in the way of people who have only ever needed to say a thing once.',
          'The sage Narada, who knows everything and arrives precisely when the knowledge will hurt most, told her father what the stars had written: Satyavan was faultless, gentle, true — and had exactly one year to live. Choose again, said her father. And Savitri gave the answer the tradition has kept polished for more than two thousand years: a heart chooses once. She married Satyavan, put away her silks for bark cloth, and served the hermitage — and counted, privately, in the place where she kept her arithmetic, the days.',
        ],
      },
      {
        title: 'The Appointed Day',
        paras: [
          'For three days before the day, she fasted and stood vigil, and on the morning itself she asked to walk with her husband into the forest. He swung his axe; the trees dropped their shadows; and at noon Satyavan set it down, said the light hurt his eyes, and laid his head in her lap. She watched the forest go quiet in the wrong way. And then she saw, standing among the trees where no path was, a figure in red with skin like a monsoon sky, a noose of bright cord in his hand — and she knew him, and did not look away. That was the first strange thing Yama noticed about her.',
          'The lord of death does not usually come in person; he keeps messengers for the ordinary dead. For Satyavan he had come himself, out of respect. He drew the soul out — thumb-sized, struggling like a caught bird — bound it, and turned south, which is death’s direction. Behind him he heard footsteps keeping pace with his own. “Turn back, daughter,” said Yama, not unkindly. “This road is not walked by the living.” “The scriptures say seven steps together make a friendship,” said Savitri, walking. “I have walked many more than seven with you now. Shall we talk, as friends do?”',
        ],
      },
      {
        title: 'The Boons',
        paras: [
          'She talked. She talked about dharma, about the duties of kings and the courtesies owed by gods, and she talked well — so well that Yama, who administers the consequences of every word ever spoken, found himself enjoying the conversation. “Ask a boon,” he said at last. “Anything but the life I carry.” She asked sight for her blind father-in-law, and got it; his kingdom restored, and got it; a hundred sons for her own father, and got them. Still the footsteps followed. “You have come further than any living soul,” said death, now genuinely curious. “One boon more, then. Anything but this life.” “Then grant me a hundred sons,” said Savitri, “born of Satyavan and of me.”',
          'Yama stopped walking. He reviewed the terms; he was, after all, the god of them. A faithful wife; a hundred sons; a dead husband: two of the three were not compatible, and it was not in him to unsay a granted word. And here the story does the thing that makes it immortal: death laughed. He unbound the little soul, set it in her hands like something returned to its rightful shelf, and blessed the both of them with four hundred years. She walked back north to the banyan tree and Satyavan woke in her lap, saying he had dreamed a dark figure carried him away. “You are not wrong,” said Savitri. In another hall of this house, Orpheus lost everything by looking back. Savitri never once looked away — she looked death in the eye and out-argued him, which is why the women of India tie threads around banyan trees to this day, and why Yama, they say, does not entirely mind losing that particular argument.',
        ],
      },
    ],
  },
  {
    id: 'mauifish',
    name: 'How Māui Fished Up the Land',
    short: 'The Great Fish',
    culture: 'Māori',
    realm: 'The Deep',
    time: '6 min read',
    accent: '#83cdb0',
    pageBg: '#061410',
    kicker: 'Māori · Told in three nights',
    epigraph: 'His brothers would not take him fishing. So Māui brought up an island.',
    about:
      'One of the great traditions of Aotearoa New Zealand, told wherever Māori genealogies are told: Māui stows away in his brothers’ canoe and, with a hook pointed with the jawbone of his ancestress Muri-ranga-whenua and his own blood for bait, hauls up Te Ika-a-Māui — the great fish that is the North Island. The South Island is remembered as his canoe, Te Waka-a-Māui. His impatient brothers carved at the catch without the proper rites, which is why the land is ridged with mountains and gullies — and the fish’s name is still on the map.',
    doorGrad: 'linear-gradient(180deg,#0c2620,#04100c)',
    doorBorder: 'rgba(131,205,176,.28)',
    emblem:
      'width:26px;height:26px;border-radius:50%;border:3px solid #83cdb0;border-top-color:transparent;border-right-color:transparent;box-sizing:border-box;transform:rotate(20deg);opacity:.85;animation:drift 4.4s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#d6f2e6 0%,#83cdb0 50%,rgba(131,205,176,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#04100c 0%,#0a231c 60%,#123a2e 100%)',
      'linear-gradient(180deg,#03100e 0%,#062622 55%,#0c4a40 100%)',
      'linear-gradient(180deg,#062018 0%,#14503c 55%,#2e8a62 85%,#6ac296 100%)',
    ],
    nights: [
      {
        title: 'The Stowaway',
        paras: [
          'After the business with the sun — that door stands open at the other end of this hall — Māui’s brothers made a rule, and the rule was: no Māui in the canoe. A fishing trip with Māui aboard had a way of becoming an errand of cosmic significance, and they only wanted fish. So they hid the paddles. They left before light. And when they were far from shore and congratulating themselves, the floorboards of the canoe moved, and their youngest brother climbed out from under them, stretching, remarking that it was a fine morning for it.',
          'Turn back, they said. It is a long way to swim, said Māui, who had been aboard since midnight. And besides — he pointed his chin at the horizon — the fish you want are further out. They paddled, because there was nothing else to do with him, past their usual grounds, past the grounds of their boldest stories, until the land behind them folded itself under the sea and the water turned the color that has no name on shore. Here, said Māui. And his brothers, looking around at all that emptiness, understood that they had, once again, gone fishing for one thing and caught an entirely different story.',
        ],
      },
      {
        title: 'The Hook and the Blood',
        paras: [
          'They would not give him bait. It was the last small meanness available to them, and they enjoyed it. Māui did not argue. From under his cloak he brought out his hook — and the brothers stopped paddling, because the hook was pointed with the jawbone of Muri-ranga-whenua, their ancestress, the same enchanted bone that had beaten the sun into obedience. A hook like that is not for fish. A hook like that is for whatever the world is keeping at the bottom of itself.',
          'Then, quite calmly, Māui struck his own nose and baited the hook with his blood — for the old things below do not rise for borrowed bait; they rise for what is offered from the self. He paid the line out into the dark and began the chant that makes heavy things light. Far below, the hook caught fast — in the carved doorway, the stories say, of the house of Tonganui, grandson of the sea. The line went taut as a tendon. The canoe heeled until the sea looked in over the side. Haul, said Māui, and hauled — and the ocean began to boil not with a fish but with a country coming up.',
        ],
      },
      {
        title: 'The Carving',
        paras: [
          'It rose the way dawn rises: too large to watch all of at once. A back like a range of hills broke the surface and kept coming — a fish broad as a horizon, with slopes and rivers on it, with houses on it, with cooking fires burning, the stories insist, and the smoke still standing in the morning air. The canoe was aground on it before the brothers remembered how to speak. Te Ika-a-Māui, the fish of Māui: the greatest catch in the world, and you may stand on it today, for it is the North Island of Aotearoa.',
          'Māui knew what a catch of that size required. Wait, he said. Touch nothing. He set off to find a priest and make the offerings that turn taking into receiving — and the moment he was over the ridge, his brothers took out their knives. They carved greedily, arguing over portions, and the great fish writhed under the blades; and that is why the land is not smooth. Every mountain is a welt of that carving, every gorge a knife-mark, every cliff the fish flinching. The South Island is the canoe they stood in; the far north is the tail; and Wellington sits at the mouth of the fish, which is fitting, for capitals also swallow things. The brothers got their portions. The fish kept its name. On any map you care to open, Māui’s catch is still recorded — which is more than your fishing trips can say.',
        ],
      },
    ],
  },
  {
    id: 'wisdompot',
    name: 'Anansi and the Pot of Wisdom',
    short: 'The Wisdom Pot',
    culture: 'Akan',
    realm: 'The Crossroads',
    time: '6 min read',
    accent: '#dcc27a',
    pageBg: '#100e07',
    kicker: 'Akan · Told in three nights',
    epigraph: 'He gathered all the wisdom in the world into one pot. The pot had one lesson left.',
    about:
      'A widely told Akan dilemma tale from Ghana, companion to the story of the story-box. Anansi collects the world’s wisdom in a gourd or clay pot to keep for himself, and cannot climb the tree where he means to hide it, because the pot slung at his belly bumps against the trunk; his young son Ntikuma points out the obvious. In his fury at being out-thought, Anansi lets the pot fall, and the scattering of wisdom explains why sense belongs to everyone and no one entirely — and why even the wise do well to listen to children.',
    doorGrad: 'linear-gradient(180deg,#292311,#0f0d05)',
    doorBorder: 'rgba(220,194,122,.3)',
    emblem:
      'width:26px;height:20px;border-radius:0 0 13px 13px;background:#dcc27a;opacity:.85;animation:drift 4.6s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#f5e8c0 0%,#dcc27a 48%,rgba(220,194,122,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0f0d06 0%,#221c0c 60%,#3c3014 100%)',
      'linear-gradient(180deg,#0c0a05 0%,#1c160a 55%,#342812 100%)',
      'linear-gradient(180deg,#141006 0%,#3c2e10 55%,#7a5c22 85%,#c9a04a 100%)',
    ],
    nights: [
      {
        title: 'The Collecting',
        paras: [
          'After Anansi bought the stories — you have heard how; that door stands beside this one — a new thought began to itch in him, the way thoughts do when they are half wisdom and half appetite. Stories were his. But wisdom, the thing that makes stories worth anything, still lay scattered through the world like seed after a harvest: a pinch in this old woman’s proverb, a grain in that farmer’s knack for rain, a spoonful in the way a ferryman reads a river. Scattered things can be gathered. Anansi found a great clay pot.',
          'He went everywhere. He listened at doorways and drank up advice; he asked elders foolish questions and pocketed the wise corrections; he sat at the crossroads, where all knowledge eventually walks past, and swept up what travelers dropped. Every scrap went into the pot. And the beautiful, terrible thing was: it worked. Village by village the world grew a little duller, a little easier to swindle, and the pot grew heavy as a chief’s heart. When at last he could walk no road without hearing his own borrowed cleverness echoed back stupidly, Anansi judged the work complete. All the wisdom in the world, in one pot, under one lid, his.',
        ],
      },
      {
        title: 'The Tree',
        paras: [
          'Now, a treasure is only as good as its hiding place. Anansi chose the tallest palm at the edge of the village — a tree no thief could climb quietly and no gossip could reach — and he meant to lodge the pot at the very top, where only he could visit it. He tied the pot with a cord and slung it in front of him, against his belly, where he could watch it, for he trusted no one, least of all anyone who had recently acquired all the wisdom in the world.',
          'Then he began to climb. You have seen a spider climb; it is his whole profession. But with the pot at his belly he embraced the trunk like a man hugging a drum, arms wide, knees wider, scraping and sliding and gaining a handsbreadth an hour. The sun moved. Anansi did not, much. And at the foot of the tree, small and patient, stood his son Ntikuma, watching his father wrestle the palm with a pot where his stomach should be, and being, as children are, unable to bear it a moment longer.',
        ],
      },
      {
        title: 'The Scattering',
        paras: [
          '“Father,” said Ntikuma, in the voice children use when they are about to be right, “would it not go easier with the pot on your back?” Anansi stopped. He looked at the trunk. He looked at the pot. He looked down at the small boy in possession of the one useful thought in the entire world that had somehow escaped the collection — and the fury that took him was not at the child. It was at the arithmetic. He had gathered all the wisdom there was, and it had not been all there was. It would never be all there was. Wisdom was not a harvest; it was a weather.',
          'What happened next depends on who is telling it. Some say his grip failed; some say he flung the pot down himself, which is wiser and worse. The pot struck the roots and broke like a promise, and wisdom went everywhere — into the stream, which carried it to other villages; into the wind, which owes no one; into the market dust where anyone might pick some up, and everyone has: which is why no fool is entirely a fool, and no sage entirely a sage, and why the sharpest correction you will ever receive will arrive from someone half your size. Anansi climbed down and walked home with his son, lighter. He had lost everything and kept the story — and he, better than anyone, knew which of the two spends better at the crossroads.',
        ],
      },
    ],
  },
];

export const roman = ['I', 'II', 'III'];

const NUMBER_WORDS = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight',
  'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
  'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty',
];

export function numberWord(n) {
  return NUMBER_WORDS[n] ?? String(n);
}

// Seeded pseudo-random star fields (same LCG as the design prototype, so the
// layout is stable across builds and matches the reference).
function rnd(i) {
  return ((i * 9301 + 49297) % 233280) / 233280;
}

export function starField(seed, n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = rnd(seed + i * 7);
    const b = rnd(seed + i * 13 + 3);
    const c = rnd(seed + i * 29 + 11);
    const size = c > 0.7 ? '3px' : '2px';
    out.push(
      `position:absolute;left:${(a * 96 + 2).toFixed(4)}%;top:${(b * 88 + 2).toFixed(4)}%;` +
        `width:${size};height:${size};border-radius:50%;` +
        `background:${c > 0.5 ? '#ffffff' : '#cfd6ff'};opacity:.5;` +
        `animation:twk ${(2.6 + a * 2.4).toFixed(1)}s ${(b * 2).toFixed(1)}s ease-in-out infinite`
    );
  }
  return out;
}

// Realm groups in first-appearance order — filter chips derive from this.
export function realmGroups() {
  return [...new Set(myths.map((m) => m.realm))];
}
