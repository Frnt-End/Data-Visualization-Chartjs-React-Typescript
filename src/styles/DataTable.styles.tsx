import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TablePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: #f6f6f6 !important;
    border: 1px solid rgba(75, 192, 192, 0);
    padding: 3% 5%;
    border-radius: 6px;
    margin: 6% 3%;
    cursor: pointer;
    transition: 0.3s ease; // Corrected '0.3 ease' to '0.3s ease'
    color: #555;

    &:disabled {
      cursor: default !important;
      color: #ccc;
      border: 1px solid rgba(75, 192, 192, 0);
      background: rgba(75, 192, 192, 0) !important;
    }

    &:hover {
      background: rgba(32, 144, 230, 0.7) !important;
      border: 1px solid rgba(75, 192, 192, 0.1);
      color: #fff;

      &:disabled {
        background: rgba(75, 192, 192, 0) !important;
        border: 1px solid rgba(75, 192, 192, 0);
        color: #ccc;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 70%;
    button {
      padding: 2% 3%;
      margin: 4% 2%;
    }
  }
`;

export const TableStyles = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  table {
    width: 100%;
    border-collapse: collapse;
    animation: "${fadeIn}" 1s ease-in-out; // Added double quotes around fadeIn
    border-spacing: 0;

    th,
    td {
      text-align: center;
      font-size: 14px;
    }

    thead {
      width: 100%;
      tr {
        display: flex;
        width: 90%;
        justify-content: space-around;
        padding: 10px;
        th {
          color: #555;
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        &:nth-child(odd) {
          padding: 15px 40px;
          background: rgba(255, 255, 255, 0.3);
          display: flex;
          width: 100%;
          justify-content: space-between;
          border-radius: 32px;
        }
        &:nth-child(even) {
          padding: 15px 40px;
          background: rgba(75, 192, 192, 0.05) !important;
          border-radius: 12px !important;
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
        td {
          font-size: 13px;
          font-weight: 600;
          color: #999;
        }
      }
    }
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    height: 330px;
  }
`;
