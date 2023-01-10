import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body::-webkit-scrollbar {
  width: 10px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #000000;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(171deg, rgba(121, 60, 161, 1) 7%, rgba(240, 123, 44, 1));
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 2px solid black;  /* creates padding around scroll thumb */
}


html,body, div, span, applet, object, iframe,
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
	font-size: 62.5%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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
`