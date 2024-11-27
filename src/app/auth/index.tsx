"use client"

import * as yup from "yup";

import { useTheme } from "styled-components";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { api } from "@services";
import { Button, Input } from "@common";
import { Logo, Lock, PersonalCard } from "@assets/svg";

import { Container, Form, ContainerLogo } from "./styles";

const schema = yup.object({
  nickname: yup.string().required(),
  password: yup.string().required(),
}).required();

export default () => {
  const theme = useTheme();
  const route = useRouter();

  const { control, handleSubmit, formState: { isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: any) => {
    const result = await api.auth.login(data);

    if (!result) {
      throw new Error('fail');
    };

    return route.push('/pages/dashboard');
  };

  return (
    <Container>
      <ContainerLogo>
        <Logo fill={theme.colors.primary} />
      </ContainerLogo>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="nickname"
          control={control}
          render={({ field: { onChange, onBlur } }) => <Input icon={PersonalCard} placeholder="nickname" onChange={onChange} onBlur={onBlur} />}
        />

        <div style={{ height: 10 }} />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur } }) => <Input icon={Lock} placeholder="Password" onChange={onChange} onBlur={onBlur} />}
        />

        <div style={{ height: 10 }} />

        <Button>{isSubmitting ? 'loading' : 'Login'}</Button>
      </Form>
    </Container>
  )
};