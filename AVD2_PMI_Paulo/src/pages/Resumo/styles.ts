import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';



export const Title = styled.Text`
    
    font-size: ${RFValue(18)}px;
    
`;

export const Content = styled.ScrollView``;

export const TotalContainer = styled.View`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  margin-top: 6px;
`;

export const TotalText = styled.Text`
  
  font-size: 20px;
  color: #363F5F;
`;



export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
 font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.attention};
`;

export const Local = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`; 
export const TaxAmount = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`; 