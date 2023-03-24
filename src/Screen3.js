import React, { useState } from 'react';

const Screen3 = ({ data }) => {
  const [tableData, setTableData] = useState(data);

  const handleDelete = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Mobile/Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.mobile }</td>
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Screen3;
