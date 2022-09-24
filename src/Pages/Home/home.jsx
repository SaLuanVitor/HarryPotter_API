import React from "react";
import * as S from "./styleHome";
import {Link} from "react-router-dom";
export function Home(){

  return(
    <S.Main>
      <S.Box>
      <S.H1>Harry Potter API</S.H1>
      <S.P>Praticando com API de personagens de Harry Potter</S.P>
      <Link to="/characters"><S.Button>Iniciar</S.Button></Link>
      </S.Box>
    </S.Main>
  )
}