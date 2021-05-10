import React, {FC} from 'react';
import styled from 'styled-components';

import {carouselImagesTypes} from '~/@types/api';

interface ImageSliderProps {
  images: carouselImagesTypes[];
  maxWidth?: string;
}

const ImageSliderDiv = styled.div<{maxWidth?: string}>`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Image = styled.img`
  width: 500px;
  height: auto;
`;

const ImageSlider: FC<ImageSliderProps> = ({
  images = [],
  maxWidth = '500px',
}) => {
  return (
    <ImageSliderDiv maxWidth={maxWidth}>
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
