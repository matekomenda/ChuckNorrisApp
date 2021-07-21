import { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import {
  HomeContainer,
  SelectContainer,
  TopContainer,
  StyledSelect,
  StyledOption,
  StyledButton,
  BottomContainer,
  Paragraph
} from './index';


export const Home: FunctionComponent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedvalue, setSelectedValue] = useState('');
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`https://api.chucknorris.io/jokes/categories`);
        setCategories(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  const selectValue = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    try {
      const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${selectedvalue}`);
      console.log(res.data);
      setJoke(res.data.value);
      console.log(joke);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HomeContainer>
      <SelectContainer>
        <TopContainer>
          <StyledSelect onChange={selectValue}>
            {categories.map((category, key) => (
              <StyledOption key={key} value={category}>
                {category}
              </StyledOption>
            ))}
          </StyledSelect>
          <StyledButton onClick={handleSubmit}>
            Generate
          </StyledButton>
        </TopContainer>
        <BottomContainer>
          <Paragraph>
            {joke}
          </Paragraph>
        </BottomContainer>
      </SelectContainer>
    </HomeContainer>
  );
};