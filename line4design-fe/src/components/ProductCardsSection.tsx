/** @format */

import React from 'react';

const list = [
  {
    id: 0,

    name: '',
    price: 0,
    discount_price: 0,
  },
];
interface ProductCardsSectionPropsType {
  title?: string;
}

const ProductCardsSectionProps: ProductCardsSectionPropsType = {
  title: '',
};

const ProductCardsSection = (props = ProductCardsSectionProps) => {
  return (
    <div className="product_card_section">
      <div className="product_card_section__contents">
        <div className="product_card_section__contents__head">
          <div className="title_text">{props?.title ?? ''}</div>
        </div>

        <div className="product_card_section__contents__body">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardsSection;
