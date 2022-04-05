function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {

    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}



function introductionWithLanguageOptional(name, language) {

    if (language) {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`
    }
    else {
        return `Hi, my name is ${name} and I am learning to program in JavaScript.`;
    }
}






introduction("Aki");
introduction("Samip")
introductionWithLanguage("Aki", "Ember.js")
introductionWithLanguage("Samip", "React")
introductionWithLanguageOptional("Gracie")
introductionWithLanguageOptional("Gracie", "Python")