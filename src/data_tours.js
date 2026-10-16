/* Stops for Charming Kyushu, Shikoku Splendours and Yamaguchi and San'in. Facts checked online in October 2026. */
Object.assign(STOPS, {
  /* ---------- Charming Kyushu ---------- */
  mameda: {
    name:'Hita Mameda-machi', jp:'日田 豆田町', art:'mameda', q:'Mameda-machi Hita',
    desc:'Hita was ruled directly by the shogun in the Edo period and grew rich as a trading town. Mameda-machi keeps that era alive, with dark wooden merchant houses, white walled storehouses, old sake and soy sauce makers, and small cafes.',
    facts:[['Entry','Free'],['Time needed','About 1 hour']],
    say:[['good','Quiet and photogenic, with far fewer crowds than Yufuin.'],['good','Shops sell local sake, soy sauce and Hita geta sandals.'],['good','In February and March, old houses show their hina doll collections.'],['tip','Small. An hour is plenty for most people.']],
    voice:'Welcome to Mameda-machi in Hita, an old trading town once ruled directly by the shogun. Stroll past the dark wooden merchant houses and look into the old sake and soy sauce shops.'
  },
  brewery: {
    name:'Sapporo Brewery Hita', jp:'サッポロビール九州日田工場', art:'brewery', q:'Sapporo Kyushu Hita Brewery',
    desc:'Sapporo’s Kyushu brewery sits in a forest at the edge of Hita, a town known for its clean spring water. A short free tour shows how the beer is made, and a tasting salon upstairs pours fresh draft beer.',
    facts:[['Free tour','No booking needed'],['Hours','10:00 to 17:00'],['Closed','Mondays and Tuesdays']],
    note:'Closed every Monday and Tuesday, and from 27 December 2026 to 16 February 2027 for renovation.',
    say:[['good','Beer here tastes very fresh, and a glass is cheap.'],['good','The forest grounds are calm and pretty.'],['tip','Most tour talks are in Japanese.'],['tip','Check the day: it is closed on Mondays and Tuesdays.']],
    voice:'This is the Sapporo brewery in Hita, a town famous for its clean water. Join the short tour, then try a glass of fresh draft beer upstairs.',
    src:[['Sapporo Breweries','https://www.sapporobeer.jp/english/brewery/kyushuhita/']]
  },
  kujuflower: {
    name:'Kuju Flower Park', jp:'くじゅう花公園', art:'kujuflower', q:'Kuju Flower Park',
    desc:'A big highland flower park at the foot of the Kuju mountains, with more than 500 kinds of flowers planted in wide coloured stripes. What is in bloom depends on the season: lavender in early summer, cosmos in autumn.',
    facts:[['Hours','8:30 to 17:30'],['Season','Closed in deep winter']],
    note:'The tour says this stop depends on the season. In deep winter the park is closed.',
    say:[['good','Rows of flowers with mountains behind make great photos.'],['good','Lavender season in early summer is the favourite time.'],['tip','Quieter between seasons, when fewer beds are in bloom.'],['tip','It is high up, so it can be cool and windy.']],
    voice:'Welcome to Kuju Flower Park, high on the slopes of the Kuju mountains. More than five hundred kinds of flowers grow here in long coloured stripes.',
    src:[['Visit Kyushu','https://www.visit-kyushu.com/en/see-and-do/spots/kuju-flower-park/']]
  },
  takachiho: {
    name:'Takachiho Gorge', jp:'高千穂峡', art:'takachiho', q:'Takachiho Gorge',
    desc:'A narrow gorge of tall basalt columns, cut by the Gokase River from old Aso lava. Manai Falls pours 17 metres into the green water, and you can row a small boat right up to it. A riverside path takes about 30 minutes.',
    facts:[['Walk','About 30 min'],['Time needed','1 to 1.5 hours']],
    say:[['good','Manai Falls from a rowboat is the classic photo.'],['good','The walking path along the cliffs is easy and very green.'],['tip','Boat queues are long on weekends and holidays. Book ahead if you can.'],['tip','The path has steps and can be slippery after rain.']],
    voice:'This is Takachiho Gorge. The tall cliffs are columns of old volcanic rock, and Manai Falls drops into the green river below. If you have time, rent a little rowboat.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e8050.html']]
  },
  amanoiwato: {
    name:'Amano Iwato Shrine', jp:'天岩戸神社', art:'amanoiwato', q:'Amano Iwato Shrine',
    desc:'In Japanese myth, the sun goddess Amaterasu hid in a cave here and the world went dark. The shrine faces that cave across the river. A short forest walk leads to Amano Yasukawara, a cave where the gods met, now filled with small stone piles left by visitors.',
    facts:[['Entry','Free'],['Time needed','45 min']],
    say:[['good','The cave of stacked stones feels magical.'],['good','A peaceful forest walk beside a clear river.'],['tip','Many steps down to the cave and back up.'],['tip','Ask at the shrine office for the short guided look at the sacred cave view.']],
    voice:'Welcome to Amano Iwato Shrine. Legend says the sun goddess hid in a cave here and the whole world went dark. Follow the forest path to the cave where the gods met, and add a small stone to the piles.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e8050.html']]
  },
  tsujun: {
    name:'Tsujun Bridge', jp:'通潤橋', art:'tsujun', q:'Tsujun Bridge',
    desc:'A stone arch aqueduct built in 1854 to carry water to dry farmland, now a National Treasure. On set days it shoots water out of both sides in two big white arcs.',
    facts:[['Built','1854'],['Status','National Treasure']],
    note:'The water show restarted on 13 August 2026 after the July earthquake. Walking on the bridge stays closed until at least March 2027. Water shows only run on set days.',
    say:[['good','The water spray is spectacular if you catch it.'],['good','A rare old stone bridge in a quiet green valley.'],['tip','Check the water show calendar before you go.'],['tip','Small stop. 20 to 30 minutes is enough.']],
    voice:'This is Tsujun Bridge, a stone aqueduct built in 1854. On special days it sprays water from both sides in two great white arcs.',
    src:[['Kumamoto Nichinichi','https://kumanichi.com/articles/2024571']]
  },
  udo: {
    name:'Udo Jingu Shrine', jp:'鵜戸神宮', art:'udo', q:'Udo Jingu',
    desc:'A bright red shrine built inside a sea cave on the cliffs of the Nichinan coast. From the terrace, throw small clay luck balls at a rope ring on a rock below. Land one and your wish comes true.',
    facts:[['Entry','Free'],['Hours','6:00 to 18:00'],['Time needed','1 hour']],
    say:[['good','A shrine inside a cave above crashing waves is unforgettable.'],['good','Throwing the luck balls is fun. Men throw with the left hand, women with the right.'],['tip','Steep stone steps down to the cave.'],['tip','Busy on weekends. Mornings are calmer.']],
    voice:'Welcome to Udo Jingu, a red shrine inside a sea cave. From the terrace, throw a clay luck ball at the rope ring on the rock below. If it lands inside, your wish will come true.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e8032.html']]
  },
  senganen: {
    name:'Sengan-en Garden', jp:'仙巌園', art:'senganen', q:'Sengan-en',
    desc:'The seaside garden of the Shimazu lords, built in 1658, uses the smoking Sakurajima volcano and Kagoshima Bay as its backdrop. Inside are the old family residence, a bamboo grove, and early industrial ruins listed by UNESCO.',
    facts:[['Entry','¥1,600'],['Hours','9:00 to 17:00'],['Time needed','1.5 hours']],
    say:[['good','The view of Sakurajima across the bay is stunning.'],['good','The old residence rooms are well kept and you can go inside.'],['tip','Entry is pricey compared to other gardens.'],['tip','Try jambo mochi, rice cakes on two sticks, at the tea shop.']],
    voice:'This is Sengan-en, the seaside garden of the Shimazu lords. Look across the bay at Sakurajima. On many days you will see it puffing smoke.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e4602.html']]
  },
  shiroyama: {
    name:'Shiroyama Park', jp:'城山公園', art:'shiroyama', q:'Shiroyama Observatory Kagoshima',
    desc:'A wooded hill 107 metres above central Kagoshima, with a lookout over the city, the bay and Sakurajima. It was the site of the last battle of the 1877 Satsuma Rebellion, where Saigo Takamori made his final stand.',
    facts:[['Entry','Free'],['Height','107 m'],['Time needed','30 min']],
    say:[['good','The best free view of Sakurajima and the city.'],['good','Lovely at sunset and after dark.'],['tip','Ash from Sakurajima can fall when the wind blows this way.'],['tip','Short stop. Allow about 30 minutes.']],
    voice:'Welcome to Shiroyama Park. From this lookout you can see all of Kagoshima, the bay, and the Sakurajima volcano. The last samurai battle of 1877 was fought on this hill.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e4607.html']]
  },
  kagairport: {
    name:'Kagoshima Airport', jp:'鹿児島空港', art:'airport', kind:'airport', q:'Kagoshima Airport',
    desc:'Kagoshima Airport sits inland, about 40 minutes by car from the city. Look for the free foot bath outside the terminal, fed by local hot spring water.',
    say:[['good','The free hot spring foot bath outside is a nice last treat.'],['tip','The international area is small, so do last minute shopping in the city.'],['tip','Allow about 40 to 60 minutes to drive from central Kagoshima.']],
    voice:'This is Kagoshima Airport, the end of the tour. If you have a few minutes, rest your feet in the free hot spring foot bath outside.'
  },
  'inn-miyazaki': {
    name:'Night in Miyazaki', jp:'宮崎', art:'inn', kind:'hotel', q:'Miyazaki city hotels',
    desc:'A warm, sunny city on the Pacific, with palm lined streets. Local dishes are chicken nanban, fried chicken with tartar sauce, and charcoal grilled jidori chicken.',
    say:[['good','Try chicken nanban, which started in Miyazaki.'],['good','Miyazaki mangoes are famous, and sweets with mango are everywhere.'],['tip','Nishitachi is the main area for dinner and drinks.']],
    voice:'Tonight you stay in Miyazaki, a sunny city by the Pacific. For dinner, try chicken nanban, fried chicken with tartar sauce.'
  },
  'inn-kagoshima': {
    name:'Night in Kagoshima', jp:'鹿児島', art:'inn', kind:'hotel', q:'Kagoshima city hotels',
    desc:'Kagoshima faces the active Sakurajima volcano across the bay. Dinner is included tonight. Local favourites are black pork shabu shabu and shirokuma, a big shaved ice dessert.',
    say:[['good','Try kurobuta, Kagoshima black pork.'],['good','Shirokuma shaved ice from Tenmonkan is a local classic.'],['tip','Tenmonkan is the lively shopping and dining street.']],
    voice:'Tonight you stay in Kagoshima, facing the Sakurajima volcano. Dinner is included. For dessert, look for shirokuma, a giant shaved ice.'
  },

  /* ---------- Shikoku Splendours ---------- */
  kix: {
    name:'Kansai Airport', jp:'関西国際空港', art:'airport', kind:'airport', q:'Kansai International Airport',
    desc:'Osaka’s main international airport sits on an artificial island in Osaka Bay, linked to the land by a long bridge.',
    say:[['good','Big duty free area for last minute shopping.'],['tip','Allow about 1 hour from central Osaka by car.'],['tip','Arrive 3 hours early for international flights.']],
    voice:'Welcome to Kansai International Airport, built on its own island in Osaka Bay.'
  },
  akashi: {
    name:'Akashi Bridge and Awaji Yumebutai', jp:'明石海峡大橋・淡路夢舞台', art:'akashi', q:'Awaji Yumebutai',
    desc:'You cross the Akashi Kaikyo Bridge, almost 4 km long and one of the longest suspension bridges in the world, onto Awaji Island. Awaji Yumebutai is a garden and conference centre designed by architect Tadao Ando, with 100 stepped flower beds.',
    facts:[['Bridge','Almost 4 km'],['Time needed','45 min']],
    say:[['good','Crossing the giant bridge is a highlight on its own.'],['good','Fans of Tadao Ando love the concrete terraces and water features.'],['tip','The flower beds are best in spring and early summer.']],
    voice:'You have crossed the Akashi Kaikyo Bridge, almost four kilometres long, onto Awaji Island. Awaji Yumebutai was designed by the famous architect Tadao Ando, with a hundred stepped flower beds.',
    src:[['Japan National Tourism Organization','https://www.japan.travel/en/destinations/kansai/hyogo/awaji-island/']]
  },
  naruto: {
    name:'Naruto Whirlpools', jp:'鳴門の渦潮', art:'naruto', q:'Uzu no Michi Naruto',
    desc:'Strong tides rush through the narrow Naruto Strait and create whirlpools up to about 20 metres across. Watch from the glass floor walkway under the Onaruto Bridge, or from a sightseeing boat.',
    facts:[['Walkway','¥510'],['Boats','From ¥1,600'],['Time needed','1 hour']],
    say:[['good','Seeing big whirlpools from a boat is thrilling.'],['good','The glass floor walkway gives a scary look straight down.'],['tip','Whirlpools are only big at certain tide times. Check the tide table.'],['tip','On calm days or at the wrong time, there may be little to see.']],
    voice:'This is the Naruto Strait. Strong tides rush through here and twist into whirlpools as wide as twenty metres. Look down through the glass floor, or ride a boat right next to them.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e7852.html']]
  },
  ritsurin: {
    name:'Ritsurin Garden', jp:'栗林公園', art:'ritsurin', q:'Ritsurin Garden',
    desc:'One of Japan’s finest strolling gardens, built by the Matsudaira lords over more than a century. It covers 75 hectares with six ponds, shaped pines and a wooded hill behind. Have tea at the Kikugetsu-tei teahouse over the water.',
    facts:[['Size','75 hectares'],['Time needed','1.5 hours']],
    say:[['good','Many say it is as beautiful as the more famous gardens in Kanazawa and Okayama.'],['good','Tea and a sweet at the lakeside teahouse is a highlight.'],['good','Small boat rides on the south pond.'],['tip','It is big. Wear comfortable shoes.']],
    voice:'Welcome to Ritsurin Garden, one of the most beautiful gardens in Japan. Walk past the carefully shaped pine trees, and stop for green tea at the teahouse over the pond.',
    src:[['Kagawa Prefecture','https://www.my-kagawa.jp/omotenashi/tourguide03en.html']]
  },
  udon: {
    name:'Udon Making with Lunch', jp:'讃岐うどん作り', art:'udon', q:'Nakano Udon School Kotohira',
    desc:'Kagawa is Japan’s udon capital, famous for firm, chewy Sanuki udon. You knead, roll and cut the noodles yourself, then eat them for lunch. Lunch is included today.',
    facts:[['Lunch','Included'],['Time needed','About 1.5 hours']],
    say:[['good','Fun and messy, and the noodles taste great.'],['good','Stamping on the dough to music is a favourite moment.'],['tip','Udon shops in Kagawa are cheap, so try a few more bowls.']],
    voice:'Kagawa is famous across Japan for Sanuki udon. Today you make your own noodles, kneading, rolling and cutting them, and then eat them for lunch.'
  },
  konpira: {
    name:'Kotohira-gu Shrine', jp:'金刀比羅宮', art:'konpira', q:'Kotohira-gu',
    desc:'Known as Konpira-san, this is Shikoku’s most popular shrine and the guardian of sailors and sea travel. A stone stairway climbs 785 steps to the main hall, past lanterns and shops, with 1,368 steps to the inner shrine.',
    facts:[['Steps','785 to the main hall'],['Entry','Free'],['Time needed','2 hours']],
    say:[['good','The view from the main hall over the plain is worth the climb.'],['good','Shops on the lower steps sell sweets and udon.'],['tip','The climb is tiring, especially in summer. Take water.'],['tip','Most people stop at the main hall and skip the inner shrine.']],
    voice:'This is Kotohira-gu, the guardian shrine of sailors. There are seven hundred and eighty five stone steps to the main hall. Take your time, and enjoy the view from the top.',
    src:[['Kagawa Prefecture','https://www.my-kagawa.jp/omotenashi/tourguide03en.html']]
  },
  ryoma: {
    name:'Ryoma Statue at Katsurahama', jp:'桂浜 坂本龍馬像', art:'ryoma', q:'Sakamoto Ryoma statue Katsurahama',
    desc:'A tall bronze statue of Sakamoto Ryoma, a Kochi samurai who helped bring about the Meiji Restoration, stands on a hill looking out to the Pacific. Katsurahama beach below is a curved bay of sand and rocks.',
    facts:[['Entry','Free'],['Time needed','45 min']],
    say:[['good','The statue and the sea view are very photogenic.'],['good','Ryoma is a hero in Kochi, and the museum nearby tells his story.'],['tip','Swimming is not allowed. The waves are strong.']],
    voice:'Welcome to Katsurahama. The bronze statue is Sakamoto Ryoma, a samurai from Kochi who helped open Japan to the modern world. He looks out over the Pacific Ocean.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e5602.html']]
  },
  hirome: {
    name:'Hirome Ichiba', jp:'ひろめ市場', art:'hirome', q:'Hirome Ichiba Kochi',
    desc:'A busy indoor food hall with about 60 stalls and shared tables. The star is katsuo no tataki, bonito seared over a fierce straw fire and served thick with salt or ponzu.',
    facts:[['Time needed','1 hour'],['Must try','Katsuo no tataki']],
    say:[['good','Watching the bonito flamed over burning straw is a show.'],['good','Lively, local and full of choice.'],['tip','Finding a seat at lunch can be hard.'],['tip','Many stalls are cash only.']],
    voice:'This is Hirome Ichiba, Kochi’s favourite food hall. Order katsuo no tataki, bonito seared over a roaring straw fire.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e5600.html']]
  },
  ashizuri: {
    name:'Cape Ashizuri', jp:'足摺岬', art:'ashizuri', q:'Cape Ashizuri',
    desc:'The southern tip of Shikoku, with granite cliffs, crashing Pacific waves and a white lighthouse first lit in 1914. Wild camellias cover the cape and bloom in winter. Temple 38 of the Shikoku pilgrimage is nearby.',
    facts:[['Lighthouse','1914'],['Time needed','1 hour']],
    say:[['good','Dramatic cliffs and wide ocean views.'],['good','The walking path through the camellia tunnel is pretty.'],['tip','Very far from anywhere. Today is a long drive, about 3 hours from Kochi.'],['tip','Windy on the cliffs.']],
    voice:'Welcome to Cape Ashizuri, the southern tip of Shikoku. The white lighthouse has stood above these cliffs since 1914. Listen to the Pacific waves crashing below.',
    src:[['Wikipedia','https://en.wikipedia.org/wiki/Cape_Ashizuri']]
  },
  matsuyama: {
    name:'Matsuyama Castle', jp:'松山城', art:'matsuyama', q:'Matsuyama Castle',
    desc:'One of only twelve castles in Japan whose keep survives from the feudal era. It sits on top of Mt Katsuyama in the city centre. Ride up by ropeway or open chairlift, then climb into the wooden keep.',
    facts:[['Original keep','One of 12'],['Time needed','1.5 hours']],
    say:[['good','The chairlift ride up is fun and scenic.'],['good','Great views over the city to the Seto Inland Sea.'],['tip','Steep wooden stairs inside the keep. Shoes come off.'],['tip','Still a short uphill walk after the lift.']],
    voice:'This is Matsuyama Castle, one of only twelve castles in Japan whose original keep still stands. Ride the chairlift up, and look out over the city to the Seto Inland Sea.',
    src:[['Wikipedia','https://en.wikipedia.org/wiki/Matsuyama_Castle_Ropeway']]
  },
  dogo: {
    name:'Dogo Onsen', jp:'道後温泉', art:'dogo', q:'Dogo Onsen Honkan',
    desc:'One of Japan’s oldest hot spring towns. The wooden Honkan bathhouse dates from 1894, with a white heron on its roof, and is said to have inspired the bathhouse in Spirited Away. A covered shopping street leads to it.',
    facts:[['Honkan built','1894'],['Bath from','¥700'],['Hours','6:00 to 23:00']],
    say:[['good','Bathing in the old Honkan feels like stepping back in time.'],['good','The Botchan clock near the station puts on a little show every hour.'],['good','Free foot bath beside the clock.'],['tip','Busy in the evening. Early morning is quieter.']],
    voice:'Welcome to Dogo Onsen. The wooden Honkan bathhouse was built in 1894, and many say it inspired the film Spirited Away. Look for the white heron on the roof.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e5502.html']]
  },
  towel: {
    name:'Imabari Towel Museum', jp:'タオル美術館', art:'towel', q:'Towel Museum Ichihiro',
    desc:'Imabari makes more towels than anywhere in Japan, and its towels are known for being soft and quick to dry. This museum shows how towels are woven, with towel art galleries, a garden and a large shop.',
    facts:[['Time needed','1 hour']],
    say:[['good','The shop has great quality towels at good prices.'],['good','Pretty European style garden.'],['tip','More of a big shop than a museum for some visitors.']],
    voice:'Imabari makes more towels than anywhere else in Japan. At the Towel Museum, see how they are woven, and pick up some soft Imabari towels to take home.',
    src:[['Wikidata','https://www.wikidata.org/wiki/Q11315898']]
  },
  kurashiki: {
    name:'Kurashiki Bikan Quarter', jp:'倉敷美観地区', art:'kurashiki', q:'Kurashiki Bikan Historical Quarter',
    desc:'An old canal town from the Edo period, once a rice trading centre. Willows lean over the canal, and white walled storehouses now hold cafes, craft shops and the Ohara Museum, one of Japan’s oldest Western art museums.',
    facts:[['Entry','Free to walk'],['Time needed','1.5 hours']],
    say:[['good','The canal with willows is one of the prettiest streets in Japan.'],['good','A short boat ride on the canal is relaxing.'],['good','Great for local denim and peach sweets.'],['tip','Shops close early, around 17:00.']],
    voice:'Welcome to Kurashiki. Willows hang over the old canal, and the white storehouses once held rice. Today they are cafes and craft shops.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e5750.html']]
  },
  kuraoutlet: {
    name:'Mitsui Outlet Park Kurashiki', jp:'三井アウトレットパーク倉敷', art:'tosu', q:'Mitsui Outlet Park Kurashiki',
    desc:'An outlet mall right beside Kurashiki Station, with Japanese and international brands and a food court.',
    facts:[['Tax free','Bring your passport'],['Time needed','1.5 hours']],
    say:[['good','Easy to reach, right next to the station.'],['good','Good for sports and outdoor brands.'],['tip','Smaller than the big outlets near Tokyo and Osaka.']],
    voice:'This is Mitsui Outlet Park, right beside Kurashiki Station. Remember your passport for tax free shopping.'
  },
  osakajo: {
    name:'Osaka Castle', jp:'大阪城', art:'osakajo', q:'Osaka Castle',
    desc:'Toyotomi Hideyoshi built the first castle here in the 1580s to rule a newly united Japan. Today’s keep is a 1931 rebuild with a museum inside, surrounded by huge stone walls, moats and a big park.',
    facts:[['Stop','Photo stop only'],['Time needed','30 min']],
    say:[['good','The keep with its gold trim looks best from the park below.'],['good','The giant stone walls are impressive up close.'],['tip','Today is a photo stop only, so there is no time to go inside.']],
    voice:'This is Osaka Castle. The great lord Toyotomi Hideyoshi built the first castle here more than four hundred years ago. Look for the gold tigers and fish on the roof.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e2157.html']]
  },
  kuromon: {
    name:'Kuromon Market', jp:'黒門市場', art:'kuromon', q:'Kuromon Market Osaka',
    desc:'Osaka’s kitchen since the Edo period, a 600 metre covered market with about 150 shops. Try grilled crab, scallops, sea urchin, wagyu skewers and fresh fruit in small portions.',
    facts:[['Shops','About 150'],['Hours','About 8:00 to 18:00'],['Time needed','1 hour']],
    say:[['good','Lots of seafood to try on the spot.'],['tip','Prices are high and aimed at tourists.'],['tip','Very crowded. Please don’t eat while walking.'],['tip','Many shops close on Sundays.']],
    voice:'Welcome to Kuromon Market, Osaka’s kitchen. Try grilled scallops, sea urchin, or a wagyu skewer.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e4031.html']]
  },
  dotonbori: {
    name:'Dotonbori', jp:'道頓堀', art:'dotonbori', q:'Dotonbori Osaka',
    desc:'Osaka’s famous canal street of giant neon signs, moving crabs and food stalls. Try takoyaki octopus balls and okonomiyaki, then join the crowds on Ebisu Bridge for photos.',
    facts:[['Best time','After dark'],['Time needed','2 hours']],
    say:[['good','The neon at night is spectacular.'],['good','Takoyaki and okonomiyaki are everywhere.'],['tip','Very crowded, especially on weekends.'],['tip','Watch your bags on busy bridges.']],
    voice:'Welcome to Dotonbori, the bright heart of Osaka. Eat takoyaki, octopus balls, and take your photo with the giant neon signs.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e4001.html']]
  },
  'inn-takamatsu': {
    name:'Night in Takamatsu', jp:'高松', art:'inn', kind:'hotel', q:'Takamatsu hotels',
    desc:'The port city of Kagawa and gateway to the art islands of the Seto Inland Sea. Udon shops are everywhere, and the long covered shopping arcades are good for an evening walk.',
    say:[['good','Try honetsukidori, a spicy roast chicken leg from nearby Marugame.'],['good','The covered arcades are among the longest in Japan.'],['tip','Udon shops close early. Many shut by mid afternoon.']],
    voice:'Tonight you stay in Takamatsu. Try one more bowl of udon, or honetsukidori, a spicy roast chicken leg.'
  },
  'inn-shimanto': {
    name:'Night in Shimanto', jp:'四万十', art:'inn', kind:'hotel', q:'Shimanto city hotels',
    desc:'Shimanto sits beside the Shimanto River, often called Japan’s last clear river. Hotels here are simple, and evenings are quiet.',
    say:[['good','River eel and river prawns are the local treats.'],['tip','Very rural, with few restaurants open late.'],['tip','Today is a long drive, so expect to arrive tired.']],
    voice:'Tonight you stay in Shimanto, beside one of the clearest rivers in Japan. Rest well after today’s long drive.'
  },
  'inn-dogo': {
    name:'Night in Dogo', jp:'道後', art:'inn', kind:'hotel', q:'Dogo Onsen hotels',
    desc:'Stay in the hot spring town. Walk the arcade in a yukata robe, soak in the old bathhouse, and try tai meshi, rice with sea bream.',
    say:[['good','Walking around in a yukata at night is fun.'],['good','Try tai meshi, Ehime’s sea bream rice.'],['tip','Many hotels lend yukata. Ask at the front desk.']],
    voice:'Tonight you stay in Dogo Onsen. Put on a yukata, take a soak, and try tai meshi, sea bream rice.'
  },
  'inn-kurashiki': {
    name:'Night in Kurashiki', jp:'倉敷', art:'inn', kind:'hotel', q:'Kurashiki hotels',
    desc:'Kurashiki’s canal is lit up softly after dark and is very quiet once the day visitors leave.',
    say:[['good','The canal is lovely at night.'],['good','Try Okayama white peaches or muscat grapes in season.'],['tip','Most shops close early, so have dinner near the station.']],
    voice:'Tonight you stay in Kurashiki. Take an evening walk along the lit canal.'
  },
  'inn-osaka': {
    name:'Night in Osaka', jp:'大阪', art:'inn', kind:'hotel', q:'Namba hotels Osaka',
    desc:'Japan’s great food city. Locals have a saying, kuidaore: eat until you drop. Namba and Shinsaibashi are full of shops and restaurants until late.',
    say:[['good','Try kushikatsu, deep fried skewers. No double dipping in the sauce.'],['good','Shinsaibashi arcade is good for shopping.'],['tip','Very busy at night, especially near Dotonbori.']],
    voice:'Tonight you stay in Osaka, Japan’s kitchen. Try kushikatsu, but remember, no double dipping in the sauce.'
  },

  /* ---------- Yamaguchi and San'in ---------- */
  sarakura: {
    name:'Mt Sarakura', jp:'皿倉山', art:'sarakura', q:'Sarakurayama Observatory',
    desc:'A 622 metre mountain above Kitakyushu, reached by cable car and then a small slope car. Its night view is ranked among Japan’s new top three, with Nagasaki’s Mt Inasa and Sapporo’s Mt Moiwa.',
    facts:[['Height','622 m'],['Return ticket','¥1,230'],['Closed','Tuesdays']],
    say:[['good','Huge view over Kitakyushu and the sea.'],['good','The cable car and slope car are fun rides.'],['tip','Closed on Tuesdays, except holidays.'],['tip','Cold and windy at the top. Bring a jacket.']],
    voice:'This is Mount Sarakura, six hundred and twenty two metres above Kitakyushu. Ride the cable car up for one of the best views in Japan.',
    src:[['Go Local Travel Japan','https://www.gltjp.com/en/directory/item/12873/']]
  },
  karato: {
    name:'Karato Market', jp:'唐戸市場', art:'karato', q:'Karato Market Shimonoseki',
    desc:'Shimonoseki’s fish market on the Kanmon Strait, famous for fugu, the pufferfish. On Fridays, weekends and holidays, stalls sell sushi by the piece that you eat outside by the water.',
    facts:[['Hours','About 5:00 to 15:00'],['Sushi stalls','Fri to Sun and holidays']],
    say:[['good','Fresh, cheap sushi by the piece on weekends.'],['good','Try fugu, Shimonoseki’s pride.'],['tip','Closes by 15:00, so a late visit means few stalls.'],['tip','On weekdays there are no sushi stalls.']],
    voice:'Welcome to Karato Market in Shimonoseki, the home of fugu, the pufferfish. On weekends, pick sushi by the piece and eat it by the water.',
    src:[['Go Local Travel Japan','https://www.gltjp.com/en/directory/item/14144']]
  },
  bishanohana: {
    name:'Bishanohana', jp:'毘沙ノ鼻', art:'bishanohana', q:'Bishanohana Shimonoseki',
    desc:'The westernmost tip of Honshu, Japan’s main island. A short path leads out along the cliffs to a lookout over the Sea of Japan.',
    facts:[['Entry','Free'],['Time needed','30 min']],
    say:[['good','Quiet, with wide open sea views.'],['good','Great at sunset.'],['tip','Remote. You need a car.']],
    voice:'You are standing at the westernmost point of Honshu, Japan’s main island. Look out over the Sea of Japan.'
  },
  tsunoshima: {
    name:'Tsunoshima Bridge and Lighthouse', jp:'角島大橋・角島灯台', art:'tsunoshima', q:'Tsunoshima Ohashi Bridge',
    desc:'A 1,780 metre bridge, opened in 2000, runs low over emerald green sea to Tsunoshima island. On the island, a granite lighthouse from 1876 can be climbed for views of both coasts.',
    facts:[['Bridge','1,780 m'],['Toll','Free'],['Time needed','1.5 hours']],
    say:[['good','The sea colour on a sunny day is unreal.'],['good','One of the most beautiful drives in Japan.'],['tip','Best in sunshine. On grey days the water looks dull.'],['tip','Busy on summer weekends.']],
    voice:'This is the Tsunoshima Bridge, almost two kilometres long over emerald green water. On the island, an old granite lighthouse looks out to sea.',
    src:[['Setouchi Trip','https://setouchitrip.com/en/travel-directory/853']]
  },
  ushirobata: {
    name:'Higashi Ushirobata Rice Terraces', jp:'東後畑棚田', art:'ushirobata', q:'Higashi Ushirobata Rice Terraces',
    desc:'Stepped rice paddies run down the hillside to the Sea of Japan. From mid May to early August, the flooded fields reflect the sunset while squid fishing boats light up the sea.',
    facts:[['Entry','Free'],['Best','Mid May to early Aug']],
    say:[['good','The sunset with fishing lights is a famous photo.'],['tip','The fields are private farmland. Stay on the paths.'],['tip','Buses can’t reach the lookout. Arrive by car.']],
    voice:'These are the Higashi Ushirobata rice terraces, stepping down to the Sea of Japan. In early summer, fishing boat lights glow on the water at sunset.',
    src:[['Nagato Tourism','https://nanavi.jp/en/sightseeing/tanada/']]
  },
  motonosumi: {
    name:'Motonosumi Shrine', jp:'元乃隅神社', art:'motonosumi', q:'Motonosumi Shrine',
    desc:'More than 100 red torii gates wind down a green cliff to the blue Sea of Japan. The shrine was only founded in 1955, but it became famous through photos.',
    facts:[['Entry','Free'],['Time needed','30 to 60 min']],
    note:'The torii gates are closed for repairs until further notice, so you can’t walk through them. The shrine also closes on many weekends from March to November.',
    say:[['good','Red gates, green grass and blue sea make an amazing photo.'],['tip','You can only view the gates from outside during repairs.'],['tip','Check the open days before going.']],
    voice:'This is Motonosumi Shrine. More than one hundred red torii gates wind down the cliff to the sea. The gates are being repaired, so enjoy the view from the side.',
    src:[['japan-guide.com','https://www.japan-guide.com/destinations/motonosumi-shrine/']]
  },
  akiyoshi: {
    name:'Akiyoshido Cave', jp:'秋芳洞', art:'akiyoshi', q:'Akiyoshido Cave',
    desc:'One of Japan’s largest limestone caves, about 9 km long with 1 km open to visitors. Highlights are giant columns and Hyakumaizara, terraces of hundreds of little rock pools. It stays around 17°C all year.',
    facts:[['Entry','¥1,300'],['Hours','8:30 to 17:30'],['Temperature','17°C']],
    say:[['good','Huge and impressive, with well lit paths.'],['good','Cool relief on a hot summer day.'],['tip','Wet floors in places. Wear good shoes.'],['tip','You exit at a different entrance, so plan your pickup.']],
    voice:'Welcome to Akiyoshido, one of the largest caves in Japan. It stays seventeen degrees all year. Look for the hundred stepped rock pools.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e6130.html']]
  },
  tsuwano: {
    name:'Tsuwano Tonomachi', jp:'津和野 殿町通り', art:'tsuwano', q:'Tsuwano Tonomachi Street',
    desc:'Often called the Little Kyoto of San’in, a castle town in a quiet valley. Big colourful carp swim in the canals beside white walled samurai houses, and an old Catholic church stands on the street.',
    facts:[['Entry','Free to walk'],['Time needed','1 hour']],
    say:[['good','The carp filled canals are charming.'],['good','Peaceful and uncrowded.'],['good','Taikodani Inari Shrine above has a tunnel of red torii.'],['tip','Small town. Shops close early.']],
    voice:'Welcome to Tsuwano, the Little Kyoto of San’in. Look down at the big colourful carp swimming in the canals beside the old samurai houses.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e5875.html']]
  },
  winery: {
    name:'Shimane Winery', jp:'島根ワイナリー', art:'winery', q:'Shimane Winery',
    desc:'A European style winery near Izumo Taisha. Free tastings of about 10 local wines, a factory tour and a barbecue house serving Shimane wagyu.',
    facts:[['Tasting','Free'],['Hours','10:00 to 17:00']],
    say:[['good','Generous free tastings, including sweet local wines.'],['good','The grape juice is great for non drinkers.'],['tip','Premium wines cost extra to taste.']],
    voice:'This is Shimane Winery. Try a free tasting of local wines, or the fresh grape juice.',
    src:[['Go Local Travel Japan','https://www.gltjp.com/en/directory/item/15108/']]
  },
  izumo: {
    name:'Izumo Taisha', jp:'出雲大社', art:'izumo', q:'Izumo Taisha',
    desc:'One of Japan’s oldest and most important shrines, home of the god of good relationships and marriage. A giant twisted straw rope hangs over the Kagura-den hall. Here you clap four times instead of two.',
    facts:[['Entry','Free'],['Treasure Hall','¥300'],['Time needed','1 hour']],
    say:[['good','The huge sacred rope is a must see.'],['good','A deeply calm and spiritual place.'],['tip','Very busy in November, when gods from all Japan are said to gather here.']],
    voice:'Welcome to Izumo Taisha, home of the god of good relationships. Look up at the giant straw rope. Remember to bow twice, clap four times, and bow once more.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e5804.html']]
  },
  inasabeach: {
    name:'Inasa no Hama Beach', jp:'稲佐の浜', art:'inasabeach', q:'Inasa no Hama',
    desc:'A sandy beach near Izumo Taisha, where myth says the gods arrive each November. Bentenjima, a rock with a tiny shrine on top, stands at the water’s edge.',
    facts:[['Entry','Free'],['Time needed','20 min']],
    say:[['good','Stunning at sunset, with the shrine rock in silhouette.'],['good','Quiet and very photogenic.'],['tip','Photo stop only on this tour.']],
    voice:'This is Inasa no Hama, where the gods are said to arrive each November. The rock with the little shrine is Bentenjima.'
  },
  yushien: {
    name:'Yushien Garden', jp:'由志園', art:'yushien', q:'Yushien Garden',
    desc:'A 40,000 square metre garden on Daikon Island, famous for peonies. A peony house blooms all year, and in late April to early May about 30,000 blossoms float on the pond.',
    facts:[['Entry','¥800 to ¥1,800'],['Hours','10:00 to 17:00']],
    say:[['good','Peonies all year, even in winter.'],['good','Ponds, waterfalls and lanterns are well kept.'],['tip','Cash only.'],['tip','Price changes by season.']],
    voice:'Welcome to Yushien, the peony garden of Daikon Island. Peonies bloom here all year. In spring, thousands float on the pond.',
    src:[['Go Local Travel Japan','https://www.gltjp.com/en/directory/item/16492/']]
  },
  eshima: {
    name:'Eshima Ohashi Bridge', jp:'江島大橋', art:'eshima', q:'Eshima Ohashi Bridge',
    desc:'A tall bridge over Lake Nakaumi, so steep that it looks like a wall from certain angles. It became famous in a car advertisement. You pass over it today.',
    facts:[['Stop','Drive past']],
    say:[['good','It looks impossibly steep from a distance.'],['tip','The famous view needs a zoom lens from far away.']],
    voice:'Ahead is Eshima Ohashi, a bridge so steep that from a distance it looks like a wall. Hold on.'
  },
  mizuki: {
    name:'Mizuki Shigeru Road', jp:'水木しげるロード', art:'mizuki', q:'Mizuki Shigeru Road',
    desc:'An 800 metre street in Sakaiminato lined with 177 bronze statues of yokai, the spirits and monsters from Shigeru Mizuki’s famous GeGeGe no Kitaro manga. It ends at his museum.',
    facts:[['Statues','177'],['Entry','Free to walk']],
    say:[['good','Fun to spot all the little statues.'],['good','At night, shadow yokai are projected on the street until 22:00.'],['tip','Most fun if you know the manga.']],
    voice:'Welcome to Mizuki Shigeru Road. One hundred and seventy seven bronze yokai spirits line the street. How many can you find?',
    src:[['Go Local Travel Japan','https://cdn.gltjp.com/en/directory/item/12141']]
  },
  manga: {
    name:'Gosho Aoyama Manga Factory', jp:'青山剛昌ふるさと館', art:'manga', q:'Gosho Aoyama Manga Factory',
    desc:'A museum in the hometown of Gosho Aoyama, creator of Detective Conan. See his original drawings and desk, and spot Conan photo points around Conan Town, including the Conan Bridge.',
    facts:[['Time needed','1 hour']],
    say:[['good','A must for Detective Conan fans.'],['good','The whole town is decorated with Conan art.'],['tip','Less exciting if you don’t know the series.']],
    voice:'This is the Gosho Aoyama Manga Factory, in the hometown of the creator of Detective Conan. Look for his original drawings, then find the Conan Bridge.',
    src:[['Anime Tourism 88','https://animetourism88.com/en/places/gosho-aoyama-manga-factory/']]
  },
  tottori: {
    name:'Tottori Sand Dunes', jp:'鳥取砂丘', art:'tottori', q:'Tottori Sand Dunes',
    desc:'Japan’s most famous dunes run 16 km along the Sea of Japan and rise up to about 50 metres. Ride a camel, try sandboarding, then visit the Sand Museum, where artists build giant sculptures from sand.',
    facts:[['Sand Museum','¥800'],['Camel ride','From ¥1,600']],
    note:'The 2026 Sand Museum show is about Spain and runs until 3 January 2027. From 21 November to 6 December 2026 there is also a projection show after dark.',
    say:[['good','Climbing the big dune to see the sea is a highlight.'],['good','The sand sculptures are amazing.'],['tip','Sand gets everywhere. Wear old shoes.'],['tip','Hot in summer and windy in winter.']],
    voice:'Welcome to the Tottori Sand Dunes. Climb to the top to see the Sea of Japan, then visit the Sand Museum, where this year’s sculptures celebrate Spain.',
    src:[['japan-guide.com','https://www.japan-guide.com/e/e8102.html'],['TripZilla','https://www.tripzilla.com/tottori-sand-museum-spain-exhibition-2026/27773']]
  },
  arima: {
    name:'Arima Onsen', jp:'有馬温泉', art:'arima', q:'Arima Onsen',
    desc:'One of Japan’s oldest hot spring towns, in the hills behind Kobe. It has two kinds of water: kinsen, rusty gold and salty, and ginsen, clear. Walk the sloping old streets and try the public baths Kin no Yu and Gin no Yu.',
    facts:[['Time needed','1.5 hours']],
    say:[['good','The gold coloured water is unique.'],['good','Pretty old streets with snacks like tansan senbei crackers.'],['tip','Steep, narrow streets.'],['tip','Busy at weekends.']],
    voice:'This is Arima Onsen, one of the oldest hot spring towns in Japan. Look for the golden kinsen water, and try a tansan senbei cracker.'
  },
  'inn-kitakyushu': {
    name:'Night in Kitakyushu', jp:'北九州', art:'inn', kind:'hotel', q:'Kokura hotels',
    desc:'You stay around Kokura, Kitakyushu’s centre, near a rebuilt castle and the Tanga Market area.',
    say:[['good','Try yaki udon, which started in Kokura.'],['good','Kokura Castle is lit up at night.'],['tip','Restaurants are near Kokura Station.']],
    voice:'Tonight you stay in Kitakyushu. Try yaki udon, stir fried noodles, which started here in Kokura.'
  },
  'inn-yamaguchi': {
    name:'Night in Yamaguchi', jp:'湯田温泉', art:'inn', kind:'hotel', q:'Yuda Onsen hotels',
    desc:'Tonight is in the Yuda Onsen hot spring area of Yamaguchi city. Legend says a white fox found the spring, and you will see fox statues around town.',
    say:[['good','Free foot baths around town.'],['good','Look for the big white fox statue.'],['tip','Quiet at night.']],
    voice:'Tonight you stay at Yuda Onsen. Legend says a white fox found this hot spring. Look for fox statues around town.'
  },
  'inn-hagi': {
    name:'Night in Hagi', jp:'萩', art:'inn', kind:'hotel', q:'Hagi hotels',
    desc:'An old castle town on the Sea of Japan, known for Hagi ware pottery and well kept samurai streets.',
    say:[['good','Hagi ware pottery makes a good souvenir.'],['good','Try local squid and fish.'],['tip','Small town. Restaurants close early.']],
    voice:'Tonight you stay in Hagi, an old castle town famous for its gentle Hagi pottery.'
  },
  'inn-shimane': {
    name:'Night in Shimane', jp:'松江', art:'inn', kind:'hotel', q:'Matsue hotels',
    desc:'Most likely Matsue, the City of Water, beside Lake Shinji. The lake sunset is famous, and Matsue Castle is one of Japan’s twelve original keeps.',
    say:[['good','Sunset over Lake Shinji is beautiful.'],['good','Try shijimi clam soup, a Lake Shinji speciality.'],['tip','The hotel city can change in peak season.']],
    voice:'Tonight you stay in Shimane. If you are in Matsue, watch the sunset over Lake Shinji.'
  },
  'inn-tottori': {
    name:'Night in Tottori', jp:'鳥取', art:'inn', kind:'hotel', q:'Tottori city hotels',
    desc:'Tottori is Japan’s smallest prefecture by population. In winter, snow crab is the big treat.',
    say:[['good','Snow crab season runs from November to March.'],['good','Tottori pears are famous.'],['tip','Quiet at night.']],
    voice:'Tonight you stay in Tottori. If it is crab season, try the famous snow crab.'
  }
});

/* Northern Kyushu Night in Aso, Beppu and Kumamoto are reused by Charming Kyushu. */

const CK_DAYS = [
  {title:'Arrive in Fukuoka', night:'Fukuoka', meals:{b:0,l:0,d:0}, start:{id:'airport', lat:33.5859, lon:130.4508},
   nodes:[{id:'inn-fukuoka', lat:33.5897, lon:130.4207}]},
  {title:'Fukuoka to Beppu', night:'Beppu', meals:{b:1,l:0,d:1},
   nodes:[
    {id:'tosu', lat:33.3958, lon:130.5373},
    {id:'mameda', lat:33.3228, lon:130.9405},
    {id:'brewery', lat:33.3040, lon:130.8930},
    {id:'beppu', lat:33.3240, lon:131.4760, via:[[33.27,131.15]]},
    {id:'inn-beppu', lat:33.2840, lon:131.4970}
   ]},
  {title:'Beppu to Mt Aso', night:'Aso', meals:{b:1,l:0,d:1},
   nodes:[
    {id:'yufuin', lat:33.2670, lon:131.3660},
    {id:'kokonoe', lat:33.1880, lon:131.2328},
    {id:'kujuflower', lat:33.0560, lon:131.2690},
    {id:'inn-aso', lat:32.9520, lon:131.0730}
   ]},
  {title:'Mt Aso to Kumamoto', night:'Kumamoto', meals:{b:1,l:0,d:0},
   nodes:[
    {id:'kusasenri', lat:32.8838, lon:131.0602},
    {id:'castle', lat:32.8063, lon:130.7059},
    {id:'suizenji', lat:32.7913, lon:130.7339},
    {id:'inn-kumamoto', lat:32.8030, lon:130.7100}
   ],
   notes:['Mt Aso crater: closed as of 1 October 2026. Kusasenri is still open.']},
  {title:'Kumamoto to Takachiho and Miyazaki', night:'Miyazaki', meals:{b:1,l:0,d:0},
   nodes:[
    {id:'tsujun', lat:32.6812, lon:130.9867},
    {id:'takachiho', lat:32.7020, lon:131.3000},
    {id:'amanoiwato', lat:32.7295, lon:131.3528},
    {id:'inn-miyazaki', lat:31.9110, lon:131.4239, via:[[32.45,131.55],[32.15,131.50]]}
   ],
   notes:['The tour lists Tsujun Bridge after Takachiho. It sits on the way from Kumamoto, so it is shown first here. The guide may change the order.','A long day: about 4 hours of driving in total.']},
  {title:'Miyazaki to Kagoshima', night:'Kagoshima', meals:{b:1,l:0,d:1},
   nodes:[
    {id:'udo', lat:31.6518, lon:131.4672},
    {id:'senganen', lat:31.6178, lon:130.5764, via:[[31.72,131.06],[31.73,130.78]]},
    {id:'shiroyama', lat:31.5970, lon:130.5520},
    {id:'inn-kagoshima', lat:31.5840, lon:130.5420}
   ]},
  {title:'Fly home from Kagoshima', night:null, meals:{b:1,l:0,d:0}, mealNote:'Breakfast, then free time before the airport transfer.',
   nodes:[{id:'kagairport', lat:31.8034, lon:130.7194}]}
];

const SH_DAYS = [
  {title:'Osaka to Awaji and Takamatsu', night:'Takamatsu', meals:null, start:{id:'kix', lat:34.4347, lon:135.2440},
   nodes:[
    {id:'akashi', lat:34.5595, lon:135.0025, via:[[34.62,135.27],[34.66,135.13],[34.62,135.02]]},
    {id:'naruto', lat:34.2396, lon:134.6420, via:[[34.40,134.84]]},
    {id:'inn-takamatsu', lat:34.3428, lon:134.0466, via:[[34.23,134.40]]}
   ]},
  {title:'Takamatsu', night:'Takamatsu', meals:{b:null,l:1,d:null},
   nodes:[
    {id:'ritsurin', lat:34.3292, lon:134.0441},
    {id:'udon', lat:34.1898, lon:133.8216},
    {id:'konpira', lat:34.1847, lon:133.8094},
    {id:'inn-takamatsu', lat:34.3428, lon:134.0466}
   ],
   notes:['Udon making with lunch is included. The PDF does not say where; Kotohira is shown here.']},
  {title:'Takamatsu to Kochi and Cape Ashizuri', night:'Shimanto', meals:null,
   nodes:[
    {id:'ryoma', lat:33.4973, lon:133.5747, via:[[33.95,133.72],[33.65,133.60]]},
    {id:'hirome', lat:33.5606, lon:133.5372},
    {id:'ashizuri', lat:32.7234, lon:133.0187, via:[[33.33,133.20],[33.00,132.95]]},
    {id:'inn-shimanto', lat:32.9910, lon:132.9330}
   ],
   notes:['The longest day of the tour: about 6 hours of driving. The driver works up to 10 hours a day.']},
  {title:'Shimanto to Matsuyama and Dogo', night:'Matsuyama (Dogo)', meals:null,
   nodes:[
    {id:'matsuyama', lat:33.8456, lon:132.7655, via:[[33.22,132.58],[33.55,132.62]]},
    {id:'dogo', lat:33.8520, lon:132.7863},
    {id:'inn-dogo', lat:33.8480, lon:132.7930}
   ]},
  {title:'Dogo to Imabari and Kurashiki', night:'Kurashiki', meals:null,
   nodes:[
    {id:'towel', lat:34.0090, lon:132.9025},
    {id:'kurashiki', lat:34.5955, lon:133.7718, via:[[34.15,133.03],[34.28,133.10],[34.40,133.20],[34.48,133.45]]},
    {id:'kuraoutlet', lat:34.6040, lon:133.7640},
    {id:'inn-kurashiki', lat:34.6000, lon:133.7760}
   ],
   notes:['You cross the Seto Inland Sea on the Shimanami Kaido, a chain of island bridges.']},
  {title:'Kurashiki to Osaka', night:'Osaka', meals:null,
   nodes:[
    {id:'osakajo', lat:34.6873, lon:135.5262, via:[[34.70,134.70],[34.70,135.18]]},
    {id:'kuromon', lat:34.6650, lon:135.5065},
    {id:'dotonbori', lat:34.6687, lon:135.5013},
    {id:'inn-osaka', lat:34.6720, lon:135.4960}
   ]},
  {title:'Fly home from Osaka', night:null, meals:{b:1,l:0,d:0}, mealNote:'Breakfast, then free time before the airport transfer.',
   nodes:[{id:'kix', lat:34.4347, lon:135.2440}]}
];

const YS_DAYS = [
  {title:'Fukuoka to Kitakyushu', night:'Kitakyushu', meals:null, start:{id:'airport', lat:33.5859, lon:130.4508},
   nodes:[
    {id:'mojiko', lat:33.9460, lon:130.9615},
    {id:'sarakura', lat:33.8669, lon:130.8139},
    {id:'karato', lat:33.9568, lon:130.9415},
    {id:'inn-kitakyushu', lat:33.8869, lon:130.8826}
   ]},
  {title:'Kitakyushu to Yamaguchi', night:'Yamaguchi (onsen area)', meals:null,
   nodes:[
    {id:'bishanohana', lat:34.3020, lon:130.8530, via:[[34.10,130.93]]},
    {id:'tsunoshima', lat:34.3540, lon:130.8800},
    {id:'inn-yamaguchi', lat:34.1640, lon:131.4580, via:[[34.30,131.10]]}
   ]},
  {title:'Yamaguchi coast and cave', night:'Hagi', meals:null,
   nodes:[
    {id:'ushirobata', lat:34.4110, lon:131.1110},
    {id:'motonosumi', lat:34.4190, lon:131.0640},
    {id:'akiyoshi', lat:34.2290, lon:131.3040},
    {id:'inn-hagi', lat:34.4080, lon:131.3990}
   ]},
  {title:'Yamaguchi to Shimane', night:'Shimane', meals:null,
   nodes:[
    {id:'tsuwano', lat:34.4672, lon:131.7710},
    {id:'winery', lat:35.3880, lon:132.7010, via:[[34.70,132.00],[35.10,132.50]]},
    {id:'izumo', lat:35.4022, lon:132.6855},
    {id:'inasabeach', lat:35.3960, lon:132.6703},
    {id:'inn-shimane', lat:35.4681, lon:133.0484}
   ],
   notes:['A long day: about 4 hours of driving.']},
  {title:'Shimane to Tottori', night:'Tottori', meals:null,
   nodes:[
    {id:'yushien', lat:35.5005, lon:133.1830},
    {id:'eshima', lat:35.4965, lon:133.2063},
    {id:'mizuki', lat:35.5440, lon:133.2316},
    {id:'manga', lat:35.4930, lon:133.7600},
    {id:'inn-tottori', lat:35.4930, lon:134.2260}
   ]},
  {title:'Tottori to Arima and Osaka', night:'Osaka', meals:null,
   nodes:[
    {id:'tottori', lat:35.5400, lon:134.2330},
    {id:'arima', lat:34.7967, lon:135.2481, via:[[35.25,134.35],[34.95,134.80]]},
    {id:'dotonbori', lat:34.6687, lon:135.5013},
    {id:'inn-osaka', lat:34.6720, lon:135.4960}
   ],
   notes:['Entry fees are not included today. The PDF calls this a free day for admissions.']},
  {title:'Fly home from Osaka', night:null, meals:{b:1,l:0,d:0}, mealNote:'Breakfast, then free time before the airport transfer.',
   nodes:[{id:'kix', lat:34.4347, lon:135.2440}]}
];

/* Monthly climate, 1991 to 2020 averages from the Japan Meteorological Agency, via Wikipedia. */
const CLIMATE = {
  Fukuoka:{hi:[10.2,11.6,15.0,19.9,24.4,27.2,31.2,32.5,28.6,23.7,18.2,12.6], lo:[3.9,4.4,7.2,11.5,16.1,20.3,24.6,25.4,21.6,16.0,10.6,5.8], rain:[74.4,69.8,103.7,118.2,133.7,249.6,299.1,210.0,175.1,94.5,91.4,67.5], src:'https://en.wikipedia.org/wiki/Fukuoka'},
  Kumamoto:{hi:[10.7,12.4,16.1,21.4,26.0,28.1,31.8,33.3,30.1,25.0,18.8,12.9], lo:[1.6,2.6,5.9,10.6,15.6,20.2,24.2,24.8,21.2,14.9,8.8,3.4], rain:[57.2,83.2,124.8,144.9,160.9,448.5,386.8,195.4,172.6,87.1,84.4,61.2], src:'https://en.wikipedia.org/wiki/Kumamoto'},
  Takamatsu:{hi:[9.7,10.5,14.1,19.8,24.8,27.5,31.7,33.0,28.8,23.2,17.5,12.1], lo:[2.1,2.2,5.0,9.9,15.1,19.8,24.1,25.1,21.2,15.1,9.1,4.3], rain:[39.4,45.8,81.4,74.6,100.9,153.1,159.8,106.0,167.4,120.1,55.0,46.7], src:'https://en.wikipedia.org/wiki/Takamatsu'},
  Matsue:{hi:[8.3,9.4,13.1,18.5,23.2,26.2,29.8,31.6,27.1,22.0,16.5,10.9], lo:[1.5,1.3,3.6,8.2,13.5,18.2,22.8,23.8,19.6,13.4,8.0,3.6], rain:[153.3,118.4,134.0,113.0,130.3,173.0,234.1,129.6,204.1,126.1,121.6,154.5], src:'https://en.wikipedia.org/wiki/Matsue'}
};

const TOURS = [
  {id:'nk', name:'Northern Kyushu', code:'JP8NKY', days:8, nights:7, price:2088, from:'Fukuoka', to:'Fukuoka', climate:'Fukuoka', list:NK_DAYS,
   lede:'Fukuoka to Nagasaki, across the sea by ferry to Kumamoto, over Mt Aso to Yufuin and Beppu, then a Kitakyushu day trip.',
   highlights:['Nagasaki night view','Ferry across the Ariake Sea','Kumamoto Castle','Beppu Hells','Mojiko Retro'],
   season:'Mild and dry in spring and autumn. Fukuoka gets most rain in June and July.',
   watch:['Mt Aso crater closed (October 2026)','Mt Inasa ropeway maintenance in early summer']},
  {id:'ck', name:'Charming Kyushu', code:'JP7KYU', days:7, nights:6, price:1678, from:'Fukuoka', to:'Kagoshima', climate:'Kumamoto', list:CK_DAYS,
   lede:'Across Kyushu from north to south: Beppu and Yufuin hot springs, Mt Aso and Kumamoto, Takachiho Gorge, the Miyazaki coast and Kagoshima.',
   highlights:['Takachiho Gorge','Udo Jingu sea cave shrine','Sakurajima views','Beppu Hells','Kumamoto Castle'],
   season:'Kumamoto gets very heavy rain in June and July. Spring and autumn are best.',
   blackout:'Mar 22 to Apr 5, Apr 29 to May 6, Aug 11 to 16, Sep 13 to 23, Nov 13 to 30, Dec 30 to Jan 4',
   watch:['Mt Aso crater closed (October 2026)','Sapporo brewery closed Mondays and Tuesdays','Kuju Flower Park closed in deep winter']},
  {id:'sh', name:'Shikoku Splendours', code:'JP7SHK', days:7, nights:6, price:1748, from:'Osaka', to:'Osaka', climate:'Takamatsu', list:SH_DAYS,
   lede:'A loop around Shikoku from Osaka: the Naruto whirlpools, Ritsurin Garden and udon in Kagawa, the wild Kochi coast, Dogo Onsen, then Kurashiki and Osaka.',
   highlights:['Naruto whirlpools','Make your own udon','Cape Ashizuri','Dogo Onsen','Kurashiki canal'],
   season:'Takamatsu is one of the driest places in Japan. Summers are hot. Typhoons can hit the Kochi coast in August and September.',
   watch:['Day 3 has about 6 hours of driving','Whirlpools depend on tide times']},
  {id:'ys', name:'Yamaguchi and San’in', code:'JP7YSL', days:7, nights:6, price:1958, from:'Fukuoka', to:'Osaka', climate:'Matsue', list:YS_DAYS,
   lede:'From Fukuoka along the Sea of Japan coast: Tsunoshima Bridge, Akiyoshido Cave, Izumo Taisha, yokai and Conan towns, the Tottori dunes, then Arima Onsen and Osaka.',
   highlights:['Tsunoshima Bridge','Akiyoshido Cave','Izumo Taisha','Tottori Sand Dunes','Arima Onsen'],
   season:'The Sea of Japan side is grey and wet in winter, with snow some years. Late spring and autumn are best.',
   watch:['Motonosumi torii closed for repairs','Sand Museum closed 4 Jan to late Apr','Day 6 admissions not included']}
];
