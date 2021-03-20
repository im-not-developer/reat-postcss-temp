/** @format */

import React from 'react';
import { If } from 'react-if';
import { productListTypes } from '~/utils/product_list';

interface ProductCardSliderPropsType {
  product_list?: productListTypes[];
}

const ProductCardSliderProps: ProductCardSliderPropsType = {
  product_list: [],
};

const ProductCardSlider = ({ product_list } = ProductCardSliderProps) => {
  return (
    <div className="product_card_slider">
      {(product_list ?? []).map((info, idx) => {
        return (
          <div key={idx} className="product_card">
            <div className="product_card__up">
              <div>
                {/* default 찾아서 체크하기 */}
                <img src={require(`../assets/imgs/sample.jpg`).default} />
              </div>
            </div>
            <div className="product_card__down">
              <div>{info?.category}</div>
              <div>{info?.name}</div>
              <div>
                <div>{info?.price}</div>
                <If condition={info?.discount_on}>
                  <div>{info?.discount_price}</div>
                  <div>{info?.discount_percent}</div>
                  <div>{info?.discount_price}</div>
                </If>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCardSlider;
