import React, { useState, useCallback } from "react";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { invoiceGetAll } from "../../Invoices/invoiceGetAll";
import { invoiceStorageDTO } from "../../Invoices/invoiceStorageDTO";
import { Container, Content, TotalContainer, TotalText } from "./styles";
import { Header } from "../../components/Header";

export function Resume() {
  const [dataInvoices, setDataInvoices] = useState<invoiceStorageDTO[]>([]);
  const [totals, setTotals] = useState<{ [key: string]: number }>({});

  async function loadDataInvoices() {
    try {
      const data = await invoiceGetAll();
      setDataInvoices(data);

      const totalsObject: { [key: string]: number } = {};

      // 1) Somatório do salário de todos os funcionários por Company (Microsoft, Google e Meta)
      data.forEach(item => {
        if (item.Company === "Microsoft" || item.Company === "Google" || item.Company === "Meta") {
          const key = `1) Soma de salários da empresa ${item.Company}`;
          const invoiceValue = parseFloat(item.Salary);
          totalsObject[key] = (totalsObject[key] || 0) + invoiceValue;
        }
      });

      // 2) Somatório do salário de todos os funcionários da Company (Microsoft) dos Departments (TI, RH)
      data.forEach(item => {
        if (item.Company === "Microsoft" && (item.Department === "TI" || item.Department === "RH")) {
          const key = `2) Salario dos funcionarios da Microsoft dos departamentos TI e RH`;
          const invoiceValue = parseFloat(item.Salary);
          // Aqui, ajustamos para somar o salário para ambos os Departments
          totalsObject[key] = (totalsObject[key] || 0) + invoiceValue;
        }
      });

      // 3) Somatório do salário de todos os funcionários da Company (Google) por função (Gerente, Coordenador)
      data.forEach(item => {
        if (item.Company === "Google" && (item.Role === "Gerente" || item.Role === "Coordenador")) {
          const key = `3) Google - Soma de salário - ${item.Role}`;
          const invoiceValue = parseFloat(item.Salary);
          totalsObject[key] = (totalsObject[key] || 0) + invoiceValue;
        }
      });

      // 4) Somatório do salário de todos os funcionários da Company (Meta) por Department de TI das funções Gerente de TI e Coordenador de TI
      data.forEach(item => {
        if (item.Company === "Meta" && item.Department === "TI" && (item.Role === "Gerente" || item.Role === "Coordenador")) {
          const key = `4) Meta - ${item.Role} de TI`;
          const invoiceValue = parseFloat(item.Salary);
          totalsObject[key] = (totalsObject[key] || 0) + invoiceValue;
        }
      });

      // 5) Somatório do salário de todos os funcionários das Companys (Microsoft, Google e Meta)
      const totalSalaryGeral = data.reduce((acc, item) => acc + parseFloat(item.Salary), 0);
      totalsObject["5) Soma de salários de todas as empresas"] = totalSalaryGeral;

      setTotals(totalsObject);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao carregar as faturas");
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadDataInvoices();
    }, [])
  );

  return (
    <Container>
      <Header title='Resume' />
      <Content>
        {Object.keys(totals).map(key => (
          <TotalContainer key={key}>
            <TotalText>{`${key}: R$ ${totals[key].toFixed(2)}`}</TotalText>
          </TotalContainer>
        ))}
      </Content>
    </Container>
  );
}
