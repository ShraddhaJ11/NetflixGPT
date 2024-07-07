import React, { useRef } from "react";
import openAI from "../utils/openAI";

const GPTSearchBar = () => {
  const searchText = useRef();

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get the results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies.comma separted like the example result given ahead. Example Results: Gadar,Solay,Don,Golmaal, Koi Mil Gya";

    const getResults = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(getResults.choices);
  };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
          ref={searchText}
        />
        <button
          className="m-4 p-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
