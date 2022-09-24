import React from "react";
import Navigation from "../Nav/Navigation.jsx"
import {useState, useEffect} from "react"
import {APIStaff} from "../../Services/APIs/API.js"
import axios from "axios"
import * as S from "./staffStyle.js"


export function Staff(){
  const [char, setChar] = useState([]);

  useEffect(()=>{
      axios.get(APIStaff).then((r)=>{
        setChar(r.data.slice(0,8))
      });
  }, [])
  return(
    <>
      <Navigation/>
      <S.Box>
        <S.H2>Staff</S.H2>
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
  )
}