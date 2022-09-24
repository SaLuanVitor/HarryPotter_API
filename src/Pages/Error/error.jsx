import React from "react";
import Navigation from "../Nav/Navigation.jsx"
import * as S from "./errorStyle.js"
export function Error(){

  return(
    <S.BoxError>
    <Navigation/>
    <S.ErrorPage>
      <S.Box>
        <S.P>error 404: page not found </S.P>
        <S.P>are you missing? </S.P>
      </S.Box>
    </S.ErrorPage>
    </S.BoxError>
  )
}