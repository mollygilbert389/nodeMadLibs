var inquirer = require("inquirer")

function MadLib(nouns,numbers,adjectives,verbs) {
    this.nouns = nouns;
    this.numbers = numbers;
    this.adjectives = adjectives;
    this.verbs = verbs;
    this.story = "Once upon a time the were [number] very best [noun] that were going on a [adjective] adventure. \n The adventure started as the group [verb] into a bar. \n This is where they would meet the [noun] for the first time."
}

var nouns = []
var adjectives = []
var verbs = []
var numbers = []
var loop = 0;

var getWords = function(loop){
    if(loop < 2) {
        inquirer.prompt({
            name: "noun",
            message: "Enter a noun (plural): "
        }).then(function(answers){
            nouns.push(answers.noun);
            loop++
            getWords(loop);
        })
    }
    if(loop >= 2 && loop < 3) {
        inquirer.prompt({
            name: "number",
            message: "Enter an number: "
        }).then(function(answers){
            numbers.push(answers.number)
            loop++
            getWords(loop); 
        })
    }
    if(loop >= 3 && loop < 4) {
        inquirer.prompt({
            name: "adjective",
            message: "Enter an adjective: "
        }).then(function(answers){
            adjectives.push(answers.adjective)
            loop++
            getWords(loop); 
        })
    }
    if(loop >= 4 && loop < 5) {
        inquirer.prompt({
            name: "verb",
            message: "Enter a verb (past tense): "
        }).then(function(answers){
            verbs.push(answers.verb)
            var madLib = new MadLib(nouns, numbers, adjectives,verbs);
            constructStory(madLib)
        }) 
    }
}

var constructStory = function(completeObject){
    for (var i = 0; i < 2;i++) {
        completeObject.story = completeObject.story.replace("[noun]",completeObject.nouns[i]);
    }
    for (var i = 0; i<1;i++){
        completeObject.story = completeObject.story.replace("[number]", completeObject.numbers[i])
    }
    for (var i = 0; i<1;i++){
        completeObject.story = completeObject.story.replace("[adjective]", completeObject.adjectives[i])
    }
    for (var i=0; i<1;i++){
        completeObject.story = completeObject.story.replace("[verb]", completeObject.verbs[i])
    }
    console.log(completeObject.story)
}

getWords(loop); 