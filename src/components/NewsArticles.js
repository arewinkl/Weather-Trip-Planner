export default function NewsArticles({ weatherNews }) {
  console.log(weatherNews, "woof");

  if (weatherNews.length < 1) {
    return "news on the way.....";
  }
  const image = weatherNews.response.docs[0].multimedia[0].url;
  return (
    <div>
      <div>
        <h2>{weatherNews.response.docs[0].headline.main}</h2>
        {/* We need to figure out how to render image . Then create component for the news article and be able to map through the rest of the articles.
        Then we want the first article to be headline, then the next three to be smaller underneath.*/}
        <img
          alt="picture"
          typeof="image"
          src={`${weatherNews.response.docs[0].multimedia[0].legacy.xlarge}`}
        />
      </div>
    </div>
  );
}
