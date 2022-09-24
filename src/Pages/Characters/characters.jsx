import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./CharactersStyle.js"
import { APICharacters } from "../../Services/APIs/API.js"
import Navigation from "../Nav/Navigation"





export function Characters() {
  const [char, setChar] = useState([]);

  useEffect(()=>{
      axios.get(APICharacters).then((r)=>{
        setChar(r.data.slice(0,25))
      });
  }, [])

  return (
  <>
    <Navigation/>
    <S.Box>
      <S.H2>All Characters</S.H2>
      <S.Section>
        {char.map((i)=>(
          <S.Card>
            <img src={i.image} alt={i.name}/>
              <S.Info>
                <p><span>name: </span>{i.name}</p>
                {i.house && <p><span>house: </span>{i.house}</p>}
                {i.patronus && <p><span>patronus: </span> {i.patronus}</p>}
                <p><span>actor: </span> {i.actor}</p>
              </S.Info>
          </S.Card>
        ))}
      </S.Section>
    </S.Box>
  </>
  );
}
