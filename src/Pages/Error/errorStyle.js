import style from "styled-components"

export const BoxError = style.section`

  height: 100vh;
`

export const ErrorPage = style.div`
  width: 100%;
  height: 100%;
  border: solid black;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://external-preview.redd.it/tmQ3PImvBbVYoLVs3YX8KAUJJDyWhnGmP5O0EwMZSbs.jpg?auto=webp&s=dfad39b24d27e542a446c25e75f3810412984abf)
  `

export const Box = style.div`
  text-align: center;
  margin: 0 auto;
  max-width: 300px;
  background-color: white;
`

export const P = style.p`
  color: red;
  font-size: 2em;
  font-family: cursive;
`