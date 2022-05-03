import React, { useEffect } from "react";

function News() {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-tweet-limit", "unlimitted");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("data-height", "600");
    anchor.setAttribute("data-width", "400");
    anchor.setAttribute("href", "https://twitter.com/SneakerNews");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed"></div>
    </section>
  );
}

export default News;
