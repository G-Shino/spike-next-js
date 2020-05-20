import { css } from "@emotion/core";
import { Color } from "./../constants/Color";

//emotion-resetとかに変更した方が良いかもね
const globalCSS = css`
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  html {
    font-size: 62.5%;
  }

  body {
    /* プロジェクトによって変動 */
    min-width: 950px;
    color: #000;
    line-height: 1.6;
    font-weight: 400;
    font-family: "Jost", "YuGothic", "Yu Gothic", "游ゴシック", "Meiryo",
      "メイリオ", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
      -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    font-size: 1.4rem;
    background-color: ${Color.BASE_COLOR};
    width: 100%;
    font-variant-numeric: tabular-nums;
    /* safari hover対策 */
    -webkit-font-smoothing: antialiased;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ul,
  ol {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  a {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    color: inherit;
  }

  /* change colours to suit your needs */
  ins {
    background-color: #ff9;
    color: #000;
    text-decoration: none;
  }

  /* change colours to suit your needs */
  mark {
    background-color: #ff9;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  del {
    text-decoration: line-through;
  }

  abbr[title],
  dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* change border colour to suit your needs */
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #cccccc;
    margin: 1em 0;
    padding: 0;
  }

  input,
  select {
    vertical-align: middle;
  }

  img {
    vertical-align: bottom;
    line-height: 1;
  }

  button {
    line-height: 1;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    font-size: 2rem;
  }
`;

export default globalCSS;
