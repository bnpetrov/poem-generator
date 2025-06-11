import React, { useState, useEffect, useMemo } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import "./PoemGenerator.css";

const WORDS = ["snow", "as", "gone", "brother", "echo", "like", "step", "crack", "window"];
const MIN_LENGTH = 6;
const MAX_LENGTH = 8;

const AVG_WORD_CHAR_LENGTH = 6; 
const CHAR_WIDTH_PX = 11;

function getRandomPoem(words, minLength = MIN_LENGTH, maxLength = MAX_LENGTH) {
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const shuffled = [...words].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, length).join(" ");
}

export default function PoemGenerator() {
  const [poems, setPoems] = useState([]);

  const maxCardWidth = useMemo(() => {
    const maxChars = MAX_LENGTH * AVG_WORD_CHAR_LENGTH;
    return maxChars * CHAR_WIDTH_PX + 16; 
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Spline+Sans+Mono&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    document.body.style.fontFamily = '"Spline Sans Mono", monospace';

    const initialPoem = getRandomPoem(WORDS);
    setPoems([initialPoem]);
  }, []);

  const generatePoem = () => {
    const newPoem = getRandomPoem(WORDS);
    setPoems([newPoem, ...poems]);
  };

  return (
    <div className="poem-container">
      <Button onClick={generatePoem} className="poem-button">
        generate poem
      </Button>

      {poems.map((poem, index) => (
        <Card
          key={index}
          style={{ width: maxCardWidth, minWidth: maxCardWidth }}
          className="poem-card"
        >
          <CardContent>{poem}</CardContent>
        </Card>
      ))}

      <a
        href="https://instagram.com/thelooniest"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        @thelooniest
      </a>
    </div>
  );
}
