import React from 'react';

import { Grid, Typography } from '../../components';

const Home = () => {
  const options = {
    bloqueado: { texto: 'block' },
    desbloqueado: { texto: 'desbloqueado' },
    esperando: { texto: 'esperando' },
    recusado: { texto: 'recusado' },
  };

  const getOptions = () => {
    return options.recusado;
  };

  const { texto } = getOptions();

  return (
    <Grid flex={1} backgroundColor="primary">
      <Typography text={texto} />
    </Grid>
  );
};

export default Home;
