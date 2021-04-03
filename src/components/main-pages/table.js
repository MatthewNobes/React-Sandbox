import { useTable } from 'react-table';
import React from 'react';
 
/**
 * This is used to create the data being used in this React-Table test.
 * @returns Test dataset for the table TestTable
 */
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
       {
        name: 'Ricky',
        item: 'sandwich',
        amount: '£4.50'
       },
       {
        name: 'Karl',
        item: 'coke',
        amount: '£1.75'
       },
       {
        name: 'Jane',
        item: 'water',
        amount: '£2.75'
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
     <div className="Main-Content">
        <h1 className='Main-Title'>React-table test</h1>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
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
     </div>
   )
 }
 export default TestTable;