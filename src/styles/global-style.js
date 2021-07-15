import { createGlobalStyle } from 'styled-components/macro';
import { reset }  from 'styled-reset';



export const GlobalStyle = createGlobalStyle`
	${reset}
	
	* {
		box-sizing: border-box;
	}
	
	html {
		font-size: 62.5%;
	}
	
	body {
    font-family: 'Noto Sans KR', sans-serif;
	}
	
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ol,
  ul,
  li {
    list-style: none;
  }
  
  img {
    max-width: 100%;
  }
  
  button {
    border: 0;
    padding: 0;
    background: none;
    outline: none;
    cursor: pointer;
  }
  
  .a11y {
    overflow: hidden;
    position: absolute;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
  }
`