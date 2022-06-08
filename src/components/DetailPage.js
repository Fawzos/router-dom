import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;
  const isInteger = /^-?[0-9]+$/.test(id, '');

  useEffect(() => {
    if (!isInteger) {
      navigate('/');
    }
  }, []);
  return (
    <div>
      DetailPage: {id}
      <br />
      <Outlet />
    </div>
  );
}

export default DetailPage;
