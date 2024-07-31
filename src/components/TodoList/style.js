import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  div{
    width: 100%;
  }

  &>div:last-child{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    border-bottom: 1px solid #f5f5f5;
    height: 42px;

    input {
      width: 17.5rem;
      height: 1.75rem;
      background-color: #ffffff;
      border-radius: 4px 0 0 4px;
      padding-left: 1rem;
      outline: 1px solid #f5f5f5;

      &:focus {
        outline: 1px solid #9c75bf;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 9px;
      border-radius: 0 4px 4px 0;
      background-color: #febc71;
      font-size: 1.5rem;
      font-weight: 600;
      color: #ffffff;

      &:hover {
        opacity: 0.65;
      }
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const StyledTitleBox = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fafafa;
  border-radius: 8px 8px 0 0;
`;
