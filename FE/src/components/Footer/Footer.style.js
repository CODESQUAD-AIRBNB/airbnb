import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 600px;
  background: ${({ theme }) => theme.color.grey6};
`;

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const West = styled.div`
  width: 20%;
  margin-right: 50px;
  margin-top: 50px;
  margin-bottom: 80px;
`;

export const ServiceTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.grey1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 30px;
`;

export const ServiceContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.black};
  margin-top: 20px;
`;

export const CompanyInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.black};
  margin-right: 30px;
`;
