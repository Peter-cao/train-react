import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Carousel } from 'antd-mobile';
function IndexPage({ dispatch, data, imgHeight }) {
  return (
    <Carousel
      autoplay={false}
      infinite
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
      {data.map(val => (
        <a
          key={val}
          href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: imgHeight }}
        >
          <img
            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              dispatch({
                type: 'index/imgOnLoad',
                payload: { imgHeight: 'auto' },
              })
            }}
          />
        </a>
      ))}
    </Carousel>
  );
}

IndexPage.propTypes = {
};
function mapStateToProps(state) {
  const { data, imgHeight } = state.index;
  return {
    data, imgHeight
  };
}
export default connect(mapStateToProps)(IndexPage);
