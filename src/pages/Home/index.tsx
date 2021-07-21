import styled from 'styled-components';
import pic from '../../images/unsplash.jpg';

export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
    margin-top: -60px;
    background: url(${pic}) center center no-repeat;
`;

export const  SelectContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   min-height: 80%;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 75%;
  min-width: 75%;
  min-height:20%;
`;

export const StyledSelect = styled.select`
  margin: 1rem 0;
  background: white;
  color: black;
  font-size: 16px;
  padding: 10px 10px 10px 15px;
  width: 590px;
  border: none;
  border-radius: 14px;
  border: 1px solid white;
  outline: none;
  margin-right: 1rem;
  color: #8e7892;
`;

export const StyledOption = styled.option`
  border: 1px solid #e5e5e5;
  padding: 2px 6px;
  color: #8e7892;
`;

export const StyledButton = styled.button`
  background: #8e7892;
  color: white;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  font-size: 14px;
  border-radius: 14px;
  &:hover{
    background: white;
    color: #8e7892;
  }
`;

export const Paragraph = styled.p`
  color: #d8c9db;
`;