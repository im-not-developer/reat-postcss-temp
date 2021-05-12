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

  border: 5px solid #e4e4e4;
  padding: ${(props) => props.sliderPadding};
  background-color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
  top: 0;
  left: 0;

  div {
    &:first-child {
      margin: 0px 20px;
      position: absolute;
      top: 50%;
      left: 0;
    }

    &:last-child {
      margin: 0px 20px;
      position: absolute;
      top: 50%;
      right: 0;
    }
  }
`;

const Image = styled.img`
  width: 1000px;
  max-width: 1000px;
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
  const imageSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageSliderRef && imageSliderRef.current) {
      console.log(imageSliderRef.current);
    }
  }, [imageSliderRef]);

  return (
    <ImageSliderDiv
      sliderMaxWidth={sliderMaxWidth}
      sliderPadding={sliderPadding}>
      <Container ref={imageSliderRef}>
        <div>
          <MovingBtn>
            <BigArrow />
          </MovingBtn>
        </div>
        {(images ?? []).map((item, idx) => {
          return (
            <div key={item?.id ?? idx}>
              <Image src={item?.imagePath} alt={`${idx}`} />
            </div>
          );
        })}

        <div>
          <MovingBtn>
            <BigArrow side="right" />
          </MovingBtn>
        </div>
      </Container>
    </ImageSliderDiv>
  );
};

export default ImageSlider;
