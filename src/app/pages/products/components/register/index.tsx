import React, { useEffect } from 'react';

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { api } from '@services';
import { currencyFormat, revalidate, uploadToCloudinary } from '@utils';
import { ProductProps, CategoryProps } from '@interface';
import { Button, Input, Modal, Select } from '@common';
import { Link, Tag, TextingLeft, Coin, Buildings, Box } from '@assets/svg';

import { Container, Sides } from './styles';
import { schema } from './constance';

interface Props {
  open: boolean;
  product: ProductProps | null;
  setClose: () => void;
  categories: CategoryProps[];
};

export default ({open,  categories, product, setClose }: Props) => {
  const { control, handleSubmit, setValue, reset, formState: { isSubmitting } } = useForm({
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

  const submit = async (prod: any) => {
    if (!!product?.id) {
      await api.product.update({ ...prod });
      revalidate('products');
      setClose();
      return;
    };

    const image = await uploadToCloudinary(prod.file!, String(prod.id));

    if (!image.public_id) {
      throw new Error('upload fail')
    };

    await api.product.create({ ...prod, photo: image.secure_url });

    revalidate('products');
    setClose();
    reset({
      category: '',
      description: '',
      file: '',
      price: '',
      provider: '',
      quantity: 0,
      id: 0
    })
  };

  useEffect(() => {
    if (!product) return;
    setValue('id', product.id);
    setValue('file', product.photo);
    setValue('category', product.category_id);
    setValue('description', product.description);
    setValue('price', product.price as any);
    setValue('provider', product.provider);
    setValue('quantity', product.quantity);
  }, [product]);

  return (
    <Modal open={!!product?.id || open} setClose={setClose} size='small'>
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
          <h1>{product?.id ? `Update Product` : 'New Register'}</h1>

          <div style={{ height: 40 }} />

          <Controller
            name="category"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => {
              return (
                <Select
                  find={value}
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
            render={({ field: { value, onChange, onBlur } }) => {
              return <Input icon={Coin} value={currencyFormat(value!)} width='medium' placeholder="Price" onChange={onChange} onBlur={onBlur} />
            }}
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
