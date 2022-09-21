const template = () => {
  const inTheBoxMarkup = {
    tags: `
<ul>
  <li> item 1 </li>
  <li> item 2 </li>
  <li> item 3 </li>
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
      <th> Attribute 1 </th>
      <td> Value 1 </td>
    </tr>
    <tr>
      <th> Attribute 2 </th>
      <td> Value 2 </td>
    </tr>
    <tr>
      <th> Attribute 3 </th>
      <td> Value 3 </td>
    </tr>   
  </tbody>
</table>`,
  };
  return {specsMarkup,inTheBoxMarkup}
};

export default template;
