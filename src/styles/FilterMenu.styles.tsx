import styled from "styled-components";

export const SelectRangeStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 40px;

  .form-control {
    margin-right: 20px;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #555;
    margin: 0 15px 0 0;
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    display: block;

    h2 {
      margin: 15px 0;
    }
  }
`;

export const StyleSelect = styled.div`
  width: 150px;
`;

export const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 10;
`;

export const StyledOption = styled.option`
  font-family: "Open Sans", "Roboto Mono", monospace, sans-serif;
  color: #555 !important;
  font-size: 16px !important;
  background-color: #fff !important;
  font-weight: normal !important;
  padding: 4px !important;

  &:disabled {
    color: #eee !important;
    cursor: not-allowed !important;
  }

  &:hover {
    background-color: #4fc3a1;
    color: #fff;
  }
`;
