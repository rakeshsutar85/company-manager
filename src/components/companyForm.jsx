import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextInput, Button, Paper } from '@mantine/core';
import { getCompanyById, createCompany, updateCompany } from '../api';

const CompanyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      getCompanyById(id).then((response) => {
        setName(response.data.name);
        console.log(response.data.id);
        console.log(response.data.name);
        setDescription(response.data.description);
      });
    }
  }, [id]);

  const handleSubmit = async () => {
    const companyData = { name, description };
    if (id) {
      await updateCompany(id, companyData);
    } else {
      await createCompany(companyData);
    }
    navigate('/companies');
  };

  return (
    <Paper padding="md">
      <TextInput
        label="Company Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleSubmit} mt="md">{id ? 'Update' : 'Create'} Company</Button>
    </Paper>
  );
};

export default CompanyForm;
