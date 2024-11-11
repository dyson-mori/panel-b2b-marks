"use client"

import * as yup from "yup";

import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input } from "@common";

import { Lock, PersonalCard } from "../../assets/svg";

import { Container, Form } from "./styles";

const schema = yup.object({
  nickname: yup.string().required(),
  password: yup.string().required(),
}).required();

export default () => {
  const route = useRouter();

  const { control, handleSubmit, formState: { isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: any) => {
    const res = await fetch('http://localhost:3000/api/employee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        nickname: data.nickname,
        password: data.password
      })
    });

    if (!res.ok) {
      throw new Error('fail');
    };

    return route.push('/pages/dashboard');
  };

  return (
    <Container>
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