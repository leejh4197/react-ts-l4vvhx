import * as React from 'react';
import '../style/ToolTip.css';

const ToolTip = ({ setActive, active }) => {
  const handleX = () => {
    setActive(false);
  };
  const getToolTipClassName = (active) => {
    const className = 'toolTipWrap';
    if (active) {
      setTimeout(() => {
        const tooltip = document.querySelector('.toolTipWrap');
        tooltip.classList.add('active');
      });
    }
    return className;
  };
  return (
    <div className={getToolTipClassName(active)}>
      <p>
        총 상품금액에&nbsp;
        <span>배송비는 포함되어 있지 않습니다.</span>
      </p>
      <p>결제시 배송비가 추가될 수 있습니다.</p>
      <img
        onClick={handleX}
        src="https://velog.velcdn.com/images/leejh4197/post/cbae8b07-cd03-4719-9c09-c443d4a4ba8f/image.png"
      />
    </div>
  );
};

export default ToolTip;
