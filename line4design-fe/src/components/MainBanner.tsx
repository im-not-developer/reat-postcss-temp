import React, {useMemo} from 'react';

import {carouselImagesTypes} from '~/@types/api';
import ImageSlider from '~/components/ImageSlider';

interface Props {}

const _carouselImages: carouselImagesTypes[] = [
  {
    id: 0,
    imagePath: require('../assets/imgs/samples/sample_3.jpg').default,
  },
  {
    id: 1,
    imagePath: require('../assets/imgs/samples/sample_2.jpg').default,
  },
  {
    id: 2,
    imagePath: require('../assets/imgs/samples/sample_3.jpg').default,
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
