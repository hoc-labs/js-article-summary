
function getHTMLForArticleSummary(articleData) {

  // can use bootstrap card component 
  // https://getbootstrap.com/docs/5.0/components/card/
  //
  // get the author object for the article
  // return a string template literal with the following filled in
  // - article title
  // - author firstname, lastname
  // - article abstract
  // - article image

  return `

  `;
}

function getHTMLForShowcaseArticleSummary(topicData) {
  // find the showcase article from the topic object
  // pass the article object to getHTMLForArticleSummary
  // and return the HTML string returned from that function.
}

function showTopic(topicData) {
  // get the main-content element from the HTML doc
  // set the text color to the topicData.color
  // set the innerHTML to the generated HTML from the function getHTMLforShowCaseArticleSummary
}

function initTopic(topicData) {
 
  // set button color to topic color
  // - get the button via document.getElementById
  // - set the background color to the topicData.color

  // register click event handler to show the showcase article when the user
  // clicks on the button. 
  // - when clicked, call showTopic function
}

function initTopics() {
  topicsData.forEach(x=>initTopic(x));
}

initTopics();