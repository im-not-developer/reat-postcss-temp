import React, {FC} from 'react';
import styled from 'styled-components';

import {carouselImagesTypes} from '~/@types/api';

interface ImageSliderProps {
  images: carouselImagesTypes[];
}

const ImageSliderDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
`;

const ImageSlider: FC<ImageSliderProps> = ({images = []}) => {
  console.log(images);
  return (
    <ImageSliderDiv className="imageslider">
      <div className="imageslider__container"></div>
    </ImageSliderDiv>
  );
};

export default ImageSlider;
