const chai = require('chai');
const Words = require('../words.js');


var text;
var wordsToExclude = ['las', 'la', 'en', 'de', 'es', 'que'];

describe("solution", () => {
    beforeEach(() => {
        //sheet = new SpreadSheet();
        text = 'Esta noche, buscando tu boca en otra boca casi creyéndolo, porque así de ciego es este río que me tira en mujer y me sumerge entre sus párpados, qué tristeza es nadar al fin hacia la orilla del sopor sabiendo que el sopor es ese esclavo innoble que acepta las monedas falsas, las circula sonriendo. En tu boca';
    });

    describe("words", () => {
            it("should get the most used word in text when 1 word text", () => {

                // ...
                // Code here!
                // ...

                var words = new Words("word");

                var mostUsedWords = words.mostUsedWords();
                chai.expect( mostUsedWords.length )
                    .to.be.eql(1);
                chai.expect (mostUsedWords[0])
                    .to.be.eq('word');

            });

            it("should get most used word in text with multiple words", () => {

                // ...
                // Code here!
                // ...

                var words = new Words("not word not");

                var mostUsedWords = words.mostUsedWords();
                chai.expect( mostUsedWords.length )
                    .to.be.eql(1);
                chai.expect (mostUsedWords[0])
                    .to.be.eq('not');
            });

            it("should get multiple most used words", () => {

                // ...
                // Code here!
                // ...
                var words = new Words("not word not word");

                var mostUsedWords = words.mostUsedWords();

                chai.expect( mostUsedWords.length )
                    .to.be.eql(2);
                chai.expect (mostUsedWords[0])
                    .to.be.eq('not');
                chai.expect (mostUsedWords[1])
                    .to.be.eq('word');

            });

            it("should get multiple most used words without wordsToExclude", () => {

                // ...
                // Code here!
                // ...
                var words = new Words(text, wordsToExclude);

                var mostUsedWords = words.mostUsedWords();

                chai.expect( mostUsedWords.length )
                    .to.be.eql(1);
                chai.expect (mostUsedWords[0])
                    .to.be.eq('boca');

            });

    });

});
