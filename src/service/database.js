
const dataBase = [
  //////////////////////////////////////////action[0]/////////////////////////////
  [
    {
      name: 'Willow',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        '20 years after vanquishing the wicked queen Bavmorda, the sorcerer Willow Ufgood leads a group of misfits on a dangerous rescue mission into the unknown.'
    },
    {
      name: 'Andor',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        "Prequel series to Star Wars' 'Rogue One'. In an era filled with danger, deception and intrigue, Cassian will embark on the path that is destined to turn him into a Rebel hero."
    },
    {
      name: 'The Guardians of the Galaxy Holiday Special',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        'Star-Lord, Drax, Rocket, Mantis, and Groot engage in some spirited shenanigans in an all-new original special created for Disney+.'
    },
    {
      name: 'Indiana Jones and the Dial of Destiny',
      genre: '\nAction, Adventure            ',
      informaition: '\nThe plot is unknown at this time.'
    },
    {
      name: 'Black Panther: Wakanda Forever',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
    },
    {
      name: 'Avatar: The Way of Water',
      genre: '\nAction, Adventure, Fantasy            ',
      informaition: '\n' +
        "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet."
    },
    {
      name: 'Troll',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'Deep in the Dovre mountain, something gigantic wakes up after a thousand years in captivity. The creature destroys everything in its path and quickly approaches Oslo.'
    },
    {
      name: 'Violent Night',
      genre: '\nAction, Comedy, Crime            ',
      informaition: '\n' +
        'When a group of mercenaries attack the estate of a wealthy family, Santa Claus must step in to save the day (and Christmas).'
    },
    {
      name: 'Willow',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'A young farmer is chosen to undertake a perilous journey in order to protect a special baby from an evil queen.'
    },
    {
      name: 'Strange World',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'The legendary Clades are a family of explorers whose differences threaten to topple their latest and most crucial mission.'
    },
    {
      name: 'Game of Thrones',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.'
    },
    {
      name: 'Black Adam',
      genre: '\nAction, Adventure, Fantasy            ',
      informaition: '\n' +
        'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.'
    },
    {
      name: 'Transformers: Rise of the Beasts',
      genre: '\nAction, Adventure, Sci-Fi            ',
      informaition: '\n' +
        "Plot unknown. Reportedly based on the 'Transformers' spinoff 'Beast Wars' which feature robots that transform into robotic animals."
    },
    {
      name: 'House of the Dragon',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.'
    },
    {
      name: 'Guardians of the Galaxy Vol. 3',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.'
    },
    {
      name: 'Bullet Train',
      genre: '\nAction, Comedy, Thriller            ',
      informaition: '\n' +
        'Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.'
    },
    {
      name: 'The Lord of the Rings: The Rings of Power',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        "Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth."
    },
    {
      name: 'Everything Everywhere All at Once',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        'An aging Chinese immigrant is swept up in an insane adventure, in which she alone can save the world by exploring other universes connecting with the lives she could have led.'
    },
    {
      name: 'Echo 3',
      genre: '\nAction, Drama, Thriller            ',
      informaition: '\n' +
        'When Amber Chesborough goes missing along the Colombia-Venezuela border, her brother and her husband struggle to find her against the backdrop of a secret war.'
    },
    {
      name: 'Khakee: The Bihar Chapter',
      genre: '\nAction, Crime, Drama            ',
      informaition: '\n' +
        'As a righteous cop pursues a merciless criminal in Bihar, he finds himself navigating a deadly chase and a moral battle mired in corruption.'
    },
    {
      name: 'SAS Rogue Heroes',
      genre: '\nAction, Drama, Thriller            ',
      informaition: '\n' +
        'SAS: Rogue Heroes charts the creation of the famed Special Forces unit. Based on the book by Ben Macintyre.'
    },
    {
      name: 'Top Gun: Maverick',
      genre: '\nAction, Drama            ',
      informaition: '\n' +
        "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it."
    },
    {
      name: 'The Boys',
      genre: '\nAction, Comedy, Crime            ',
      informaition: '\n' +
        'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.'
    },
    {
      name: 'Warrior Nun',
      genre: '\nAction, Drama, Fantasy            ',
      informaition: '\n' +
        'After waking up in a morgue, an orphaned teen discovers she now possesses superpowers as the chosen Halo Bearer for a secret sect of demon-hunting nuns.'
    },
    {
      name: 'Chainsaw Man',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Following a betrayal, a young man left for the dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.'
    },
    {
      name: 'Avatar',
      genre: '\nAction, Adventure, Fantasy            ',
      informaition: '\n' +
        'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
    },
    {
      name: 'Devotion',
      genre: '\nAction, Drama, War            ',
      informaition: '\n' +
        "A pair of U.S. Navy fighter pilots risk their lives during the Korean War and become some of the Navy's most celebrated wingmen."
    },
    {
      name: 'All Quiet on the Western Front',
      genre: '\nAction, Drama, War            ',
      informaition: '\n' +
        "A young German soldier's terrifying experiences and distress on the western front during World War I."
    },
    {
      name: 'NCIS',
      genre: '\nAction, Crime, Drama            ',
      informaition: '\n' +
        "The cases of the Naval Criminal Investigative Service's Washington, D.C. Major Case Response Team."
    },
    {
      name: 'Emancipation',
      genre: '\nAction, Thriller            ',
      informaition: '\n' +
        'A runaway slave forges through the swamps of Louisiana on a tortuous journey to escape plantation owners that nearly killed him.'
    },
    {
      name: 'Titans',
      genre: '\nAction, Adventure, Crime            ',
      informaition: '\nA team of young superheroes combat evil and other perils.'
    },
    {
      name: 'Kantara',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'It involves culture of Kambala and Bhootha Kola. A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leads to war between villagers and evil forces. Will he be able to regain peace in the village?'
    },
    {
      name: 'The Northman',
      genre: '\nAction, Adventure, Drama            ',
      informaition: "\nA young Viking prince is on a quest to avenge his father's murder."
    },
    {
      name: 'The Batman',
      genre: '\nAction, Crime, Drama            ',
      informaition: '\n' +
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
    },
    {
      name: 'God of War: Ragnarök',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\nKratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.'
    },
    {
      name: 'Enola Holmes 2',
      genre: '\nAction, Adventure, Crime            ',
      informaition: '\n' +
        'Now a detective-for-hire, Enola Holmes takes on her first official case to find a missing girl as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends - and Sherlock himself - to unravel.'
    },
    {
      name: 'Die Hard',
      genre: '\nAction, Thriller            ',
      informaition: '\n' +
        'A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.'
    },
    {
      name: "Tom Clancy's Jack Ryan",
      genre: '\nAction, Drama, Thriller            ',
      informaition: '\n' +
        'Up-and-coming CIA analyst, Jack Ryan, is thrust into a dangerous field assignment after he uncovers a pattern in terrorist communication that launches him into the center of a dangerous gambit.'
    },
    {
      name: 'The Woman King',
      genre: '\nAction, Drama, History            ',
      informaition: '\n' +
        'A historical epic inspired by true events that took place in The Kingdom of Dahomey, one of the most powerful states of Africa in the 18th and 19th centuries.'
    },
    {
      name: 'Shantaram',
      genre: '\nAction, Adventure, Crime            ',
      informaition: '\n' +
        "Lindsay, Australian character, sentenced to a long, harsh prison term after life spirals out of control, he escapes and makes his way to Bombay. Befriended by a Prabaker, by a twist of fate Lin ends up living in Prabaker's slum."
    },
    {
      name: 'My Name Is Vendetta',
      genre: '\nAction, Crime, Drama            ',
      informaition: '\n' +
        'After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.'
    },
    {
      name: 'The Rookie',
      genre: '\nAction, Crime, Drama            ',
      informaition: '\n' +
        "Starting over isn't easy, especially for John Nolan who, after a life-altering incident, is pursuing his dream of joining the LAPD. As their oldest rookie, he's met with skepticism from those who see him as just a walking midlife crisis."
    },
    {
      name: 'Top Gun',
      genre: '\nAction, Drama            ',
      informaition: '\n' +
        "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom."
    },
    {
      name: 'Thor: Love and Thunder',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.'
    },
    {
      name: 'The Mandalorian',
      genre: '\nAction, Adventure, Fantasy            ',
      informaition: '\n' +
        'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.'
    },
    {
      name: 'Poker Face',
      genre: '\nAction, Crime, Thriller            ',
      informaition: '\n' +
        'A tech billionaire hosts a high-stakes poker game between friends, but the evening takes a turn when long-held secrets are revealed, an elaborate revenge plot unfolds, and thieves break in.'
    },
    {
      name: '9-1-1',
      genre: '\nAction, Drama, Thriller            ',
      informaition: '\n' +
        'Explores the high-pressure experiences of the first responders who are thrust into the most frightening, shocking, and heart-stopping situations.'
    },
    {
      name: 'Black Panther',
      genre: '\nAction, Adventure, Sci-Fi            ',
      informaition: '\n' +
        "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
    },
    {
      name: 'Vikings',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.'
    },
    {
      name: 'Rogue One: A Star Wars Story',
      genre: '\nAction, Adventure, Sci-Fi            ',
      informaition: '\n' +
        "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction."
    }
  ],





  ////////////////////////////////drama[1]///////////////////////////////////////////////////////////////////
  [
    {
      name: 'The Hunger Games: The Ballad of Songbirds and Snakes',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'Coriolanus Snow mentors and develops feelings for the female District 12 tribute during the 10th Hunger Games.'
    },
    {
      name: 'The Last Ship',
      genre: '\nAction, Drama, Sci-Fi            ',
      informaition: '\n' +
        "The crew of a naval destroyer is forced to confront the reality of a new existence when a pandemic kills off most of the earth's population."
    },
    {
      name: 'Black Crab',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'In a post-apocalyptic world, six soldiers on a covert mission must transport a mysterious package across a frozen archipelago. Noomi Rapace stars.'
    },
    {
      name: 'Fallout',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\nAdaptation of the video game set in a post apocalyptic America.'
    },
    {
      name: 'How I Live Now',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'An American girl, sent to the English countryside to stay with relatives, finds love and purpose while fighting for her survival as war envelops the world around her.'
    },
    {
      name: 'The Last Son',
      genre: '\nAction, Adventure, Crime            ',
      informaition: '\nAn outlaw attempts to end his evil family line.'
    },
    {
      name: '86',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'The Republic of San Magnolia is at war with its neighboring country, the Empire of Giad. Both sides use unmanned drones to conduct a "war without casualties". The story follows Lena as she commands a squad of drones called the 86.'
    },
    {
      name: 'Legend of the Galactic Heroes',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'Various people, especially two rising commanders, cope with a massive continual space conflict between two interstellar nations.'
    },
    {
      name: 'Tomorrow, When the War Began',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'When their country is invaded and their families are taken, eight unlikely teenagers band together to fight.'
    },
    {
      name: 'Metal Gear Solid V: The Phantom Pain',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'After awakening from a nine year coma, Big Boss forms a new mercenary group called, Diamond Dogs, and teams up with his former rival, Ocelot, to track down the men responsible for the destruction of MSF.'
    },
    {
      name: 'Batman: Death in the Family',
      genre: '\nAnimation, Action, Crime            ',
      informaition: '\n' +
        'An anthology series of 5 DC showcase: Death in the Family, Sgt. Rock, Adam Strange, The Phantom Stranger and Death.'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        'Note: The SuperMarioLogan channel is not available due to Logan getting sued by Nintendo in 2021. He does upload on a new channel which uses the new plush toys and renamed the characters.'
    },
    {
      name: 'Mobile Suit Gundam',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'In the war between the Earth Federation and Zeon, a young and inexperienced crew find themselves on a new spaceship. Their best hope of making it through the conflict is the Gundam, a giant humanoid robot, and its gifted teenage pilot.'
    },
    {
      name: 'Call of Duty: Advanced Warfare',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'Set in the year 2054, a private military corporation (PMC) has emerged with the power to rescue humanity from a devastated world struggling to rebuild after a global attack on its military and infrastructure.'
    },
    {
      name: 'Monsters: Dark Continent',
      genre: '\nAction, Drama, Horror            ',
      informaition: "\nMonsters' reign continues to spread throughout the Earth."
    },
    {
      name: 'Depth of Time',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'Thrust through space and time a young princess is forced to choose between her past and the future.'
    },
    {
      name: 'Wolfenstein II: The New Colossus',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'In 1961, BJ Blazkowicz and his ragtag team of allies arrive in Nazi-controlled America on a mission to recruit the boldest resistance leaders left and restart the American Revolution.'
    },
    {
      name: 'Legend of the Galactic Heroes: Die Neue These',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        `In humanity's distant future, two interstellar states-the monarchic Galactic Empire and the democratic Free Planets Alliance-are embroiled in a never-ending war. The story focuses on the ...                <a href="/title/tt7407236/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Wolfenstein: The New Order',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'After regaining consciousness following an injury sustained in World War II, legendary American commando, B.J. Blazkowicz, awakens from a coma in a dystopian Nazi dominated world of 1960s. He tries to locate the remnants of the resistance.'
    },
    {
      name: 'Appleseed',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'In a utopian society created at the end of the third world war, a female warrior who has been plucked from the badlands begins to see cracks in this new facade. And what does this community have planned for the rest of humankind?'
    },
    {
      name: "The Last Ship Prequel: Dr. Scott's Video Journal",
      genre: '\nAction, Drama, Horror            ',
      informaition: '\n' +
        'Doctor Rachel Scott outlines her theory on how global warming might have exposed the modern world to an ancient virus to which there is not any natural immunity.'
    },
    {
      name: 'Metal Gear Solid 4: Guns of the Patriots',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'When the nations of the world rely upon private military companies to fight their battles for them, renegade Liquid Ocelot emerges as the head of a potent coalition of mercenary powers. Solid Snake returns to save the world once again.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Hitomi is a girl with psychic abilities who gets transported to the magical world of Gaea. She and her friends find themselves under attack from the evil Zaibach empire, and the Guymelf ...                <a href="/title/tt0138919/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Mobile Suit Gundam I',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'A teenage boy must fight in an interplanetary war as the only available pilot to a revolutionary new giant battle robot.'
    },
    {
      name: "Mobile Suit Gundam: Char's Counterattack",
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'Amuro Ray and Char Aznable settle their rivalry once and for all during the Second Neo Zeon War.'
    },
    {
      name: 'Mobile Suit Gundam Seed',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'The discovery of an advanced model of combat mecha on their space colony throws a young man and his friends into involvement in an interplanetary war as the crew of a powerful fighting ship.'
    },
    {
      name: 'Mobile Suit Gundam: The 08th MS Team',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'During the One Year War of UC 0079, A young Earth Federation Lieutenant named Shiro Amada is sent to Earth to lead a squadron of Gundam mobile suits in Southeast Asia to fight the Duchy of ...                <a href="/title/tt0159569/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Beyond the Call to Duty',
      genre: '\nAction, Drama, Horror            ',
      informaition: '\n' +
        'Five Spec Ops, Alpha Squad, head a simple Recon Mission that turns into an all out war for survival against a wave of undead experiments. Alpha Squad must fight, not just for the sake of their own survival, but the fate of the world.'
    },
    {
      name: 'The Last Guest',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'The tragic story of a guest and his perspective of the war between the society, and the enemy bacon soldiers.'
    },
    {
      name: 'Appleseed: Ex Machina',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'With Brialeos convalescing after a mission, Deunan is assigned a new and remarkably familiar partner as a strange wave of terrorist attacks plague Olympus.'
    },
    {
      name: 'Aldnoah.Zero',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'In 1972, an ancient alien hypergate was discovered on the surface of the moon. Using this technology, humanity began migrating to Mars and settling there. After settlers discovered ...                <a href="/title/tt3544556/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Mobile Suit Gundam Unicorn',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        "A conspiracy around Laplace's Box is potentially going to start another war between the Earth Federation and Neo Zeon. Chosen by fate, Banagher Links gets the key to the box, and must follow his heart to decide what to do with it."
    },
    {
      name: 'SuperMarioLogan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        'It revolves around puppets/plush versions of Mario characters, other characters from other media, and even original characters, and it follows their bizarre life and adventures at home and at school.'
    },
    {
      name: 'Mobile Suit Gundam 0080: War in the Pocket',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'In a space colony, a young boy discovers a cadre of terrorists and innocently decides to help them.'
    },
    {
      name: 'Ace Combat 7: Skies Unknown',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'The year is 2019. The Osean government sponsored construction of a space elevator on the Usea continent to help with the reconstruction effort, after the continent was affected by the ...                <a href="/title/tt6776712/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'August 8',
      genre: '\nAction, Drama, Sci-Fi            ',
      informaition: '\n' +
        'Mother goes after her little son to get him out of a military conflict zone.'
    },
    {
      name: 'Mobile Suit Gundam II: Soldiers of Sorrow',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        `After managing to survive attacks by Zeon's Char Aznable and Garma Zabi, the crew of Federation warship White Base and its mobile suits battle Zeon forces (Ramba Ral, Ma Kube, Tri-Stars, ...                <a href="/title/tt0159510/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Mobile Suit Gundam Seed Destiny',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        `Two years after the war between the Earth Alliance and ZAFT, conflicts between the two nations heat up again. Shin Asuka, the new main character's eyes are full of sorrow as his family was ...                <a href="/title/tt0434694/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Mobile Suit Gundam 0083: Stardust Memory',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'After the One Year War, Peace was signed between Zeon and the Earth Federation. Three years later, however, some remaining forces of Zeon who never gave up steal the new Federation mobile ...                <a href="/title/tt0159567/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: '13 Sentinels: Aegis Rim',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        `In 1980s Japan, thirteen high-schoolers are thrust into a futuristic war between giant robots called "Sentinels" and mechanical Kaiju as they must fight to prevent humanity's fate of unavoidable destruction.`
    },
    {
      name: 'Mobile Suit Gundam F91',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        "After a generation of peace, the Earth Federation's new space colonies becomes a battlefield. To save his friends and family, the reluctant warrior Seabook Arno becomes the pilot of a new Gundam which bears the code name F91."
    },
    {
      name: 'Mobile Suit Gundam: The Origin I - Blue-Eyed Casval',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'Universal Century 0068, Side 3 - The Autonomous Republic of Munzo. Zeon Zum Deikun attempts to declare complete independence of Munzo from the Earth Federation Government, while he preaches...                <a href="/title/tt4483100/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Mobile Suit Gundam III: Encounters in Space',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'Amuro Ray and the rest of the White Base crew, now denominated the 13th Autonomous Corps, return to outer space to support the rest of the Earth Federation forces for the decisive battle ...                <a href="/title/tt0159511/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Metal Gear Solid: Peace Walker',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'In 1974, Snake (a.k.a. Big Boss) is no longer part of the US special forces and has his own merc team. While on a mission in South America, they encounter a strange hostile merc unit with far superior equipment than their latest tech.'
    },
    {
      name: 'Paboos',
      genre: '\nAnimation, Short, Action            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt2096564%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Izo',
      genre: '\nAction, Drama, Fantasy            ',
      informaition: '\n' +
        'An executed samurai takes an existential journey throughout time, space and eternity in search of bloody vengeance.'
    },
    {
      name: 'Sand Serpents',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        `A small group of US Army Soldiers are stranded in the remote Afghan desert. But it ain't the Taliban that's worrying them, it's these giant refugees from Tremors. In fact the big worms ...                <a href="/title/tt1319736/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Yukikaze',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Thirty-three years ago, an alien force known as the "JAM" invaded Earth through a dimensional portal over Antarctica. Earth's forces managed to drive the JAM away to a distant planet ...                <a href="/title/tt0378730/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Mobile Suit Gundam: The Origin - Advent of the Red Comet',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        `The tragic story of Char Aznable, the ace pilot known as the Red Comet, and his sister Sayla Mass unfolds against the backdrop of the events leading to the One Year War. The Zabi family's ...                <a href="/title/tt12899130/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'The Lazarus Papers',
      genre: '\nAction, Crime, Drama            ',
      informaition: '\n' +
        '"In the deep jungles of South East Asia a blood thirsty mercenary Sebastian, hunts for the thrill of the chase and victims to sell into slavery. In one operation he kills a peaceful local ...                <a href="/title/tt1247400/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    }
  ],



  //////////////////////////////////////////fantas[2]y/////////////////////////////////////////////////////////////////
  [
    {
      name: 'The Last Son',
      genre: '\nAction, Adventure, Crime            ',
      informaition: '\nAn outlaw attempts to end his evil family line.'
    },
    {
      name: 'Batman: Death in the Family',
      genre: '\nAnimation, Action, Crime            ',
      informaition: '\n' +
        'An anthology series of 5 DC showcase: Death in the Family, Sgt. Rock, Adam Strange, The Phantom Stranger and Death.'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        'Note: The SuperMarioLogan channel is not available due to Logan getting sued by Nintendo in 2021. He does upload on a new channel which uses the new plush toys and renamed the characters.'
    },
    {
      name: 'Mobile Suit Gundam',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'In the war between the Earth Federation and Zeon, a young and inexperienced crew find themselves on a new spaceship. Their best hope of making it through the conflict is the Gundam, a giant humanoid robot, and its gifted teenage pilot.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Hitomi is a girl with psychic abilities who gets transported to the magical world of Gaea. She and her friends find themselves under attack from the evil Zaibach empire, and the Guymelf ...                <a href="/title/tt0138919/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'SuperMarioLogan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        'It revolves around puppets/plush versions of Mario characters, other characters from other media, and even original characters, and it follows their bizarre life and adventures at home and at school.'
    },
    {
      name: 'Mobile Suit Gundam 0083: Stardust Memory',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'After the One Year War, Peace was signed between Zeon and the Earth Federation. Three years later, however, some remaining forces of Zeon who never gave up steal the new Federation mobile ...                <a href="/title/tt0159567/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Paboos',
      genre: '\nAnimation, Short, Action            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt2096564%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Izo',
      genre: '\nAction, Drama, Fantasy            ',
      informaition: '\n' +
        'An executed samurai takes an existential journey throughout time, space and eternity in search of bloody vengeance.'
    },
    {
      name: 'Mobile Suit Gundam Thunderbolt: Bandit Flower',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'Eight months after the One Year War, the Earth Federation attempts to secure and destroy the Psycho Zaku from the hands of a cult called South Seas Alliance.'
    },
    {
      name: 'Project Eden',
      genre: '\nAction, Adventure, Crime            ',
      informaition: '\n' +
        "Aided by an ex-military officer, a young woman becomes an unwitting fugitive after discovering that her son's catatonic state may be at the heart of a global conspiracy."
    },
    {
      name: 'Eraser - Turnabout',
      genre: '\nAction, Adventure, Crime            ',
      informaition: '\n' +
        "In this sequel to 1996 film Eraser, you take the role of the film's protagonist Witness Protection specialist and U.S. Marshal John 'The Eraser' Kruger. You must uncover a new conspiracy, shoot a lot of terrorists and solve a few puzzles."
    },
    {
      name: 'Valkyria Chronicles',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        'When Imperial forces attack the small border town of Bruhl, Welkin Gunther, son of late General Belgen Gunther, is forced to fight for his life alongside Town Watch captain Alicia Melchiott...                <a href="/title/tt1444117/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Valkyria Chronicles',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        `The Empire's Imperial Army has invaded Gallia. A young man, Lt. Welkin Gunther, the son of the late Gen. Belgen Gunther, forced himself to enlist in the militia and forming Squad 7, making ...                <a href="/title/tt1322987/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Valkyria Chronicles 4',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'The continent of Europe is engulfed in the flames of the Second European War between the Atlantic Federation and the Autocratic Eastern Imperial Alliance.'
    },
    {
      name: 'Saving for the Day',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        `Joe Bell is a penny-pinching hermit saving for the day when his real life will begin. One day he's offered a chest filled with treasure by a cryptic old man known as, "The Clockmaker." ...                <a href="/title/tt4056386/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Helix: Fabricating the Plague',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\nA Special Inside The Look At The Inside Of This Series.'
    },
    {
      name: 'The Epidemic',
      genre: '\nAction, Adventure, Crime            ',
      informaition: '\n' +
        `After a meteor crashes into the Earth's crust causing extreme devastation, an unexplained plague decimates a town's population turning people into zombies. The town's few survivors seek ...                <a href="/title/tt3643390/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Japoteurs',
      genre: '\nAnimation, Short, Action            ',
      informaition: '\nSuperman vs. Japanese spies hijacking a new super-bomber.'
    },
    {
      name: 'Valkyria Chronicles II',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt1764585%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Rare Replay',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\nA compilation of 30 Rareware games for the Xbox One.'
    },
    {
      name: 'The Darkest Hour: Visualizing an Invasion',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\nThe Stars Have A Sit Down.'
    },
    {
      name: 'Valkyria Chronicles 3: Unrecorded Chronicles',
      genre: '\nAction, Adventure, Drama            ',
      informaition: '\n' +
        'Similar to the original Valkyria Chronicles for PS3, this game takes place in the fictional land of Europa during the war in 1935, but follows the battles of the Nameless Unit rather than ...                <a href="/title/tt5665254/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Horde',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        "FMV strategy game about young servant Chauncey, who's given a land of his own for saving his king, Winthrop the Good of Franzpowanki. However, this land is targeted by ravenous impish red monsters, the Hordlings."
    },
    {
      name: "The Professor's Scary Movie Show",
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'A web based hosted horror movie show, with Paul Gerard Kennedy as "The Professor".'
    },
    {
      name: 'The Poor Hoodman',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        "The story about a group of people known as hoodies, whom one hoodman's parents died. So, the hoodman and his friends were trying to stop the robots until they met Goody Robot, which had a tragic backstory."
    },
    {
      name: 'Strange Steel Fairy Rouran',
      genre: '\nAnimation, Action, Drama            ',
      informaition: '\n' +
        `When the secret occult society, Shiromorishuua, sends a huge monster to attack Tokyo, ASY, a peace-keeping organization in Japan, retaliates with a Gousen (metal fairy). ASY's Gousen ...                <a href="/title/tt2120450/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Makazie One',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        'A story of an elite soldier on a mission to hunt down his target through an ever present war zone, leading up to an action packed climatic ending.'
    },
    {
      name: 'We the Divided',
      genre: '\nAnimation, Short, Action            ',
      informaition: '\n' +
        'An island civil war results in the separation of two childhood friends, and the construction of a barrier.'
    },
    {
      name: 'Kido senshi Gandamu 0083 stardust memory CD shinema/runga oki hogeki-sen',
      genre: '\nAction, Drama, Fantasy            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt16590488%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Kido senshi Gandamu 0083 stardust memory CD shinema 2/uchu no kagero',
      genre: '\nAction, Drama, Fantasy            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt16590542%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nAllen Shezar, the knight of Asturia.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nThe day Hitomi was transported from Earth to the magical world of Gaea.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nMillerna, youngest princess of the Asturia Throne.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nThe journey begins on board the Crusade.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nThe rescue attempt inside a Zaibach Floating Fortress.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: "\nHitomi's love affair with Allen."
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nVan Fanel, heir of the Fanelia Royal Family.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nHitomi meets her "Guardian Angel".'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Allen and his men make their way to Freid, hoping to find Van and Hitomi. Meanwhile, Hitomi learns more about Van's past and his wings. As they make their way to Freid, they encounter ...                <a href="/title/tt0905261/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Hitomi has already seen more destruction and sadness than she thought possible. Now, a stray feather allows her to see into Van's past with her special abilities. She learns what his life ...                <a href="/title/tt0905262/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        "After fleeing the burning city of Freid, Van and the others follow the Duke to learn about the secret power of Freid and the history of Atlantis. As they prep to face Zaibach, Hitomi has a bloody vision about the Duke's fate."
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Hitomi has already seen more destruction and sadness than she thought possible. Now, a stray feather causes her to see into Van's past with her special abilities. She learns what his life ...                <a href="/title/tt0905264/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'The struggle on Gaea continues and Hitomi begins to realize her importance in this war. Allen and company prove their loyalty and are cleared of any charges. Meanwhile, amidst all the ...                <a href="/title/tt0905265/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Wishing to get away from all the fighting, Hitomi finds herself suddenly transported back to Earth on the very day that she originally left. She has one chance to get back to Gaea, but it ...                <a href="/title/tt0918181/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt0935942%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        "Van is gravely injured after the battle. They bring him to the ship of Dryden, Millerna's fiancé. He tells them that Guymelefs like Escaflowne are cursed. To heal Van, they need to fix Escaflowne. But, unfortunately, it's not that simple."
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Folken infuses Naria and Eriya with Fortune Blood to increase their luck. With this, they should be able to finally take on Van. On the day of the wedding, Hitomi reads Millerna's fortune. ...                <a href="/title/tt0935944/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Hitomi, Van, and Allen come face to face with the one behind Zaibach-Dornkirk. He tells them how he came to Gaea and the reason behind his grand plot. When they are imprisoned, Van must use his connection to Escaflowne to rescue them.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Folken sends out Naria and Eriya after the Escaflowne as Van hovers between life and death. Meanwhile, Dryden has discovered what he thinks is the location to Atlantis. Hitomi finds that ...                <a href="/title/tt0935946/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    }
  ],


  /////////////////////////////////////comedy/////////////////////////////////////////////
  [
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        'Note: The SuperMarioLogan channel is not available due to Logan getting sued by Nintendo in 2021. He does upload on a new channel which uses the new plush toys and renamed the characters.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Hitomi is a girl with psychic abilities who gets transported to the magical world of Gaea. She and her friends find themselves under attack from the evil Zaibach empire, and the Guymelf ...                <a href="/title/tt0138919/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'SuperMarioLogan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        'It revolves around puppets/plush versions of Mario characters, other characters from other media, and even original characters, and it follows their bizarre life and adventures at home and at school.'
    },
    {
      name: 'Saving for the Day',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        `Joe Bell is a penny-pinching hermit saving for the day when his real life will begin. One day he's offered a chest filled with treasure by a cryptic old man known as, "The Clockmaker." ...                <a href="/title/tt4056386/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Rare Replay',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\nA compilation of 30 Rareware games for the Xbox One.'
    },
    {
      name: 'The Horde',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        "FMV strategy game about young servant Chauncey, who's given a land of his own for saving his king, Winthrop the Good of Franzpowanki. However, this land is targeted by ravenous impish red monsters, the Hordlings."
    },
    {
      name: "The Professor's Scary Movie Show",
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'A web based hosted horror movie show, with Paul Gerard Kennedy as "The Professor".'
    },
    {
      name: 'The Poor Hoodman',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        "The story about a group of people known as hoodies, whom one hoodman's parents died. So, the hoodman and his friends were trying to stop the robots until they met Goody Robot, which had a tragic backstory."
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nAllen Shezar, the knight of Asturia.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nThe day Hitomi was transported from Earth to the magical world of Gaea.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nMillerna, youngest princess of the Asturia Throne.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nThe journey begins on board the Crusade.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nThe rescue attempt inside a Zaibach Floating Fortress.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: "\nHitomi's love affair with Allen."
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nVan Fanel, heir of the Fanelia Royal Family.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\nHitomi meets her "Guardian Angel".'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Allen and his men make their way to Freid, hoping to find Van and Hitomi. Meanwhile, Hitomi learns more about Van's past and his wings. As they make their way to Freid, they encounter ...                <a href="/title/tt0905261/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Hitomi has already seen more destruction and sadness than she thought possible. Now, a stray feather allows her to see into Van's past with her special abilities. She learns what his life ...                <a href="/title/tt0905262/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        "After fleeing the burning city of Freid, Van and the others follow the Duke to learn about the secret power of Freid and the history of Atlantis. As they prep to face Zaibach, Hitomi has a bloody vision about the Duke's fate."
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Hitomi has already seen more destruction and sadness than she thought possible. Now, a stray feather causes her to see into Van's past with her special abilities. She learns what his life ...                <a href="/title/tt0905264/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'The struggle on Gaea continues and Hitomi begins to realize her importance in this war. Allen and company prove their loyalty and are cleared of any charges. Meanwhile, amidst all the ...                <a href="/title/tt0905265/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Wishing to get away from all the fighting, Hitomi finds herself suddenly transported back to Earth on the very day that she originally left. She has one chance to get back to Gaea, but it ...                <a href="/title/tt0918181/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt0935942%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        "Van is gravely injured after the battle. They bring him to the ship of Dryden, Millerna's fiancé. He tells them that Guymelefs like Escaflowne are cursed. To heal Van, they need to fix Escaflowne. But, unfortunately, it's not that simple."
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Folken infuses Naria and Eriya with Fortune Blood to increase their luck. With this, they should be able to finally take on Van. On the day of the wedding, Hitomi reads Millerna's fortune. ...                <a href="/title/tt0935944/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Hitomi, Van, and Allen come face to face with the one behind Zaibach-Dornkirk. He tells them how he came to Gaea and the reason behind his grand plot. When they are imprisoned, Van must use his connection to Escaflowne to rescue them.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Folken sends out Naria and Eriya after the Escaflowne as Van hovers between life and death. Meanwhile, Dryden has discovered what he thinks is the location to Atlantis. Hitomi finds that ...                <a href="/title/tt0935946/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Hitomi, Allen, and Van finally confront the Zaibach Emperor Dornkirk. Later, the wedding ceremony will finally commence. Bride-to-be Millerna asks Hitomi for a tarot card reading, and she ...                <a href="/title/tt0935947/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Hitomi surrenders to the fortune-enhanced soldiers Naria and Eriya. But the fortune-enhancing process has some unpredictable side-effects! After her escape, Hitomi and Van are summoned to ...                <a href="/title/tt0935948/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Folken goes to Asturia seeking Asylum. As an offering, he reveals everything about Zaibach including what they plan on doing next. The kingdom prepares for war, and Allen asks Hitomi to ...                <a href="/title/tt0935949/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Hitomi and Van go to meet with Folken in the ruins of Fanelia. Folken tells him about the day he abandoned his home and how he came to work under Dornkirk. He reveals his true motives and wishes. But is it what Van also wants?'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Hitomi opens the way to the Mystic Valley, and when they arrive, Van and Allen are transported to different planes. As Hitomi and the others find out more about Atlantis, Hitomi is told the dark truth about her powers and predictions.'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Folken sends out Naria and Eriya after the Escaflowne as Van hovers between life and death. Meanwhile, Dryden has discovered what he thinks is the location to Atlantis. Hitomi finds that ...                <a href="/title/tt0935952/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Vision of Escaflowne',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        'Wishing to get away from all the fighting, Hitomi finds herself suddenly transported back to Earth on the very day that she originally left. She has one chance to get back to Gaea, but it ...                <a href="/title/tt0935953/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: "The Professor's Scary Movie Show",
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        `Regular segments - "Horror Host Tome" looking at Shane Porteous' Deadly Earnest character; and "Witch Cinders' Creepy Commercials". Presenting the movie "The Wasp Woman" starring Susan Cabot. Col also gets up to no good.`
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt10427774%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\nBowser Junior and Cody get trapped in the pantry!'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        'Chef Pee Pee poisons Bowser making him look green. Meanwhile Junior learns how to fend off zombies.'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11459592%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11459602%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11459720%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11459728%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        'Mario and Rosalina find a turtle in the road. Rosalina wants to keep it but Mario can not let go of his past.'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11459778%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11459792%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11461078%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11461098%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11461102%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11461108%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Super Mario Logan',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        "After Mario finds out that Rosalina's Ex Boyfriend is a successful fighter Mario challenges him to a fight to win Rosalina."
    }
  ],








  /////////////////////////////////horror////////////////////////////////////////
  [
    {
      name: 'The Challenge: USA',
      genre: '\nAction, Drama, Game-Show            ',
      informaition: '\n' +
        'Contestants from the CBS reality shows "Big Brother," "Survivor," "Love Island" and "The Amazing Race" compete in games and missions for a cash prize.'
    },
    {
      name: 'CKY 3',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        'Based around skateboarding and crazy stunts. Starring the CKY crew, Bam Margera, Brandon DiCamillo, etc.'
    },
    {
      name: 'Ice Poseidon show',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        'Follow the story of autistic Paul "Ding Ding" Denino, who leaves his childhood home in Florida and moves to LA to become the next Howard Stern.'
    },
    {
      name: 'Ilha Record',
      genre: '\nAction, Drama, Mystery            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt15246046%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Achter gesloten deuren',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt2432464%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Under the Skin of the Tehran City',
      genre: '\nAction, Biography, Drama            ',
      informaition: '\n' +
        'The short film under the skin of Tehran has more cinematic mode than a short film. This film with a semi-real narration of the life of an underground group of rap and criminal music and the life story of Iranian rappers'
    },
    {
      name: 'Power Couple Brasil',
      genre: '\nAction, Comedy, Drama            ',
      informaition: '\n' +
        'An unusual and electrifying reality show with famous couples where only love is not enough to win a millionaire prize.'
    },
    {
      name: 'Triple Rush',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        `An insider's look at the chaotic workings of 3 different NYC courier companies as they battle for survival in this intensely competitive industry. We'll witness the bike messengers' ...                <a href="/title/tt1873483/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Slave Hunter',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'The underbelly of the horrific sex trade industry and the slaves hunters attempting to end the tragedy. The team of veteran slave hunter James Varghese of the Indian Rescue Mission attempts...                <a href="/title/tt2356509/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Joseph & Lindsey',
      genre: '\nAnimation, Action, Adventure            ',
      informaition: '\n' +
        "Being featured in their favorite TV show, Joseph and Lindsey are a young couple, being the most wealthiest and famous couple in Plotagon City. However, Joseph's crazed ex-girlfriend, Beryl, tries to stop Joseph and Lindsey's relationship."
    },
    {
      name: 'TJP Go Ahead, Hot Guys In Shin-kiba!',
      genre: '\nAction, Drama, Game-Show            ',
      informaition: '\n' +
        `Today was Nodoka-oneesan's final show using her current gimmick. To mark the occasion she invited everybody from the roster along with Sanshiro Takagi and Tetsuya Koda to join her in the ...                <a href="/title/tt8798986/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Gangsta Chronicles: The Documentary of Calvin Klein Bacote',
      genre: '\nDocumentary, Action, Biography            ',
      informaition: '\n' +
        'Calvin Klein Bacote born and raised in Brooklyn NY, Tells his life story along with his close friends The story is based on true life situations dealing with real street life, pertaining to...                <a href="/title/tt1212414/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Top Fly',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt6954114%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Territory Cops',
      genre: '\nAction, Adventure, Crime            ',
      informaition: '\nA look into the daily life of the police in the Northern Territory.'
    },
    {
      name: 'Detective Story Movie Premier',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt2357041%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Women.Of.Warriors I',
      genre: '\nAction, Drama, Game-Show            ',
      informaition: '\n' +
        `This debut of the first edition of Women.Of.Warriors was based on the WOW campaign, which has scored a large audience and fans of women's wrestling tv line-up composition of the WOW Women's...                <a href="/title/tt9585030/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Lamb TV',
      genre: '\nAction, Comedy, Drama            ',
      informaition: '\n' +
        'Lamb TV is a compilation series of bizarre, twisted short films &amp; skits. This is a collection of 20 original, never before released short films.'
    },
    {
      name: 'Kralow Trading Show',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\nThe first ever Trading Reality Show'
    },
    {
      name: 'TJP 5th Anniversary - Five Year Old Tokyo Joshi Pro Wrestling',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        `Special Champions vs Challengers no time limit 3 fall 6 woman tag match - Miyu Yamashita, Yuka Sakazaki and Mizuki VS Maki Ito, Shoko Nakajima and Riho Yuu's Last TJPW match - Yuu VS Tenma ...                <a href="/title/tt9649940/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Bar Wrestling 9: February Stars',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'Los Angeles based All Ages Professional Wresting Show with a Full Bar (valid ID required to be served at the bar) and a Standing Room Only Concert Type Atmosphere featuring Tenille Dashwood...                <a href="/title/tt8088776/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Stardom New Year Stars 2019 Day 1',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'Triple Threat Match Natsuko Tora vs Kaori Yoneyama and Alex Gracia. 3 On 1 Handicap Match Viper vs Hanan, Rina and Hina. Tag Team Match Sadie Gibbs and Mari Apache vs Jungle Assault Nation ...                <a href="/title/tt9649494/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'ROW Ladies Night Out 4',
      genre: '\nAction, Drama, Game-Show            ',
      informaition: '\n' +
        'itle Match Network and Booker T: Reality of Wrestling have joined forces again to bring you LADIES NIGHT OUT 4! Line-up: Ivelisse vs Thunder Rosa An open challenge from Taya Valkyrie NO DQ ...                <a href="/title/tt9650112/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'You Vs. Wildgnorance',
      genre: '\nShort, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt13762250%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Ieder Huisje...',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt4092590%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'PROGRESS Wrestling ENDVR',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'Professional Wrestling (PROGRESS) is an award-winning wrestling promotion based in London. The company is run by stand-up comedian and TV presenter Jim Smallman, events promoter Jon Briley ...                <a href="/title/tt10585442/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Women Superstars Uncensored WSU Breaking Barriers 5',
      genre: '\nAction, Drama, Game-Show            ',
      informaition: '\n' +
        "Women Superstars Uncensored presented their 'Breaking Barriers 5' event last night in Voorhees, New Jersey where two new champions were crowned. Full results below, courtesy of Squared Circle Sirens."
    },
    {
      name: 'Bar Wrestling 3 Bar Of Hardcore',
      genre: '\nAction, Drama, Game-Show            ',
      informaition: '\n' +
        'Los Angeles based All Ages Professional Wresting Show with a Full Bar (valid ID required to be served at the bar) and a Standing Room Only Concert Type Atmosphere featuring "The Innovator ...                <a href="/title/tt9585226/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Pagalbos skambutis',
      genre: '\nDocumentary, Action, Crime            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt7541746%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'RfkDotCa',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt15485350%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Smash Wrestling',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt14342770%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Stardom New Years Stars 2019 - Tag 2',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        `Six Woman Tag Team match - Mary Apache, Natsumi and Sadie Gibbs Hanan, Hina and Rina Queen's Quest (Bea Priestley and SWA Undisputed World Women's Champion, Viper) Bobbi Tyler and Hana ...                <a href="/title/tt9649636/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'b3ckDOTcom',
      genre: '\nAction, Adventure, Comedy            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt11433012%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'NJPW Nexess III',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt12697462%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Keeping Up With Rixxo Xové',
      genre: '\nShort, Action, Drama            ',
      informaition: '\n' +
        'Even though things are changing for Rixxo Xove. Hes Out there in the Real TV . Here in Los Angeles. LA and NY . Notorious For Rixxo Xove To Handle. Regardless of controversies, and there are many. Rixxo is icon. Public Or Not.'
    },
    {
      name: 'Smash Wrestling: Canusa',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'The 5th annual Canusa Classic comes with an incredible main event as Gail Kim returns home to Toronto for her final North American wrestling match ever.'
    },
    {
      name: 'BCP Malice At The Palace',
      genre: '\nAction, Drama, Game-Show            ',
      informaition: '\n' +
        `At Battle Club Pro 'May The Queen Reign' We witnessed a clash of two Queens in their own right as WWE Mae Young Classic participant Mia Yim faced off against IMPACT Wrestling's and ...                <a href="/title/tt8799012/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    },
    {
      name: 'Ataxia',
      genre: '\nShort, Action, Drama            ',
      informaition: '\n' +
        '"ATAXIA" is a term picked out of the Science of psychoanalysis thats means a perturbance of the nervous system (a mental disorder). Taking the mass-media (TV, radio, press) as a starting ...                <a href="/title/tt0480338/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'Eco Doctors',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'Follow a rural Washington family and their environmental restoration company as they tackle challenging and high stakes projects throughout the Pacific Northwest. With an award-winning ...                <a href="/title/tt4266856/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'WOS Wrestling',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt14342732%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'MMA Worldwide',
      genre: '\nDocumentary, Action, Adventure            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt1392042%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Pro Wrestling Entertainment: PWE',
      genre: '\nAction, Drama, Game-Show            ',
      informaition: '\n' +
        '"Pro Wrestling Entertainment" is the first company in the history of Pakistan to present International Wrestling Competitions in Pakistan. Our aim is to highlight the softer image of ...                <a href="/title/tt7342710/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'The Cage: Live Event',
      genre: '\nShort, Action, Biography            ',
      informaition: '\n' +
        'A young Aussie/Singaporean female fights against discrimination and social stigma to purse a career in professional cage fighting.'
    },
    {
      name: 'Shango: The Lightning of the Orisha',
      genre: '\nAction, Biography, Drama            ',
      informaition: '\n' +
        "O'Shang a man born into ancient African royalty in the 1700's finds himself forced into slavery and must use his new abilities to hunt down the European colonizers who enslaved his people."
    },
    {
      name: 'Being Brittany',
      genre: '\nAction, Comedy, Drama            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt9251742%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'Achter gesloten deuren',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        '        <a href="/updates?update=tt10031166%3Aoutlines.add.1&amp;ref_=tt_ov_cn_pl">Add a Plot</a>\n'
    },
    {
      name: 'PROGRESS Wrestling ENDVR',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'Singles Match Joey Lakeside vs Jonathan Windsor (8:16) Singles Match El Pantera Negra vs Chuck Mambo (7:40) Singles Match Krisys vs Tyson James (2:13) Tag Team Match The Burden Of Justice (...                <a href="/title/tt10592018/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'PROGRESS Wrestling ENDVR',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'Overall this was a good show. Dennis vs Lakeside was a strong match with an interesting twist. The tag match was OK at best. The three way women match was great. Eaver vs Webster was ...                <a href="/title/tt10592028/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'PROGRESS Wrestling ENDVR',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'Overall this was a show. Omega vs Lucha Dave was a very weak one sided match. This match was mainly to make Omega look like a dominate force in PROGRESS (especially with his interesting ...                <a href="/title/tt10592034/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'PROGRESS Wrestling ENDVR',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        'Singles Match Shen Woo defeats Lucha Dave Singles Match The Omega vs Tyson James Tag Team Match Joey Lakeside and Will Ospreay vs The Bhangra Knights (Darrell Allen and RJ Singh) Singles ...                <a href="/title/tt10592040/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n'
    },
    {
      name: 'PROGRESS Wrestling ENDVR',
      genre: '\nAction, Drama, Reality-TV            ',
      informaition: '\n' +
        `Natural Progression Series II Qualifying Match Ali Armstrong vs Dark Panther Tag Team Match Nikki Storm and Rhia O'Reilly vs Mischa East and Rosie Leigh Natural Progression Series II ...                <a href="/title/tt10596650/plotsummary?ref_=adv_pl">See full summary</a>&nbsp;»\n`
    }
  ]

]






/////turns the data into objects and arrays set to my willing ///////////



let fillteredArray = {
  action: [],
  drama: [],
  comedy: [],
  fantasy: [],
  horror: []
}


///////sets action array/////
for (let i = 0; i < dataBase[0].length; i++) {
  let randnumber1 = Math.random() * 5;
  let randnumber2 = Math.random() * 5;

  fillteredArray.action.push({

    id: i + dataBase[0][i].name.substring(randnumber1, randnumber2) + Math.round((Math.random() * 10) * 10) / 100,
    name: dataBase[0][i].name,
    genre: dataBase[0][i].genre.slice(1).trim(),
    rating: Math.round((Math.random() * 10)) + '/10',
    like: false,
    informaition: dataBase[0][i].informaition.slice(1)
  })

}


////////sets drama array///////
for (let i = 0; i < dataBase[1].length; i++) {
  let randnumber1 = Math.random() * 5;
  let randnumber2 = Math.random() * 5;

  fillteredArray.drama.push({

    id: i + dataBase[1][i].name.substring(randnumber1, randnumber2) + Math.round((Math.random() * 10) * 10) / 100,
    name: dataBase[1][i].name,
    genre: dataBase[1][i].genre.slice(1).trim(),
    rating: Math.round((Math.random() * 10)) + '/10',
    like: false,
    informaition: dataBase[1][i].informaition.slice(1)
  })

}


/////sets comedy//////
for (let i = 0; i < dataBase[2].length; i++) {
  let randnumber1 = Math.random() * 5;
  let randnumber2 = Math.random() * 5;

  fillteredArray.comedy.push({

    id: i + dataBase[2][i].name.substring(randnumber1, randnumber2) + Math.round((Math.random() * 10) * 10) / 100,
    name: dataBase[2][i].name,
    genre: dataBase[2][i].genre.slice(1).trim(),
    rating: Math.round((Math.random() * 10)) + '/10',
    like: false,
    informaition: dataBase[2][i].informaition.slice(1)
  })

}

///////sets fantasy//////
for (let i = 0; i < dataBase[3].length; i++) {
  let randnumber1 = Math.random() * 5;
  let randnumber2 = Math.random() * 5;

  fillteredArray.fantasy.push({

    id: i + dataBase[3][i].name.substring(randnumber1, randnumber2) + Math.round((Math.random() * 10) * 10) / 100,
    name: dataBase[3][i].name,
    genre: dataBase[3][i].genre.slice(1).trim(),
    rating: Math.round((Math.random() * 10)) + '/10',
    like: false,
    informaition: dataBase[3][i].informaition.slice(1)
  })

}



////sets horror////
for (let i = 0; i < dataBase[4].length; i++) {
  let randnumber1 = Math.random() * 5;
  let randnumber2 = Math.random() * 5;

  fillteredArray.horror.push({

    id: i + dataBase[4][i].name.substring(randnumber1, randnumber2) + Math.round((Math.random() * 10) * 10) / 100,
    name: dataBase[4][i].name,
    genre: dataBase[4][i].genre.slice(1).trim(),
    rating: Math.round((Math.random() * 10)) + '/10',
    like: false,
    informaition: dataBase[4][i].informaition.slice(1)
  })

}

export default fillteredArray;
