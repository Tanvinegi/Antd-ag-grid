import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from 'react';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const AgGrid = () => {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
      flex: 1,
    };
  }, []);
  const rowClassRules = useMemo(() => {
    return {
      // apply red to Ford cars
      "rag-red": (params) => params.data.make === "Ford",
    };
  }, []);

  return (
    <div style={{ width: "100vh", height: "100vw" }}>
      <div className={
        "ag-theme-quartz"
      } style={{ height: "100vh", width: "100vw" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowClassRules={rowClassRules}
          rowSelection="multiple"
        />
      </div>
    </div>
  )
}

export default AgGrid
