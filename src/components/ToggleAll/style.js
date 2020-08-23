import styled from 'styled-components';

export const StyledToggle = styled.input`
  text-align: center;
  border: none; /* Mobile Safari */
  opacity: 0;
  position: absolute;

  & + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);

    &:hover {
      cursor: pointer;
    }
  }

  & + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  &:checked + label:before {
    color: #737373;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    background: none;
  }
`;
