import React, { useState } from 'react';

import { Grid, ButtonBase, Input, Typography } from '../../../components';

const PersonalData = () => {
  const [fullName, setFullName] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');

  return (
    <Grid
      flex={1}
      paddingTop="xlarge"
      paddingBottom="xlarge"
      paddingRight="xlarge"
      paddingLeft="xlarge"
      backgroundColor="primary">
      <Grid justifyContent="center" flex={5}>
        <Typography align="center" text="Qual é o seu nome?" color="fourth" />

        <Grid>
          <Input
            value={fullName}
            onChangeText={(input) => setFullName(input)}
            placeholder="digite seu nome"
          />
        </Grid>
        <Grid marginBottom="small" marginTop="extraLarge">
          <Typography
            align="center"
            text="Qual dia você nasceu?"
            color="fourth"
          />
          <Input
            value={dateOfBirth}
            onChangeText={(input) => setDateOfBirth(input)}
            placeholder="digite sua data de nascimento"
          />
        </Grid>
      </Grid>
      <Grid justifyContent="flex-end" flex={1}>
        <ButtonBase
          disabled={!(fullName.length >= 3 && dateOfBirth.length >= 8)}
          onPress={() => console.log('Próximo')}
          text="Próximo"
        />
      </Grid>
    </Grid>
  );
};

export default PersonalData;
