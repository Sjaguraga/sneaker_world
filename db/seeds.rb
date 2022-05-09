User.destroy_all
Sneaker.destroy_all

puts "seeding user..."
User.create(
  username: "admin",
  password: "admin",
  name: "Serref",
  email: "SerreJ@gmail.com"
)
u1 =
  User.create(
    username: "Sjaguraga24",
    password: "Jaguraga",
    name: "Serref",
    email: "SerrefJ@gmail.com"
  )

puts "seeding Sneakers..."
s1 =
  Sneaker.create(
    name: "Air Jordan 1 Retro High OG 'University Blue'",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/172524/1.jpg",
    brand: "Air Jordan",
    price: 390,
    description:
      "Paying tribute to Michael Jordan's college alma mater, the Air Jordan 1 Retro High OG 'University Blue' features a University of North Carolina look. Built entirely with leather, the shoe's upper appears in a mix of white and University Blue, contrasted by black on the Swoosh, collar, laces and 'Wings' logo. Perforations on the toe box provide breathability, while underfoot, the Air midsole gives way to a concentric outsole with a brighter shade of blue."
  )
s2 =
  Sneaker.create(
    name: "Air Jordan 1 Retro High OG 'Chicago' 2015",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/010352/1.jpg",
    brand: "Air Jordan",
    price: 400,
    description:
      "The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway features full-leather uppers in Bulls team colors. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo."
  )
s3 =
  Sneaker.create(
    name: "Dior X Air Jordan 1 High",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/176533/1.jpg",
    brand: "Air Jordan",
    price: 10_750,
    description:
      "Part of a collection between the fashion house and Jordan Brand, the Dior x Air Jordan 1 High released in April 2020. The shoe's Italian leather upper appears in a mix of white and grey, with a Dior Oblique jacquard Swoosh contrasting the side wall. The tongue tag and 'Wings' logo sport co-branding, with further branding revealed by the icy translucent outsole."
  )
s4 =
  Sneaker.create(
    name: "Air Jordan 1 Retro High OG 'Bred' 2013",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/011845/1.jpg",
    brand: "Air Jordan",
    price: 600,
    description:
      "Banned by the NBA in 1985, Michael Jordan was charged $5,000 per game for wearing the Air Jordan 1 'Black/Red' because they didnt include the color white which was part of the Chicago Bulls official team colors. Used as a marketing tactic, Nike crafted the 'Banned' campaign around the sneakers to launch and promote the Air Jordan line. The sneaker was retroed in 1994, 2011, 2013 and 2016. The 2011 pair features an 'X' on the heel paying homage to the 'Banned' nickname"
  )
s5 =
  Sneaker.create(
    name: "Air Jordan 1 Retro High OG 'Royal' 2017",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/800564/1.jpg",
    brand: "Air Jordan",
    price: 509,
    description:
      "Chuck Kohn, a sports photographer, photographed Michael Jordan wearing the Air Jordan 1 Royal in 1985. Known as his favorite colorway, Jordan chose the Royals as the first Air Jordan 1 for purchase. They were also the only color-way he never wore on court out of the Top 3 Air Jordan 1 Retro colorways ('Banned' and 'Chicago'). The Royals were released in 1994, 2001, 2013, and 2017 since 1985"
  )
s6 =
  Sneaker.create(
    name: "Yeezy Boost 350 V2 'Zebra'",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/800502/1.jpg",
    brand: "Adidas",
    price: 294,
    description:
      "The Yeezy Boost 350 V2 'Zebra' released on February 25, 2017, combining an upper white / core black Primeknit with a red SPLY 350 branding and a full-length translucent midsole boost. On November 16, 2018 and April 9th, 2022, restocks of the ' Zebra ' arrived, with more pairs hitting the marketplace and building on Kanye's commitment to make Yeezy more available to anyone who wished to acquire them."
  )
s7 =
  Sneaker.create(
    name: "Yeezy Boost 700 'Wave Runner'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/802501/1.jpg",
    brand: "Adidas",
    price: 355,
    description:
      "This first colorway of Yeezy Wave Runner 700 from Kanye West was introduced in November 2017, following an initial public opening in the Yeezy Season 5 fashion show previously that year. The retro-inspired lines of the sneaker worked together with a chunky silhouette reminiscent of a previous age. A mesh base on the quarter panel is completed in gray and a yellow with a teal forefoot."
  )
s8 =
  Sneaker.create(
    name: "Air Yeezy 2 SP 'Red October'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/090148/1.jpg",
    brand: "Nike",
    price: 14_718,
    description:
      "By the time the Air Yeezy 2 SP 'Red October' finally launched online with no advance notice in February 2014, Kanye West had already severed all ties with Nike. Though chaos surrounded the shoes much-delayed release, the Red Octobers stand out from its two companion colorways. There's the monochromatic scarlet finish, contrasted only by metallic gold lace tips, and there's the unique design, which sees the side panels ditch the standard anaconda texture in favor of rows upon rows of small triangular studs."
  )
s9 =
  Sneaker.create(
    name: "Yeezy 500 'Blush'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/803137/1.jpg",
    brand: "Adidas",
    price: 271,
    description:
      "The adidas YEEZY 500 “Blush” features uppers constructed of mesh, leather and suede that express a pale beige tone. The shoe is marked with minimal branding allowing the bulbous design to come through. Elevating the shoe are matching full-length adiPRENE midsoles paired with rubber outsoles."
  )
s10 =
  Sneaker.create(
    name: "Yeezy Slides 'Resin'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/160138/1.jpg",
    brand: "Adidas",
    price: 191,
    description:
      "The Yeezy Slides 'Resin' features a one-tone look on its bold slide construction. Built with EVA, the one-piece construction appears entirely in Resin, supported underfoot by a soft top layer on the footbed. The outsole sports prominent horizontal grooves to provide traction."
  )
s11 =
  Sneaker.create(
    name: "Yeezy Foam Runner 'Vermilion'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/266127/1.jpg",
    brand: "Adidas",
    price: 313,
    description:
      "The futuristic adidas Yeezy Foam Runner 'Vermilion' slip-on features a one-note scarlet finish to the clog-like silhouette, tying back to the first time that Kanye West introduced the familiar monochrome palette to his partnership with adidas. It features a sustainable build, highlighted by a single piece of foam made in part with hydroponically produced algae. Ventilation ports throughout the vamp and side panels offer more airflow, with the heel designed to cradle the back of the foot for a non-slip fit."
  )
s12 =
  Sneaker.create(
    name: "Yeezy Foam Runner 'Mineral Blue'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/263700/1.jpg",
    brand: "Adidas",
    price: 664,
    description:
      "A progressive slip-on, the Yeezy Foam Runner 'Mineral Blue' emerges with a monochromatic look. Built with foam, the shoe's Mineral Blue upper includes ventilation ports throughout, allowing for breathability and less weight. A raised heel promotes a more natural stride, while underfoot, the outsole sports a wavy pattern for traction, also revealing the only branding via an adidas logo."
  )
s13 =
  Sneaker.create(
    name: "Sacai X LDWaffle 'Varsity Blue'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/135737/1.jpg",
    brand: "Nike",
    price: 607,
    description:
      "Sacai and Nike teamed up to create the Sacai x LDWaffle 'Varsity Blue,' which debuted at Paris Fashion Week at the Sacai SP19 runway shoe. The hybrid look combines the Waffle Daybreak and LDV, resulting in two of each of the following: Swooshes, tongues, heel counters, eyestays and laces. The Varsity Red, Del Sol and Varsity Blue upper is built with a mix of suede, leather and mesh, while underfoot, the midsole includes an extension that goes past the heel. A waffle outsole provides traction, with Nike and Sacai branding on the heel and insole."
  )
s14 =
  Sneaker.create(
    name: "Sacai X LDWaffle 'Green Gusto'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/135872/1.jpg",
    brand: "Nike",
    price: 670,
    description:
      "The Sacai x LDWaffle 'Green Gusto' debuted during the Sacai SP19 runway show at Paris Fashion Week 2019. The shoe combines the Waffle Daybreak and LDV, resulting in two of almost everything, including Swooshes, heel counters, eyestays, tongues and laces. The shoe's Green Gusto, Varsity Maize and Safety Orange colorway emerges on a leather, mesh and suede construction, with an exaggerated sculpted midsole underfoot that extends out past the heel. A waffle outsole provides traction, while co-branding appears on the heel and sockliner."
  )
s15 =
  Sneaker.create(
    name: "Air Force 1 '07' Triple White",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/251353/1.jpg",
    brand: "Nike",
    price: 114,
    description:
      "Here, the silhouette is seen in its full, unadorned form with a full leather upper with a tonal white woven tongue logo and a silver AF1 lace dubrae. A classic white midsole covers the genre-defining Air unit, and a white outsole finishes the model."
  )
s16 =
  Sneaker.create(
    name: "Union LA X Dunk Low 'Passport Pack - Argon'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/292478/1.jpg",
    brand: "Nike",
    price: 327,
    description:
      "Drawing from the three-pice 'Passport Pack' which takes inspiration from the early '90s days of the Union crew is the Union LA x Nike Dunk Low 'Argon.' Each style from the pack pays homage to the cities the retailer called or calls home, New York, Los Angeles, and Tokyo. It features unfinished red stitching and a tearaway ripstop upper that reveals a leather underlay in varying shades of blue. On the lateral side is a yellow 'UN/LA' tag with a heel emblem marked with Union's Frontman graphic, which reappears on the blue translucent rubber outsole."
  )
s17 =
  Sneaker.create(
    name: "Dunk Low 'Coast'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/252927/1.jpg",
    brand: "Nike",
    price: 443,
    description:
      "The Wmns Dunk Low 'Coast' features a two-tone look on its signature basketball design. The shoe's upper is built with leather, sporting a white base that's complemented by Coast. University Gold emerges on the heel patch and tongue tag branding, while underfoot, the tooling appears in further white and Coast. The outsole features a concentric pattern drawn from the Air Jordan 1 to provide traction."
  )
s18 =
  Sneaker.create(
    name: "Travis Scott X Dunk Low Premium QS SB 'Cactus Jack'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/168052/1.jpg",
    brand: "Nike",
    price: 2318,
    description:
      "Travis Scott teamed up with Nike to create the Travis Scott x SB Dunk Low PRM QS 'Cactus Jack.' Featuring a patchwork design, the shoe's upper emerges with a tan suede base accented by plaid on the quarter panel and paisley on the overlays. The overlays themselves are designed to wear away and reveal an elephant print, while the lateral side Swoosh sports a pink finish. Cactus Jack branding emerges on the tongue tag, while a rubber outsole is included for traction."
  )
s19 =
  Sneaker.create(
    name: "Fragment Design X Travis Scott X Air Jordan 1 Retro Low",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/267414/1.jpg",
    brand: "Air Jordan",
    price: 2375,
    description:
      "The Fragment Design x Travis Scott x Air Jordan 1 Retro Low released as part of a collaboration with the Houston rapper and Japanese imprint. Featuring a colorway that recalls previous fragment design collaborations, the shoe's upper is built with a white leather base, overlaid by black and royal blue and complemented by inverted Swoosh branding on the lateral side. The heel patch of the left shoe includes Cactus Jack branding and a smiley face logo, while fragment's lightning bolt marks the right shoe. Underfoot, a two-tone rubber cupsole anchors the design."
  )
s20 =
  Sneaker.create(
    name: "Travis Scott X Air Jordan 4 Retro 'Cactus Jack'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/803976/1.jpg",
    brand: "Air Jordan",
    price: 1225,
    description:
      "The Travis Scott x Air Jordan 4 Retro 'Cactus Jack' honors the rappers hometown of Houston. Its palette borrows from the team colors of the citys former Oilers football team, and features a Durabuck leather upper in University Blue, while its insole and branding are dressed in Varsity Red. Completing the look are a black lace cage and speckled light blue heel panel."
  )
s21 =
  Sneaker.create(
    name: "Travis Scott X Air Jordan 4 Retro 'Purple Suede - White Midsole'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/149292/1.jpg",
    brand: "Air Jordan",
    price: 18_500,
    description:
      "Unreleased to the public and only available as a friends-and-family exclusive in July 2019, the Travis Scott x Nike Air Jordan 4 Retro 'Purple Suede - White Midsole' was worn by the Houston rapper at several different events through the year. The sneaker is dressed in purple suede with black grid mesh, matte lace wings and semi-transparent eyestays. Scott's name can be found under the left tongue and a Cactus Jack logo in red graces the right heel. Visible Air tech and translucent outsole rubber outsole finalize the design."
  )
s22 =
  Sneaker.create(
    name: "Sean Wotherspoon X Air Max 1/97 'Sean Wotherspoon'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/803324/1.jpg",
    brand: "Nike",
    price: 1274,
    description:
      "As winner of the 'Vote Forward' campaign, this Sean Wotherspoon-designed hybrid blends the upper of an Air Max 97 with the sole of an Air Max 1, and was (naturally) released on Air Max Day in 2018. The sneakers multicolored upper and pull tabs are decked in corduroy, and completing the look are Velcro tongue patches and an Infrared Air unit."
  )
s23 =
  Sneaker.create(
    name: "Union LA X Air Jordan 4 Retro 'Off Noir'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/199241/1.jpg",
    brand: "Air Jordan",
    price: 942,
    description:
      "Released in August 2020, the Union LA x Air Jordan 4 Retro is a follow-up to an Air Jordan 1 collaboration from 2018. Built with black suede, the upper includes mesh on the toe box and collar. Translucent wings mark the quarter panel, while the classic eyelets appear in black and white. Contrast stitching emerges throughout, while the Air Jordan tongue tag sports an inside-out aesthetic. The side wall includes 'UN/LA' branding, while underfoot, a yellowed midsole contributes to the retro look, with visible Air in the heel providing cushioning."
  )
s24 =
  Sneaker.create(
    name: "Air Jordan 11 Retro 'Cool Grey' 2010",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/011286/1.jpg",
    brand: "Air Jordan",
    price: 476,
    description:
      "Bringing back the popular 2001 colorway, the Air Jordan 11 Retro 'Cool Grey' 2010 dropped in 2010. Built with a nubuck base, the shoe's upper appears in grey, overlaid by darker grey patent leather on the mudguard. Underfoot, a white phylon midsole houses full-length Air to provide cushioning and contrast, working with a partially visible carbon-fiber shank plate for stability. Herringbone pods on the rubber outsole provide traction."
  )
s25 =
  Sneaker.create(
    name: "Zoom Kobe 6 'Grinch'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/041405/1.jpg",
    brand: "Nike",
    price: 735,
    description:
      "Released on Christmas Day 2010, the Zoom Kobe 6 'Grinch' features a lime green colorway that recalls Dr. Suess' infamous holiday grouch. However, the shoe itself was actually inspired by the green mamba, a colorful take on Bryant's Black Mamba nickname. The shoe's snakeskin-textured upper further plays to that inspiration, while Varsity Red adds to the Christmas look. Zoom Air and an external heel counter support the fit."
  )
s26 =
  Sneaker.create(
    name: "Zoom Kobe 6 'Prelude'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/042044/1.jpg",
    brand: "Nike",
    price: 1460,
    description:
      "Part of an eight-shoe capsule leading up to the release of the Kobe 9, the Zoom Kobe 6 'Prelude' features a colorful graffiti design sporting a variety of images, incuding palm trees and sharks. The design is inspired by the eclectic Venice, California, while the design itslef is put on an upper with a snakeskin texture. Zoom Air provides cushioning in the midsole, with a heel counter adding stability."
  )
s27 =
  Sneaker.create(
    name: "Kobe 8 System+ 'All Star - Extraterrestrial'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/041855/1.jpg",
    brand: "Nike",
    price: 849,
    description:
      "Part of the Area 72 collection, the Kobe 8 System+ 'All Star - Extraterrestrial' plays off the 2013 NBA All-Star Game's host city of Houston. The shoe's Engineered Mesh upper features an orange and white swirling design modeled after the surface of a planet, accented by Sport Turquoise hits sporting unique details. The contrasting white midsole houses Zoom Air, while the lining and insole feature an interstellar graphic."
  )
s28 =
  Sneaker.create(
    name: "Kobe 9 Elite 'All Star - Gumbo League Maestro'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/042075/1.jpg",
    brand: "Nike",
    price: 645,
    description:
      "Also known as the 'Gumbo League,' the Kobe 9 Elite 'All Star - Maestro' was part of the 2014 NBA All-Star collection. Built with a black and white Flyknit upper, the extra-high-top is contrasted with gold accents on the Swoosh and branding, while myriad New Orleans-inspired motifs emerge on the heel and sockliner. The shoe is finished with a glow-in-the-dark green outsole."
  )
s29 =
  Sneaker.create(
    name: "Zoom KD 4 'Aunt Pearl'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/041692/1.jpg",
    brand: "Nike",
    price: 750,
    description:
      "The Zoom KD 4 'Aunt Pearl' dropped in 2012 as part of Nikes 'Think Pink' campaign in support of the Kay Yow Cancer Fund. Named after the athletes late aunt, Kevin Durants signature shoe is dressed in monochromatic pink with contrasting black accents. An all-over pearl graphic covers the heel, medial-side quarter panel and tongue, the latter adorned with the Kay Yow logo."
  )
s30 =
  Sneaker.create(
    name: "Zoom KD 4 'All Star - Galaxy'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/041658/1.jpg",
    brand: "Nike",
    price: 717,
    description:
      "The Galaxy edition features a metallic silver synthetic upper and total orange accenting. Additional features include a NASA-inspired constellation graphic on the tongue, galaxy print lining the interior and a starry speckled black midsole. February 2012 very limited release."
  )
s31 =
  Sneaker.create(
    name: "Zoom KD 4 'BHM'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/041644/1.jpg",
    brand: "Nike",
    price: 500,
    description:
      "The Zoom KD 4 'BHM' released as part of Nike's 2012 Black History Month collection. Featuring a midfoot strap with a vibrant print inspired by African textiles, the pattern also makes its way to the lining and underneath the icy blue outsole. The rest of the Hyperfuse upper is finished in a mix of black and Midnight Fog, while 'BHM' branding appears on the tongue. Zoom Air provides cushioning."
  )
s32 =
  Sneaker.create(
    name: "Zoom Lebron 4 'All-Star'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/040573/1.jpg",
    brand: "Nike",
    price: 650,
    description:
      "LeBron James revealed the Nike Zoom LeBron 4 'All-Star' in 2007, when he wore them during the skills challenge during NBA All-Star Weekend. The sneaker marks a departure from the boot-like LeBron 3, with a futuristic design that features flowing lines, a curved ankle strap and minimal overlays. Used for the first time on a basketball shoe since 2003, Foamposite encases the top half of the shoe while a sculpted foam midsole leads to outsole flex grooves."
  )
s33 =
  Sneaker.create(
    name: "Lebron 9 'Christmas'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/041619/1.jpg",
    brand: "Nike",
    price: 515,
    description:
      "Making its debut on Christmas Day 2011 during a Miami Heat/Dallas Mavericks game—a rematch of the previous seasons NBA Finals—the LeBron 9 'Christmas' features a familiar mix of Spirit Red and Lucky Green. The first Nike shoe to use Hyperfuse and Flywire, the red and green look up top is supported underfoot by a Max Air unit in the midsole. Reflect Silver on the Swoosh and a silver outsole finish off the festive look."
  )
s34 =
  Sneaker.create(
    name: "Off-White X Air Jordan 5 Retro SP 'Muslin'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/151682/1.jpg",
    brand: "Air Jordan",
    price: 1200,
    description:
      "A collaboration between Virgil Abloh and Jordan Brand, the OFF-WHITE x Air Jordan 5 SP 'Muslin' is a stylized take on the silhouette. Built with faded black textile, the upper includes reflective silver detailing on the tongue. The laces and medial side sport Abloh's signature text, while underfoot, the outsole sports a pre-yellowed aesthetic."
  )
s35 =
  Sneaker.create(
    name: "Joe Freshgoods X 550 'Conversations Amongst Us'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/309030/1.jpg",
    brand: "New Balance",
    price: 227,
    description:
      "The 550 follows a staple cream colorway matched with yellowing details on the sole, New Balance 'N' logo, and stitching, appearing fresh and aged simultaneously, a possible nod to the campaign's overarching narrative of highlighting dialogues carried on from old to new generations."
  )
s36 =
  Sneaker.create(
    name: "Air Jordan 7 Retro 'Olympic' 2012",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/011596/1.jpg",
    brand: "Air Jordan",
    price: 510,
    description:
      "The 2012 Air Jordan 7 'Olympic' is a retro release of Michael Jordan's shoe at the 1992 Olympic Games on the way to a gold medal with the Dream Team. The design features an upper white and metal silver with accents from Obsidian, metallic gold, and True Red. The sneaker released in July 2012 and also includes the Olympic Jersey number '9' on the heel. The 'Olympic' originally released in 2004 and also dropped in a 2016 'Tinker Alternate' colorway combining a white / navy upper with a sprinkled midsole."
  )
s37 =
  Sneaker.create(
    name: "Air Jordan 7 Retro 'Bordeaux' 2011",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/011348/1.jpg",
    brand: "Air Jordan",
    price: 600,
    description:
      "The 2011 Air Jordan 7 Retro 'Bordeaux' offers a version of the 1992 OG colorway. Worn during the 1992 NBA All-Star Game by Michael Jordan, the 'Bordeaux' was also worn in Jordan's appearance in Michael Jackson's music video for 'Jam.' The sneaker features a suede upper black and light graphite with Bordeaux accents and a midsole of light graphite."
  )
s38 =
  Sneaker.create(
    name: "Off-White X Dunk Low 'Pine Green'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/152361/1.jpg",
    brand: "Nike",
    price: 945,
    description:
      "Emerging with Virgil Abloh's signature design touch, the OFF-WHITE x Dunk Low 'Pine Green' released as part of a three-shoe collection. The upper appears in Pine Green and white on its leather construciton, accented by an orange flag label on the lateral side and overbranding on the medial. A second lacing system overlays the first, while underfoot, a two-tone rubber cupsole provides support."
  )
s39 =
  Sneaker.create(
    name: "Off-White X Dunk Low 'University Red'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/153270/1.jpg",
    brand: "Nike",
    price: 838,
    description:
      "Part of a larger collaboration from Virgil Abloh and Nike, the OFF-WHITE x Dunk Low 'University Red' offers a unique take on the Dunk Low. The shoe's upper is built with leather in University Red and Wolf Grey, accented by a second lacing overlay over the top of the traditional laces. Exposed foam on the tongue and overbranding on the lateral side contribute to the aesthetic, while a two-tone rubber cupsole supports the fit underfoot."
  )
s40 =
  Sneaker.create(
    name: "Off-White X Dunk Low 'University Gold'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/155691/1.jpg",
    brand: "Nike",
    price: 730,
    description:
      "The OFF-WHITE x Dunk Low 'University Gold' released as part of a collection from Nike and Virgil Abloh. The shoe's leather upper appears in a mix of University Gold and Midnight Navy, with the signature flag label on the lateral side of the heel. A second lacing system overlays the first, while exposed foam emerges on the tongue. A rubber cupsole supports the shoe."
  )
s41 =
  Sneaker.create(
    name: "Off-White X Air Vapormax 'The Ten'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/801892/1.jpg",
    brand: "Nike",
    price: 1950,
    description:
      "The OFF-WHITE x Air VaporMax 'The Ten' released as part of The Ten collection from Virgil Abloh. The shoe emerges with a black Flyknit upper accented by an oversized white Swoosh, with minimalist branding that includes 'Air' above the VaporMax sole unit and 'Shoelaces' on the shoelaces. A retro-style tongue emerges in off-white, while the medial-side branding notes the silhouette's debut year."
  )
s42 =
  Sneaker.create(
    name: "Pharrel X NMD Human Race 'Inspiration Pack'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/805266/1.jpg",
    brand: "Adidas",
    price: 431,
    description:
      "This Clear Sky colorway of the Pharrell x NMD Human Race dropped in 2018 as part of the four-piece 'Inspiration' pack, each featuring a minimalist one-piece Primeknit upper with a multi-color print on the collar trim and full-length Boost cushioning underfoot. This pair contrasts its light blue upper with yellow laces and Chinese embroidery in black on the vamp."
  )
s43 =
  Sneaker.create(
    name: "Pharrel X NMD Human Race 'Yellow'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/201357/1.jpg",
    brand: "Adidas",
    price: 1500,
    description:
      "The Pharrell x NMD 'Human Race' 'EQT Yellow' feature yellow uppers with black embroidering reading 'HUMAN' and 'RACE.' This was the first Human Race model released and sold out instantly."
  )
s44 =
  Sneaker.create(
    name: "Pharrel X NMD Human Race 'Sun Glow'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/802617/1.jpg",
    brand: "Adidas",
    price: 380,
    description:
      "The Pharrell x NMD Human Race Trail 'Sun Glow' was released as part of a hiking collection in November 2017 with lightweight Primeknit in teal, backed by a stabilizing lace cage in EQT Yellow. The traditional rubber outsole design of the shoe is replaced by a enhanced-traction sawtooth pattern under the full-length Boost midsole."
  )
s45 =
  Sneaker.create(
    name: "Pharrel X NMD Trail 'Human Race'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/802618/1.jpg",
    brand: "Adidas",
    price: 301,
    description:
      "The Pharrell x NMD Trail 'Human Race' combines a khaki Primeknit upper with 'Breathe' on the vamp of the right shoe and Walk on the left. It combines orange detailing with responsive boost cushioning on a trail-ready yellow outsole."
  )
s46 =
  Sneaker.create(
    name: "Question Mid OG 'Red Toe' 2020",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/199489/1.jpg",
    brand: "Reebok",
    price: 270,
    description:
      "Releasing in August 2020, the Question Mid OG 'Red Toe' 2020 is a recreation of Allen Iverson's debut signature shoe. The standout feature is the suede toe cap, which was originally replaced by leather after the first 5,000 pairs of the shoe. Otherwise built with leather, the upper is supported underfoot by visible Hexalite in the forefoot and heel. An icy blue rubber outsole is included for traction."
  )
s47 =
  Sneaker.create(
    name: "Air Jordan 2 Retro '2004'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/010014/1.jpg",
    brand: "Air Jordan",
    price: 475,
    description:
      "Bruce Kilgore defied conventional footwear design in 1986 with the Air Jordan 2. He removed the intricacies of the shoe and instead concentrated on asymmetric and textural aspects while retaining the highest performance elements. The Air Jordan 2, re-released in 2004, features the initial color scheme with upper and black white leather detailing on the laces, lining and midsole. The Varsity Red accents on the heel counter, outsole, lining and tab highlight the colorway."
  )
s48 =
  Sneaker.create(
    name: "Union LA X Air Jordan 2 Retro SP 'Grey Fog'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/289221/1.jpg",
    brand: "Air Jordan",
    price: 321,
    description:
      "Delivering a modern take on the legacy silhouette originally released in 1986 is the Union LA x Air Jordan 2 Retro SP 'Grey Fog.' Chris Gibbs and the Union crew give the sneaker a pale blue textile upper with tonal suede construction on the mudguard and quarter panel with perforated detailing that reveals a bright blue underlay that reappears on the sneaker's molded eyelets. A yellow 'UN/LA' tag is on the lateral side and a woven tag looped over the collar displays a retro Wings logo, while an oversized Jumpman label is on the exposed foam tongue. On the bottom is a blue-tinged polyurethane midsole with encapsulated Air-sole cushioning."
  )
s49 =
  Sneaker.create(
    name: "Comme Des Garçons X Chuck Taylor All Star High 'Play'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/805852/1.jpg",
    brand: "Converse",
    price: 219,
    description:
      "A collaboration between Commes des Garçons and Chuck Taylor, the Comme des Garçons x Chuck Taylor All Star High 'Play' features a black canvas upper accented by a red peekaboo heart designed by Filip Pagowski on the lateral quarter panel. The usual Converse branding appears on the medial side, while an off-white toe cap gives way to a vuclanized rubber midsole. The shoe released alongside a white colorway."
  )
s50 =
  Sneaker.create(
    name: "Comme Des Garçons X Chuck 70 OX 'Play'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/802071/1.jpg",
    brand: "Converse",
    price: 233,
    description:
      "A collaboration between Converse and Comme des Garçons founder Rei Kawakubo, the Comme des Garçons x Chuck 70 Ox 'Play' features a look designed by graphic artist Filip Pagowski. The shoe's Milk upper is built with canvas, accented by an oversized heart design on the quarter panel. Underfoot, a classic vulcanized midsole supports the fit."
  )
s51 =
  Sneaker.create(
    name: "Kobe 9 EM 'Bruce Lee",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/042105/1.jpg",
    brand: "Nike",
    price: 1150,
    description:
      "The first low-top edition of Kobe Bryant's ninth signature shoe, the Kobe 9 Em 'Bruce Lee' brings back the 'Bruce Lee' colorway. Featuring University Gold throughout its Engineered Mesh upper, contrasting Red hits emerge on the tongue logo and eyelets. Black on the outsole, Swoosh and heel finish off the look inspired by the famous martial artist."
  )
s52 =
  Sneaker.create(
    name: "Zoom Kobe 7 'All Star - Galaxy'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/041655/1.jpg",
    brand: "Nike",
    price: 1132,
    description:
      "Releasing for the 2012 All-Star game alongside 'Galaxy' themed Air Foamposite 1s, LeBron 9s, and Zoom KD 4s. The Nike Zoom Kobe 7 All Star 'Galaxy' features a NASA-inspired Black Mamba mission patch on the heel, a black midsole, and a glow-in-the-dark outsole with a Supernova print on the upper."
  )
s53 =
  Sneaker.create(
    name: "Zoom Kobe 7 Supreme 'Christmas'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/041621/1.jpg",
    brand: "Nike",
    price: 975,
    description:
      "Due to a lockout, the 2011-2012 NBA seasons didn't start until Christmas Day, leading Nike to release a series of festive colorways. This Zoom Kobe 7 Supreme 'Christmas' was among them, with a Violet Pop upper accented by Volt on the Flywire cables, neoprene ankle sleeve, heel counter and sole. A subtle cheetah print emerges throughout the forefoot, while Action Red laces tie together the festive look."
  )
s54 =
  Sneaker.create(
    name: "Zoom KD 4 'Easter'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/041666/1.jpg",
    brand: "Nike",
    price: 670,
    description:
      "Zoom KD 4 'Easter' celebrates the shoes namesake holiday with a Hyperfuse upper finished in pastel metallic hue that Nike calls Mint Candy. A darker shade of New Green appears on the Adaptive Fit synthetic strap, adorned with a large Swoosh. The lightweight upper sits atop a midsole that packs a Zoom unit in the forefoot for responsive low-profile cushioning."
  )
s55 =
  Sneaker.create(
    name: "Air Jordan 4 Retro 'Black Cat' 2006",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/010387/1.jpg",
    brand: "Air Jordan",
    price: 1000,
    description:
      "Dropping in 2006, the Air Jordan 4 'Black Cat' features a stealthy design that plays off Michael Jordans feline nickname. The nubuck upper is finished entirely in black, with matching black coloring used on the shoes wings, mesh quarter panels and heel tab, the latter adorned with Jumpman branding. A second Jumpman hit appears on the tongue tag, finished in grey to disrupt the monochromatic color scheme."
  )
s56 =
  Sneaker.create(
    name: "Air Jordan 10 Retro 'Steel' 2013",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/011818/1.jpg",
    brand: "Air Jordan",
    price: 500,
    description:
      "An October 2013 release, the Air Jordan 10 Retro 'Steel' 2013 is a retro of an OG 1994 colorway. Featuring a white tumbled leather upper, contrasting black on the eyestay and collar is complemented by Steel Grey accents. The outsole, with its signature bars that highlight Michael Jordan's early career achievements, also features a mix of black and Steel Grey."
  )
s57 =
  Sneaker.create(
    name: "Air Jordan 13 Retro 'Flint' 2020",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/156807/1.jpg",
    brand: "Air Jordan",
    price: 305,
    description:
      "The Air Jordan 13 Retro 'Flint' 2020 released in 2020 with a look pulled from the late 90s. The shoe's signature overlay appears in blue, accented by reflective detailing. The heel sports Flint Grey suede, while a hologram logo stands out on the ankle. Underfoot, the panther's paw midsole houses Air for cushioning, with a herringbone outsole for traction."
  )
s58 =
  Sneaker.create(
    name: "Air Jordan 13 Retro 'Bred' 2013",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/011685/1.jpg",
    brand: "Air Jordan",
    price: 410,
    description:
      "Originally released in 1997, the Air Jordan 13 'Bred' would not see its first retro until 2004, along with six other colorways. In 2013 and then again in 2017, the Air Jordan 13 Retro 'Bred' returned to racks. Inspired by the nickname 'Black Cat' by Michael Jordan, the Air Jordan 13 sole imitates a panther's paw print and heel and outsole holograms depict a cat's glowing eyes."
  )
s59 =
  Sneaker.create(
    name: "Air Max 1 SP 'Liquid Gold'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/052482/1.jpg",
    brand: "Nike",
    price: 1000,
    description:
      "The Air Max 1 SP 'Liquid Gold' shines with a gleaming metallic gold finish throughout the upper. The shoes premium look is enhanced with a logo badge on the heel, perforated leather on the lining and matching gold speckling on an off-white midsole. A clever touch sees 'Au,' the symbol for gold on the periodic table, inscribed on the tongue tag."
  )
s60 =
  Sneaker.create(
    name: "Yeezy Boost 700 'Mauve'",
    image: "https://cdn.flightclub.com/1500/TEMPLATE/805204/1.jpg",
    brand: "Adidas",
    price: 450,
    description:
      "The somber color scheme of the Yeezy Boost 700 'Mauve' blends black and purplish grey across its signature multi-layered upper. The complex arrangement showcases different varieties of mesh complemented with suede and textured leather paneling, all rising above a tonal sculpted midsole brightened with pops of neon green. Exterior branding is limited to understated Three-Stripes on the quarter panel and an adidas logo embossed on the outsole."
  )
puts "done seeding..."
