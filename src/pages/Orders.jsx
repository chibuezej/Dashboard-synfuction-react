

import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { contextMenuItems, ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
      height={345}
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Orders;

// import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
// import * as React from 'react';
// import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

// function Orders() {
//     const gridTemplate = (props) => {
//         const src = props.EmployeeID + '.png';
//         return (<div className='image'>
//             {/* <img src={src} alt={props.EmployeeID}/> */}
//         </div>);
//     };
//     return <GridComponent dataSource={ordersData} height={315}>
//         <ColumnsDirective>
//         {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//     </GridComponent>;
// }
// ;
// export default Orders;