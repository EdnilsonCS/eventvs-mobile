/* eslint-disable prettier/prettier */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-indent */
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as Yup from 'yup';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/auth';
import {
    Bold,
    Buttons,
    ButtonContainer,
    Container,
    Email,
    Img,
    Name,
    Wrapper
} from './styles'

export default function Profile(): JSX.Element {
  const { signOut} =  useAuth()
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
    newPassword: Yup.string()
      .when('password', {
        is: val => !!val.length,
        then: Yup.string().required('Campo Obrigatório'),
        otherwise: Yup.string(),
      }),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleUpdate = (data:any):void => {
      console.log(data)
  }
  const  navigation = useNavigation();
    return (
        <Container>
            <Wrapper style={{alignItems: 'center',}}>
                <Img source={{ uri: 'https://www.github.com/tuliomitico.png' }} />
            </Wrapper>
            <Wrapper>
                <Email><Bold>tfcastro@dcomp.ufs.br</Bold></Email>
                <Name><Bold>The Big Boss</Bold></Name>
            </Wrapper>
            <Input
              errors={errors}
              control={control}
              name="name"
              label="Name"
              autoCapitalize="none"
              color="#6d43a1"
            />
            <Input
              errors={errors}
              control={control}
              name="password"
              label="Senha"
              autoCapitalize="none"
              color="#6d43a1"
            />
             <Input
               errors={errors}
               control={control}
               name="newPassword"
               label="Nova Senha"
               autoCapitalize="none"
               color="#6d43a1"
             />
            <ButtonContainer>
                <Buttons style={{backgroundColor: '#6A2ABA',marginBottom: 14}} onPress={handleSubmit(handleUpdate)}>
                    Atualizar
                </Buttons>
                <Buttons style={{backgroundColor: '#DE0b20',marginBottom: 30}} onPress={signOut}>
                    Sair
                </Buttons>
            </ButtonContainer>
        </Container>
    )
}
