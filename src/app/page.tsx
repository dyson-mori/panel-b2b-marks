// "use client"

// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';

// // import Barcode from 'react-barcode';
// import JsBarcode from 'jsbarcode';

// const App = () => {
//   const barcodeRef = useRef();

//   const generatePDF = () => {
//     const barcodeImage = barcodeRef.current.toDataURL('image/png');

//     const doc = new jsPDF({
//       orientation: 'l', // landscape
//       unit: 'pt', // points, pixels won't work properly
//       format: [400, 50] // set needed dimensions for any element
      
//     });

//     doc.addImage(barcodeImage, 'PNG', 300, 0, 90, 50); // | left | top | width | height

//     doc.addPage()
//     doc.addImage(barcodeImage, 'PNG', 300, 0, 90, 50); // | left | top | width | height

//     doc.addPage()
//     doc.addImage(barcodeImage, 'PNG', 300, 0, 90, 50); // | left | top | width | height

//     window.open(doc.output('bloburl'))
//   };

//   React.useEffect(() => {
//     JsBarcode(barcodeRef.current, '500083', {
//       format: 'CODE128',
//       lineColor: '#000',
//       width: 2,
//       height: 50,
//       displayValue: true,
//     });
//   }, []);

//   return (
//     <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '90%' }}>
//       <h1>Gerar PDF com jsPDF</h1>
//       <canvas ref={barcodeRef} style={{ display: 'none' }} />
//       <button onClick={generatePDF}>Baixar PDF</button>
//     </main>
//   );
// };

// export default App;

export { default } from './auth';
