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
// bottom-center, Aztec bottom-left, Chinese center, Egyptian bottom-right,
// Sumerian lower-left edge, Irish top-left corner. Minors lean toward the
// middle so the center of the sky never reads as empty.
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
    minors: [[38, 74], [48, 58]],
    lines: [
      [[46, 64], [38, 74]],
      [[46, 64], [48, 58]],
      [[38, 74], [58, 78]],
      [[48, 58], [58, 78]],
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
  Chinese: {
    color: '#d9a0f2',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 52, y: 60 },
    minors: [[54, 42]],
    lines: [
      [[46, 42], [54, 42]],
      [[46, 42], [58, 48]],
      [[58, 48], [70, 44]],
    ],
  },
  Irish: {
    color: '#7fd98a',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 3, y: 2 },
    minors: [[16, 14]],
    lines: [
      [[8, 8], [16, 14]],
      [[8, 8], [4, 22]],
    ],
  },
  Sumerian: {
    color: '#d4c76a',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 1, y: 84 },
    minors: [[2, 48]],
    lines: [
      [[2, 48], [6, 58]],
      [[6, 58], [4, 72]],
    ],
  },
  Egyptian: {
    color: '#6f8fe8',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 70, y: 96 },
    minors: [[82, 72]],
    lines: [
      [[74, 84], [82, 72]],
      [[82, 72], [96, 68]],
      [[74, 84], [88, 82]],
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
  'chang-e': [46, 42],
  weavergirl: [58, 48],
  nuwa: [70, 44],
  osiris: [74, 84],
  secretname: [96, 68],
  eyeofra: [88, 82],
  inanna: [6, 58],
  gilgamesh: [4, 72],
  lir: [8, 8],
  oisin: [4, 22],
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
  {
    id: 'chang-e',
    name: 'Chang’e Flies to the Moon',
    short: 'Chang’e',
    culture: 'Chinese',
    realm: 'The Sky',
    time: '6 min read',
    accent: '#f0dca8',
    pageBg: '#0c0a18',
    kicker: 'Chinese · Told in three nights',
    epigraph: 'Her husband shot nine suns out of the sky. She rose into it.',
    about:
      'One of China’s best-loved myths, first recorded in the Huainanzi in the second century BCE. After the archer Hou Yi shoots down nine of the ten suns scorching the earth, he is granted the elixir of immortality by the Queen Mother of the West; his wife Chang’e drinks it — tellings disagree on whether from longing, curiosity, or to keep it from the thief Feng Meng — and floats to the moon, where the jade rabbit keeps her company. The round cakes of the Mid-Autumn Festival are still set out under her light, and China’s lunar landers carry her name.',
    doorGrad: 'linear-gradient(180deg,#221d3e,#0a0918)',
    doorBorder: 'rgba(240,220,168,.3)',
    emblem:
      'width:28px;height:28px;border-radius:50%;background:radial-gradient(circle at 33% 33%,#0c0a18 0 57%,#f0dca8 60%);opacity:.9;animation:drift 5s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#fdf3d0 0%,#f0dca8 50%,rgba(240,220,168,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#140b08 0%,#33170a 55%,#61300f 100%)',
      'linear-gradient(180deg,#0a0814 0%,#181430 60%,#2a2448 100%)',
      'linear-gradient(180deg,#0c0a1c 0%,#242048 55%,#5a5680 85%,#c9c2a0 100%)',
    ],
    nights: [
      {
        title: 'The Ten Suns',
        paras: [
          'In the oldest days there were ten suns, and they were well behaved. They roosted in a mulberry tree at the eastern edge of the world and crossed the sky one at a time, in an order their mother kept, so that every day was exactly one day long. Then one morning — out of boredom, or brotherhood, or whatever it is that ruins schedules — all ten rose at once. Rivers dried standing up. Stones softened like wax. The world began, gently and from the edges inward, to forget what green had ever meant.',
          'Hou Yi was the archer the moment required: a man with a red bow, white arrows, and no talent for watching things burn. He climbed the highest peak and put an arrow through the first sun, and it burst and fell as a three-legged crow. He shot the second, and the third, and the air cooled a degree at a time like a fever breaking. Nine crows lay on the ground when he lowered the bow, and one sun — the last, the lucky one — kept the sky, having suddenly remembered its schedule. Other doors in this hall argue with the sun; this is the only one that settled the count with arrows.',
        ],
      },
      {
        title: 'The Elixir',
        paras: [
          'Heaven was less grateful than the earth. The ten suns had been the sons of a god, and gods keep accounts; Yi and his wife Chang’e were put out of heaven for the crime of the rescue, and made mortal, which is to say: given a deadline. So Yi walked west, past the edges of every map, to the Kunlun mountains where the Queen Mother of the West keeps her garden, and asked for the cure. She gave him a vial of elixir and the terms that came with it. Shared between two, it bought long life on the earth. Drunk whole by one, it bought heaven — a rising without return.',
          'Yi would not rise without her, and would not stay without her, and so he did what people do with decisions that cannot be halved: he postponed it. The vial went into the rafters. But a secret in the rafters is a lamp lit in a window, and Yi’s apprentice Feng Meng — who had learned everything from the master except what the bow was for — had seen its light. He waited for a day when the hunt was long, and came to the house with a blade, and asked Chang’e, politely, for eternity.',
        ],
      },
      {
        title: 'The Moon',
        paras: [
          'What were her choices? Hand a man with a knife the one thing that would make him permanent — or drink. She drank. The floor let go of her feet, courteously, like a host seeing off a guest, and Chang’e rose through the roof of her own house, past the geese, past the weather, growing lighter as the earth grew smaller — and the moon, the nearest lit doorway in all that dark, took her in. There is a palace there called Vast Cold, and a jade rabbit who pounds elixir in a mortar without ever finishing, and an osmanthus tree that drops its flowers on no wind at all. It is beautiful, the tellings agree, in the way of guest rooms: perfectly, and for no one.',
          'Yi came home to an open door and an empty rafter, and did not curse her. That is the detail the story insists on. He set a table in the courtyard with her favorite fruits and little round cakes, and looked up — and she looked down, if the roundest nights are to be believed, each of them keeping their half of a broken elixir. The table is still set: every autumn, when the moon comes full, the cakes are round for her sake. And when, in our own age, her country sent its landers to walk that cold garden at last, it did not have to search for a name. The machines are called Chang’e. The moon is the one door every culture can see from its own yard; she is why this hall keeps it open.',
        ],
      },
    ],
  },
  {
    id: 'weavergirl',
    name: 'The Weaver Girl and the Cowherd',
    short: 'The Weaver Girl',
    culture: 'Chinese',
    realm: 'The Sky',
    time: '6 min read',
    accent: '#a8c4f2',
    pageBg: '#0a0d1c',
    kicker: 'Chinese · Told in three nights',
    epigraph: 'The sky drew a river between two people. Once a year, the birds overrule it.',
    about:
      'The story of Zhinü, the weaver girl who is the star Vega, and Niulang, the cowherd who is Altair, parted by the Silver River — the Milky Way. The two stars are named as a parted pair as early as the Classic of Poetry, and the tale was told in full by the Han dynasty. It is celebrated at the Qixi festival on the seventh night of the seventh lunar month, when the world’s magpies are said to bridge the river; Japan keeps the same night as Tanabata, and Korea as Chilseok.',
    doorGrad: 'linear-gradient(180deg,#181f3d,#080b18)',
    doorBorder: 'rgba(168,196,242,.28)',
    emblem:
      'width:34px;height:20px;background:radial-gradient(circle at 12% 78%,#a8c4f2 0 3.5px,transparent 4.5px),radial-gradient(circle at 88% 22%,#a8c4f2 0 3.5px,transparent 4.5px),linear-gradient(115deg,transparent 0 42%,rgba(168,196,242,.45) 42% 58%,transparent 58%);opacity:.9;animation:drift 4.8s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#e2ecff 0%,#a8c4f2 50%,rgba(168,196,242,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0a0c1a 0%,#1a2140 60%,#2e3a66 100%)',
      'linear-gradient(180deg,#070a14 0%,#141c33 55%,#28355c 100%)',
      'linear-gradient(180deg,#0c101f 0%,#28304f 55%,#5c5a80 85%,#b088a0 100%)',
    ],
    nights: [
      {
        title: 'The Loom of Heaven',
        paras: [
          'Zhinü wove the sky. That was not a title; it was a job. Granddaughter of the Emperor of Heaven, she sat at her loom on the far bank of the Silver River and turned out cloud-brocade by the bolt — the pink silk of dawns, the bruised violet of storm-light, the long grey bolts of ordinary weather that nobody praises and everybody wears. She was very good, and she had never once been asked whether she liked it, which are two facts that live closer together than heaven supposed.',
          'On the earth below lived Niulang, a cowherd poor in everything but one respect: his old ox could talk, and chose its moments. Go to the river, the ox said one evening, where the weaver girl comes down to bathe with her sisters. The tellings differ on what exactly he did there, and some of them make you wince on his behalf; the versions worth keeping agree on what matters, which is that they talked until the stars came out, and that when the sisters flew home, Zhinü stayed. She traded the loom of heaven for a farmhouse, two children, and weather she could feel on her own skin. For a while — the tellings all agree on this too — nobody anywhere was happier.',
        ],
      },
      {
        title: 'The Silver River',
        paras: [
          'But heaven runs on schedule, and its sunsets had gone shabby. The Queen Mother of Heaven looked down, found her cloud-weaver bent over a vegetable garden, and did not send a letter. She came herself. Zhinü was taken back up the way weather moves — irresistibly, without cruelty, without appeal — and Niulang stood in his doorway holding two children and nothing else. It was the ox, dying, who gave him the road: when I am gone, it said, wear my hide, and it will carry you anywhere. Grief on top of grief, and no time for either; he slung a basket-pole across his shoulders, a child in each basket, and flew.',
          'He gained on her. That is the terrible, necessary detail: he was close enough to call her name, and she had turned in the air to answer, when the Queen Mother drew the pin from her hair and scratched a line across the sky. The line filled with stars the way a cut fills, and widened into a river — the Silver River, which your people may call the Milky Way — deep, bright, and unswimmable. It runs there still. On one bank burns the weaver girl, the star others call Vega; on the far side the cowherd, Altair, with two small stars beside him that are the baskets; and between them the current that heaven made out of one hairpin and one rule.',
        ],
      },
      {
        title: 'The Bridge of Magpies',
        paras: [
          'Heaven can draw a river, but it cannot make a rule the whole world signs. The magpies did not sign. On the seventh night of the seventh month, every magpie alive — scruffy, quarrelsome, unsentimental birds; understand that this is not their kind of gesture — rises into the dark at once, and they build a bridge of themselves across the Silver River, wing to wing, and hold. One night a year, the weaver and the cowherd cross toward each other on the backs of birds and meet in the middle of the sky.',
          'That night is called Qixi, and it is kept still: lovers keep it, and the skilled keep it too, for Zhinü is the patroness of everyone whose craft sits in their hands. If it rains that night, the old people say, the rain is the two of them weeping — either the joy of the meeting or the arithmetic of the parting, and the old people decline to rule on which. You are standing in a hall whose other lens is a star chart; step through it on a clear night and find the river running corner to corner, one bright star on either bank. Every constellation in this sky keeps a story. Theirs is the only one the sky is still actively enforcing.',
        ],
      },
    ],
  },
  {
    id: 'nuwa',
    name: 'Nüwa Mends the Sky',
    short: 'Nüwa',
    culture: 'Chinese',
    realm: 'Fire & Ending',
    time: '6 min read',
    accent: '#b8e09a',
    pageBg: '#0b1109',
    kicker: 'Chinese · Told in three nights',
    epigraph: 'A god broke the pillar that held up heaven. She melted stones the colors of everything, and patched it.',
    about:
      'Told in the Huainanzi and the Liezi, with the war that causes the disaster filled in by later sources: the water god Gonggong, defeated in his war for heaven, rams his head against Mount Buzhou, one of the pillars holding up the sky. Nüwa — the serpent-bodied creator who in companion myths shaped humankind from river clay — smelts five-colored stones to patch the tear and props the sky on the legs of a great turtle. The mend is famously imperfect: the sky tilts northwest, which is why the stars drift that way, and the earth dips southeast, which is why China’s rivers run to that sea.',
    doorGrad: 'linear-gradient(180deg,#1a2a14,#080f06)',
    doorBorder: 'rgba(184,224,154,.3)',
    emblem:
      'width:30px;height:15px;border-radius:30px 30px 0 0;border:3px solid #b8e09a;border-bottom:none;border-left-color:transparent;box-sizing:border-box;opacity:.85;animation:drift 5s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#e8f5d2 0%,#b8e09a 50%,rgba(184,224,154,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0d0a0a 0%,#26130e 55%,#4a2413 100%)',
      'linear-gradient(180deg,#0a0f0a 0%,#1c2a16 55%,#3a4a20 100%)',
      'linear-gradient(180deg,#0a100c 0%,#1e3626 55%,#4a6a3e 85%,#a0c27a 100%)',
    ],
    nights: [
      {
        title: 'The Pillar',
        paras: [
          'The sky, in those days, rested on pillars, and nobody thought about them, which is the whole job of a pillar. Then Gonggong, the water god, went to war for the throne of heaven and lost. There are gods who lose gracefully; the water god was not among them. Rather than kneel, he put his head down and ran at Mount Buzhou — the pillar of the northwest — the way a wave runs at a cliff it has personally decided to end. The mountain snapped. And the sky, which had never once been asked to hold itself up, tore along the corner like cloth.',
          'What poured through was everything the sky had been keeping out. Fire ran along the ridgelines and would not burn out; the waters rose and had nowhere to be told to go; black dragons came up out of the flood with opinions about the new arrangement. The world listed like a holed boat. People clung to it — small, recent, badly prepared; they had only just been invented — and the story pauses here, as it should, so you can feel the particular horror of it: not an ending by decree, like some doors in this hall, but an ending by accident. Heaven did not fall because anyone chose it. It fell because somebody lost badly.',
        ],
      },
      {
        title: 'The Five-Colored Stones',
        paras: [
          'Nüwa came to the mending the way its maker comes to a broken thing: personally. She was the serpent-bodied goddess who had shaped the first people out of yellow river clay — the early ones carefully, by hand, and then, when her wrists tired, whole crowds of them flicked from the drops of a muddy rope, which is the story’s sly answer to why people come out so unevenly. They were hers, all of them, hand-built and mud-flicked alike. She did not weigh the merits of the case between the fire and the flood. She went looking for stones.',
          'Five colors of them — blue, yellow, red, white, black, the full palette the world is painted from — gathered out of the riverbeds and smelted in a furnace until stone ran like syrup. Then she went up to the torn corner of heaven and patched it, seam by seam, the way you mend a roof or a sleeve or anything else you cannot afford to replace. She killed the black dragon that would not stop feeding on the drowned. She burned reeds to ash and banked the ash against the flood until the waters remembered their beds. None of it is described as glorious. It is described as work — which is the story’s quiet heresy: that the opposite of the end of the world is not a hero. It is maintenance.',
        ],
      },
      {
        title: 'The Tilt',
        paras: [
          'The sky held, but a patch is not a pillar. So Nüwa took the legs of a great turtle — the tellings are brisk about the turtle, and you may spare it a thought — and set them under the four corners of heaven, and there they stand, bearing up the roof of everything. And still the mend was not perfect. The northwest corner, where the pillar broke, sits forever slightly low: which is why the sun, the moon, and all the stars slide toward the northwest as they cross. And the earth, jolted, dips to the southeast: which is why every great river of her country — ask any of them — runs east to the sea.',
          'That is the detail to carry out of this door. Another hall would have hidden the flaw; this story points at it. The tilt of the sky is the seam of the repair, sewn into the map, running through every river you could stand beside — the scar doing what scars do, which is to go on quietly telling the story after the teller has gone. Nüwa did not make the world as good as new. She made it hold, which is a different and better miracle. You live, the door would like you to know as you leave, in a mended thing. Lean on it. It bears.',
        ],
      },
    ],
  },
  {
    id: 'osiris',
    name: 'Isis and Osiris',
    short: 'Osiris',
    culture: 'Egyptian',
    realm: 'The Underworld',
    time: '6 min read',
    accent: '#82d9a2',
    pageBg: '#071009',
    kicker: 'Egyptian · Told in three nights',
    epigraph: 'His brother measured him for a box. His wife searched a whole river for the pieces.',
    about:
      'The fullest connected telling is Plutarch’s On Isis and Osiris, from the second century CE — but the myth is far older, alluded to in the Pyramid Texts more than two thousand years before him. Set traps his brother Osiris in a chest made to his measure and throws it in the Nile; Isis retrieves it from Byblos; Set cuts the body into fourteen pieces, and Isis and her sister Nephthys, in the form of kites, gather them again. Osiris becomes lord of the Duat, the Egyptian land of the dead, and the green of sprouting grain was his sign — the dead hoped each to “become an Osiris,” and the Nile’s flood renewed his story every year.',
    doorGrad: 'linear-gradient(180deg,#0e2618,#050f08)',
    doorBorder: 'rgba(130,217,162,.28)',
    emblem:
      'width:24px;height:30px;background:linear-gradient(#82d9a2,#82d9a2) center/6px 100% no-repeat,repeating-linear-gradient(180deg,#82d9a2 0 3px,transparent 3px 8px) center top/24px 14px no-repeat;opacity:.85;animation:drift 5s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#d2f5e0 0%,#82d9a2 50%,rgba(130,217,162,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0d0b07 0%,#241a08 55%,#4a350f 100%)',
      'linear-gradient(180deg,#060d0d 0%,#0e2424 55%,#1a4438 100%)',
      'linear-gradient(180deg,#07100a 0%,#14301c 55%,#2e5c36 85%,#68a86a 100%)',
    ],
    nights: [
      {
        title: 'The Chest',
        paras: [
          'Osiris was the king the world gets once, early, before it has learned what to expect. He taught his people grain and beer and the shape of a law; the Nile rose on time for him, as if the river also had a king; and his brother Set watched all of it with the patience of a man taking measurements. That is not a figure of speech. Set had measured him — secretly, exactly, while he slept — and had built to those numbers a chest of cedar and gold so beautiful that describing it started arguments.',
          'He brought it to a banquet, the way you bring a game. Whoever fits the chest, laughed Set, may keep it. One by one the guests lay down in it, and were each an insult too short or too broad, and climbed out to comfortable jeering — until Osiris, who was a good sport, which is a virtue with no armor on it, lay down and fit like a seed in its husk. The lid came down. The nails went in. Molten lead sealed the seams, and the beautiful box went into the Nile before the music had stopped. That is the whole first act, and its lesson is one this hall files under fire and endings too: the trap that works is built to the exact dimensions of what you love.',
        ],
      },
      {
        title: 'The Search',
        paras: [
          'Isis heard, and cut a lock of her hair, and put on mourning, and then did the thing that makes her the equal of any god in this hall: she declined to let the river have the last word. She walked the banks asking everyone — fishermen, washerwomen, children, none of whom is beneath a goddess who wants something found — which way the water had carried a box worth describing. The chest had gone out the delta’s mouth and across the sea to Byblos, where it lodged in a tamarisk sapling; and the tree, growing around the coffin of a god, grew so fragrant and so vast that the king of Byblos cut it down for the pillar of his hall, knowing nothing of what his palace now held up.',
          'Isis sat by the palace well in plain clothes until the queen’s women fetched her in as a nursemaid. She was patient; she braided hair; she was beloved by everyone who had no idea who she was. When at last she stood revealed and asked for the pillar — only the pillar — they gave it to her, bewildered, and she split the wood and lifted out the chest and wept a weeping that struck the youngest prince dead, which the tellings report without apology: grief of that size is weather, and weather has casualties. She sailed the box home and hid it in the marshes of the delta. And Set, hunting by moonlight, as the worst luck in every story hunts, stumbled on it — and this time he did not trust a lid. Fourteen pieces, scattered the length of the Nile. Try, said the second act to the widow, finding him now.',
        ],
      },
      {
        title: 'The Kite',
        paras: [
          'She tried. That is the entire third act, and it is the greatest of them. Isis called her sister Nephthys — married to Set, and done with him — and the two put on the bodies of kites, the small keen falcons of the river, and flew the Nile end to end, low over every reed bed and sandbar, crying the thin high cry those birds still cry, which the old country understood to be two sisters, still looking. Piece by piece they found him. Thirteen pieces; the fourteenth a fish had taken, and the tellings let the fish keep it, because even a perfect story needs one thing missing to prove the search was real.',
          'What they assembled, Anubis bound in linen — the first mummy, the pattern for every one after. And Isis beat her wings over the bound king and drew enough breath back into him for one night, one act of love, one son: Horus, the falcon, who would grow up in the marshes and take the kingdom back from his uncle in a lawsuit the gods argued for eighty years. But mark what Osiris himself did, because it is the move no other door in this realm makes: he did not return. Orpheus turned around; Izanagi struck a light; Osiris walked the other way, down into the Duat, and took its throne — so that the dead, arriving in the dark, would find it governed. He is why the grain comes green out of the black flood-mud every single year, and why the Egyptians wrote his name, hopefully, next to their own. Some doors in this hall are about getting the dead back. This one is about what the dead do for us instead.',
        ],
      },
    ],
  },
  {
    id: 'secretname',
    name: 'The Secret Name of Ra',
    short: 'The Secret Name',
    culture: 'Egyptian',
    realm: 'The Crossroads',
    time: '6 min read',
    accent: '#e8c25e',
    pageBg: '#110d06',
    kicker: 'Egyptian · Told in three nights',
    epigraph: 'The oldest god kept one name unspoken. Isis built a snake to ask for it.',
    about:
      'Preserved on New Kingdom papyri — most fully on a papyrus now in Turin — where the myth serves as a healing spell against snakebite. Ra, grown old, holds one hidden name in his breast, the source of his power; Isis shapes a serpent from his own fallen spittle and the dust of the path, and when it strikes him, no remedy works until he yields the name to her. The Egyptians held that the true name of a thing carried real power — heka — and the papyrus, true to its own story, never writes the name down.',
    doorGrad: 'linear-gradient(180deg,#2b2008,#0f0a04)',
    doorBorder: 'rgba(232,194,94,.3)',
    emblem:
      'width:30px;height:30px;border-radius:50%;border:3px solid #e8c25e;box-sizing:border-box;background:radial-gradient(circle,#e8c25e 0 4px,transparent 5px);opacity:.9;animation:sunrise 5.5s ease-in-out infinite',
    orb: 'radial-gradient(circle,#faeabf 0%,#e8c25e 50%,rgba(232,194,94,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#100c05 0%,#2e2108 55%,#5c440f 100%)',
      'linear-gradient(180deg,#0c0708 0%,#221012 55%,#42201f 100%)',
      'linear-gradient(180deg,#140e08 0%,#3c2810 55%,#8a5c1e 85%,#e0a840 100%)',
    ],
    nights: [
      {
        title: 'The Old Sun',
        paras: [
          'Ra had grown old. The Egyptians said this plainly, of the sun, and you are invited to feel how strange and how honest it is: the first of gods, maker of gods, crossing the sky in his barque with his bones gone silver and his grip gone soft, and at the corner of his mouth — the tellings are unsparing — a thread of spittle that fell, now and then, onto the path of the world. He had a name for every hour of himself: Khepri climbing the morning, Ra blazing at noon, Atum settling into evening. Those names were public. Anyone could hold them, and they weighed nothing.',
          'But there was one more. At the bottom of all the titles, laid down at the hour he made himself out of nothing, Ra kept a true name, hidden in his own breast, never once said aloud — and that name was not a word about his power. It was the power. Whoever held it could steer the holder. And Isis — lady of every craft, whom the texts call more clever than a million gods — had counted the names of Ra the way Loki, elsewhere in this hall, counted the oaths of Frigg, and found the same thing at the bottom of the ledger: one entry missing. She was not wicked. The tellings are careful there. She was ambitious for her son, and for knowledge itself — and she had noticed what fell from the old god’s mouth onto the road.',
        ],
      },
      {
        title: 'The Serpent of Spit and Dust',
        paras: [
          'She gathered the spittle of Ra with the dust it had darkened, and kneaded the two together, and what she shaped was a serpent — the first thing in creation Ra had not made, built entirely out of what he had let fall. Feel the economy of that. She spoke power into it, set it on the path the sun walked every day at the border of his own fields, and stepped back, and did what the clever do at crossroads everywhere in this hall: she waited for the world to walk into its own arrangement.',
          'Ra came out with his retinue in the morning, glorious, humming the world along its way — and the serpent struck, and sank into the god the one thing his creation had never sent back at him: pain. The texts give him symptoms, and they are terribly human. I am colder than water, said the maker of everything, I am hotter than fire. My limbs sweat. My eyes swim. I did not see what bit me, and it was nothing I made. The gods of his court gathered around him and wrung their hands, brilliant and useless, for none of them had medicine for a venom spoken into being on purpose. And through the crowd came Isis, calm as a nurse at a bedside, saying the truest sentence a trickster ever said: I can help you. Tell me your name.',
        ],
      },
      {
        title: 'The Name',
        paras: [
          'He tried to pay in the public coin first. I am the maker of heaven and earth, he said; I knotted the mountains; I made the bull for the cow; I am he at whose rising the river rises. Morning I am Khepri, noon I am Ra, evening I am Atum. It was all true, and the venom was not interested. Titles are what a name looks like from outside; the snake had been built from the inside, and only the inside would answer it. Isis waited — patient, correct, terrifying in the way of someone who has already won and is merely letting the fact arrive — and said again, gently: that is not your name.',
          'So Ra sent his court away, and the name passed out of his breast into hers — not spoken, the tellings insist, but moved, the way a coal is moved between two vessels without ever touching the air. Even the story does not hear it. The papyrus that preserves all this was written as a cure for snakebite, and at the place where the name should stand, it keeps the secret it is about — which may be the most Egyptian sentence in this hall. Isis drew the venom out, and the sun rose whole the next day, minus exactly one possession. She was permitted to pass the name to Horus, and no further; it is in that family still. Other tricksters at this crossroads caught pythons, cattle, the sun itself. Isis caught the only thing the gods actually run on — and if you want to know what it was, the door closes politely in your face, as it has for three thousand years.',
        ],
      },
    ],
  },
  {
    id: 'eyeofra',
    name: 'The Eye of Ra',
    short: 'The Eye',
    culture: 'Egyptian',
    realm: 'Fire & Ending',
    time: '6 min read',
    accent: '#e35d6a',
    pageBg: '#130608',
    kicker: 'Egyptian · Told in three nights',
    epigraph: 'Humanity plotted against the sun, and the sun sent his Eye. What stopped her was beer.',
    about:
      'The Destruction of Mankind opens the Book of the Heavenly Cow, a text inscribed in New Kingdom royal tombs — on the outermost golden shrine of Tutankhamun, and in the tombs of Seti I and the Ramesside kings. The aging Ra, hearing mankind plot against him, sends out his Eye, which walks the earth as Hathor and rages as the lioness Sekhmet; when Ra relents and the Eye will not, the slaughter is stopped with seven thousand jars of beer dyed red with ochre. Hathor’s festival of drunkenness was kept in her honor ever after, and the myth ends with Ra withdrawing to the sky on the back of the heavenly cow — the tradition’s answer to why the gods now govern from a distance.',
    doorGrad: 'linear-gradient(180deg,#33101a,#100407)',
    doorBorder: 'rgba(227,93,106,.3)',
    emblem:
      'width:32px;height:16px;border-radius:50%;border:3px solid #e35d6a;box-sizing:border-box;background:radial-gradient(circle,#e35d6a 0 3.5px,transparent 4.5px);opacity:.9;animation:drift 4.4s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#f7c9c2 0%,#e35d6a 50%,rgba(227,93,106,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0f0a06 0%,#2c1c0a 55%,#553a10 100%)',
      'linear-gradient(180deg,#120507 0%,#33090e 55%,#611018 100%)',
      'linear-gradient(180deg,#160a0c 0%,#48181e 55%,#a04438 85%,#e08a5a 100%)',
    ],
    nights: [
      {
        title: 'The Plot',
        paras: [
          'Mankind was made from the tears of Ra — that is the pun the whole tragedy stands on, for in his language the words for tears and for people were nearly the same, and Egypt never made a pun by accident. So when the sun god grew old, and his bones turned to silver and his flesh to gold and his hair to true lapis, it was his own salt water, walking around on legs, that looked up at the slow old light and began to murmur that perhaps the world could be better managed. The murmur became a plan. The plan headed for the desert to arm itself.',
          'Ra heard — the sun hears everything said in daylight, which the plotters might have considered — and called a council so secret it was held in the dark, before creation’s own witnesses. He summoned the eldest gods, and eldest of all he summoned Nun, the flood that everything floated on before there was anything, the way you call your oldest parent when the children have turned. What do I do, asked the light of the world, with people who were my own weeping? And the old water answered like old water: your throne is safe while your Eye is on it. Turn your Eye upon them. There is a sentence in every language that means unleash, and dresses it as observation. That is Egypt’s.',
        ],
      },
      {
        title: 'Sekhmet',
        paras: [
          'The Eye of Ra was not a metaphor. It was a she: the portion of the sun that could be sent, the heat that could be aimed, and it went out from his face wearing the form of Hathor — lady of music, of turquoise, of love, which is the detail the story sharpens to a point, because when love is aimed it comes down as something else. She landed among the plotters in the desert as Sekhmet, the lioness, the Powerful One, and the texts stop being coy: she waded. She drank what she waded in. She found it good.',
          'By the first evening the plotters were finished, and that would have been that — except that a loosed weapon obeys its release, not its owner. Ra looked down at a red country and said, it is enough; I am satisfied; and discovered the sentence had no one to land on. Sekhmet was not listening. Sekhmet was planning tomorrow, and tomorrow was everyone. She slept that night the way tools sleep, without dreams, mid-task; and the gods stood around the oldest problem there is, which this hall keeps a whole realm for: how do you put out a fire you lit on purpose, once it has decided it is the arsonist?',
        ],
      },
      {
        title: 'The Red Beer',
        paras: [
          'You do not fight your own eye. Ra, who had been clever before mankind existed, became clever again. Runners went south through the night to Elephantine, where the red ochre is, and the brewers of Heliopolis were turned out of bed and set to work, and by darkest morning there stood seven thousand jars of beer dyed the exact, considered color of what the lioness loved. They poured it out over the fields in her path, three hands deep — a lake of it, red as the day’s work she had planned — and the gods stepped back the way brewers step back from a trap made of hospitality.',
          'She came at dawn, saw a country already flooded with what she came to spill, and stooped to drink. And drank. And her face, the texts say gently, grew glad. The Powerful One sat down in the red shallows, sang something, forgot the schedule, forgot the assignment, and slept where she sat; and what woke, hungover, in the wet gold morning was Hathor — love again, with a headache. Egypt kept the anniversary honestly: a festival of drunkenness, music, and lamps, held on the day mercy was engineered, because it could not be felt. And Ra, weary of ruling what he had nearly unmade, mounted the back of the heavenly cow and rose — the sky itself is her belly, the stars her freight — putting one cow’s height of distance between the sun and the tears he was made of. The gods have governed from up there ever since. This door’s lesson is the softest thing in the fire realm, and the hardest: the world was not saved by repentance. It was saved by seven thousand jars of good brewing, delivered on time.',
        ],
      },
    ],
  },
  {
    id: 'inanna',
    name: 'Inanna’s Descent',
    short: 'Inanna',
    culture: 'Sumerian',
    realm: 'The Underworld',
    time: '6 min read',
    accent: '#e0cf7a',
    pageBg: '#0d0b06',
    kicker: 'Sumerian · Told in three nights',
    epigraph: 'She put on all her crowns to visit the dead. At each of seven gates, one was taken.',
    about:
      'A Sumerian poem from clay tablets of the early second millennium BCE, recovered largely at Nippur and pieced together line by line by modern scholars — the oldest written descent into the underworld we possess. Inanna, queen of heaven and the planet Venus, goes down to the realm of her sister Ereshkigal; at each of seven gates an emblem of her power is stripped away, and she is struck dead and hung on a hook. Revived by two small beings Enki makes from the dirt under his fingernails, she must send a substitute down in her place: her consort Dumuzi, who spends half of every year below. The later Akkadian telling is known as Ishtar’s Descent.',
    doorGrad: 'linear-gradient(180deg,#292312,#0e0c05)',
    doorBorder: 'rgba(224,207,122,.3)',
    emblem:
      'width:28px;height:28px;background:linear-gradient(#e0cf7a,#e0cf7a) center/100% 3px no-repeat,linear-gradient(#e0cf7a,#e0cf7a) center/3px 100% no-repeat,linear-gradient(45deg,transparent 0 calc(50% - 1.5px),#e0cf7a calc(50% - 1.5px) calc(50% + 1.5px),transparent calc(50% + 1.5px)),linear-gradient(-45deg,transparent 0 calc(50% - 1.5px),#e0cf7a calc(50% - 1.5px) calc(50% + 1.5px),transparent calc(50% + 1.5px));opacity:.85;animation:drift 4.6s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#f5ecc2 0%,#e0cf7a 50%,rgba(224,207,122,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0d0b05 0%,#26200a 55%,#4a4014 100%)',
      'linear-gradient(180deg,#0a080a 0%,#181220 55%,#2a1e38 100%)',
      'linear-gradient(180deg,#0e0c08 0%,#2c2410 55%,#5c4a1c 85%,#b09040 100%)',
    ],
    nights: [
      {
        title: 'The Seven Gates',
        paras: [
          'Inanna was queen of heaven, and held the title the way a lamp holds fire. She was the morning star and the evening star; love answered to her, and war did too, which tells you the Sumerians were paying attention. And one day — the poem gives no reason, and four thousand years of readers have supplied dozens — she set her ear toward the great below, where her sister Ereshkigal is queen of the land of no return. She dressed for it. Understand that this was not vanity: she put on the crown of the steppe, the lapis beads, the breastplate called Come, man, come, the gold ring, the rod of lapis, her royal robe — seven emblems, seven offices, the whole architecture of who she was, worn on one body. Then she told her minister Ninshubur: if I am not back in three days, go weeping to the temples of the great gods, and make them remember me.',
          'She knocked on the outermost gate of the dead like someone kicking a door in. Ereshkigal, told her sister was outside dressed for coronation, went pale, and thought, and gave an order of genius: let her in — through all seven gates, one at a time, and treat her per the ancient rites. At the first gate they took her crown. Why? said Inanna. And the gatekeeper gave the answer that tolls through this whole realm like a bell: Silence, Inanna. The ways of the underworld are perfect. They may not be questioned. At the second gate, the beads. At the third, the breastplate. Gate by gate they unbuilt her, politely, per the rites — and she walked on anyway, which is either the bravest thing in the poem or the proudest, and the poem, being Sumerian, declines to distinguish.',
        ],
      },
      {
        title: 'The Hook',
        paras: [
          'What came through the seventh gate was a woman, naked and bowed, and the underworld received her the way policy receives a person. The Anunna, the seven judges of the dead, sat in their places and fixed upon her the eyes of death; Ereshkigal rose from her throne, and her sister was struck down like a felled roof-beam — and the body of the queen of heaven was hung on a hook in the wall, where the poem leaves it for three days and three nights, with a plainness no later hell has improved on.',
          'Above, Ninshubur did exactly what grief with instructions does: everything. She tore at herself at the doors of the great gods and begged them each in turn. Enlil of the air refused — Inanna craved the great above and the great below both, he said; who grasps at both worlds loses one. The moon god refused with the same shrug. But Enki, god of the sweet waters and of wisdom, which the Sumerians counted as one portfolio, was troubled; my daughter, he said, what has happened to her is not nothing. And he did the strangest, humblest act of rescue in this whole hall: he dug the dirt from under his fingernails and made of it two small creatures — neither man nor woman, so slight the gates had no rite for them — and gave one the food of life and the other the water of life, and told them how to slip through the cracks of seven perfect doors, and what, exactly, to say on the other side.',
        ],
      },
      {
        title: 'The Substitute',
        paras: [
          'They found Ereshkigal in agony — the queen of the dead moaning like a woman in labor, with no one in her whole kingdom of the obedient to sit with her. Oh, oh, my inside, groaned Ereshkigal. Oh, oh, your inside, said the little creatures. Oh, my outside. Oh, your outside. That is the entire trick, and it had never been tried: not a sword, not a bargain, but company in pain, echoed until the pain felt heard. Ask anything, said Ereshkigal at last, undone by two handfuls of fingernail dirt with good manners. They asked for the corpse on the hook. They sprinkled it with the food of life and the water of life, and Inanna stood up.',
          'But the ways of the underworld are perfect: no one leaves unless someone arrives. Inanna walked back up into the sunlight with a escort of galla — small pitiless demons of the deep who accept no gifts, drink no beer, and cannot be distracted, the poem notes, by love — to collect her replacement. They reached for Ninshubur, who had saved her; no, said Inanna. They reached for her sons, in mourning rags; no. And then she came to her own throne room in Uruk, and there sat Dumuzi, her shepherd-king, her husband — in fine clothes, on her seat, conspicuously unweeping — and Inanna fixed on him the eye of death she had learned below, and said: him. His sister Geshtinanna, who loved him, split the sentence in half: six months below for him, six for her, forever. That is why the year has a dying half. The oldest underworld door humans ever wrote — Persephone, Orpheus, Savitri, every descent in this hall walks a road cut first by her — ends not with a moral but with a schedule; and in the sky, watch: the star of Inanna still sets below the world and always, always comes back up.',
        ],
      },
    ],
  },
  {
    id: 'gilgamesh',
    name: 'Gilgamesh and the Plant of Youth',
    short: 'Gilgamesh',
    culture: 'Sumerian',
    realm: 'The Deep',
    time: '6 min read',
    accent: '#8fcfc0',
    pageBg: '#061110',
    kicker: 'Sumerian · Told in three nights',
    epigraph: 'At the bottom of the sea grows a plant that undoes old age. He held it in his hand.',
    about:
      'From Tablet XI of the Epic of Gilgamesh in its Standard Babylonian version, recovered from the library of Ashurbanipal at Nineveh — though tales of Bilgames, king of Uruk, were told in Sumerian a thousand years before that. Grieving Enkidu, Gilgamesh crosses the waters of death to question Utnapishtim, the survivor of the flood, and is told as a parting gift of a thorny plant of renewed youth growing at the bottom of the sea. He dives for it with stones tied to his feet and wins it — then loses it to a snake while he bathes, which is why snakes shed their skins and people do not. The epic is the oldest long story humankind still owns.',
    doorGrad: 'linear-gradient(180deg,#0c2624,#04100f)',
    doorBorder: 'rgba(143,207,192,.28)',
    emblem:
      'width:24px;height:30px;background:linear-gradient(#8fcfc0,#8fcfc0) center/3px 100% no-repeat,radial-gradient(circle at 20% 30%,#8fcfc0 0 4px,transparent 5px),radial-gradient(circle at 80% 45%,#8fcfc0 0 4px,transparent 5px);opacity:.85;animation:drift 5s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#d8f2ea 0%,#8fcfc0 50%,rgba(143,207,192,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0a0c0a 0%,#16241a 55%,#2a4630 100%)',
      'linear-gradient(180deg,#050a0c 0%,#0c1c22 55%,#16383e 100%)',
      'linear-gradient(180deg,#081012 0%,#1c3a38 55%,#3e7060 85%,#8fb894 100%)',
    ],
    nights: [
      {
        title: 'The Friend',
        paras: [
          'Gilgamesh was two-thirds god, which is a fraction to make you feel the missing third every day of your life. He was king of Uruk of the great walls, strong past all sense, and restless in the way of men built one size too large for their circumstances — until the gods made Enkidu, a wild man raised among gazelles, specifically to be his match. They met as a collision and finished as a friendship, which is the oldest trick in the epic and still one of the best. Together they killed the guardian of the cedar forest and the Bull of Heaven itself; together they became the kind of story neighbors complain about. Then the gods, doing arithmetic on all that glory, decided one of the two had to die, and it was Enkidu — slowly, by sickness, in bed, the one way neither of them had ever practiced.',
          'Gilgamesh refused it. Refusal is a door this hall keeps oiled — Orpheus went down a cave with a lyre, Izanagi with a comb — but the king of Uruk refused longer and worse than anyone: he would not give up the body for burial until a worm dropped from his friend’s nose. That detail has survived four thousand years because it deserves to. In that moment the strongest man alive understood that the thing in the bed was no longer his friend, and that the thing in the mirror was next. He did not weep like a king. He pulled out his hair, put on a lion’s skin, and walked off the map — because somewhere past the edge of it, rumor said, lived Utnapishtim: the one man death had ever agreed to skip.',
        ],
      },
      {
        title: 'The Far Side of the Water',
        paras: [
          'The road out of the world is itinerized like a real road, which is the epic’s strange mercy. Scorpion-beings guard the mountain where the sun goes in; Gilgamesh ran the sun’s own tunnel through the dark and beat it to the far mouth, coming out into a garden where the trees carry carnelian for fruit and lapis for leaves — beauty with nothing to eat in it. There an alewife named Siduri, keeping the last tavern in existence, gave him the most sensible advice anyone in this hall has ever refused: You will not find the life you seek. Fill your belly. Make music. Wash your hair, wear clean clothes, love the child who holds your hand. That, too, is the work of the living. He said no — the bereaved always say no to Siduri, the first time — and she told him where the boatman was.',
          'Urshanabi poled him across the waters of death, where a single splash unmakes you, on a hundred and twenty poles used once each and dropped. And on the far shore sat Utnapishtim the Faraway — not radiant, not enthroned, just an old man with an old wife, which was the first disappointment of the truth. He told Gilgamesh how the gods had flooded the world and regretted it, how immortality had been handed to him once, at a funeral of everything, and would not be offered twice. Then he set the fair test: stay awake six days and seven nights, you who want to outlast sleep’s big brother. Gilgamesh sat down, and sleep took him before the sentence ended. His week of sleeping was counted out in loaves of bread staling by his head — proof laid in a row, because heroes argue. He woke, saw the seventh loaf fresh and the first one stone, and stopped arguing.',
        ],
      },
      {
        title: 'The Plant and the Snake',
        paras: [
          'It was the old wife who said: he came all this way; give him something. So Utnapishtim opened the last secret of the gods like a man emptying his pockets. At the bottom of the deep grows a plant like a boxthorn, with thorns that will prick your hands, and its name is its function: Old Man Grown Young. Gilgamesh went out over the deep, tied stones to his feet in the manner of the pearl divers, and went down — past light, past warmth, to the floor of everything, where he took hold of the plant and it bit his hands and he held on. He cut the stones loose and the sea itself threw him back into the world, bleeding and grinning, holding the end of old age.',
          'Mark what he planned, because it is the measure of the man the journey had made: he did not eat it on the beach. He would carry it home to Uruk, he told the boatman, and give it first to an elder, and watch youth come back to an old man — a test, yes, but read it again: the king who had begun this story as an appetite planned to share the cure for death before tasting it. Then, on the road home, he stopped at a cool pool to bathe. He set the plant down. You know what happens; you have known since the epigraph. A snake came up on the scent of it, took the plant, and shed its papery old skin as it slid away — snakes have been young ever since, and men have not. Gilgamesh sat down by the pool and wept, and then he did the thing that makes him the first human being in literature: he went home anyway. Urshanabi, he said at the gates, climb the wall of Uruk and walk its length. Study the brickwork. Is it not good? The deep kept the plant. He kept the city, and the story — and the story, please notice, has outlived every wall in Mesopotamia.',
        ],
      },
    ],
  },
  {
    id: 'lir',
    name: 'The Children of Lir',
    short: 'The Swans',
    culture: 'Irish',
    realm: 'The Deep',
    time: '6 min read',
    accent: '#9fdcae',
    pageBg: '#081210',
    kicker: 'Irish · Told in three nights',
    epigraph: 'Nine hundred years on three waters, wearing feathers. What the spell could not take was their voices.',
    about:
      'Oidheadh Chloinne Lir — the Fate of the Children of Lir — is counted among the Three Sorrows of Irish storytelling, set down in manuscripts of the late medieval period from older telling. The stepmother Aoife strikes the four children of Lir with a druid’s wand and makes them swans: three hundred years on Lough Derravaragh, three hundred on the stormy Sea of Moyle, three hundred on the western water by Inishglora, keeping only their human voices and their gift of song. The spell holds until the sound of a Christian bell reaches Ireland, and the ending — four ancient bodies, one grave — is told with the tenderness the Irish reserve for their saddest material. Swans have been treated gently in Ireland ever since.',
    doorGrad: 'linear-gradient(180deg,#0d2a1a,#050f0a)',
    doorBorder: 'rgba(159,220,174,.28)',
    emblem:
      'width:32px;height:20px;background:radial-gradient(circle at 30% 65%,#9fdcae 0 7px,transparent 8px),radial-gradient(circle at 78% 25%,#9fdcae 0 3px,transparent 4px),linear-gradient(#9fdcae,#9fdcae) 68% 40%/3px 12px no-repeat;opacity:.85;animation:drift 5.2s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#def5e2 0%,#9fdcae 50%,rgba(159,220,174,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0a0d0a 0%,#14261a 55%,#28482e 100%)',
      'linear-gradient(180deg,#060a0c 0%,#0e1e26 55%,#1c3a48 100%)',
      'linear-gradient(180deg,#0a100e 0%,#1e3c2e 55%,#4a7050 85%,#a0c9a0 100%)',
    ],
    nights: [
      {
        title: 'The Stepmother',
        paras: [
          'Lir was a lord of the Tuatha Dé Danann, the shining people of Ireland, and he had four children who were the pleasure of his eyes: Fionnuala the eldest, steady as a keel; Aodh; and the twins, Fiachra and Conn, whose mother died bearing them. He married again — Aoife, his dead wife’s sister — and for a while she loved the children honestly, which the story admits, because the story is fair, and because a villain who once loved is worth two who never did. But love kept in the same room as a dead sister’s children can sour into measurement: whom does he look at first when he comes home. Aoife began to keep that ledger, and a kept ledger always finds its debt.',
          'She took the four in her chariot to Lough Derravaragh, telling their father it was an outing. On the shore she ordered her servants to kill them; the servants refused, and here the tale notes she could not do it with her own hand either — remember that; it is the last human thing she does. Instead she sent the children in to bathe, and when they were in the water she struck it with a druid’s rod and spoke the shape of the spell: swans, nine hundred years — three hundred on this lake, three hundred on the Sea of Moyle between Ireland and Scotland, three hundred on the western water by Inishglora — until a woman of the south is joined to a man of the north, and a new sound is heard in Ireland. Fionnuala, treading water inside a body growing strange, asked only: leave us something. And whether it was mercy or a flaw in the working, the spell left them their voices — their own, human, and sweeter now than any music under heaven. When it was known what she had done, Aoife was struck into a demon of the air by her own kin, and the wind has her yet. The children she could not unfeather; the wand does not run backward.',
        ],
      },
      {
        title: 'The Three Waters',
        paras: [
          'The first three hundred years were almost kind. On Derravaragh the four swam close to shore, and their father came, and all Ireland came, for it became known that the swans of Lir would talk with you — four white birds with the conversation of princes — and sing you to a sleep with no bad dreams in it. Grief, given three hundred years and an audience, wears into something like a festival; the tale lets that first age glow deliberately, so that you will feel the second one properly.',
          'The Sea of Moyle is the strait where Ireland and Scotland grind at each other, and the second age was that. Storm, black frost, salt that froze their feathers to the rock; and one law the four kept against all of it — when the sea scattered them, they had named a meeting rock, and each storm ended with Fionnuala on it, counting. One brother under each wing, she sang, and one against my breast; that is how the poem itself says they slept, on nights when the water stood up like walls. Three hundred years of that. Then three hundred gentler ones in the west, by Inishglora, where the fishermen knew them and no one raised a hand — for by now the swans were older than the kingdoms on either shore, and it is bad luck the world over to trouble what has outlasted you.',
        ],
      },
      {
        title: 'The Bell',
        paras: [
          'While they floated, Ireland changed owners. The shining people went under the hills — that is where the Tuatha Dé Danann go in the late tales, downward into the mounds, becoming the Good Neighbors — and the forts of their fathers grew grass, and one morning across the western water came a sound with no precedent in nine hundred years of listening: a small iron bell, rung by a hermit at his prayers. The swans startled. The old terror of new things took them. And then Fionnuala, who had spent nine centuries learning exactly one skill, which is how to keep three others calm, said: it is only a voice. Let us go and hear what it says.',
          'The hermit was called Mochaomhóg, and he did not try to catch them. He fed them, and talked to them daily, and they sang for him — the last music of the old world performed for the doorkeeper of the new one, neither party quite knowing what it was witnessing. And when at last the far-off marriage of the spell’s fine print came to pass and the enchantment let go, what stood on the shore were not four children. Nine hundred years came due in a moment: four human beings, ancient past ancient, held upright mostly by each other. The hermit did the kindest thing his new faith knew, and blessed them; and Fionnuala, keel to the last, arranged her own grave with the authority of a woman who had been the eldest for nine hundred years: Conn at my left, Fiachra at my right, Aodh before my face — the way they had slept on the Sea of Moyle. So it was done. The deep is a realm of monsters in most of this hall; this door tells you what else it holds. Endurance. Ireland has been gentle with swans ever since, and now you know it is not superstition. It is memory.',
        ],
      },
    ],
  },
  {
    id: 'oisin',
    name: 'Oisín in the Land of Youth',
    short: 'Oisín',
    culture: 'Irish',
    realm: 'The Crossroads',
    time: '6 min read',
    accent: '#ecd28f',
    pageBg: '#0d0e07',
    kicker: 'Irish · Told in three nights',
    epigraph: 'Three hundred years passed while he was happy. The ground was waiting for his foot.',
    about:
      'The ride of Oisín to Tír na nÓg is best known from Michael Comyn’s eighteenth-century Irish poem Laoi Oisín ar Thír na nÓg, which gave lasting shape to much older Fenian material; the frame — an impossibly old Oisín telling the tales of the Fianna to Saint Patrick — goes back to the medieval Acallam na Senórach. Niamh of the Golden Hair carries the poet of the Fianna west over the sea on a white horse; three years in the Land of Youth are three hundred in Ireland; and when the saddle-girth breaks and his foot touches earth, the centuries arrive all at once. The stories he told the saint afterward are, the tradition winks, how we come to have them.',
    doorGrad: 'linear-gradient(180deg,#26220f,#0d0c05)',
    doorBorder: 'rgba(236,210,143,.3)',
    emblem:
      'width:24px;height:28px;border-radius:12px 12px 4px 4px;border:3px solid #ecd28f;border-bottom-color:transparent;box-sizing:border-box;opacity:.85;animation:drift 4.8s ease-in-out infinite alternate',
    orb: 'radial-gradient(circle,#f8ecc9 0%,#ecd28f 50%,rgba(236,210,143,0) 72%)',
    heroGrads: [
      'linear-gradient(180deg,#0a0d0f 0%,#16283a 55%,#2e5068 100%)',
      'linear-gradient(180deg,#0d0c06 0%,#2a2410 55%,#54481a 100%)',
      'linear-gradient(180deg,#0c0e0c 0%,#1e2a22 55%,#48584a 85%,#98a890 100%)',
    ],
    nights: [
      {
        title: 'Niamh of the Golden Hair',
        paras: [
          'The Fianna were hunting by the lakes of Killarney on a morning of soft grey rain when the rider came out of the sea. Not along the shore — out of it, the white horse putting its hooves on the swells as if the Atlantic were a meadow with opinions. The rider was a woman, and the poem spends stanzas on her the way you would spend money you had plenty of: golden hair to the saddle, a mantle of brown silk set with stars of red gold. She rode up the beach to Fionn mac Cumhaill himself, captain of all the Fianna, and answered his question before he asked it. I am Niamh of the Golden Hair, daughter of the king of Tír na nÓg — the Land of Youth. And I have not come for you.',
          'She had come for Oisín — Fionn’s son, the poet of the company, on the strength of the poems, which had crossed the water where no boat goes. There is a lesson in that for every maker in this hall: your work travels ahead of you into countries you do not know exist, and one day something comes back along the road it went. She described her country the way the sea describes itself, endlessly and without repetition: no death there, no withering, feasting and hunting and music, and herself for a wife. Oisín looked once at his father — the poem gives Fionn no speech here, only grief standing politely, which is worse — and mounted. The horse turned. The last thing Ireland heard of him for three hundred years was hooves on water, going west.',
        ],
      },
      {
        title: 'The Land of Youth',
        paras: [
          'Tír na nÓg was exactly as advertised, which no other country has ever been. The trees held fruit and blossom in the same hand; the feasts ended when you chose and not when the food did; he fought one battle for the pleasure of it, freeing a besieged princess from a giant, and even the wound he took there healed like a week closing. He married Niamh; there were children; he was happy — and the poem, honest as a ledger, lets him be happy for three whole years, which in the accounting of that country is a long time and in ours, as you have already guessed, is three hundred.',
          'What broke it was nothing grand. Homesickness is the crossroads this door is carved at, and it does not announce itself as a choice; it arrives as a smell of rain, a certain slant of grey light, the sound in memory of his father’s hunting horn. He asked to visit Ireland — only to visit, only to see Fionn and the Fianna and the hall at Almu. And Niamh, who knew the exchange rate of the two countries and could not bring herself to quote it, refused him twice, and the third time gave him the white horse and one instruction, in the voice of a woman reading fine print she did not draft: do not set your foot upon the ground. Whatever you see, whatever you are asked — stay in the saddle. He promised easily. Promises made in the Land of Youth weigh what feathers weigh there.',
        ],
      },
      {
        title: 'The Stirrup',
        paras: [
          'Ireland came up over the horizon wearing the wrong face. The hall of Almu was a green mound with sheep on it. The forts of the Fianna were grass; the people he hailed on the roads were smaller than the men he remembered, and when he asked after Fionn mac Cumhaill they said — kindly, the way you speak to the confused — that Fionn was a name in the old stories, dead these three hundred years. The poet sat his horse in the middle of his own country like a man reading his own headstone, and everything he had crossed the sea to touch turned out to be behind him, in the one direction the white horse could not ride.',
          'On the road home to the coast he passed men straining to move a great stone into a cart — small men, many of them, failing at what any one of the Fianna would have done alone before breakfast. Pity is the trap the old stories set for their best people. Oisín leaned from the saddle to shift the stone with one hand, and the saddle-girth — three hundred years old, whatever it looked like — snapped. He did not even fall grandly; he slid, and his foot touched Ireland, and Ireland collected. The horse was gone before he finished falling. What the men lifted from the road was not a warrior but a blind white-haired man older than the stone; and they carried him, the tradition says, to Patrick — the new faith’s doorkeeper, as another door in this hall was carried to a hermit’s bell. And there is the bargain this crossroads was cut for: everything he lost by touching the ground, we inherited by his losing it. The old man told the saint the whole world of the Fianna, story by story, arguing all the way — and the monks wrote it down. Stay in the saddle and you keep paradise; touch the ground and you become a book. No one is saying he chose wrong.',
        ],
      },
    ],
  },
];

export const roman = ['I', 'II', 'III'];

const NUMBER_WORDS = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight',
  'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
  'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-one',
  'Twenty-two', 'Twenty-three', 'Twenty-four', 'Twenty-five', 'Twenty-six',
  'Twenty-seven', 'Twenty-eight', 'Twenty-nine', 'Thirty', 'Thirty-one',
  'Thirty-two', 'Thirty-three', 'Thirty-four', 'Thirty-five', 'Thirty-six',
  'Thirty-seven', 'Thirty-eight', 'Thirty-nine', 'Forty',
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
