import style from "styled-components"

export const Box = style.section`
  background-color: #222f5b;
  border: solid #aaaaaa;
`
export const H2 = style.h2`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
`
export const Section = style.ul`
  flex-wrap: wrap;
  display: flex;
  width: 90vw;
  justify-content: space-around;
  background-color: #222f5b;
  margin: 0 auto;
`

export const Card = style.div`
  
  border-radius: 2em;
  margin: 0 auto;
  margin-bottom: 2em;
  height: 40vh;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  img{
    width: 20em;
    max-height: 50vh;
    height: 50vh;
    border-radius: 1.8em;
    z-index: 99;
  }
  :hover{
    div{
      top:1em;
      border-radius: 2em;
    }
  }

  @media screen and (max-width: 400px){
    img{
      width: 10em;
      height: 30vh;
    }
  }
  
`

export const Info = style.div`
  position: absolute;
  z-index: 9999;
  top: 55em;
  padding-top: 2em;
  font-family: cursive;
  width: 100%;
  height: 100%;
  border: solid black;
  display: flex;
  font-size: 0.8rem;
  background-color:#aaaaaa; 
  opacity: 0.9;
  flex-direction: column;
  justify-itens: flex-end;
  transition: 1s all;
  text-align: justify;

  p{
    margin-bottom: 0.4em;
    padding-left: 2em;
    text-align: justify;
    width: 70%;
    font-family: cursive;
  }
  span{
    color: #740001;
  }
  @media screen and (max-width: 400px){
    p{
      width: 90%;
    }
  }
  
`

