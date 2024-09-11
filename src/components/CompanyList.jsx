import { useEffect, useState } from 'react';
import { getCompanies } from '../api';
import { Button, Table, Loader } from '@mantine/core';
import { Link } from 'react-router-dom';
import './CompanyList.css';
import '../App.css';
import '../App.jsx';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompanies().then(response => {
      setCompanies(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Button className='button' component={Link} to="/companies/new" mb="md">Add Company</Button>
      <Button className='button' component={Link} to="/logout" mb="md">Logout</Button>
      <Table className='table' >
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.data.map(company => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.description}</td>
              <td>
                <Button style={{ marginRight: '10px' }} component={Link} to={`/companies/${company.id}`}>
                  View
                </Button>
                <Button component={Link} to={`/companies/${company.id}/edit`}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  );
};

export default CompanyList;
