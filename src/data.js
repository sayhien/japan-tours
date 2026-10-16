/* Stop content. Facts were checked online in October 2026; visitor points summarise common themes in public reviews. */
const JG = 'https://www.japan-guide.com/e/';
const STOPS = {
  airport: {
    name:'Fukuoka Airport', jp:'福岡空港', art:'airport', kind:'airport', q:'Fukuoka Airport International Terminal',
    desc:'One of the most convenient big city airports in the world. The subway reaches Hakata Station in about 5 minutes, so the city is right on your doorstep.',
    facts:[['Subway to Hakata','About 5 min'],['Terminal','International']],
    say:[['good','Very close to the city, so arrival and departure days feel easy.'],['good','The international terminal has good food and duty free shops for last minute gifts.'],['tip','Lines at check in and security can be long at peak times. Arrive 2 to 3 hours before your flight.']],
    voice:'Welcome to Fukuoka Airport. The city centre is only about five minutes away by subway, so you can start exploring almost straight away.'
  },
  dazaifu: {
    name:'Dazaifu Tenmangu', jp:'太宰府天満宮', art:'dazaifu', q:'Dazaifu Tenmangu',
    desc:'A shrine built over the grave of Sugawara no Michizane, a scholar who died here in 903. He is now prayed to for study and exam success. Cross the three red bridges over the heart shaped pond, rub the bronze ox for luck, and stroll the shopping street on the way in.',
    facts:[['Entry','Free'],['Hours','6:30 to 19:00'],['Time needed','1 to 2 hours']],
    say:[['good','The approach street is fun, with hot umegae mochi rice cakes filled with red bean.'],['good','The pond and the three bridges are the prettiest part, especially in plum season (February to early March).'],['good','The Starbucks on the approach, built from thousands of wooden sticks by architect Kengo Kuma, is a favourite photo stop.'],['tip','Very busy on weekends and holidays. Mornings are calmer.'],['tip','The Kyushu National Museum is next door, linked by a long escalator tunnel.']],
    voice:'Welcome to Dazaifu Tenmangu. This shrine honours Sugawara no Michizane, a great scholar, and students come here to pray for good exam results. Cross the three red bridges, touch the bronze ox for luck, and try a hot umegae mochi on the shopping street.',
    src:[['Trip.com',"https://sg.trip.com/travel-guide/attraction/dazaifu/dazaifu-tenmangu-shrine-100042/"]]
  },
  ftower: {
    name:'Fukuoka Tower', jp:'福岡タワー', art:'ftower', q:'Fukuoka Tower',
    desc:'At 234 metres, Japan’s tallest seaside tower, wrapped in about 8,000 half mirrors. The deck at 123 metres looks over Momochi Beach, Hakata Bay and the whole city.',
    facts:[['Height','234 m'],['Deck','123 m'],['Time needed','30 to 45 min']],
    say:[['good','Best at sunset, when the sky turns orange over the bay.'],['good','A full circle view, with the city on one side and the sea on the other.'],['good','Lit up in changing colours at night. Good photos from the beach below.'],['tip','Some find the deck small and the visit short.'],['tip','The third floor Lovers’ Sanctuary is covered in love locks.']],
    voice:'This is Fukuoka Tower, two hundred and thirty four metres tall and covered in about eight thousand mirrors. From the deck you can see Hakata Bay, Momochi Beach and the whole city. It looks best near sunset.',
    src:[['Japan Travel','https://en.japantravel.com/view/fukuoka-tower'],['Fukuoka Now','https://www.fukuoka-now.com/en/fukuoka-tower-report/']]
  },
  yatai: {
    name:'Nakasu Yatai', jp:'中洲屋台', art:'yatai', q:'Nakasu Yatai Fukuoka',
    desc:'Fukuoka is famous for yatai, small open air food stalls that appear every evening. About 20 line the river at the south end of Nakasu Island. Each seats only seven or eight people, so you sit close and chat.',
    facts:[['Hours','About 18:00 to 2:00'],['Closed','Bad weather, one day a week'],['Pay','Bring cash']],
    say:[['good','Sitting shoulder to shoulder and chatting with locals is the best part.'],['good','Try Hakata tonkotsu ramen, yakitori skewers and oden.'],['tip','Prices are higher than a normal restaurant. You pay for the experience.'],['tip','Popular stalls have queues, especially on Friday and Saturday.'],['tip','Most stalls expect each person to order food and a drink.']],
    voice:'Here are the Nakasu yatai, Fukuoka’s famous riverside food stalls. Each one has only a few seats, so you sit close and chat with your neighbours. Order a bowl of Hakata ramen and some yakitori.',
    src:[['japan-guide.com', JG+'e4803.html']]
  },
  arita: {
    name:'Arita Porcelain Park', jp:'有田ポーセリンパーク', art:'arita', q:'Arita Porcelain Park',
    desc:'A porcelain theme park in Arita, the town where Japanese porcelain was first made about 400 years ago. The main building is a full size copy of the Zwinger palace in Dresden, Germany, with European and Arita porcelain on show inside.',
    facts:[['Time needed','About 1 hour'],['Known for','Arita ware']],
    say:[['good','The palace looks grand and surprising in the Saga countryside. Great for photos.'],['good','The shops have good prices on blue and white Arita ware.'],['tip','It feels a little old and quiet. Some say there is not much to do.'],['tip','If you have time, the old porcelain shop street in Arita town is worth a look.']],
    voice:'Welcome to Arita Porcelain Park. Arita is where Japanese porcelain was first made, about four hundred years ago. The palace here is a copy of the Zwinger palace in Dresden, Germany. Look for blue and white Arita ware in the shops.',
    src:[['Wikipedia','https://en.wikipedia.org/wiki/Arita_Porcelain_Park']]
  },
  sake: {
    name:'Kashima Sake Street', jp:'肥前浜宿 酒蔵通り', art:'sake', q:'Hizen Hamashuku Sakagura Street Kashima',
    desc:'Hizen Hamashuku is an old lane of white walled sake breweries and thatched merchant houses from the Edo period. Several breweries still make sake here. Nabeshima, brewed in Kashima, won the top sake prize at the International Wine Challenge.',
    facts:[['Tasting','About ¥1,000 at Hizennya'],['Time needed','About 1 hour']],
    say:[['good','Quiet and photogenic, with few tourists.'],['good','Cheap tastings at several breweries, and a good place to buy sake.'],['good','The white plaster walls and wooden lattices are a protected historic district.'],['tip','Small shops keep short hours. Go in the daytime.'],['tip','Ask for Nabeshima, the town’s most famous label.']],
    voice:'This is Hizen Hamashuku, Kashima’s sake street. White walled breweries have made sake here for hundreds of years. Stop in for a tasting, and look for Nabeshima, a local sake that has won world awards.',
    src:[['Japan National Tourism Organization','https://www.japan.travel/en/experiences-in-japan/5857']]
  },
  yutoku: {
    name:'Yutoku Inari Shrine', jp:'祐徳稲荷神社', art:'yutoku', q:'Yutoku Inari Shrine',
    desc:'Founded in 1687 and counted among Japan’s three great Inari shrines. The bright vermilion main hall stands on a tall wooden stage built into the hillside, like Kiyomizu temple in Kyoto. A trail of red torii gates climbs to the inner shrine above.',
    facts:[['Founded','1687'],['Entry','Free'],['Time needed','1 hour']],
    say:[['good','Bright red halls against the green hill look stunning, especially in autumn.'],['good','Much quieter than Fushimi Inari in Kyoto.'],['good','Wide view over the town from the stage.'],['tip','Lots of stairs. Wear good shoes.'],['tip','The trail up the mountain behind takes about 2 hours return, so most people skip it.']],
    voice:'Welcome to Yutoku Inari Shrine, one of the three great Inari shrines of Japan. The red main hall stands on a tall wooden stage in the hillside. Climb up for a wide view, and pass under the red torii gates behind it.',
    src:[['Go Local Travel Japan','https://www.gltjp.com/en/directory/item/12984/']]
  },
  inasa: {
    name:'Mt Inasa night view', jp:'稲佐山', art:'inasa', q:'Mt Inasa Ropeway',
    desc:'A 333 metre mountain beside Nagasaki city. A five minute ropeway goes to the top, where the night view is ranked among Japan’s three best, with Mt Hakodate and Mt Rokko.',
    facts:[['Ropeway','9:00 to 22:00'],['Return ticket','About ¥1,900'],['Time needed','1.5 hours']],
    say:[['good','City lights wrap around the harbour. Many call it the best view of their trip.'],['good','The rooftop deck is modern and clean, with a glowing light tunnel.'],['tip','Cold and windy at the top. Bring a jacket.'],['tip','Queues for the ropeway build after dark. Go up before sunset to see both day and night.'],['tip','The ropeway sometimes closes for maintenance, usually early June to early July.']],
    voice:'This is Mount Inasa. The ropeway lifts you three hundred and thirty three metres in about five minutes. From the top, Nagasaki’s lights curve around the harbour. It is one of the three best night views in Japan.',
    src:[['japan-guide.com', JG+'e4412.html']]
  },
  megane: {
    name:'Chinatown and Meganebashi', jp:'新地中華街・眼鏡橋', art:'megane', q:'Nagasaki Shinchi Chinatown',
    desc:'Shinchi is Japan’s oldest Chinatown, started by Chinese traders when Japan was closed to the world. It is the place to eat Nagasaki champon and sara udon. A short walk away, Meganebashi was built in 1634 by a Chinese monk. Its two arches and their reflection look like a pair of glasses.',
    facts:[['Bridge built','1634'],['Entry','Free'],['Time needed','1 hour']],
    say:[['good','Champon, a noodle soup loaded with seafood and vegetables, is a must.'],['good','Look for the heart shaped stones in the river wall near Meganebashi. They are said to bring luck in love.'],['good','Kakuni manju, a soft bun with braised pork, is a favourite street snack.'],['tip','Chinatown is small. 30 to 45 minutes is plenty.'],['good','The walk along the Nakashima River and its old stone bridges is calm and pretty.']],
    voice:'Welcome to Shinchi, the oldest Chinatown in Japan. Try champon, a noodle soup full of seafood and vegetables. Then walk to Meganebashi, the spectacles bridge. Its two arches and their reflection look like a pair of glasses. See if you can find the heart shaped stones in the wall.',
    src:[['japan-guide.com', JG+'e4404.html'],['Wikipedia','https://en.wikipedia.org/wiki/Megane_Bridge']],
    photos:'Meganebashi Bridge Nagasaki'
  },
  peace: {
    name:'Peace Park', jp:'平和公園', art:'peace', q:'Nagasaki Peace Park',
    desc:'Built near the hypocenter of the atomic bomb dropped on Nagasaki at 11:02 am on 9 August 1945. The 10 metre Peace Statue raises its right hand to warn of the threat from the sky, and stretches its left hand out for peace. A black pillar below the hill marks the hypocenter, and the Atomic Bomb Museum is close by.',
    facts:[['Park','Free'],['Museum','¥200'],['Time needed','1 to 2 hours']],
    say:[['good','Moving and quiet. Many say everyone should visit once.'],['good','The Atomic Bomb Museum is powerful and well explained in English.'],['tip','The park alone is quick. Leave time for the museum.'],['tip','Hilly, with stairs and escalators between the park and the hypocenter.']],
    voice:'This is Nagasaki Peace Park. On the ninth of August 1945, at two minutes past eleven, an atomic bomb exploded near here. The great Peace Statue raises one hand to the sky as a warning, and stretches the other out for peace. Please take a quiet moment here.',
    src:[['japan-guide.com', JG+'e4400.html']]
  },
  shimabara: {
    name:'Shimabara Port', jp:'島原港', art:'ferry', kind:'port', q:'Shimabara Port',
    desc:'The ferry port of Shimabara, below Mt Unzen. Boats cross the Ariake Sea to Kumamoto. The fast Ocean Arrow takes about 30 minutes, and the regular car ferry about an hour.',
    facts:[['Fast ferry','About 30 min'],['Car ferry','About 60 min']],
    say:[['good','Lovely views of Mt Unzen behind you and open sea ahead.'],['good','Seagulls fly right beside the car ferry, and passengers feed them snacks from the deck.'],['tip','If your driver takes the car across, you will ride the slower car ferry.'],['tip','The crossing can be bumpy in strong wind.']],
    voice:'This is Shimabara Port, at the foot of Mount Unzen. From here the ferry crosses the Ariake Sea to Kumamoto. Go up on deck, and you may see seagulls flying right beside the boat.',
    src:[['Wikipedia','https://en.wikipedia.org/wiki/SSTH_Ocean_Arrow']]
  },
  kport: {
    name:'Kumamoto Port', jp:'熊本港', art:'kport', kind:'port', q:'Kumamoto Port',
    desc:'The ferry lands at Kumamoto Port, on reclaimed land west of the city. From here it is about 18 km, roughly 40 minutes by car, to central Kumamoto.',
    facts:[['To the city','About 40 min by car']],
    say:[['tip','A small, simple terminal. There is not much to see.'],['good','On a clear day, look back across the sea to Mt Unzen.'],['good','Kumamon, the black bear mascot of Kumamoto, appears everywhere from here on.']],
    voice:'You have arrived at Kumamoto Port. Look back across the sea for Mount Unzen. From here it is about forty minutes by car into Kumamoto city.'
  },
  castle: {
    name:'Kumamoto Castle', jp:'熊本城', art:'castle', q:'Kumamoto Castle',
    desc:'Built by the lord Kato Kiyomasa in the early 1600s, it is one of Japan’s three great castles. The curved stone walls get steeper near the top so attackers cannot climb them. The 2016 earthquakes badly damaged it. The main keep reopened in 2021, and repairs to the rest will go on for many years.',
    facts:[['Keep','¥800'],['Hours','9:00 to 17:00'],['Time needed','1.5 hours']],
    note:'A July 2026 earthquake caused minor damage. The castle reopened to visitors on 13 August 2026.',
    say:[['good','The main keep looks stunning, and the museum inside explains the history well, in English too.'],['good','A raised walkway lets you see the repair work up close.'],['good','Sakuranobaba Josaien at the foot of the castle has food stalls and souvenirs.'],['tip','Parts of the grounds are still closed, so you follow a fixed route.'],['tip','Lots of walking on slopes. Wear comfortable shoes.']],
    voice:'Welcome to Kumamoto Castle, one of the three great castles of Japan. Its curving stone walls were made so enemies could not climb them. Earthquakes in 2016 badly damaged it, and the main tower was rebuilt and reopened in 2021.',
    src:[['japan-guide.com', JG+'e4501.html']]
  },
  suizenji: {
    name:'Suizenji Garden', jp:'水前寺成趣園', art:'suizenji', q:'Suizenji Jojuen Garden',
    desc:'A strolling garden started by the Hosokawa lords in the 1600s. The path circles a clear spring fed pond and shows the 53 stations of the old Tokaido road in miniature, including a little grass covered Mt Fuji.',
    facts:[['Entry','¥500'],['Hours','8:30 to 17:00'],['Time needed','45 min']],
    say:[['good','The mini Mt Fuji and the clear pond make lovely photos.'],['good','Big carp swim in very clear water, and you can buy fish food.'],['good','Have matcha and a sweet at the old teahouse beside the pond.'],['tip','Small. 30 to 60 minutes is enough.'],['tip','Souvenir shops crowd the entrance, so it can feel touristy at first.']],
    voice:'This is Suizenji Jojuen Garden, made by the Hosokawa lords in the sixteen hundreds. The path around the pond shows the old Tokaido road in miniature. Look for the little grass hill shaped like Mount Fuji.',
    src:[['japan-guide.com', JG+'e4502.html']]
  },
  kusasenri: {
    name:'Kusasenri', jp:'草千里ヶ浜', art:'kusasenri', q:'Kusasenri Aso',
    desc:'A wide grassy plain inside an old crater of Mt Aso, with ponds and grazing horses. Aso’s caldera is up to 25 km across, one of the largest in the world.',
    facts:[['Walking','Free'],['Horse rides','March to mid December'],['Time needed','1 hour']],
    note:'The Nakadake crater is closed. As of 1 October 2026 there is a 1 km no entry zone, so you cannot see the crater right now.',
    say:[['good','Huge open views. It feels like another world.'],['good','Short horse rides on the plain are fun.'],['good','Komezuka, a small perfect cone, is on the scenic drive down.'],['tip','Cold and windy even in summer. Bring a jacket.'],['tip','Fog can roll in fast and hide everything.']],
    voice:'Welcome to Kusasenri, a wide green plain inside an old crater of Mount Aso. Horses graze by the ponds, and the active volcano rises behind. The crater itself is closed for safety right now, but the views here are still wonderful.',
    src:[['japan-guide.com', JG+'e4552.html']]
  },
  kokonoe: {
    name:'Kokonoe Yume Bridge', jp:'九重夢大吊橋', art:'kokonoe', q:'Kokonoe Yume Otsurihashi',
    desc:'A walking suspension bridge 390 metres long and 173 metres above the valley, one of the highest in Japan. From the middle you can see Shindo Falls, listed among Japan’s top 100 waterfalls.',
    facts:[['Entry','¥500'],['Hours','8:30 to 17:00 (18:00 Jul to Oct)'],['Time needed','45 min']],
    say:[['good','Amazing views of the valley and waterfalls, best in autumn colour from late October.'],['tip','It sways a little. Scary if you fear heights.'],['tip','Windy and cold at this height.'],['good','Stalls at the entrance sell local snacks and soft serve ice cream.']],
    voice:'This is the Kokonoe Yume Grand Suspension Bridge. You are one hundred and seventy three metres above the valley floor. Look upstream for Shindo Falls, one of Japan’s top one hundred waterfalls.',
    src:[['Official site','https://www.yumeooturihashi.com/sp/seng.html']]
  },
  yufuin: {
    name:'Yufuin and Lake Kinrin', jp:'湯布院・金鱗湖', art:'yufuin', q:'Yufuin Floral Village',
    desc:'Yufuin is a hot spring town under the twin peaks of Mt Yufu. Floral Village is a tiny storybook lane of stone cottages with Ghibli, Peter Rabbit and Alice shops, plus owls and small animals. At the end of the main street, Lake Kinrin is fed by warm springs, so on cold mornings mist rises off the water.',
    facts:[['Floral Village','Free entry, 9:30 to 17:30'],['Animal areas','Extra fee'],['Time needed','2 to 3 hours']],
    say:[['good','Yunotsubo street is full of snacks: croquettes, roll cakes and beef skewers.'],['good','Floral Village is very cute and photogenic.'],['good','Lake Kinrin is calm and pretty, best with morning mist in autumn and winter.'],['tip','Crowded mid morning when tour buses arrive. Earlier is better.'],['tip','Floral Village is small. 20 to 30 minutes is enough.']],
    voice:'Welcome to Yufuin, a hot spring town under the twin peaks of Mount Yufu. Walk the shopping street to Floral Village, a little storybook village, and on to Lake Kinrin. On cold mornings, mist rises from the warm water of the lake.',
    src:[['japan-guide.com', JG+'e4750.html'],['Tokyo Weekender','https://www.tokyoweekender.com/?p=287663']]
  },
  beppu: {
    name:'Beppu Hells', jp:'別府地獄めぐり', art:'beppu', q:'Umi Jigoku Beppu',
    desc:'Beppu’s hells are hot springs far too hot to bathe in. Umi Jigoku, the Sea Hell, is a boiling pond of bright cobalt blue. Chinoike Jigoku, the Blood Pond Hell, is deep red from iron in the clay.',
    facts:[['Entry','¥450 to ¥500 each'],['All 7 hells','¥2,400'],['Time needed','1.5 hours for two']],
    say:[['good','The blue of Sea Hell looks unreal in photos.'],['good','Try eggs and pudding steamed in the hot spring.'],['good','Sea Hell also has a lotus pond with giant water lilies.'],['tip','Strong sulphur smell in places.'],['tip','Touristy, with many souvenir shops. Two or three hells is enough for most people.']],
    voice:'Welcome to the hells of Beppu. These hot springs are far too hot to bathe in. Sea Hell boils in bright cobalt blue, and Blood Pond Hell glows deep red from iron in the clay. Try an egg cooked in the steam.',
    src:[['japan-guide.com', JG+'e4702.html']],
    photos:'Umi Jigoku Chinoike Jigoku Beppu'
  },
  tosu: {
    name:'Tosu Premium Outlets', jp:'鳥栖プレミアム・アウトレット', art:'tosu', q:'Tosu Premium Outlets',
    desc:'Kyushu’s big open air outlet mall, with brands from Coach and Michael Kors to Japanese labels like Asics, Beams and Seiko, plus a food court. Many shops are tax free for tourists.',
    facts:[['Tax free','Bring your passport'],['Time needed','2 hours']],
    say:[['good','Good prices on Japanese brands like Asics and Beams.'],['good','Easy to walk, with a food court for a quick lunch.'],['tip','Discounts vary. Some find prices close to sales back home.'],['tip','Weekends get crowded.']],
    voice:'This is Tosu Premium Outlets, Kyushu’s big outlet mall. Remember to bring your passport for tax free shopping.',
    src:[['Japan Deluxe Tours','https://elb.japandeluxetours.com/destinations/saga-tosu-premium-outlets']]
  },
  tanga: {
    name:'Tanga Market', jp:'旦過市場', art:'tanga', q:'Tanga Market Kitakyushu',
    desc:'A narrow covered market beside the Kantake River, open since the early 1900s and called the kitchen of Kitakyushu. About 120 small shops sell fish, pickles and ready made food. Fires in 2022 burned part of it. The rest has reopened.',
    facts:[['Hours','About 9:30 to 18:00'],['Closed','Many shops on Sundays'],['Entry','Free']],
    say:[['good','Make a daigaku don: buy a bowl of rice, then pick toppings from different stalls.'],['good','Very local and real, a good look at daily life.'],['good','Try nukadaki, fish simmered in rice bran paste, a Kokura speciality.'],['tip','Small and narrow. 30 to 60 minutes is enough.'],['tip','Many shops are closed on Sundays and holidays.']],
    voice:'Welcome to Tanga Market, the kitchen of Kitakyushu. More than a hundred small shops line this narrow lane. Buy a bowl of rice and add toppings from different stalls to make your own rice bowl.',
    src:[['japan-guide.com', JG+'e4884.html']]
  },
  mojiko: {
    name:'Blue Wing Moji and Mojiko Retro', jp:'ブルーウィングもじ・門司港レトロ', art:'mojiko', q:'Mojiko Station',
    desc:'Mojiko was a busy international port a hundred years ago, and its Western style buildings still stand. Mojiko Station opened in 1914 and was the first station in Japan named an Important Cultural Property. Blue Wing Moji is Japan’s largest walking drawbridge, 108 metres long, and lifts six times a day.',
    facts:[['Bridge lifts','10:00, 11:00, 13:00 to 16:00 hourly'],['Stays up','About 20 min'],['Time needed','2 hours']],
    say:[['good','Try yaki curry, curry rice baked with cheese, the local dish.'],['good','Great views over the Kanmon Strait and the big Kanmon Bridge.'],['good','The station is beautiful, restored to its 1914 look in 2019.'],['tip','Legend says the first couple to cross after the bridge comes down will be together forever.'],['tip','Windy on the waterfront.']],
    voice:'Welcome to Mojiko Retro. Mojiko Station opened in 1914, and its old wooden hall still feels like a hundred years ago. Blue Wing Moji, the blue drawbridge, lifts six times a day. They say the first couple to cross after it comes down will stay together forever. Try yaki curry for lunch.',
    src:[['japan-guide.com', JG+'e4878.html'],['Crossroad Fukuoka','https://www.crossroadfukuoka.jp/en/spot/13074']],
    photos:'Blue Wing Moji Mojiko Station'
  },
  'inn-fukuoka': {
    name:'Night in Fukuoka', jp:'福岡', art:'inn', kind:'hotel', q:'Hakata Station hotels',
    desc:'Kyushu’s biggest city, known for tonkotsu ramen, mentaiko (spicy cod roe) and motsunabe hot pot. Tenjin is the main shopping area, and Canal City is a big mall by the river.',
    say:[['good','Ichiran ramen started in Fukuoka, and its main shop is in Nakasu.'],['good','Try motsunabe, a hot pot of beef offal with cabbage and garlic.'],['tip','Hakata Station has shops and restaurants open late.']],
    voice:'Tonight you stay in Fukuoka, Kyushu’s biggest city. If you are still hungry, try motsunabe hot pot, or a late bowl of tonkotsu ramen.'
  },
  'inn-nagasaki': {
    name:'Night in Nagasaki', jp:'長崎', art:'inn', kind:'hotel', q:'Nagasaki city hotels',
    desc:'A harbour city built on hills, shaped by centuries of trade with China, Portugal and the Netherlands. Castella sponge cake came here with Portuguese traders.',
    say:[['good','Buy castella from Fukusaya, a shop founded in 1624.'],['good','Streetcars charge a flat fare and reach most sights.'],['tip','Glover Garden on the hill has old Western houses and harbour views, best in daytime.']],
    voice:'Tonight you stay in Nagasaki, a harbour city built on hills. Before you leave, buy some castella, the soft sponge cake that came here with Portuguese traders.'
  },
  'inn-kumamoto': {
    name:'Night in Kumamoto', jp:'熊本', art:'inn', kind:'hotel', q:'Kumamoto city hotels',
    desc:'A castle city famous for Kumamoto ramen with black garlic oil, basashi horse meat, and Kumamon, the black bear mascot. The Shimotori and Kamitori arcades are the evening shopping streets.',
    say:[['good','Shimotori arcade is lively at night, with food and shops.'],['good','Try Kumamoto ramen, a pork broth with black garlic oil.'],['good','Kumamon Square lets you meet the famous bear mascot.']],
    voice:'Tonight you stay in Kumamoto. Walk the Shimotori arcade, and try a bowl of Kumamoto ramen with black garlic oil.'
  },
  'inn-aso': {
    name:'Night in Aso', jp:'阿蘇', art:'inn', kind:'hotel', q:'Aso city hotels',
    desc:'Aso sits inside one of the world’s largest calderas, with farms and towns on the crater floor. Dinner is included tonight. The local speciality is akaushi, lean red wagyu beef.',
    say:[['good','Very dark at night, with clear stars.'],['good','Aso Shrine, one of Japan’s oldest, has reopened its great tower gate after earthquake repairs.'],['tip','Nights are cold in the highlands. Bring warm layers.']],
    voice:'Tonight you stay in Aso, inside a giant volcanic caldera. Dinner is included. If you can, try akaushi, Aso’s red wagyu beef, and look up at the stars.'
  },
  'inn-beppu': {
    name:'Night in Beppu', jp:'別府', art:'inn', kind:'hotel', q:'Beppu hotels',
    desc:'Beppu has more hot spring water than any other place in Japan, and steam rises from vents all over town. Dinner is included tonight.',
    say:[['good','Try a hot sand bath at Takegawara Onsen, built in 1879.'],['good','Toriten, chicken tempura, is the local dish.'],['tip','Many hotels have their own onsen. Bring a small towel.']],
    voice:'Tonight you stay in Beppu, the hot spring capital of Japan. Dinner is included. Make time for a soak in the onsen before bed.'
  },
  'inn-hakata': {
    name:'Night in Hakata', jp:'博多', art:'inn', kind:'hotel', q:'Hakata Station hotels',
    desc:'Hakata is the old merchant half of Fukuoka, around the main train station. Kushida Shrine keeps a giant float from the summer Yamakasa festival.',
    say:[['good','Canal City Hakata has fountain shows and a floor of ramen shops.'],['good','The rooftop garden on Hakata Station is free and has city views.'],['good','Kushida Shrine shows a towering festival float all year.']],
    voice:'Tonight you stay in Hakata, beside Fukuoka’s main station. Canal City and Kushida Shrine are both a short walk away.'
  }
};

const NK_DAYS = [
  {title:'Arrive in Fukuoka', night:'Fukuoka', meals:{b:0,l:0,d:0}, mealNote:'No meals listed for Day 1.', start:{id:'airport', lat:33.5859, lon:130.4508},
   nodes:[
    {id:'dazaifu', lat:33.5215, lon:130.5349},
    {id:'ftower', lat:33.5933, lon:130.3515},
    {id:'yatai', lat:33.5925, lon:130.4045},
    {id:'inn-fukuoka', lat:33.5897, lon:130.4207}
   ]},
  {title:'Fukuoka to Nagasaki', night:'Nagasaki', meals:{b:1,l:0,d:0},
   nodes:[
    {id:'arita', lat:33.1965, lon:129.8615},
    {id:'sake', lat:33.0818, lon:130.1062},
    {id:'yutoku', lat:33.0907, lon:130.0691},
    {id:'inasa', lat:32.7507, lon:129.8517, via:[[32.845,130.050],[32.78,129.93]]},
    {id:'inn-nagasaki', lat:32.7520, lon:129.8700}
   ]},
  {title:'Nagasaki to Kumamoto by ferry', night:'Kumamoto', meals:{b:1,l:0,d:0},
   nodes:[
    {id:'megane', lat:32.7440, lon:129.8785},
    {id:'peace', lat:32.7763, lon:129.8637},
    {id:'shimabara', lat:32.7700, lon:130.3720, via:[[32.845,130.050],[32.84,130.24]]},
    {id:'kport', lat:32.7640, lon:130.5960, mode:'ferry'},
    {id:'inn-kumamoto', lat:32.8030, lon:130.7100}
   ],
   notes:['Ferry from Shimabara to Kumamoto: about 30 min on the fast ferry, or about 60 min on the car ferry.','Kumamoto Port to the city: about 18 km, around 40 min by car.']},
  {title:'Kumamoto to Aso', night:'Aso', meals:{b:1,l:0,d:1},
   nodes:[
    {id:'castle', lat:32.8063, lon:130.7059},
    {id:'suizenji', lat:32.7913, lon:130.7339},
    {id:'kusasenri', lat:32.8838, lon:131.0602},
    {id:'inn-aso', lat:32.9520, lon:131.0730}
   ],
   notes:['Mt Aso crater: closed as of 1 October 2026. Check the official crater information on the day.']},
  {title:'Aso to Yufuin and Beppu', night:'Beppu', meals:{b:1,l:0,d:1},
   nodes:[
    {id:'kokonoe', lat:33.1880, lon:131.2328},
    {id:'yufuin', lat:33.2670, lon:131.3660},
    {id:'inn-beppu', lat:33.2840, lon:131.4970}
   ],
   notes:['Yufuin to Beppu: about 25 km, around 30 min by car.']},
  {title:'Beppu to Hakata', night:'Hakata (Fukuoka)', meals:{b:1,l:0,d:0},
   nodes:[
    {id:'beppu', lat:33.3240, lon:131.4760},
    {id:'tosu', lat:33.3958, lon:130.5373},
    {id:'inn-hakata', lat:33.5897, lon:130.4207}
   ]},
  {title:'Kitakyushu day trip', night:'Fukuoka', meals:{b:1,l:0,d:0},
   nodes:[
    {id:'tanga', lat:33.8840, lon:130.8780},
    {id:'mojiko', lat:33.9460, lon:130.9615},
    {id:'inn-fukuoka', lat:33.5897, lon:130.4207}
   ]},
  {title:'Fly home from Fukuoka', night:null, meals:{b:1,l:0,d:0}, mealNote:'Breakfast, then free time before the airport transfer.',
   nodes:[
    {id:'airport', lat:33.5859, lon:130.4508}
   ]}
];
