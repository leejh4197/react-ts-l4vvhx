import * as React from 'react';
import { useState } from 'react';
import '../style/ProductPage.css';
import ToolTip from './ToolTip';
import '../style/a11y.css';

const ProductPage = ({ title, price, sale, sale_price }) => {
  const regex = /[^0-9]/g;
  const priceNum = price.replace(regex, '');
  const [active, setActive] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const totalPrice = (priceNum * quantity)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const handleToolTip = () => {
    setActive(!active);
  };
  const handleToolPlus = () => {
    setQuantity(quantity + 1);
  };
  const handleToolMinus = () => {
    quantity === 0 ? 0 : setQuantity(quantity - 1);
  };

  return (
    <div className="wrap">
      <div className="bgImg">
        <span className="a11yHidden">상품이미지</span>
        <div className="img" />
      </div>
      <span className="a11yHidden">상품이름</span>
      <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
      <div className="priceWrap">
        <span className="a11yHidden">할인율</span>
        <div className="sale">{sale}%</div>
        <div className="price">
          <span className="a11yHidden">정상가</span>
          <p>{sale_price}</p>
          <span className="a11yHidden">판매가</span>
          <p>{price}</p>
        </div>
      </div>
      <div className="deliveryWrap">
        <div className="delivery">
          택배배송
          <div className="line" />
          <span className="deliveryPrice">3,000원&nbsp;</span>
          <span className="order">(주문시결제)</span>
        </div>
        <span className="desc">10개마다 부과</span>
      </div>
      <div className="countWrap">
        <button
          type="button"
          role="button"
          aria-label="수량감소"
          className="minus"
          onClick={handleToolMinus}
        >
          -
        </button>
        <input
          type="text"
          className="inp"
          value={quantity}
          aria-label={`상품수량${quantity}개`}
          disabled
        />
        <button
          type="button"
          role="button"
          aria-label="수량추가"
          className="plus"
          onClick={handleToolPlus}
        >
          +
        </button>
      </div>
      <div className="totalPrice">
        <div>
          총 상품 금액&nbsp;
          <div className="questionBtn">
            <button onClick={handleToolTip}>?</button>
            {active && <ToolTip setActive={setActive} active={active} />}
          </div>
        </div>
        <div className="quantityWrap">
          <span>총 수량 {quantity}개 </span>
          <div className="line" />
          <span>{totalPrice}원</span>
        </div>
      </div>
      <div className="btnWrap" aria-label="구매하기버튼">
        {quantity === 0 ? (
          <button className="btn" disabled>
            <img
              src="https://velog.velcdn.com/images/leejh4197/post/5e9a5e2b-ab21-4cf0-887b-74453d440418/image.png"
              alt=""
            />
            <span>구매하기</span>
          </button>
        ) : (
          <button className="btn">
            <img
              src="https://velog.velcdn.com/images/leejh4197/post/13ce29d1-48cc-43d3-9f5f-5c58b4af8547/image.png"
              alt=""
            />
            <span>구매하기</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
