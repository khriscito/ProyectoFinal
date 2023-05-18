import React from "react";

let defaultData = {
  fields: ["id", "nombre", "ci"],
  data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  title: "default datatable",
};
const Datatable = ({
  fields = defaultData.fields,
  data = defaultData.data,
  title = defaultData.title,
  children,
}) => {
  console.log(data);
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

              <tbody>{children && children}</tbody>
              <tfoot>
                <tr>
                  {fields.map((field) => {
                    return <th key={`datatable-${title}-${field}`}>{field}</th>;
                  })}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datatable;
