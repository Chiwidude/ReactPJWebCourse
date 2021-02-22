import React, {useEffect} from "react";


const TwitterContainer = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
  
    return (
      <section className="twitterContainer">
        <div className="twitter-embed">
          <a
            className="twitter-timeline"
            data-theme="dark"            
            data-chrome="noheader nofooter noborders noscrollbar"
            href="https://twitter.com/smitegame"
            data-height="400"
            data-width="400"
          >            
          </a>
        </div>
      </section>
    );
  };
  
  export default TwitterContainer;
  