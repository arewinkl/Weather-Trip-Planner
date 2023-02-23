import NewsArticles from "./NewsArticles";

export default function Home({ weatherNews }) {
  // const weatherNews = []
  // const nonWeatherNews = []

  // if (news.length < 1){
  // } else{
  //   news.results.map((n, i) => {
  //     n.adx_keywords.includes('Weather') == true ? weatherNews.push(n) : nonWeatherNews.push(n)
  //   })
  // }

  //   console.log(weatherNews);
  return (
    <div>
      <div>
        <h5>Saved searches</h5>
        {/* We want saved searches to render and be clickable to find weather, and then take you to current weather for that city. */}
      </div>
      <div>
        <h4> NEWS</h4>
        <NewsArticles weatherNews={weatherNews} />
      </div>
    </div>
  );
}
