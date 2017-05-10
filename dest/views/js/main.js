function getAdj(a){"use strict";var b=["dark","morbid","scary","spooky","gothic","deviant","creepy","sadistic","black","dangerous","dejected","haunted","morose","tragic","shattered","broken","sad","melancholy","somber","dark","gloomy","homicidal","murderous","shady","misty","dusky","ghostly","shadowy","demented","cursed","insane","possessed","grotesque","obsessed"],c=["blue","green","purple","grey","scarlet","NeonGreen","NeonBlue","NeonPink","HotPink","pink","black","red","maroon","silver","golden","yellow","orange","mustard","plum","violet","cerulean","brown","lavender","violet","magenta","chestnut","rosy","copper","crimson","teal","indigo","navy","azure","periwinkle","brassy","verdigris","veridian","tan","raspberry","beige","sandy","ElectricBlue","white","champagne","coral","cyan"],d=["whimsical","silly","drunken","goofy","funny","weird","strange","odd","playful","clever","boastful","breakdancing","hilarious","conceited","happy","comical","curious","peculiar","quaint","quirky","fancy","wayward","fickle","yawning","sleepy","cockeyed","dizzy","dancing","absurd","laughing","hairy","smiling","perplexed","baffled","cockamamie","vulgar","hoodwinked","brainwashed"],e=["sapphire","opal","silver","gold","platinum","ruby","emerald","topaz","diamond","amethyst","turquoise","starlit","moonlit","bronze","metal","jade","amber","garnet","obsidian","onyx","pearl","copper","sunlit","brass","brassy","metallic"],f=["untuned","loud","soft","shrieking","melodious","musical","operatic","symphonic","dancing","lyrical","harmonic","orchestral","noisy","dissonant","rhythmic","hissing","singing","crooning","shouting","screaming","wailing","crying","howling","yelling","hollering","caterwauling","bawling","bellowing","roaring","squealing","beeping","knocking","tapping","rapping","humming","scatting","whispered","whispering","rasping","buzzing","whirring","whistling","whistled"],g=["nuclear","apocalyptic","desolate","atomic","zombie","collapsed","grim","fallen","collapsed","cannibalistic","radioactive","toxic","poisonous","venomous","disastrous","grimy","dirty","undead","bloodshot","rusty","glowing","decaying","rotten","deadly","plagued","decimated","rotting","putrid","decayed","deserted","acidic"],h=["stupid","idiotic","fat","ugly","hideous","grotesque","dull","dumb","lazy","sluggish","brainless","slow","gullible","obtuse","dense","dim","dazed","ridiculous","witless","daft","crazy","vapid","inane","mundane","hollow","vacuous","boring","insipid","tedious","monotonous","weird","bizarre","backward","moronic","ignorant","scatterbrained","forgetful","careless","lethargic","insolent","indolent","loitering","gross","disgusting","bland","horrid","unseemly","revolting","homely","deformed","disfigured","offensive","cowardly","weak","villainous","fearful","monstrous","unattractive","unpleasant","nasty","beastly","snide","horrible","syncophantic","unhelpful","bootlicking"],i=["beautiful","intelligent","smart","genius","ingenious","gorgeous","pretty","witty","angelic","handsome","graceful","talented","exquisite","enchanting","fascinating","interesting","divine","alluring","ravishing","wonderful","magnificient","marvelous","dazzling","cute","charming","attractive","nifty","delightful","superior","amiable","gentle","heroic","courageous","valiant","brave","noble","daring","fearless","gallant","adventurous","cool","enthusiastic","fierce","awesome","radical","tubular","fearsome","majestic","grand","stunning"],j=["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"],k=["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"];switch(a){case"dark":return b;case"color":return c;case"whimsical":return d;case"shiny":return e;case"noisy":return f;case"apocalyptic":return g;case"insulting":return h;case"praise":return i;case"scientific":return j;default:return k}}function getNoun(a){"use strict";var b=["flamingo","hedgehog","owl","elephant","pussycat","alligator","dachsund","poodle","beagle","crocodile","kangaroo","wallaby","woodpecker","eagle","falcon","canary","parrot","parakeet","hamster","gerbil","squirrel","rat","dove","toucan","raccoon","vulture","peacock","goldfish","rook","koala","skunk","goat","rooster","fox","porcupine","llama","grasshopper","gorilla","monkey","seahorse","wombat","wolf","giraffe","badger","lion","mouse","beetle","cricket","nightingale","hawk","trout","squid","octopus","sloth","snail","locust","baboon","lemur","meerkat","oyster","frog","toad","jellyfish","butterfly","caterpillar","tiger","hyena","zebra","snail","pig","weasel","donkey","penguin","crane","buzzard","vulture","rhino","hippopotamus","dolphin","sparrow","beaver","moose","minnow","otter","bat","mongoose","swan","firefly","platypus"],c=["doctor","lawyer","ninja","writer","samurai","surgeon","clerk","artist","actor","engineer","mechanic","comedian","fireman","nurse","RockStar","musician","carpenter","plumber","cashier","electrician","waiter","president","governor","senator","scientist","programmer","singer","dancer","director","mayor","merchant","detective","investigator","navigator","pilot","priest","cowboy","stagehand","soldier","ambassador","pirate","miner","police"],d=["centaur","wizard","gnome","orc","troll","sword","fairy","pegasus","halfling","elf","changeling","ghost","knight","squire","magician","witch","warlock","unicorn","dragon","wyvern","princess","prince","king","queen","jester","tower","castle","kraken","seamonster","mermaid","psychic","seer","oracle"],e=["violin","flute","bagpipe","guitar","symphony","orchestra","piano","trombone","tuba","opera","drums","harpsichord","harp","harmonica","accordion","tenor","soprano","baritone","cello","viola","piccolo","ukelele","woodwind","saxophone","bugle","trumpet","sousaphone","cornet","stradivarius","marimbas","bells","timpani","bongos","clarinet","recorder","oboe","conductor","singer"],f=["murderer","chainsaw","knife","sword","murder","devil","killer","psycho","ghost","monster","godzilla","werewolf","vampire","demon","graveyard","zombie","mummy","curse","death","grave","tomb","beast","nightmare","frankenstein","specter","poltergeist","wraith","corpse","scream","massacre","cannibal","skull","bones","undertaker","zombie","creature","mask","psychopath","fiend","satanist","moon","fullMoon"],g=["slime","bug","roach","fluid","pus","booger","spit","boil","blister","orifice","secretion","mucus","phlegm","centipede","beetle","fart","snot","crevice","flatulence","juice","mold","mildew","germs","discharge","toilet","udder","odor","substance","fluid","moisture","garbage","trash","bug"],h=["mirror","knife","fork","spork","spoon","tupperware","minivan","suburb","lamp","desk","stereo","television","TV","book","car","truck","soda","door","video","game","computer","calender","tree","plant","flower","chimney","attic","kitchen","garden","school","wallet","bottle"],i=["earrings","ring","necklace","pendant","choker","brooch","bracelet","cameo","charm","bauble","trinket","jewelry","anklet","bangle","locket","finery","crown","tiara","blingBling","chain","rosary","jewel","gemstone","beads","armband","pin","costume","ornament","treasure"],j=["swamp","graveyard","cemetery","park","building","house","river","ocean","sea","field","forest","woods","neighborhood","city","town","suburb","country","meadow","cliffs","lake","stream","creek","school","college","university","library","bakery","shop","store","theater","garden","canyon","highway","restaurant","cafe","diner","street","road","freeway","alley"],k=["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"],l=["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"];switch(a){case"animals":return b;case"profession":return c;case"fantasy":return d;case"music":return e;case"horror":return f;case"gross":return g;case"everyday":return h;case"jewelry":return i;case"places":return j;case"scifi":return k;default:return l}}function generator(a,b){"use strict";var c=getAdj(a),d=getNoun(b),e=parseInt(Math.random()*c.length),f=parseInt(Math.random()*d.length);return"The "+c[e].capitalize()+" "+d[f].capitalize()}function randomName(){"use strict";var a=parseInt(Math.random()*adjectives.length),b=parseInt(Math.random()*nouns.length);return generator(adjectives[a],nouns[b])}function logAverageFrame(a){"use strict";var b=a.length,c=0,d=0;for(d=b-1;d>b-11;d-=1)c+=a[d].duration;console.log("Average scripting time to generate last 10 frames: "+c/10+"ms")}function updatePositions(){"use strict";frame+=1,window.performance.mark("mark_start_frame");var a,b,c=document.getElementsByClassName("mover"),d=c.length,e=document.body.scrollTop,f=[];for(b=0;b<5;b+=1)f.push(Math.sin(e/1250+b));for(b=0;b<d;b+=1)a=parseInt(100*f[b%5])+"px",c[b].style.transform="translateX("+a+")";if(window.performance.mark("mark_end_frame"),window.performance.measure("measure_frame_duration","mark_start_frame","mark_end_frame"),frame%10==0){logAverageFrame(window.performance.getEntriesByName("measure_frame_duration"))}}var pizzaIngredients={};pizzaIngredients.meats=["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"],pizzaIngredients.nonMeats=["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"],pizzaIngredients.cheeses=["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"],pizzaIngredients.sauces=["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"],pizzaIngredients.crusts=["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"],String.prototype.capitalize=function(){"use strict";return this.charAt(0).toUpperCase()+this.slice(1)};var adjectives=["dark","color","whimsical","shiny","noisy","apocalyptic","insulting","praise","scientific"],nouns=["animals","everyday","fantasy","gross","horror","jewelry","places","scifi"],selectRandomMeat=function(){"use strict";return pizzaIngredients.meats[Math.floor(Math.random()*pizzaIngredients.meats.length)]},selectRandomNonMeat=function(){"use strict";return pizzaIngredients.nonMeats[Math.floor(Math.random()*pizzaIngredients.nonMeats.length)]},selectRandomCheese=function(){"use strict";return pizzaIngredients.cheeses[Math.floor(Math.random()*pizzaIngredients.cheeses.length)]},selectRandomSauce=function(){"use strict";return pizzaIngredients.sauces[Math.floor(Math.random()*pizzaIngredients.sauces.length)]},selectRandomCrust=function(){"use strict";return pizzaIngredients.crusts[Math.floor(Math.random()*pizzaIngredients.crusts.length)]},ingredientItemizer=function(a){"use strict";return"<li>"+a+"</li>"},makeRandomPizza=function(){"use strict";var a,b,c,d="",e=Math.floor(4*Math.random()),f=Math.floor(3*Math.random()),g=Math.floor(2*Math.random());for(a=0;a<e;a+=1)d+=ingredientItemizer(selectRandomMeat());for(b=0;b<f;b+=1)d+=ingredientItemizer(selectRandomNonMeat());for(c=0;c<g;c+=1)d+=ingredientItemizer(selectRandomCheese());return d+=ingredientItemizer(selectRandomSauce()),d+=ingredientItemizer(selectRandomCrust())},pizzaElementGenerator=function(a){"use strict";var b,c,d,e,f,g;return b=document.createElement("div"),c=document.createElement("div"),d=document.createElement("img"),e=document.createElement("div"),b.classList.add("randomPizzaContainer"),b.style.width="33.33%",b.style.height="325px",b.id="pizza"+a,c.style.width="35%",d.src="images/pizza.png",d.classList.add("img-responsive"),c.appendChild(d),b.appendChild(c),e.style.width="65%",f=document.createElement("h4"),f.innerHTML=randomName(),e.appendChild(f),g=document.createElement("ul"),g.innerHTML=makeRandomPizza(),e.appendChild(g),b.appendChild(e),b},resizePizzas=function(a){"use strict";window.performance.mark("mark_start_resize"),function(a){var b=document.getElementById("pizzaSize");switch(a){case"1":return void(b.innerHTML="Small");case"2":return void(b.innerHTML="Medium");case"3":return void(b.innerHTML="Large");default:console.log("bug in changeSliderLabel")}}(a),function(a){var b,c=document.getElementsByClassName("randomPizzaContainer"),d=c.length,e=function(a){switch(a){case"1":return 25;case"2":return 33.33;case"3":return 50;default:console.log("bug in sizeSwitcher")}}(a);for(b=0;b<d;b+=1)c[b].style.width=e+"%"}(a),window.performance.mark("mark_end_resize"),window.performance.measure("measure_pizza_resize","mark_start_resize","mark_end_resize");var b=window.performance.getEntriesByName("measure_pizza_resize");console.log("Time to resize pizzas: "+b[b.length-1].duration+"ms")};window.onload=function(){"use strict";window.performance.mark("mark_start_generating");var a=0,b=document.getElementById("randomPizzas");for(a=2;a<100;a+=1)b.appendChild(pizzaElementGenerator(a));window.performance.mark("mark_end_generating"),window.performance.measure("measure_pizza_generation","mark_start_generating","mark_end_generating");var c=window.performance.getEntriesByName("measure_pizza_generation");console.log("Time to generate pizzas on load: "+c[0].duration+"ms")};var frame=0;window.addEventListener("scroll",updatePositions),document.addEventListener("DOMContentLoaded",function(){"use strict";var a=window,b=document,c=b.documentElement,d=b.getElementsByTagName("body")[0],e=a.innerWidth||c.clientWidth||d.clientWidth,f=a.innerHeight||c.clientHeight||d.clientHeight;e=window.screen.width,f=window.screen.height;var g,h,i=256,j=Math.floor(e/i)+2,k=j*Math.floor(f/i),l=document.getElementById("movingPizzas1");for(g=0;g<k;g+=1)h=document.createElement("img"),h.className="mover",h.src="images/pizza-sm.png",h.style.height="100px",h.style.width="77px",h.style.left=g%j*i+"px",h.style.top=Math.floor(g/j)*i+"px",l.appendChild(h);requestAnimationFrame(updatePositions)});