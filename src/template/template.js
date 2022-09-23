const template = () => {
  const inTheBoxMarkup = {
    tags: `
<ul>
  <li> item1 </li>
  <li> item2 </li>
  <li> item3 </li>
</ul>
    `,
  };

  const specsMarkup = {
    styles: `
<style>
  table.specTable {margin: 0 auto;}
  table.specTable tr {vertical-align: top;}
  table.specTable th, table.specTable td {width: 50%; padding-top: 1rem;}
  table.specTable th {text-align: right; padding-right: 1rem;}
  table.specTable td {padding-left:1rem;}
  .item.spec h2 {font-weight: 500; text-align: center; border-bottom: solid 0.05rem black; padding-bottom: 0.5rem; color: #ff6600;}
  .item.spec h3 {font-size: 2.5rem; margin: 2rem auto 0; width: fit-content; padding: 0   5rem 0.3rem 5rem; border-bottom: solid 0.05rem;}
  .item.spec h4 {font-size: 1.6rem;font-weight: 500; text-align: center; text-transform: uppercase; margin-bottom: -0.5rem; text-decoration-line: underline;}
</style>  
       
       `,
    tags: `
<table class="specTable">
  <tbody>
    <tr>
      <th> Attribute1 </th>
      <td> Value1 </td>
    </tr>
    <tr>
      <th> Attribute2 </th>
      <td> Value2 </td>
    </tr>
    <tr>
      <th> Attribute3 </th>
      <td> Value3 </td>
    </tr>   
  </tbody>
</table>`,
  };
  const descriptionSimple={
    styles:`
<style>
    h2.h2Lit {padding-block-start: 0.6rem;margin-block-end: 0.5rem;}
    .gText h2, .gText3 h2, .gText4 h2, .gText5 h2 {line-height:0.7;}
    h2.lh1 {line-height: 1;}
    h3.uLit {padding-top: 1rem; margin-bottom: -0.2rem;}
    span.h2Lit, .h1Lit {color: #ff6600; font-weight: bold;}
    .h1Lit {font-size: large;}
    span.h2Lit, p.mText, blockquote.descQ {font-size: medium;}
    blockquote.descQ footer {font-size: small; }
    blockquote.descQ {background-color: rgb(237, 237, 237); padding: 0.5rem; width: 80%;}
    blockquote.descQ p{padding: 0.5rem 0.5rem 0 0.5rem;}
    Ul.mpn {color: #888888;}
    span.ind{padding-left: 1rem;}
    table.descTable tr {vertical-align: top;}
    table.descTable th, table.descTable td {width: 50%; text-align: left; padding: 0 1rem 0 1rem;}
    table.descTable th {padding-top:1.5rem;}
    table.bTable {width: auto;}
    table.bTable th {text-align: left; padding-top:1rem; padding-bottom: 1rem; width: auto; font-size: 1vw;}
        .bDs {padding:0.5rem; box-shadow: 0rem 0.2rem 0.5rem  rgba(0,0,0,0.6); border-radius:0.5rem; border}
        @media only screen and (min-width:200px) and (max-width:1000px) {
            table.bTable th {font-size:3vw;}
        }
    .gText div, .gText3 div, .gText4 div, .gText5 div {padding:1rem;}
    .gText {display:grid; grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));}
    .gText3 {display:grid; grid-template-columns: repeat(auto-fill,minmax(33.33%, 1fr));}
    .gText4 {display:grid; grid-template-columns: repeat(auto-fill,minmax(25%, 1fr));}
    .gText5 {display:grid; grid-template-columns: repeat(auto-fill,minmax(20%, 1fr));}
            @media only screen and (min-width:200px) and (max-width:1000px) {
                    .gText, .gText3, .gText4, .gText5 {display:grid; grid-template-columns: repeat(auto-fill,minmax(100%, 1fr));}
        }
    .bDs1 {width:fit-content; box-shadow: 0rem 0.2rem 0.5rem  rgba(0,0,0,0.6); border-radius:0.5rem; border}
    .iDs1 {padding: 0.7rem;}
    .l1div {border-bottom: 0.1rem solid #000;}
    .dBor {padding:1rem;border:0.1rem solid #000;}
        .dMobile {border-top: solid .3rem #000; border-radius: 1rem; box-shadow: #000 0.1rem 0.1rem 0.3rem;}
        .dMobi {padding-left: 1rem; padding-right: 1rem;}
        u.h1Lit {font-size: large;}
    .aquaList li {padding-top: 0.5rem;}
    .aquaList li::first-line {font-weight: bolder;}
</style>
    `,
    tags:`
<p class="mText">The <strong class="h1Lit">ProductName</strong> 
</p>     

<h2 class="h2Lit">Key Features of the ProductName</h2>
<ul>
  <li>item1</li>
</ul>

<p></p>
<ul class="mpn">
  <li>MPN - bar1</li>
  <li>GTIN - bar2</li>
</ul>
    `
  }
  return {specsMarkup,inTheBoxMarkup,descriptionSimple}
};

export default template;
