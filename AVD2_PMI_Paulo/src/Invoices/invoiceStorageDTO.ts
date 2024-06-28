import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type invoiceStorageDTO = {
    id: string,
    Company: string,
    Registration: string,
    Name: string,
    Role: string,
    Department: string,
    Salary: string
}


// import React, { useState, useCallback } from "react";
// import { Alert } from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
// import { invoiceGetAll } from "../../Invoices/invoiceGetAll";
// import { invoiceStorageDTO } from "../../Invoices/invoiceStorageDTO";
// import { Container, Content, TotalContainer, TotalText } from "./styles";
// import { Header } from "../../components/Header";

// export function Resume() {
//   const [dataInvoices, setDataInvoices] = useState<invoiceStorageDTO[]>([]);
//   const [totals, setTotals] = useState<{ [key: string]: number }>({});

//   async function loadDataInvoices() {
//     try {
//       const data = await invoiceGetAll();
//       setDataInvoices(data);

//       const totalsObject: { [key: string]: number } = {};

//       // 1) Somatório do salário de todos os funcionários por empresa (Microsoft, Google e Meta)
//       data.forEach(item => {
//         if (item.empresa === "Microsoft" || item.empresa === "Google" || item.empresa === "Meta") {
//           const key = `1) Soma salários da empresa ${item.empresa}`;
//           const invoiceValue = parseFloat(item.salario);
//           totalsObject[key] = (totalsObject[key] || 0) + invoiceValue;
//         }
//       });

//       // 2) Somatório do salário de todos os funcionários da empresa (Microsoft) dos departamentos (TI, RH)
//       data.forEach(item => {
//         if (item.empresa === "Microsoft" && (item.departamento === "TI" || item.departamento === "RH")) {
//           const key = `2) Salario funcionarios Microsoft dos departamentos TI e RH`;
//           const invoiceValue = parseFloat(item.salario);
//           // Aqui, ajustamos para somar o salário para ambos os departamentos
//           totalsObject[key] = (totalsObject[key] || 0) + invoiceValue;
//         }
//       });

//       // 3) Somatório do salário de todos os funcionários da empresa (Google) por função (Gerente, Coordenador)
//       data.forEach(item => {
//         if (item.empresa === "Google" && (item.funcao === "Gerente" || item.funcao === "Coordenador")) {
//           const key = `3) Google - ${item.funcao}`;
//           const invoiceValue = parseFloat(item.salario);
//           totalsObject[key] = (totalsObject[key] || 0) + invoiceValue;
//         }
//       });

//       // 4) Somatório do salário de todos os funcionários da empresa (Meta) por departamento de TI das funções Gerente de TI e Coordenador de TI
//       data.forEach(item => {
//         if (item.empresa === "Meta" && item.departamento === "TI" && (item.funcao === "Gerente" || item.funcao === "Coordenador")) {
//           const key = `4) Meta - ${item.funcao} de TI`;
//           const invoiceValue = parseFloat(item.salario);
//           totalsObject[key] = (totalsObject[key] || 0) + invoiceValue;
//         }
//       });

//       // 5) Somatório do salário de todos os funcionários das empresas (Microsoft, Google e Meta)
//       const totalSalarioGeral = data.reduce((acc, item) => acc + parseFloat(item.salario), 0);
//       totalsObject["5) Soma de salários de todas as empresas"] = totalSalarioGeral;

//       setTotals(totalsObject);
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Erro", "Erro ao carregar as faturas");
//     }
//   }

//   useFocusEffect(
//     useCallback(() => {
//       loadDataInvoices();
//     }, [])
//   );

//   return (
//     <Container>
//       <Header title='Resume' />
//       <Content>
//         {Object.keys(totals).map(key => (
//           <TotalContainer key={key}>
//             <TotalText>{`${key}: R$ ${totals[key].toFixed(2)}`}</TotalText>
//           </TotalContainer>
//         ))}
//       </Content>
//     </Container>
//   );
// }
