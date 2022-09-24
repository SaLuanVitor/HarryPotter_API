import React from "react"
import { Link } from "react-router-dom"
import * as S from "./NavigationStyle.js"


export default function Navigation(){
  return(
    <S.BoxNav>
    <Link to="/"><S.H3>Home</S.H3></Link>
    <S.Navigation>
      <Link to="/characters"><S.H3>Characters</S.H3></Link>
      <Link to="/staff"><S.H3>Staff</S.H3></Link>
      <Link to="/students"><S.H3>Students</S.H3></Link>
    </S.Navigation>
    </S.BoxNav>
  )
}