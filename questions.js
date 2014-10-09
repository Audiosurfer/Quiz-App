function Question (opt1, opt2, opt3, opt4, correct) {
    this.options = [opt1, opt2, opt3, opt4];
    this.correct = this.options[correct];
}

var q1 = new Question("Good Kid M.A.A.D City", "My Beautiful Dark Twisted Fantasy", "Madvillainy", "Aquemini", 3);

var q2 = new Question("Sung Tongs", "Rejoicing In The Hands", "The Milk-Eyed Mender", "This Is It And I Am It", 0);

var q3 = new Question("Moon Pix", "Once I Was An Eagle", "The Worse Things Get", 0);

var q4 = new Question("LP1", "Devotion", "The Electric Lady", "Cut 4 Me", 2);

var q5 = new Question("Slanted And Enchanted", "Rid Of Me", "Surfer Rosa", "Emergency And I", 1);
    

