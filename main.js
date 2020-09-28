const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a63f62608ebf43d4b855f19cde053677');
const readlineSync = require('readline-sync');


//SEARCH BUCKETS
  const bias = ['Left','Right', 'Moderate']
  const left = ['cnn.com', 'bbc.co.uk'];
  const right = ['foxnews.com'];

//OBJECT QUERY
  const makeQuery = (source) => {

    const objQuery = {}

  if (source === 'Left'){
    const newQuery = Object.create(objQuery);
    newQuery.q = 'election';
    newQuery.sources = [...left].toString();
    newQuery.sortBy = 'relevancy';
    console.log(newQuery);
  } else {
    const newQuery = Object.create(objQuery);
    newQuery.q = 'election';
    newQuery.sources = [...right].toString();
    newQuery.sortBy = 'relevancy';
    console.log(newQuery);
  }
};

  //USER INPUT

  // const userInput = ()
    const index = readlineSync.keyInSelect(bias, 'Set Your Bias Index?');
    const query = makeQuery(bias[index]);

    const apiCall = (search) => {
    newsapi.v2.everything(search).then(response => {
      console.log(response);
    });
  };

    console.log(apiCall(query));

    //apiCall(query);

  //API CALL
