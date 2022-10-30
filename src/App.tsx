import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import './App.css';
import TodoList from './components/TodoList';
import fetchTodoData from './api/fetchTodoList';
// import { useDispatch } from 'react-redux';
import { useDispatch } from './store';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #E7E7EE;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing: border-box;
}
a{
	text-decoration: none;
	color: inherit;
}
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoData());
  }, []);

  return (
    <Wrapper>
      <GlobalStyle />
      <TodoList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export default App;
