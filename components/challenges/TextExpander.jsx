"use client";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        addClass="rounded-sm border-2 border-[#ccc] p-[10px]"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}
const CollapsedText = ({ text, wordCount }) => {
  function collapseSentence(sentence, count) {
    const words = sentence.split(" "); //split the sentence into an array when each word is a seperated element in the array
    if (words.length <= count) {
      return sentence;
    }
    const shortenedWords = words.slice(0, count); //returns a shallow copy of a portion of an array into a new array object
    return `${shortenedWords.join(" ")}...`; //  joins all elements of an array into a string
  }

  return <div>{collapseSentence(text, wordCount)}</div>;
};
function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor,
  expanded,
  addClass,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const needExpansion = children.split(" ").length > collapsedNumWords;

  useEffect(() => {
    //added this so expanded prop is now in sync with the function
    setIsExpanded(expanded);
  }, [expanded]);

  return (
    <div className={`font-sans flex gap-2 mb-2 ${addClass}`}>
      {isExpanded ? (
        children
      ) : (
        <CollapsedText text={children} wordCount={collapsedNumWords} />
      )}
      {needExpansion && (
        <button
          className={`${!buttonColor && "text-blue-700"} rounded-lg px-2`}
          style={{ color: `${buttonColor}` }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      )}
    </div>
  );
}
