import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Grid, ButtonBase, Input, Typography } from '../../../components';

import { createPersonalData } from '../../../store/ducks/user/actions';

const PersonalData = () => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');

  const handleData = () => {
    dispatch(
      createPersonalData({
        fullName: fullName,
        dateOfBirth: dateOfBirth,
      }),
    );
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
          onPress={() => handleData()}
          text="Próximo"
        />
      </Grid>
    </Grid>
  );
};

export default PersonalData;
