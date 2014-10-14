function Question(song, opt1, opt2, opt3, opt4, correct) {
    this.song = song;
    this.options = [opt1, opt2, opt3, opt4];
    this.correct = this.options[correct];
}

var q1 = new Question("songs/m.A.A.d%20City.mp3", "album-covers/kendricklamar-goodkidmaadcity.jpg", "album-covers/kanyewest-mybeautifuldarktwistedfantasy.jpg", "album-covers/madvillain-madvillainy.png", "album-covers/outkast-aquemini.jpg", 0);

var q2 = new Question("songs/Peach,%20Plum,%20Pear.mp3", "album-covers/animalcollective-sungtongs.jpg", "album-covers/devendrabanhart-rejoicinginthehands.jpg", "album-covers/joannanewsom-themilkeyedmender.jpg", "album-covers/marniestern-thisisit.jpg", 2);

var q3 = new Question("songs/Every%20Single%20Night.mp3", "album-covers/catpower-moonpix.jpg", "album-covers/fionaapple-theidlerwheel.jpg", "album-covers/lauramarling-onceiwasaneagle.jpg", "album-covers/nekocase-theworsethingsget.jpg", 1);

var q4 = new Question("songs/Oblivion.mp3", "album-covers/fkatwigsalbumcover.png", "album-covers/jessieware-devotion.jpg", "album-covers/janellemonae-theelectriclady.png", "album-covers/grimes-visions.png", 3);

var q5 = new Question("songs/05%20Gigantic.mp3", "album-covers/pavement-slantedandenchanted.jpg", "album-covers/pjharvey-ridofme.jpg", "album-covers/pixies-surferrosa.jpg", "album-covers/thedismembermentplan-emergencyandi.jpg", 2);
    
var questionList = [q1, q2, q3, q4, q5];
