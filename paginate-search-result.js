function paginateSearchResults(searchResults, container) {
  var resultsPerPage = 10; // set the number of search results to display per page
  var currentPage = 1; // set the initial page number
  var totalPages = Math.ceil(searchResults.length / resultsPerPage); // calculate the total number of pages

  // create a pagination control
  var pagination = $('<div class="pagination"></div>');
  var prevButton = $('<button class="prev">Prev</button>');
  var nextButton = $('<button class="next">Next</button>');
  var pageIndicator = $('<div class="page-indicator">Page ' + currentPage + ' of ' + totalPages + '</div>');

  // add event listeners to the pagination buttons
  prevButton.on('click', function() {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
    }
  });

  nextButton.on('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage);    
    }
  });

  // append the pagination controls to the container
  pagination.append(prevButton);
  pagination.append(pageIndicator);
  pagination.append(nextButton);
  container.append(pagination);

  // function to display a specific page of search results
  function displayPage(pageNumber) {
    var startIndex = (pageNumber - 1) * resultsPerPage;
    var endIndex = startIndex + resultsPerPage;
    container.empty();
    for (var i = startIndex; i < endIndex && i < searchResults.length; i++) {
      var result = searchResults[i];
      // display the search result in the container
      container.append('<div>' + result + '</div>');
    }
    // update the page indicator text
    pageIndicator.text('Page ' + pageNumber + ' of ' + totalPages);
  }
  // display the first page of search results
  displayPage(currentPage);
}

function search(query) {
  var url = 'https://pawelnersisian.com/proxy.php?q=' + encodeURIComponent(query) + '&num=10&start=0&hl=en&as_sdt=0,5';
  // ...
}