/** @format */

import React, { FC } from 'react';

import ProductCardSlider from '~/components/ProductCardSlider';
import { productListTypes, product_list_items } from '~/utils/product_list';

interface ProductCardsSectionPropsType {
  title?: string;
  product_list_items?: productListTypes[];
}

const ProductCardsSectionProps: ProductCardsSectionPropsType = {
  title: '',
  product_list_items: [],
};

const ProductCardsSection: FC<ProductCardsSectionPropsType> = props => {
  return (
    <div className="product_card_section">
      <div className="product_card_section__contents">
        <div className="product_card_section__contents__head">
          <div className="title_text">{props?.title ?? ''}</div>
        </div>

        <ProductCardSlider product_list={product_list_items} />
      </div>
    </div>
  );
};

ProductCardsSection.defaultProps = ProductCardsSectionProps;

export default ProductCardsSection;
