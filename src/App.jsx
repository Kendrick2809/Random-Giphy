import { useEffect, useState } from "react";
import axios from "axios";
import GiphyForm from "./components/GiphyForm";
import GiphyDisplay from "./components/GiphyDisplay";
import "./App.css";



function App() {

  const [giphy, setGiphy] = useState("");
 
  const getRandomGiphy = async() => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=lPyyCC6XTDt6DTle5UixfKtTuhsLj3Pj`)
    console.log(response)
    const randomData = response.data.data;
    console.log(randomData);
    setGiphy(randomData);
    console.log("setgiphyrandom")
    console.log(giphy)
  }

  const searchGiphy = async(input) => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=lPyyCC6XTDt6DTle5UixfKtTuhsLj3Pj&limit=1&q=${input}`)
    const searchData = response.data.data[0];
    console.log(searchData);
    setGiphy(searchData);
    console.log("setgiphy")
    console.log(giphy)
  }

  useEffect(() => {
    getRandomGiphy();
  }, []);

  return (
    <div className="App">
     
     <h1>WELCOME TO GET GIPHY</h1>
     <GiphyForm onSearchSubmit={searchGiphy} />
     <GiphyDisplay giphy={giphy} />
    </div>
  );
}

export default App;
