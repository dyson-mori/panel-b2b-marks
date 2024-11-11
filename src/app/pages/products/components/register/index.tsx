import React, { useEffect, useState } from 'react';

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Category, Product } from '@prisma/client';

import { Button, Input, Modal, Select } from '@common';
import { Link, Tag, TextingLeft, Coin, Buildings, Box } from '@assets/svg';

import { Container, Sides } from './styles';
import { onSubmit, schema } from './constance';

interface Props {
  open: boolean;
  setClose: (open: boolean) => void;
  categories: Category[];
  update: Product | null;
};

export default ({ open, categories, update, setClose }: Props) => {
  const { control, handleSubmit, setValue, formState: { isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const select = categories.map(row => ({
    id: row.id,
    label: row.title
  }));

  const handleCode = async (categorySelected: string) => {
    if (!categorySelected) return;

    const res = await fetch(`/api/product?title=${categorySelected}`, { method: 'GET' });

    if (!res.ok) {
      return;
    }

    const last = await res.json();

    setValue(
      'id', last[last.length - 1].id + 1
    );
  };

  const submit = async (product: any) => {
    const data = await onSubmit({ product });

    if (!!data) setClose(false);
  };

  useEffect(() => {
    if (!update) return;
    setValue('id', update.id);
    setValue('category', update.category);
    setValue('description', update.description);
    setValue('price', update.price as any);
    setValue('provider', update.provider);
    setValue('quantity', update.quantity);
  }, [update]);

  return (
    <Modal open={open}>
      <Container onSubmit={handleSubmit(submit)}>

        <Controller
          name="file"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Sides>
              <label htmlFor="file">
                {value ? <img src={value} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} /> : 'Choose a file'}
              </label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={evt => {
                  const file = evt.target.files![0];
                  const reader = new FileReader();

                  reader.readAsDataURL(file);
                  reader.onloadend = () => onChange(reader.result);
                }}
                // onBlur={onBlur}
              />
            </Sides>
          )}
        />

        <Sides>
          <h1>New Register</h1>

          <div style={{ height: 40 }} />

          <Controller
            name="category"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => {
              return (
                <Select
                  width='medium'
                  select={select}
                  icon={Tag}
                  placeholder="Category"
                  onChange={evt => {
                    onChange(evt);
                    handleCode(evt.target.value)
                  }}
                  onBlur={onBlur}
                />
              )
            }}
          />

          <div style={{ height: 10 }} />

          <Controller
            name="id"
            control={control}
            render={({ field: { value, onChange, onBlur } }) =>
              <Input value={value ?? ''} width='medium' icon={Link} placeholder="Code" onChange={onChange} onBlur={onBlur} />
            }
          />

          <div style={{ height: 10 }} />

          <Controller
            name="description"
            control={control}
            render={({ field: { value, onChange, onBlur } }) =>
              <Input icon={TextingLeft} value={value ?? ''} width='medium' placeholder="Description" onChange={onChange} onBlur={onBlur} />
            }
          />

          <div style={{ height: 10 }} />

          <Controller
            name="price"
            control={control}
            render={({ field: { value, onChange, onBlur } }) =>
              <Input icon={Coin} value={value ?? ''} width='medium' placeholder="Price" onChange={onChange} onBlur={onBlur} />
            }
          />

          <div style={{ height: 10 }} />

          <Controller
            name="provider"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => <Input value={value ?? ''} width='medium' icon={Buildings} placeholder="Provider" onChange={onChange} onBlur={onBlur} /> }
          />

          <div style={{ height: 10 }} />

          <Controller
            name="quantity"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => <Input value={value ?? ''} width='medium' icon={Box} placeholder="Quantity" onChange={onChange} onBlur={onBlur} /> }
          />

          <div style={{ height: 10 }} />

          <Controller
            name="print"
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <div style={{ display: 'flex', width: '100%' }}>
                <input type='checkbox' onChange={onChange} onBlur={onBlur} />
                <div style={{ width: 10 }} />
                <p>Imprimir ao registrar esse produto?</p>
              </div>
            )}
          />

          <div style={{ height: 10 }} />

          <Button type='submit'>{isSubmitting ? 'sending' : 'send'}</Button>

        </Sides>
      </Container>
    </Modal>
  )
};
