// data/attractions.js
export const attractions = [
  /* ---------- TOKYO ---------- */
  {
    slug: "sensoji-asakusa-dawn",
    city: "Tokyo",
    name: "Sensō-ji at Dawn (Asakusa)",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Sensoji_Temple_2019.jpg",
    mapUrl: "https://maps.google.com/?q=Senso-ji",
    summary: "Tokyo’s oldest temple glows at sunrise. Beat tour buses; catch incense drifting in quiet courtyards.",
    body: `
Sensō-ji is the rare Tokyo classic that still feels spiritual—if you time it right. Arrive before 7 am and you’ll catch Nakamise Street just waking up, with shop shutters hand-painted in Edo motifs. The main gate (Kaminarimon) looks cinematic in the soft light, and by the time the crowds arrive you’ll already have strolled the pagoda and main hall in peace.

Veg & vegan: graze on sesame dango, sweet-potato yōkan, and melon-pan (ask for dairy-free). For a sit-down, cafés nearby do tofu sets or veg toasts. Omnivores can add seasonal tempura—try matcha salt.

Pro tip: walk 10 minutes to the Sumida riverside boardwalk for a low-key skyline view of Tokyo Skytree and boats sliding by.
    `,
    tags: { couples: true, families: true, solo: true, photography: true, accessibility: true, vegFriendly: true },
    didYouKnow: "The giant red lantern at Kaminarimon weighs ~700 kg. Peek underneath for a carved wooden dragon!"
  },
  {
    slug: "yanaka-ginza",
    city: "Tokyo",
    name: "Yanaka Ginza & Old-Tokyo Lanes",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Yanaka_Ginza_2019.jpg",
    mapUrl: "https://maps.google.com/?q=Yanaka+Ginza",
    summary: "Retro shopping street with craft stores, croquettes, and cat mascots. Slow and sweet.",
    body: `
Yanaka feels like stepping into a postcard from Shōwa-era Tokyo. Start at the stairway nicknamed the “Sunset Steps,” then meander through narrow lanes dotted with craft stores and snack stands. It’s a haven for easy street grazing—croquettes (ask for vegetable versions), grilled mochi, and seasonal fruit popsicles. Vegan/veg? Look for signs that say ベジ or ヴィーガン; many cafés here are surprisingly flexible.

It’s also a crafty corner: handmade ceramics, tenugui (cotton hand towels), and tiny galleries run by charming locals. Bring cash; some shops still skip cards.

Families love the low traffic and cat-themed souvenirs. Solo travelers get that perfect “neighborhoody” Tokyo day with zero stress. For romance, time your stroll for golden hour and finish at a kissaten (old-school coffee shop).
    `,
    tags: { couples: true, families: true, solo: true, crafts: true, vegFriendly: true, budget: true },
    didYouKnow: "Yanaka survived the 1923 quake and WWII bombings, which is why its wooden houses and street grid feel so different to Shinjuku or Shibuya."
  },
  {
    slug: "inokashira-park-kichijoji",
    city: "Tokyo",
    name: "Inokashira Park (Kichijōji)",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Inokashira_Park_pond.jpg",
    mapUrl: "https://maps.google.com/?q=Inokashira+Park",
    summary: "Leafy lake, boat rentals, indie shops, and veg-friendly cafés—Tokyo’s soft side in one neighborhood.",
    body: `
Kichijōji is where Tokyo locals go to exhale. The park’s central pond reflects cherry blossoms in spring and rich reds in autumn; rent a rowboat or swan boat for peak cozy. Around the lake, tiny shrines and tree-lined paths make it feel miles from the city center.

Café culture is big here. You’ll find plant-forward menus—soy latte culture thrives, tofu burgers show up, and curry plates often come with veg options. Omnivores can dive into yakitori alleys near the station after sunset. Pro tip: the side streets south of the station hide excellent second-hand boutiques for a unique wearable souvenir.

Kids adore the boats and open lawns; couples score an easy date; solo travelers can journal under maples, then wander through Harmonica Yokocho’s tiny bars for a friendly nightcap.
    `,
    tags: { couples: true, families: true, solo: true, nature: true, vegFriendly: true, chill: true },
    didYouKnow: "The Benzaiten shrine on the lake is dedicated to a deity of music and eloquence—locals sometimes make wishes before live gigs nearby."
  },
  {
    slug: "akihabara-anime-retro-arcades",
    city: "Tokyo",
    name: "Akihabara: Anime & Retro Arcades",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Akihabara_Electric_Town.jpg",
    mapUrl: "https://maps.google.com/?q=Akihabara",
    summary: "Electric Town equals neon aisles of anime goods, retro gaming, and DIY parts—plus surprisingly good curry.",
    body: `
Even if you’re not deep into anime, Akihabara is a blast. Floors of gachapon (capsule toys), figure shops, and classic game bins turn adults into kids. Duck into a retro arcade to relearn rhythm games or swing at a pixelated boss. For veg travelers, look for Japanese curry houses that clearly label veggie options and ramen spots with soy-based broth—Akiba’s international crowd has pushed menus to be more inclusive.

It can get intense on weekends; go early, then café-hop. Tech tinkerers should browse the parts district south of the main drag; bins of resistors and LEDs sit beside tiny cafés.
    `,
    tags: { couples: false, families: true, solo: true, anime: true, budget: true, vegFriendly: true },
    didYouKnow: "“Gachapon” is named after the twist (gacha) and pop (pon) sounds of the machines. Limited runs sell out fast—grab it if you love it!"
  },

  /* ---------- KYOTO ---------- */
  {
    slug: "arashiyama-bamboo-grove",
    city: "Kyoto",
    name: "Arashiyama Bamboo Grove (Sunrise)",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Bamboo_Grove%2C_Arashiyama%2C_Kyoto%2C_Japan.jpg",
    mapUrl: "https://maps.google.com/?q=Arashiyama+Bamboo+Grove",
    summary: "Famous for a reason—go at dawn for a hushed emerald tunnel and river walks after.",
    body: `
Yes, it’s popular—and yes, it’s still magical if you go at sunrise. The bamboo towers create a natural cathedral that glows green in morning light. After your stroll, skip the main crowds by walking along the Katsura River or hopping the Sagano Scenic Railway for a short, lovely ride.

Breakfast? Kyoto shines for plant-based eaters: try yudōfu (tofu hot-pot), sesame tofu, or a small café set featuring local pickles and miso soup. Omnivores can add dashimaki tamago (rolled omelet) or grilled river fish. Bring cash—some traditional places are cash-only.

Families: wide paths and gentle gradients. Couples: wildly romantic at dawn. Solo: let the forest soundtrack do its thing.
    `,
    tags: { couples: true, families: true, solo: true, nature: true, photography: true, vegFriendly: true },
    didYouKnow: "Bamboo in Japanese is 竹 (take). You’ll see it in shrines and gardens as a symbol of resilience and purity."
  },
  {
    slug: "nishiki-market-kyoto",
    city: "Kyoto",
    name: "Nishiki Market",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nishiki_Market_Kyoto.jpg",
    mapUrl: "https://maps.google.com/?q=Nishiki+Market+Kyoto",
    summary: "Kyoto’s pantry: 400 m of pickles, tofu, mochi, tea, and knives—plus legit vegan snacks if you know where to look.",
    body: `
Nishiki is foodie heaven. Start with tsukemono (pickles), then sample sesame-forward croquettes, fresh yuba (tofu skin), and rice crackers hot off the grill. Vegan travelers: ask for dashi-free options (“だし無しでお願いします — dashi nashi de onegai shimasu”), because fish stock sneaks into many dishes. You’ll still find plenty: soy doughnuts, warabi mochi, and seasonal fruit skewers.

Knife nerds will geek out at artisan shops—staff often let you test the grip and balance. If you’re buying tea, ask to smell sencha vs. hojicha side-by-side and take home the one that sparks joy.
    `,
    tags: { couples: true, families: true, solo: true, foodies: true, vegFriendly: true },
    didYouKnow: "Kyoto’s tofu is famously silky thanks to local water minerals. Fresh yuba (tofu skin) is a local specialty."
  },

  /* ---------- OSAKA ---------- */
  {
    slug: "umeda-sky-building",
    city: "Osaka",
    name: "Umeda Sky Building (Sunset)",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Umeda_Sky_Building_2014.jpg",
    mapUrl: "https://maps.google.com/?q=Umeda+Sky+Building",
    summary: "Two towers joined by a floating garden observatory—Osaka’s best sunset panorama with neon to follow.",
    body: `
Ride the glass escalators into the sky and step onto a 360° rooftop ring with city, river, and mountain views. It’s spectacular at golden hour as Osaka warms up for the night. After the view, descend to the basement’s retro “Takimi Koji” alley done up like 1920s Osaka—fun for a snack crawl. Look for okonomiyaki with veggie-forward toppings; many places are happy to do cabbage + negi + mochi without fish flakes. Omnivores: pork or squid classics await.

Families get an easy “wow” moment; couples should book sunset; solo travelers can relax with a camera and then stroll to Umeda’s shopping arcades for a mellow evening.
    `,
    tags: { couples: true, families: true, solo: true, photography: true, vegFriendly: true },
    didYouKnow: "The “Floating Garden” is a poetic name for the open-air observatory—no actual garden, just skyline and breeze."
  },

  /* ---------- HOKKAIDŌ ---------- */
  {
    slug: "furano-lavender-fields",
    city: "Hokkaido",
    name: "Furano Lavender Fields (Summer)",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Lavender_fields%2C_Furano_%2848254611081%29.jpg",
    mapUrl: "https://maps.google.com/?q=Furano+Lavender",
    summary: "Purple horizons, mountain backdrops, soft-serve in every shade—Hokkaido’s summer daydream.",
    body: `
From late June to early August, Furano rolls out a purple carpet under wide-open skies. Hit the fields early to beat tour buses, then wander rows of color bands—lavender, poppies, and sunflowers—against the Daisetsuzan range. For plant-based travelers, Hokkaido’s veggie scene is growing: look for soup curry shops offering vegetable bases and dairy-free options. Lavender soft-serve is a thing here; try sorbet if you’re avoiding dairy.

Bring a hat, hydrate, and plan a photo break under the shade pavilions. Families love the gentle slopes; couples get effortless romance; solo travelers can pair Furano with nearby Biei’s rolling hills for a full, dreamy day.
    `,
    tags: { couples: true, families: true, solo: true, nature: true, photography: true, vegFriendly: true },
    didYouKnow: "Lavender came to Furano in the 1940s for perfume production; when demand fell, tourism saved the fields—now a Hokkaidō icon."
  },

  /* ---------- NARA ---------- */
  {
    slug: "nara-park-deer",
    city: "Nara",
    name: "Nara Park & Deer Lawns",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nara_Park_Deer.jpg",
    mapUrl: "https://maps.google.com/?q=Nara+Park",
    summary: "Laid-back lawns, deer bows, and picnic-perfect shade next to world-class temples.",
    body: `
Nara Park is where history and whimsy meet: grand temple rooftops peek over treetops while deer roam the lawns (yes, some bow back when you bow!). Go early for softer light and calmer paths; save time for Tōdai-ji’s Great Buddha nearby.

Veg & vegan: cafés around the park often do tofu plates, veggie curry, and mochi desserts. Be mindful with deer crackers—offer sparingly and keep paper out of reach.

Families love the open space; couples get easy strolls; solo travelers can slow the tempo and journal under maples.
    `,
    tags: { couples: true, families: true, solo: true, nature: true, history: true, photography: true, vegFriendly: true },
    didYouKnow: "Deer are considered messengers of the gods in Shintō tradition; Nara’s herd has been protected for centuries."
  },

  /* ---------- HIROSHIMA / MIYAJIMA ---------- */
  {
    slug: "hiroshima-peace-park",
    city: "Hiroshima",
    name: "Hiroshima Peace Memorial Park & Museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Hiroshima_Peace_Memorial_Park.jpg",
    mapUrl: "https://maps.google.com/?q=Hiroshima+Peace+Memorial+Park",
    summary: "A moving space of remembrance and reflection along willow-lined rivers.",
    body: `
Set aside unhurried time. The museum’s exhibits are powerful, and the park itself invites quiet walks between memorials and bridges. It’s somber, yes—and also a lesson in resilience and peace.

Veg & vegan: Hiroshima’s okonomiyaki scene has spots that will do all-veg grills—ask for no bonito flakes (katsuobushi) and a veggie-only sauce. Local lemon desserts are a bright follow-up.
    `,
    tags: { solo: true, couples: true, history: true, meditative: true, accessibility: true, vegFriendly: true },
    didYouKnow: "Paper cranes (orizuru) became a symbol of peace after Sadako Sasaki’s story; you’ll see them gathered in vivid colors around the park."
  },
  {
    slug: "miyajima-itsukushima-shrine",
    city: "Miyajima",
    name: "Miyajima: Itsukushima Shrine & Floating Torii",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Itsukushima_torii_2012.JPG",
    mapUrl: "https://maps.google.com/?q=Itsukushima+Shrine",
    summary: "Sea-bright vermilion gates, gentle forest trails, and deer peeking into your photos.",
    body: `
Time your visit for both tides if you can—at high tide the torii appears to float; at low tide you can walk on the sands to its base. Wander shrine corridors, then take the ropeway toward Mount Misen for breezy views and short hikes.

Veg & vegan: look for grilled oysters’ veg alternatives (shiitake skewers!), maple-leaf shaped momiji manju (some dairy-free), and simple udon with vegetable tempura.
    `,
    tags: { couples: true, families: true, solo: true, nature: true, photography: true, vegFriendly: true },
    didYouKnow: "Miyajima has been considered sacred for over a millennium; buildings were designed on stilts to keep the island ‘pure’."
  },
];
