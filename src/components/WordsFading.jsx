import React, { useEffect, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
import styled from 'styled-components';

const WORDS = [
  { id: 0, text: 'committed' },
  { id: 1, text: 'self-taught' },
  { id: 2, text: 'fastlearner' },
  { id: 3, text: 'passionate' },
];

const Wrapper = styled.div`
  font-weight: 300;
  width: 120px;
  position: relative;
  display: inline-block;
  text-align: center;
  font-style: italic;
  color: var(--text-highlight);
  transition: color 0.2s ease-out;
  & span {
    text-align: center;
    width: 100%;
  }
`;

const WordsFading = () => {
  // Subtitle keywords loop
  const [index, setIndex] = useState(0);
  const stackTransition = useTransition(WORDS[index], span => span.id, {
    config: config.stiff,
    delay: 450,
    duration: 100,
    from: {
      opacity: 0,
      transform: 'translateY(10px)',
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 0,
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
  });

  useEffect(() => setInterval(() => setIndex(current => (current + 1) % WORDS.length), 2500), []);
  
  return (
    <Wrapper>
      <i style={{ visibility: 'hidden' }}>self-taught</i>
      {stackTransition.map(({ item, props, key }) => (
        <animated.span key={key} style={props}>
          {item.text}
        </animated.span>
      ))}
    </Wrapper>
  );
};

export default WordsFading;