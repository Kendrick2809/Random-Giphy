import { useState, useEffect } from 'react';

function GiphyDisplay (props) {
    const giphy = props.giphy;
    const [giphyUrl, setGiphyUrl] = useState('');

    useEffect(
        () => {
          if (giphy) {
            updateUrl();
          };
        },
        [giphy]
      );

      const updateUrl = () => {
        setGiphyUrl(giphy.images.fixed_height.url);
        console.log(giphyUrl)
        console.log("giphyURL")
      };

      return (
        <div className="Giphy">
        
              <div>
                <img src={giphyUrl} alt='' />
              </div>
         
        </div>
      )

}

export default GiphyDisplay;