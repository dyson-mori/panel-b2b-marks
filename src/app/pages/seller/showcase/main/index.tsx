"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { People, Printer } from "@assets/svg";
import { Button, Product, Select } from "@common";

import { Container, Header, Content, Empty } from "./styles";
import { ProductProps, SellerProps, ShowcaseProps } from "@interface";
import { api } from "@services";

interface Props {
  sellers: SellerProps[];
  showcase: ShowcaseProps[];
};

export default ({ sellers, showcase }: Props) => {
  const route = useRouter();
  const param = window.location.search.replace('?seller_id=', '');

  const [target, setTarget] = useState(null);

  const size = {
    width: (innerWidth - 240) / 4
  };

  const people = sellers.map(row => ({
    id: row.id,
    label: row.name
  }));

  const find = sellers.find(row => row.id === param);

  const EmptyCard = () => {
    if (showcase.length !== 0) return;

    return target ? <Empty>tudo pronto</Empty> : <Empty>selecione alguém</Empty>
  };

  function setSellerParam(name: string) {
    const sellerId = sellers.find(row => row.name === name);
    route.push(`/pages/seller/showcase?seller_id=${sellerId}`);
  };

  // useEffect(() => {
  //   if (target) {
  //     api.showcase.create({
  //       data_start: new Date('2024-11-27T01:37:21.606Z'),
  //       data_end: new Date('2024-12-27T01:37:21.606Z'),
  //       product_id: 30001,
  //       seller_id: find!.id,
  //       type: 'romaneio'
  //     });
  //   };
  // }, [target]);

  return (
    <Container>
      <Header>
        <Select icon={People} defaultValue={find?.name} width='small' placeholder='Search' select={people} onChange={evt => setSellerParam(evt.target.value)} />

        <div style={{ width: 5 }} />

        <Button width={50} color='white' disabled={showcase.length === 0}>
          <Printer width={25} height={25} stroke='#FA0B5B' strokeWidth={1.5} />
        </Button>
      </Header>

      <Content>
        {showcase.length === 0 && <EmptyCard />}
        {
          showcase.map((row, index) =>
            <Product key={index} product={row.product} size={size.width} onSelect={() => { }} />
          )
        }
      </Content>
    </Container>
  )
}