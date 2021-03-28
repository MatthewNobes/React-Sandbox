import { useTable } from 'react-table';
import React from 'react';
 
 function TestTable() {
   const data = React.useMemo(
     () => [
       {
        name: 'Matt',
        item: 'apple',
        amount: '£1.50'
       },
       {
        name: 'Steve',
        item: 'water',
        amount: '£2.75'
       },
       {
        name: 'Jane',
        item: 'burger',
        amount: '£3.50'
       },
     ],
     []
   )

   const columns = React.useMemo(
     () => [
       {
         Header: 'Customer',
         accessor: 'name', 
       },
       {
         Header: 'Item',
         accessor: 'item',
       },
       {
        Header: 'Order amount',
        accessor: 'amount',
      },
     ],
     []
   )

 

   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })

 

   return (

     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>

       <thead>

         {headerGroups.map(headerGroup => (

           <tr {...headerGroup.getHeaderGroupProps()}>

             {headerGroup.headers.map(column => (

               <th

                 {...column.getHeaderProps()}

                 style={{

                   borderBottom: 'solid 3px black',

                   background: 'aliceblue',

                   color: 'black',

                   fontWeight: 'bold',

                 }}

               >

                 {column.render('Header')}

               </th>

             ))}

           </tr>

         ))}

       </thead>

       <tbody {...getTableBodyProps()}>

         {rows.map(row => {

           prepareRow(row)

           return (

             <tr {...row.getRowProps()}>

               {row.cells.map(cell => {

                 return (

                   <td

                     {...cell.getCellProps()}

                     style={{

                       padding: '10px',

                       border: 'solid 1px black',

                       background: 'papayawhip',

                     }}

                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }
 export default TestTable;