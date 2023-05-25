function extractSearchResults(data) {
  var searchResults = []; // create an empty array to hold the search results

  // find all the search result items on the page
  var results = $(data).find('.gs_r');

  // loop through each search result item
  results.each(function(index, result) {
    // extract the title, authors, publication, and link of the search result
    var title = $(result).find('.gs_rt a').text().trim();
    var authors = $(result).find('.gs_a').text().trim();
    var publication = $(result).find('.gs_rs').text().trim();
    var link = $(result).find('.gs_rt a').attr('href');

    // create a search result object and add it to the searchResults array
    searchResults.push({
      title: title,
      authors: authors,
      publication: publication,
      link: link
    });
  });

  return searchResults; // return the search results array
}