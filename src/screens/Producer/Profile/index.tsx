import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@components/Button';
import { useAuth } from '@hooks/auth';
import Input from '@components/Input';
import CommonServices, { IData } from '@services/CommonServices';
import { Colors } from '@styles/theme';
import {
  Bold,
  ButtonContainer,
  Container,
  Email,
  Name,
  Wrapper,
} from './styles';

export default function Profile(): JSX.Element {
  const { signOut, user } = useAuth();
  const [name, setName] = React.useState(user.name);
  const schema = Yup.object().shape({
    nome: Yup.string().required('Nome obrigatório'),
    senha: Yup.string().required('Senha obrigatória'),
    novaSenha: Yup.string().when('senha', {
      is: (val: string) => !!val.length,
      then: Yup.string().required('Campo Obrigatório'),
      otherwise: Yup.string(),
    }),
  });
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      nome: '',
      senha: '',
      novaSenha: '',
    },
  });

  const handleUpdate = async (data: IData): Promise<void> => {
    const { nome } = await CommonServices.updateData(data);
    setName(nome as string);
    setValue('nome', '');
    setValue('senha', '');
    setValue('novaSenha', '');
  };
  return (
    <Container>
      <Wrapper>
        <Icon name="account-outline" size={50} />
        <Email>
          <Bold>{user.email}</Bold>
        </Email>
        <Name>
          <Bold>{name}</Bold>
        </Name>
      </Wrapper>
      <Input
        errors={errors}
        control={control}
        name="nome"
        label="Nome"
        autoCapitalize="none"
        color={Colors.purple}
      />
      <Input
        errors={errors}
        control={control}
        name="senha"
        label="Senha"
        autoCapitalize="none"
        color={Colors.purple}
      />
      <Input
        errors={errors}
        control={control}
        name="novaSenha"
        label="Nova Senha"
        autoCapitalize="none"
        color={Colors.purple}
      />
      <ButtonContainer>
        <Button
          style={{ marginBottom: 14 }}
          onPress={handleSubmit(handleUpdate)}
        >
          Atualizar
        </Button>
        <Button
          variant="secondary"
          style={{ marginBottom: 30 }}
          onPress={signOut}
        >
          Sair
        </Button>
      </ButtonContainer>
    </Container>
  );
}
