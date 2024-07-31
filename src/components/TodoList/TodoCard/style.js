import styled from "styled-components";

export const StyledListItem = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #febc71;

    &:hover {
      opacity: 0.65;
    }
  }
`;

export const StyledInputContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    display: none;
    color: #fff;
    position: relative;
  }


  input + label:before {
    content: "✓";
    font-weight: 600;
    padding-left: 4px;
    padding-bottom: 4px;
    color: transparent;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    margin-right: 1rem;
    border: 1.5px solid #eaece7;
    margin-bottom: -2px;
  }
  input:checked {
    + label {
      text-decoration: line-through;
      color: #dddddd;
    }
  }

  input:checked + label:before {
    content: "✓";
    color: #ac8ec2;
  }
`;
