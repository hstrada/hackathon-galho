import React, { useState } from 'react';

import { Grid, ButtonBase, Input, Typography } from '../../../components';

const PersonalData = () => {
  const [fullName, setFullName] = useState<string>('');

  const [isValid, setIsValid] = useState<boolean>(false);

  const validateForm = (input: string) => {
    setFullName(input);
    if (fullName.length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <Grid
      flex={1}
      paddingTop="xlarge"
      paddingBottom="xlarge"
      paddingRight="xlarge"
      paddingLeft="xlarge"
      backgroundColor="primary">
      <Grid justifyContent="center" flex={5}>
        <Grid marginBottom="mediumX">
          <Typography align="center" text="Qual é o seu nome?" color="fourth" />
        </Grid>
        <Grid>
          <Input
            value={fullName}
            onChangeText={(input) => validateForm(input)}
            placeholder="digite seu nome"
          />
        </Grid>
      </Grid>
      <Grid justifyContent="flex-end" flex={1}>
        <ButtonBase
          disabled={!isValid}
          onPress={() => console.log('Próximo')}
          text="Próximo"
        />
      </Grid>
    </Grid>
  );
};

export default PersonalData;
