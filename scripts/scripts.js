var movieApp = {};

movieApp.allMovies = [
	{name: `Laputa: Castle in the Sky`, rank: 1, image:`assets/castleInTheSky.jpg`, text: `A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.`},
	{name: `Grave of the Fireflies`, rank: 2, image:`assets/graveOfTheFireflies.jpeg`, text: `A young boy and his little sister struggle to survive in Japan during World War II.` },
	{name: `My Neighbor Totoro`, rank: 3, image:`assets/totoro.jpg`, text: `When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.`},
	{name: `Princess Mononoke`, rank: 4, image: `assets/princessMononoke.jpg`, text: `A prince must head into distant lands to uncover a remedy for his illness. Along the way he runs into an on-going war between humans and forest animals, and discovers the strong-willed Princess Mononoke and the strife she is faced with.`},
	{name: `Spirited Away`, rank: 5, image:`assets/spiritedAway.jpg`, text:`During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.` },
	{name: `Howl's Moving Castle`, rank: 6, image:`assets/howlsCastle.jpg`, text:`When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.`},
	{name: `Whisper of the Heart`, rank: 7, image:`assets/whisperOfTheHeart.png`, text:`A love story between a girl who loves reading books, and the boy who has previously checked out all of the library books she chooses.` },
	{name: `Kiki's Delivery Service`, rank: 8, image:`assets/kikiDS.jpg`, text:`A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.` },
	{name: `Porco Rosso`, rank: 9, image:'assets/porcoRosso.jpg', text:'World War I flying ace Marco is turned into a pig after all his comrades die in battle. Now know as Porco Rosso, he fights air pirates and meets a strong-willed Fit who repairs his plane and sees Porco for who he really is.' },
	{name: `The Tale of Princess Kaguya`, rank: 10, image:`assets/taleOfPrincessKaguya.jpg`, text:`Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her - but ultimately she must confront her fate, the punishment for her crime.`},
	{name: `Only Yesterday`, rank: 11, image:`assets/onlyYesterday.jpeg`, text:`A twenty-seven-year-old office worker travels to the countryside while reminiscing about her childhood in Tokyo. ` },
	{name: `Pom Poko`, rank: 12, image:`assets/pomPoko.jpg`, text:`A community of magical shape-shifting raccoon dogs struggle to prevent their forest home from being destroyed by urban development.`},
	{name: `My Neighbors the Yamadas`, rank: 13, image:`assets/yamadas.jpg`, text:`The life and misadventures of a family in contemporary Japan.` },
	{name: `The Cat Returns`, rank: 14, image:`assets/theCatReturns.jpg`, text:`After helping a cat, a young girl finds herself involuntarily engaged to a cat prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.` },
	{name: `Ponyo`, rank: 15, image:`assets/ponyo.png`, text:`A five year-old boy develops a relationship with Ponyo, a goldfish princess who longs to become a human after falling in love with him.` },
	{name: `Arrietty`, rank: 16, image:`/assets/arrietty.jpg`, text:`Teenager Arietty, discovers a hidden fantasy world under the floorboard of her new suburban home, and embarks on a magically journey.` },
	{name: `From Up on Poppy Hill`, rank: 17, image:`assets/poppyHill.jpg`, text:`Yokohama teens try to save their school's clubhouse from being demolished.` },
	{name: `The Wind Rises`, rank: 18, image:`assets/theWindRises.jpg`, text:`Aviation engineer Jiro embarks on a journey to create a World War II fighter plane, and deals with the responsibilities that come with.` },
	{name: `When Marnie was There`, rank: 19, image:`assets/whenMarnieWasThere.jpg`, text:`A tomboy explores a long-abandoned villa and meets a mysterious blonde girl only she can see.`},
	{name: `Tales from Earthsea`, rank: 20, image:`assets/talesFromEarthsea.jpg`, text:`In a mythical land, a man and a young boy investigate a series of unusual occurrences.`},
];

movieApp.init = function() {
	movieApp.events()
}

movieApp.events = function() {
		
		$(`.partOne input[type=submit]`).on(`click`, function(){
			$('html, body').animate({
			    scrollTop: $('#partTwo').offset().top
			}, 500);

			var partOneResponse = $(this).val();

			var filter = [];

			if (partOneResponse === 'Yes') { 
				filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
			} else if (partOneResponse === 'No') {
				filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
			}

			movieApp.firstFilteredMovies = movieApp.allMovies.filter(function(movie) {
				return filter.includes(movie.rank) === true;
			});
			console.log(movieApp.firstFilteredMovies)
		});

		$(`.partTwo input[type=submit]`).on('click', function(){
			$('html, body').animate({
			    scrollTop: $('#partThree').offset().top
			}, 500);

			var filter = [];

			var partTwoResponse = $(this).val();

			if (partTwoResponse === 'Lighter') {
				filter = [7, 8, 9, 11, 12, 13, 14, 15, 16, 19];
			} else if (partTwoResponse === 'Heavier') {
				filter = [1, 2, 3, 4, 5, 6, 10, 17, 18, 20];
			}

			movieApp.secondFilteredMovies = movieApp.firstFilteredMovies.filter(function(movie) {
				return filter.includes(movie.rank) === true;
			});
				console.log(movieApp.secondFilteredMovies)
			});

		$(`.partThree input[type=submit]`).on('click', function(){
			$('html, body').animate({
			    scrollTop: $('#partFour').offset().top
			}, 500);

			var partThreeResponse = $(this).val();

			var filter = [];

			if (partThreeResponse === 'Environmentalism') {
				filter = [4, 15, 12, 20, 1];
			} else if (partThreeResponse === 'War') {
				filter = [2, 20, 4, 18, 9, 6, 1];
			} else if (partThreeResponse === 'Innocence'){
				filter = [1, 3, 15, 2, 16, 1, 17, 11];
			} else if (partThreeResponse === 'Self Discovery'){
				filter = [6, 5, 20, 19, 7, 8, 10, 11, 13, 14];
			}
			


			movieApp.thirdFilteredMovies = movieApp.secondFilteredMovies.filter(function(movie) {
				return filter.includes(movie.rank) === true;
			});
				console.log(movieApp.thirdFilteredMovies)
			});

		$(`.partFour input[type=submit]`).on('click', function(){
			$('html, body').animate({
			    scrollTop: $('#answer').offset().top
			}, 500);

			var partFourResponse = $(this).val();
			var filter = [];

			if (partFourResponse === 'Fantastical') { 
				filter = [1, 4, 5, 6, 12, 16, 17, 20, 3, 9, 10, 14, 19, 15];
			} else if (partFourResponse === 'Familiar') {
				filter = [1, 2, 7, 8, 11, 13, 15, 18, 9, 3, 14, 19, 5, 10];
			}

			movieApp.fourthFilteredMovies = movieApp.thirdFilteredMovies.filter(function(movie) {
				return filter.includes(movie.rank) === true;
			});

			var randomMovieIndex = Math.floor(Math.random() * movieApp.fourthFilteredMovies.length);

			movieApp.finalMovie = movieApp.fourthFilteredMovies[randomMovieIndex];

			console.log(movieApp.finalMovie);
			movieApp.displayData();
		});
	}

	movieApp.displayData = function(){
		$('.result').html(`<h4>You should watch:</h4><h5>${movieApp.finalMovie.name}</h5>`);
		$('.resultImage').attr('src', movieApp.finalMovie.image);
		$('.movieDescription').text(movieApp.finalMovie.text);
	}
    
    $('form').on('submit', function(e) {
        e.preventDefault();
    });

	$(function(){
		movieApp.init();

		$('a').smoothScroll({
			speed: 500, 
		});
	});