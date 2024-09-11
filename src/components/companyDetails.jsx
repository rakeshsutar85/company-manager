import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCompanyById } from '../api';
import { Loader, Button } from '@mantine/core';

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompanyById(id).then(response => {
      setCompany(response.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <p>{company.createdOn}</p>
      <p>{company.phone}</p>
      <Button component={Link} to={`/companies/${id}/edit`}>Edit</Button>
    </div>
  );
};

export default CompanyDetails;
