import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Text from "../components/Text";
import { gsap } from "gsap";

const Container = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  margin: 100px 0 0 100px;
  flex-wrap: wrap;
  padding: 0;
`;

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Header = () => {
  const array = [];
  const textArray = text.split(" ");
  const ref = useRef(null);
  //animation
  const animation = () => {
    const tl = gsap.timeline();
    tl.to(array, {
      x: "-200%",
      stagger: 0.1,
      opacity: 0,
      delay: 3.5,
    });
  };

  useEffect(() => {
    const pushArray = () => {
      let i;
      for (i = 0; i < ref.current.childNodes.length; i++) {
        array.push(ref.current.childNodes[i].firstChild);
      }
    };
    pushArray();
  }, []);

  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    console.log(textArray);
  }, []);

  // useEffect(() => {
  //   let i = 0;
  //   for (i = 0; i < ref.current.childNodes.length; i++) {
  //     animation(i, i * 0.1);
  //   }
  // }, []);

  //
  // useEffect(() => {
  //   console.log(ref.current.childNodes);
  // });
  return (
    <>
      <Container ref={ref}>
        {textArray.map((text) => {
          return (
            <>
              <Text blocked text={text}></Text>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default Header;
