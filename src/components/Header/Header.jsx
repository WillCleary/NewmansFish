import React from 'react';
import { gql, useQuery } from '@apollo/client';
import 'assets/css/main.css'
import './Header.css';

const HEADER_QUERY = gql`
{ 
  header {
    data {
      attributes{
        Logo
      }
    }  
  }
}
`;

const Header = () => {
  const { data, loading, error } = useQuery(HEADER_QUERY);
  console.log(data, error);
  return (
    < div id="header" data-testid="Header" >
      <header>
        {/* <div className="logo"> */}
        <a href="/">Newman&apos;s Fish Company Inc.
          <img src='\assets\img\logo.png' />
        </a>
        {/* </div> */}
      </header>
    </div >
  );
}
export default Header;
