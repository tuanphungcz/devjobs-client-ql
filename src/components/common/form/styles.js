import styled from 'styled-components';
import { FONT_SIZE_TINY } from '../../../constant';

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ededed;
  border-radius: 5px;
  background: #fbfbfb;
  width: 100%;
`;

export const TextLabel = styled.div`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TextArea = styled.textarea`
  background: #fbfbfb;
  border: 1px solid #ededed;
  border-radius: 5px;
  width: 100%;
`;

export const Required = styled.span`
  color: black;
  margin-left: 4px;
  font-size: ${FONT_SIZE_TINY};
  color: red;
`;

export const Helper = styled.div`
  margin-top: 8px;
  color: #999;
  font-size: ${FONT_SIZE_TINY};
`;

export const ErrorLabel = styled.div`
  margin-top: 8px;
  color: red;
  font-size: ${FONT_SIZE_TINY};
`;
