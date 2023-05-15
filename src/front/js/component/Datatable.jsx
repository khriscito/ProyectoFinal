import React from "react";


let defaultData = {
    fields: ["id", "nombre", "ci"],
    data: [0,1,2,3,4,5,6,7,8,9],
    title: "default datatable"
}
const Datatable = ({ fields=defaultData.fields, data=defaultData.data, title=defaultData.title }) => {
  return (
    <>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1"></i>
          {title}
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  {fields.map((field) => {
                    return <th key={`datatable-${title}-${field}`}>{field}</th>;
                  })}
                </tr>
              </thead>
              <tfoot>
                <tr>
                  {fields.map((field) => {
                    return <th key={`datatable-${title}-${field}`}>{field}</th>;
                  })}
                </tr>
              </tfoot>
              <tbody>
                {data.map((item) => (
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datatable;
