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

const Image = styled.img``;

const ImageSlider: FC<ImageSliderProps> = ({images = []}) => {
  return (
    <ImageSliderDiv className="imageslider">
      <div className="imageslider__container">
        {(images ?? []).map((item, idx) => {
          const imageSrc = item?.imagePath + item?.fileName;
          console.log(imageSrc);
          return (
            <div key={item?.id ?? idx}>
              <img src={require(`${imageSrc}`)} />
            </div>
          );
        })}
      </div>
    </ImageSliderDiv>
  );
};

export default ImageSlider;
