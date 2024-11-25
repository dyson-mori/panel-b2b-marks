"use client";

import { useState } from "react";

import { People, Printer } from "@assets/svg";
import { Button, Product, Select } from "@common";

import { Container, Header, Content, Empty } from "./styles";
import { ConsignedProps, ProductProps } from "@interface";

const products = [
  {
    "id": 120001,
    "employee_id": "a7d62fc5-38d7-4fa7-be02-2a63ffc94f3f",
    "category_id": "cm352ifwb000hm6wlwz4hgcpc",
    "code_scanner": null,
    "photo": "https://res.cloudinary.com/dyrtdrnky/image/upload/v1730848612/marks-joias/120001_lypwgn.png",
    "description": "Gargantilha gravata oval vazada 3.8g",
    "price": "189.90",
    "provider": "Marks Joias",
    "quantity": 3,
    "created_at": "2024-11-05T23:16:50.805Z",
    "updated_at": "2024-11-05T23:16:50.805Z",
    "employee": {
      "nickname": "dyson._.mori"
    },
    "category": {
      "title": "gargantilha"
    }
  },
  {
    "id": 600590,
    "employee_id": "a7d62fc5-38d7-4fa7-be02-2a63ffc94f3f",
    "category_id": "cm350o509000dm6wlpy53q1gs",
    "code_scanner": null,
    "photo": "https://res.cloudinary.com/dyrtdrnky/image/upload/v1730850593/marks-joias/600590_bervh8.png",
    "description": "Pingente Nossa Senhora manto azul",
    "price": "72.90",
    "provider": "Marks Joias",
    "quantity": 9,
    "created_at": "2024-11-05T23:49:51.938Z",
    "updated_at": "2024-11-05T23:49:51.938Z",
    "employee": {
      "nickname": "dyson._.mori"
    },
    "category": {
      "title": "pingente"
    }
  },
  {
    "id": 110277,
    "employee_id": "a7d62fc5-38d7-4fa7-be02-2a63ffc94f3f",
    "category_id": "cm350nwys0002m6wlq3wltpzv",
    "code_scanner": null,
    "photo": "https://res.cloudinary.com/dyrtdrnky/image/upload/v1730893218/marks-joias/110277_noj6ij.png",
    "description": "Choker 30 bolinhas 2.6g",
    "price": "145.00",
    "provider": "marks joias",
    "quantity": 5,
    "created_at": "2024-11-06T11:40:16.216Z",
    "updated_at": "2024-11-06T11:40:16.216Z",
    "employee": {
      "nickname": "dyson._.mori"
    },
    "category": {
      "title": "choker"
    }
  },
  {
    "id": 10001,
    "employee_id": "a7d62fc5-38d7-4fa7-be02-2a63ffc94f3f",
    "category_id": "cm350nww30001m6wlwircqenh",
    "code_scanner": null,
    "photo": "https://res.cloudinary.com/dyrtdrnky/image/upload/v1730940895/marks-joias/10001_akg3zx.png",
    "description": "code",
    "price": "203.00",
    "provider": "marks",
    "quantity": 6,
    "created_at": "2024-11-07T00:54:53.003Z",
    "updated_at": "2024-11-07T00:54:53.003Z",
    "employee": {
      "nickname": "dyson._.mori"
    },
    "category": {
      "title": "anel"
    }
  },
  {
    "id": 901985,
    "employee_id": "a7d62fc5-38d7-4fa7-be02-2a63ffc94f3f",
    "category_id": "cm350o2oy000am6wl0lk5lt17",
    "code_scanner": 851690720,
    "photo": "https://res.cloudinary.com/dyrtdrnky/image/upload/v1731187535/marks-joias/901985_zh7emp.jpg",
    "description": "brinco losango furado pedraria",
    "price": "178.90",
    "provider": "marks joias",
    "quantity": 1,
    "created_at": "2024-11-09T21:25:35.792Z",
    "updated_at": "2024-11-09T21:26:07.526Z",
    "employee": {
      "nickname": "dyson._.mori"
    },
    "category": {
      "title": "brinco"
    }
  }
];

interface Props {
  consigned: ConsignedProps[];
};

export default ({ consigned }: Props) => {
  const [target, setTarget] = useState(null);
  const [content, setContent] = useState<ProductProps[]>(products as any);

  const size = {
    width: (innerWidth - 240) / 4
  };

  const people = consigned.map(row => ({
    id: row.id,
    label: row.seller.name
  }));

  const EmptyCard = () => {
    if (content.length !== 0) return;

    return target ? <Empty>tudo pronto</Empty> : <Empty>selecione alguém</Empty>
  };

  return (
    <Container>
      <Header>
        <Select icon={People} width='small' placeholder='Search' select={people} onChange={evt => setTarget(evt.target.value)} />

        <div style={{ width: 5 }} />

        <Button width={50} color='white' disabled={content.length === 0}>
          <Printer width={25} height={25} stroke='#FA0B5B' strokeWidth={1.5} />
        </Button>
      </Header>

      <Content>
        <EmptyCard />
        {
          content.map((row, index) =>
            <Product key={index} product={row} size={size.width} onSelect={() => {}} />
          )
        }
      </Content>
    </Container>
  )
}