"use client"

import { useState } from "react";

import * as yup from "yup";

import { useTheme } from "styled-components";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { api } from "@services";
import { Button, Input } from "@common";
import { serverAccessCookie } from "@utils";
import { Logo, Lock, PersonalCard } from "@assets/svg";

import { Container, Form, ContainerLogo } from "./styles";

const schema = yup.object({
  nickname: yup.string().required(),
  password: yup.string().required(),
});

type schemaProps = yup.InferType<typeof schema>;

export default () => {
  const theme = useTheme();
  const route = useRouter();

  const [variant, setVariant] = useState<'primary' | 'loading' | 'error'>('primary');

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: schemaProps) => {
    setVariant('loading');

    const result = await api.auth.login(data);

    if (!result) {
      setVariant('error');
      throw new Error('fail');
    };

    await serverAccessCookie('use-token', result);

    route.push('/pages/dashboard');

    setVariant('primary');
  };

  return (
    <Container>
      <ContainerLogo>
        <Logo width={128} height={128} fill={theme.colors.primary} />
      </ContainerLogo>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="nickname"
          control={control}
          render={({ field: { onChange, onBlur } }) =>
            <Input icon={PersonalCard} placeholder="nickname" onChange={onChange} onBlur={onBlur} />
          }
        />

        <div style={{ height: 10 }} />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur } }) =>
            <Input icon={Lock} type="password" placeholder="Password" onChange={onChange} onBlur={onBlur} />
          }
        />

        <div style={{ height: 10 }} />

        <Button type="submit" variant={variant}>
          {variant === 'error' ? 'fail' : 'login'}
        </Button>
      </Form>
    </Container>
  )
};