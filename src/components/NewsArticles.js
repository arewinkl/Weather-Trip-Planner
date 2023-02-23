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
        <img alt="picture" src={image} />
      </div>
    </div>
  );
}
