import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import JsBarcode from 'jsbarcode';

import Image from 'next/image';

import { Product } from '@prisma/client';

import { Button, Input } from '../../../../../common';
import { Box } from '../../../../../assets/svg';

export default ({ product }: { product: Product | null }) => {
  const barcodeRef = useRef<HTMLCanvasElement>(null);

  const [quantity, setQuantity] = useState(0);

  const generatePDF = () => {
    const barcodeImage = barcodeRef.current!.toDataURL('image/png');

    const doc = new jsPDF({
      orientation: 'l', // landscape
      unit: 'pt', // points, pixels won't work properly
      format: [400, 50] // set needed dimensions for any element
    });

    Array.from({ length: quantity }).map((_, index) => {
      index !== 0 && doc.addPage()
      doc.addImage(barcodeImage, 'PNG', 300, 0, 90, 50); // | left | top | width | height
    })

    window.open(doc.output('bloburl'))
  };

  React.useEffect(() => {
    if (!product) return;

    JsBarcode(barcodeRef.current, String(product.id), {
      format: 'CODE128',
      lineColor: '#000',
      width: 2,
      height: 50,
      displayValue: true,
    });
  }, [product]);

  return (
    <>
      {product && <Image src={product.photo} width={400} height={400} alt='photo' />}

      <div style={{ height: 10 }} />

      <Input icon={Box} placeholder='quantity' width='medium' type='number' onChange={evt => setQuantity(Number(evt.target.value))} />

      <div style={{ height: 10 }} />

      <canvas ref={barcodeRef} style={{ display: 'none' }} />

      <Button width={400} onClick={generatePDF}>Print</Button>
    </>
  )
};