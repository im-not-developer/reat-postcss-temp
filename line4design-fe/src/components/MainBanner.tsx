import React, {useMemo} from 'react';

import {carouselImagesTypes} from '~/@types/api';
import ImageSlider from '~/components/ImageSlider';

interface Props {}

const _carouselImages: carouselImagesTypes[] = [
  {
    id: 0,
    imagePath: '~/assets/imgs/samples/',
    fileName: 'sample_1.jpg',
  },
  {
    id: 1,
    imagePath: '~/assets/imgs/samples/',
    fileName: 'sample_2.jpg',
  },
  {
    id: 2,
    imagePath: '~/assets/imgs/samples/',
    fileName: 'sample_3.jpg',
  },
];
const MainBanner = (props: Props) => {
  const carouselImages = useMemo(() => {
    return _carouselImages;
  }, [_carouselImages]);

  return (
    <div className="mainbanner">
      <div className="mainbanner__container">
        <ImageSlider images={carouselImages} />
      </div>
    </div>
  );
};

export default MainBanner;
