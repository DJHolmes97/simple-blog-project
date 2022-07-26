import styled from "styled-components";
import {Col} from "reactstrap";

export const Column = styled(Col)`
  padding-bottom: 15px;
`

export const Image = styled.img`
  height: fit-content;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  min-height: 282px;
  width: auto;
  box-shadow: inset 0 0 10px #000000;
  align-items: center;
`