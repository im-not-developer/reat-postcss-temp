/** @format */

import React from 'react';
import { productListTypes } from '~/utils/product_list';

interface productDefaultCardPropsType {
  info?: productListTypes;
}

const productDefaultCard: productDefaultCardPropsType = {
  info: {
    id: 0,
    category: '',
    name: '',
    price: 0,
    discount_price: 0,
    discount_percent: 0,
    discount_on: false,
    img_link: '',
  },
};

const ProductCard = (props = productDefaultCard) => {
  const { info } = props;
  console.log(props);
  return (
    <div>
      <div>
        <div>
          <div style={{ width: '100px' }}>
            {/* default 찾아서 체크하기 */}
            <img src={require(`~/assets/imgs/sample_img.jpeg`).default} />
          </div>
        </div>
        <div>
          down
          <div>info</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
