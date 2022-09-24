import style from "styled-components"

export const BoxNav = style.section`
  background-color: #0e1a40;
  margin-top: -0.6em;
  padding-bottom: 2em;
`

export const Navigation = style.div`
  border: solid #aaaaaa;
  width: 90vw;
  margin: 0 auto;
  padding: 2em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #0e1a40;
`

export const H3 = style.h3`
  padding: 2em;
  width: 200px;
  font-family: cursive;
  margin: 0 auto;
  margin-top: 0.5em;
  text-align: center;
  transition: 1s all;
  border-radius: 2em;
  color: #aaaaaa;
  text-decoration:none;
  :hover{
    background-color: #aaaaaa;
    color: black;
  }
`