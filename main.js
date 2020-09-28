const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a63f62608ebf43d4b855f19cde053677');
const readlineSync = require('readline-sync');


//SEARCH BUCKETS
  const bias = ['Left','Right', 'Moderate']
  const left = ['cnn.com', 'bbc.co.uk'];
  const right = ['foxnews.com'];

//OBJECT QUERY
  const makeQuery = (term, source) => {

    const objQuery = {}

  if (source === 'Left'){
    // const newQuery = Object.create(objQuery);
    // newQuery.q = 'election';
    // newQuery.sources = [...left].toString();
    // newQuery.sortBy = 'relevancy';
    const newQuery = newsapi.v2.everything({
  q: term,
  domains: [...left].toString(),
  language: 'en',
  sortBy: 'relevancy',
}).then(response => {
      console.log(response);
    });
    return newQuery

  } else {
    // const newQuery = Object.create(objQuery);
    // newQuery.q = 'election';
    // newQuery.sources = [...right].toString();
    // newQuery.sortBy = 'relevancy';
    const newQuery = newsapi.v2.everything({
  q: term,
  domains: [...right].toString(),
  language: 'en',
  sortBy: 'relevancy',
}).then(response => {
      console.log(response);
    });
    return newQuery
   }
};

  //USER INPUT
    const index = readlineSync.keyInSelect(bias, 'Set Your Bias Index?');
    const query = makeQuery('election',bias[index]);

console.log(query)
