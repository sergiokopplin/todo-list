import styled from 'styled-components';

export const StyledButton = styled.button`
  &,
  &:active {
    display: ${({ shouldShow }) => (shouldShow ? 'block' : 'hidden')};
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;

  & li {
    display: inline;
  }

  & li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  & li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  & li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }

  @media (max-width: 430px) {
    bottom: 10px;
  }
`;

export const StyledCounter = styled.span`
  float: left;
  text-align: left;

  & strong {
    font-weight: 300;
  }
`;

export const StyledFooter = styled.footer`
  display: ${({ shouldShow }) => (shouldShow ? 'block' : 'none')};
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 430px) {
    height: 50px;
  }
`;
