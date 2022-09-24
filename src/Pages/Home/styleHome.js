import style from "styled-components";

export const Main = style.section`
  background-color: #0e1a40;
  padding-top: 1em;
  padding-bottom: 1em;
`


export const Box = style.div`
  height: 120vh;
  width: 80vw;
  border: solid black;
  margin: 1em auto;
  border-radius: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(https://wallpapercrafter.com/desktop/128534-Harry-Potter-Hogwarts-castle.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  `

export const H1 = style.h1`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  padding: 0.5em;
  background-color: white;
  border-radius: 1em;

  @media(max-width:400px){
   font-size:1.5rem;
   width: 90%;
  }
`

export const P = style.p`
  width: 50%;
  margin: 4em auto;
  text-align: center;
  font-size: 1.5rem;
  background-color: white;
  border-radius: 1em;
  padding: 0.5em;
  @media(max-width:400px){
    font-size:0.8rem; 
    width: 80%;
   }
`

export const Button = style.button`
  border: none;
  padding: 2em;
  border-radius: 2em;
  cursor: pointer;
  background-color: gray;
  :hover{
    background-color: red;
  }

`