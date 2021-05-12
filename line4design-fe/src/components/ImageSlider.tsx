import React, {FC, useRef, useEffect} from 'react';
import styled from 'styled-components';

import BigArrow from '~/assets/imgs/components/BigArrow';
import {carouselImagesTypes} from '~/@types/api';

interface ImageSliderProps {
  images: carouselImagesTypes[];
  sliderMaxWidth?: string;
  sliderPadding?: string;
}

const ImageSliderDiv = styled.div<{
  sliderMaxWidth?: string;
  sliderPadding?: string;
}>`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.sliderMaxWidth};
  padding: ${(props) => props.sliderPadding};
  background-color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;

  .movingbtn {
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);

    &:first-child {
      left: 0;
    }

    &:last-child {
      right: 0;
    }
  }
`;

const ImageSlides = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
`;

const Image = styled.img`
  width: 1000px;
  height: auto;
`;

const MovingBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    opacity: 0.7;
  }
`;

const ImageSlider: FC<ImageSliderProps> = ({
  images = [],
  sliderMaxWidth = '1000px',
  sliderPadding = '0px 0px 0px 0px',
}) => {
  const imageSlidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageSlidesRef && imageSlidesRef.current) {
      console.log(imageSlidesRef.current);
    }
  }, [imageSlidesRef]);

  return (
    <ImageSliderDiv
      sliderMaxWidth={sliderMaxWidth}
      sliderPadding={sliderPadding}>
      <Container>
        <div className="movingbtn">
          <MovingBtn>
            <BigArrow />
          </MovingBtn>
        </div>
        <ImageSlides ref={imageSlidesRef}>
          {(images ?? []).map((item, idx) => {
            return (
              <div key={item?.id ?? idx}>
                <Image src={item?.imagePath} alt={`${idx}`} />
              </div>
            );
          })}
        </ImageSlides>

        <div className="movingbtn">
          <MovingBtn>
            <BigArrow side="right" />
          </MovingBtn>
        </div>
      </Container>
    </ImageSliderDiv>
  );
};

export default ImageSlider;
