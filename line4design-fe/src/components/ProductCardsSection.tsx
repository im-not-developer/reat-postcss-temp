/** @format */

import React from 'react';
import ProductCard from '~/components/ProductCard';
import { productListTypes, product_list_items } from '~/utils/product_list';
interface ProductCardsSectionPropsType {
  title?: string;
  product_list_items?: productListTypes[];
}

const ProductCardsSectionProps: ProductCardsSectionPropsType = {
  title: '',
  product_list_items: [],
};

const ProductCardsSection = (props = ProductCardsSectionProps) => {
  console.log(product_list_items);
  return (
    <div className="product_card_section">
      <div className="product_card_section__contents">
        <div className="product_card_section__contents__head">
          <div className="title_text">{props?.title ?? ''}</div>
        </div>

        <div className="product_card_section__contents__body">
          <div>
            {(product_list_items ?? []).map((r, idx) => (
              <ProductCard key={idx} info={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardsSection;
