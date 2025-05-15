import React from 'react';

const Student = ({ data }) => {
  const studentData = data.filter(item => item.role === 'Student');

  return (
    <div>
      <h2>Student Component</h2>
      <Table data={studentData} />
    </div>
  );
};

const Table = ({ data }) => (
  <table border="1" cellPadding="5">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.role}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Student;
