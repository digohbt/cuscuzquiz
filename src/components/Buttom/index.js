import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;











// import React from 'react'
// import styled from 'styled-components'
// import {useRouter} from 'next/router'

// const ButtomWhapeer = styled.button `
//     height: 36px;
//     width: 283px;
//     cursor:pointer; 
//     border: none;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: ${({ theme }) => theme.colors.primary};
    
    

// `



// export default function Buttom( props) {
//     const router = useRouter();
//     // const  [name, setName] = React.useState('');
//     return (
//         <>
//             <ButtomWhapeer>
//             {/* <form onSubmit={function (infosDoEvento) {
//               infosDoEvento.preventDefault();
//               router.push(`/quiz?name=${proname}`);
//             }}>
//               <input className="inputNome"
//               onChange ={ function (infosDoEvento) {
//                 // name = infosDoEvento.target.value;
//                 setName(infosDoEvento.target.value)
//               }}
//               placeholder="Digite seu nome" /> */}

//                 <p type="submit" disabled={props.name.length === 0 }>
//                    Jogar {props.name}
//                 </p>
//                 {/* </form> */}
//             </ButtomWhapeer>
//         </>
//     )
// }