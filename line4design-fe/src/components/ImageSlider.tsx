import React, {FC} from 'react';
import styled from 'styled-components';

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
  overflow: hidden;
  border: 5px solid #e4e4e4;
  padding: ${(props) => props.sliderPadding};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Image = styled.img`
  width: 1000px;
  height: auto;
`;

const ImageSlider: FC<ImageSliderProps> = ({
  images = [],
  sliderMaxWidth = '1000px',
  sliderPadding = '0px 0px 0px 0px',
}) => {
  return (
    <ImageSliderDiv
      sliderMaxWidth={sliderMaxWidth}
      sliderPadding={sliderPadding}>
      <Container>
        {(images ?? []).map((item, idx) => {
          return (
            <div key={item?.id ?? idx}>
              <Image src={item?.imagePath} alt={`${idx}`} />
            </div>
          );
        })}
      </Container>
    </ImageSliderDiv>
  );
};

export default ImageSlider;
