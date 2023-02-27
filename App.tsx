import * as React from 'react';
import './App.css';
import ProductPage from './component/ProductPage';
import { ProductType } from './type/ProductType';

export default function App() {
  const dummyData: ProductType = {
    title: `<span>래피젠 코로나 자가 검사 키트</span></br>
    <span>2개입X1박스</span>`,
    price: '6,370원',
    sale: 88,
    sale_price: '56,760원',
  };

  return (
    <div className="viewport">
      <ProductPage {...dummyData} />
    </div>
  );
}
