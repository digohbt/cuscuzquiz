import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import db from '../db.json';

import Link from '../src/components/Link';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from '../src/components/Head'
import Buttom from '../src/components/Buttom'
import Input from '../src/components/Input'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

//  const QuizContainer = styled.div`
//   width: 100%;
//   max-width: 350px;
//   padding-top: 45px;
//   margin: auto 10%;
//   @media screen and (max-width: 500px) {
//     margin: auto;
//     padding: 15px;
//   }
// `;

// const QuizContainer = styled.div`
//   width: 100%;
//   max-width: 350px;
//   padding-top: 45px;
//   `

 export default function Home() { 
  const router = useRouter();
  const  [name, setName] = React.useState('');


  return (
    <QuizBackground backgroundImage={db.bg} >
      <Head/>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p > 
            Esse quiz é para descobrir se voçe gosta de cuscuz !
            </p>
            <form onSubmit={ (infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input 
              name={name}
              value={name}
              onChange ={ function (infosDoEvento) {
                // name = infosDoEvento.target.value;
                setName(infosDoEvento.target.value)
              }}
              placeholder="Digite seu nome" />

              <Buttom name={name} setName={setName} >
              {`Jogar ${name}`}
              </Buttom>
               
              {/* <button className="buttom" type="submit" disabled={name.length === 0 }>
                
              </button> */}

            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/digohbt" />
    </QuizBackground>
  );

}