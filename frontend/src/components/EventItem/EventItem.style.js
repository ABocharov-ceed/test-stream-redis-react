import styled from 'styled-components';

export const ItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dbe1e6;
  padding: 15px 30px;
`;

const BaseBlock = styled.div`
  color: #4e6172;
  font-size: small;
`;

export const Icon = styled(BaseBlock)`
  width: 6%;
`;

export const Label = styled(BaseBlock)`
  width: 10%;
  text-transform: uppercase;
`;

export const Message = styled(BaseBlock)`
  width: 55%;
  font-weight: 500;
`;

export const ItemDate = styled(BaseBlock)`
  width: 30%;
  text-align: right;
`;