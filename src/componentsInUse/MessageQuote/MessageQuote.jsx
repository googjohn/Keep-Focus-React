import { useState, useEffect } from "react";
import { useFetch } from "../Utility/FetchData";

export default function MessageQuote({ selectedMode, focusCount }) {
  const quoteStyle = `w-full min-h-max p-5 mt-5 flex text-[20px]
    font-semibold text-[black] flex-col justify-between items-center relative 
    bg-[#ffffff4d] rounded-lg overflow-hidden`;

  const { quotes } = useFetch('/data/data.json');
  const [randomIndex, setRandomIndex] = useState(0);
  const [randomQuote, setRandomQuote] = useState({})

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * quotes.length))
  }, [quotes, focusCount])

  useEffect(() => {
    if (quotes.length > 0) {
      setRandomQuote(quotes[randomIndex])
    }
  }, [quotes, randomIndex])

  return (
    <div id="message-container" className="text-center">
      <p id="focus-count">#{focusCount}</p>
      <p className="message">{
        selectedMode !== 'focus-on' ?
          `Take a ${selectedMode.slice().split('-')[0]} break!` :
          'Time to focus!'
      }</p>
      <div className={quoteStyle}>
        {
          quotes.length > 0 && (
            <blockquote>
              &ldquo;{randomQuote.quote}&ldquo; &mdash;
              <footer>{randomQuote.author}</footer>
            </blockquote>
          )
        }
      </div>
    </div>
  )
}