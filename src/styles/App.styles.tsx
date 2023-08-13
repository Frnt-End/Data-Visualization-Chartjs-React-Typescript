import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  margin: 40px auto;
  align-items: flex-start;
  height: 100%;

  .header-box {
    height: auto;
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    left: 29px;
    top: 17px;
    padding: 15px 60px;
  }

  h3 {
    color: #4d3550;
    font-weight: 400;
    font-size: 1.6em;
    margin: 0;
  }

  p {
    font-weight: 600;
    color: #999;

    margin: 0;
    font-size: 14px;
  }

  > div {
    height: 90%;
    max-height: 90%;
    min-height: 90%;

    background: #fff;
    border-radius: 20px 20px 0 0;

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  > div:first-child {
    display: flex;
    flex-direction: column;
    width: 37%;
    position: relative;

    .top-chart {
      height: 200px;
      background: url(chart.jpg) no-repeat center top;
      background-size: auto 326px;
      padding: 240px 20px 20px 20px;
      border-radius: 16px 16px 0 0;
    }

    .bottom-chart {
      height: auto;
      padding: 40px 30px 30px 30px;
    }
  }

  > div:last-child {
    width: 37%;
    position: relative;

    .top-table {
      width: 100%;
      height: 250px;
      background: url(hand.jpg) no-repeat center;
      background-size: auto 200px;
      background-position-y: 38px;
      border-radius: 16px 16px 0 0;
    }

    .bottom-table {
      height: auto;
      padding: 10px 30px 0 30px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div:first-child {
      width: 90%;
      height: auto;
      margin-bottom: 60px;
    }

    > div:last-child {
      width: 90%;
      height: auto;
    }
  }
`;

//Loading

const ldsRingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Ring = styled.div`
  display: inline-block;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
`;

export const RingItem = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 34px;
  height: 34px;
  border: 4px solid #23292d;
  border-radius: 50%;
  animation: ${ldsRingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #23292d transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const Divider = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background: #eee;
  margin: 10px 0 10px 0;
`;
