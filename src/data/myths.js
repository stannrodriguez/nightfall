// Nightfall — myth data module.
// Every view (doors grid, filter chips, sky constellations, tonight's pick,
// story pages) derives from the `myths` array. To add a myth, append one
// object here and give it a sky position; a new culture also needs an entry
// in `cultures`, and a new realm becomes a filter chip automatically.

export const cultures = {
  Greek: {
    color: '#8fb8ff',
    lineAlpha: 0.3,
    minorAlpha: 0.5,
    label: { x: 12, y: 38 },
    minors: [[26, 44], [12, 48]],
    lines: [
      [[20, 30], [26, 44]],
      [[26, 44], [30, 62]],
      [[12, 48], [26, 44]],
    ],
  },
  Norse: {
    color: '#d96b2f',
    lineAlpha: 0.35,
    minorAlpha: 0.55,
    label: { x: 68, y: 8 },
    minors: [[76, 34], [60, 32]],
    lines: [
      [[68, 22], [76, 34]],
      [[68, 22], [60, 32]],
    ],
  },
  Japanese: {
    color: '#f5c96a',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 88, y: 69 },
    minors: [[76, 66], [90, 44]],
    lines: [
      [[84, 55], [76, 66]],
      [[84, 55], [90, 44]],
    ],
  },
  Akan: {
    color: '#9fe8c9',
    lineAlpha: 0.32,
    minorAlpha: 0.55,
    label: { x: 48, y: 88 },
    minors: [[40, 64], [56, 62]],
    lines: [
      [[48, 74], [40, 64]],
      [[48, 74], [56, 62]],
    ],
  },
};

// Star position of each myth on the sky canvas, in % of the canvas.
export const skyPos = {
  icarus: [20, 30],
  orpheus: [30, 62],
  ragnarok: [68, 22],
  amaterasu: [84, 55],
  anansi: [48, 74],
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
