export default function NewsArticles({ weatherNews }) {
  console.log(weatherNews, "woof");

  if (weatherNews.length < 1) {
    return "news on the way.....";
  }
  const image = weatherNews.response.docs[0].multimedia[0].url;

  const weatherNewsStories = (weatherNews.response.docs)

  console.log(weatherNewsStories)

  return (
    <div>
      <div>
        <h2>{weatherNews.response.docs[0].headline.main}</h2>
        {/* We need to figure out how to render image . Then create component for the news article and be able to map through the rest of the articles.
        Then we want the first article to be headline, then the next three to be smaller underneath.*/}
        <img
          alt="picture"
          typeof="image"
          src={`https://static01.nyt.com/${weatherNews.response.docs[0].multimedia[0].legacy.xlarge}`}
        />
      </div>
      <br/>
      <div>
        {weatherNewsStories.map((story, i) => {
          if (i == 0){
          } else
          return(
            <a href={story.web_url}>
              <img 
                alt="picture"
                typeof="image"
                src={`https://static01.nyt.com/${story.multimedia[0].legacy.xlarge}`}
              />
              <h4>{story.headline.main}</h4>
            </a>
          )
        }
          )}
      </div>
    </div>
  );
}
