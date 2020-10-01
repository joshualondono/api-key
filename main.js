const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a63f62608ebf43d4b855f19cde053677');
const readlineSync = require('readline-sync');

const searchQuery = class {
  constructor(searchTerm, biasOption, language = 'en', sortBy = 'publishedAt'){
    this.q = searchTerm
    this.language = language
    this.sortBy = sortBy
    this.domains = biasOption
  };


//   static biasBuckets(input = '') {
//      const biases = {
//      left: ['cnn.com', 'bbc.co.uk'],
//      right: ['foxnews.com', 'thefederalist.com'],
//      moderate: ['apnews.com', 'npr.org']
//     }
//   if (input !== ''){
//      const retrieveBias = biases.input
//      const apiReadyFormat = [...retrieveBias].toString()
//      console.log(apiReadyFormat)
//   } else {
//      console.log(biases)
//   }
//     return this
// };

}

//retrieve an object or api formatted string of news source buckets
//no arg returns obj
const biasBuckets = (input = '') => {
   const biases = {
   left: ['cnn.com', 'bbc.co.uk'],
   right: ['foxnews.com', 'thefederalist.com'],
   moderate: ['apnews.com', 'npr.org']
  }

    if(input === 'left' ){
      console.log(biases.left)
    } else if (input === 'right' ) {
          console.log(biases.right.toString())

    } else if (input === 'moderate' ) {
          console.log(biases.moderate.toString())

    } else console.log(biases)


};

async function stageCall() {

    console.log('calling');
    const readlineChoices = ['left', 'right', 'moderate']
    const selected = await readlineSync.keyInSelect(readlineChoices, 'Choose your bias');
    const searchTerm = await readlineSync.question('Enter your search term: ');
    const biasSources = await biasBuckets(readlineChoices[selected]);
    console.log(biasSources)
    const stagedApiCall = await new searchQuery(searchTerm, biasSources);

}

console.log(stageCall())

//const bucketKeys = await searchQuery.biasBuckets()
//not working - const readlineChoices = Object.keys(bucketKeys)
//not working - const biasSources = await searchQuery.biasBuckets(searchTerm);
