import React from 'react';

const AboutUs = ({ data }) => {
  return (
    <div>
      <h2>About Us Component</h2>
      <Table data={data} />
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

export default AboutUs;
  