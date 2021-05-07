import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const font = "'Kanit', sans-serif";

const TextContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: 100px;
  position: relative;
  display: flex;
  align-items: center;
  opacity: 0;
  margin: 0 10px 0 0;
`;
const Header = styled.h1`
  font-size: 36px;
  font-family: ${font};
  margin: 0;
`;

const Blocker = styled.div`
  width: 100%;
  height: 23%;
  background-color: black;
  position: absolute;
`;

const Text = (props) => {
  const ref = useRef(null);

  //animation
  const animation = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ref.current,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: 0, duration: 2, delay: 1.5 }
    );
  };

  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <TextContainer ref={ref}>
        {props.blocked ? <Blocker></Blocker> : null}
        <Header>{props.text}</Header>
      </TextContainer>{" "}
    </>
  );
};

export default Text;
