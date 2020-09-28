const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a63f62608ebf43d4b855f19cde053677');
const readlineSync = require('readline-sync');


//SEARCH BUCKETS
const bias = ['Left','Right', 'Moderate']
const left = ['cnn.com', 'bbc.co.uk'];
const right = ['foxnews.com', 'thefederalist.com'];
const moderate = ['apnews.com', 'npr.org']

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

  console.log(`
         HEADLINES FROM THE LEFT`)
      console.log(response.articles.filter( ({author, title, description, url}) => console.log(`
         Headline: ${title}
         Author:   ${author}
         Source:   ${url}`)));
    });

  } else if (source === 'Right'){
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

      console.log(`
         HEADLINES FROM THE RIGHT`)
      console.log(response.articles.filter( ({author, title, description, url}) => console.log(`
         Headline: ${title}
         Author:   ${author}
         Source:   ${url}`)));
    });

  } else {
    newsapi.v2.everything({
  q: term,
  domains: [...moderate].toString(),
  language: 'en',
  sortBy: 'relevancy',
}).then(response => {
  console.log(`
         MODERATE HEADLINES`)
      console.log(response.articles.filter( ({author, title, description, url}) => console.log(`
         Headline: ${title}
         Summary:  ${description}
         Source:   ${url}`)));
    });
  }
};

  //USER INPUT
    const index = readlineSync.keyInSelect(bias, 'Set your bias index');
    const searchTerm = readlineSync.question('Enter your search term: ');
    const query = makeQuery(searchTerm,bias[index]);

  //   const formattedQuery = query.articles.filter(({author, title, description, url}) => {
  //
  //     console.log(
  //
  //       `Headline: ${title},
  //   Author: ${author},
  //   Summary: ${desription},
  //   Source: ${url}
  //   -------------`)
  // });


console.log(query)
