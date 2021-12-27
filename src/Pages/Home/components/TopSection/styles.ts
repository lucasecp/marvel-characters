import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  
  `;
export const TextGroup = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  > p,
  h1 {
    color: #fff;
    text-align:center;
    font-size: 44px;
    font-weight: 700;
    font-family: 'RobotoCondensed' sans-serif;
  }
  >p{
      margin-top: 10px;
      font-size: 16px;
      font-family: 'Roboto' sans-serif;
  }
  @media(max-width: 767px){
    > h1{
      font-size: 26px;
    }
  }

`
export const Figure = styled.figure`
  height: 400px;
  /* max-width:1930px; */
  width: 100%;

  > div {
      background-image: url("https://terrigen-cdn-dev.marvel.com/content/prod/1x/characters_art_mas_dsk_01.jpg");
      background-position: 50%;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      background-size: cover;
      
  }

  @media (max-width: 767px) {
      height:340px;
    > div {
      background-image: url("https://terrigen-cdn-dev.marvel.com/content/prod/1x/characters_art_mas_mob_01.jpg") !important;
    }
  }
`;
