import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Inputs } from '../../components/Input';
import { InputAmount } from '../../components/InputAmount';
import { Button } from '../../components/Button';
import { invoiceGetAll } from '../../Invoices/invoiceGetAll';
import { invoiceCreate } from '../../Invoices/invoiceCreate';
import { invoiceStorageDTO } from '../../Invoices/invoiceStorageDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Register() {
  
    const [Company, setCompany] = useState('');
    const [Registration, setRegistration] = useState('');
    const [Role, setRole] = useState(''); 
    const [Department, setDepartment] = useState('');
    const [Salary, setSalary] = useState('');
    const [Name, setName] = useState('');
    

    async function handleAddNewInvoice() {

         // //limpa o async storage no iOS
    // AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
    // Alert.alert('Atencao','Programa Finalizado')

    // return

     //limpa o async storage no Android
    //  await AsyncStorage.clear()
    //  Alert.alert('Atencao','Programa Finalizado')
    //  return
        
        // Verificação dos campos obrigatórios
        if (!Company.trim()) {
            return Alert.alert('Company', 'Favor preencha o campo "Company"');
        }
        if (!Registration.trim()) {
            return Alert.alert('Registration', 'Favor preencha o campo "Registration"');
        }
        if (!Role.trim()) {
            return Alert.alert('Role', 'Favor preencha o campo "Role"');
        }
        if (!Department.trim()) {
            return Alert.alert('Department', 'Favor preencha o campo "Department"');
        }
        if (!Salary.trim()) {
            return Alert.alert('Salary', 'Favor preencha o campo "Salary"');
        }
        if (!Name.trim()) {
            return Alert.alert('Name', 'Favor preencha o campo "Name"');
        }




        if (!["TI", "RH"].includes(Department.trim())) {
          return Alert.alert('Department', 'Departamentos aceitos : TI e RH');
        }
        if (!["Gerente", "Coordenador"].includes(Role.trim())) {
          return Alert.alert('Roles', 'Funções aceitas : Coordenador e Gerente');
        }
        if (!["Google", "Microsoft", "Meta"].includes(Company.trim())) {
          return Alert.alert('Supplier', 'Empresas aceitas : Google, Microsoft e Meta');
        }
        
        

        // Criar objeto de dados da fatura
        const data: invoiceStorageDTO = {
            id: String(new Date().getTime()),
            Company,
            Registration,
            Name,
            Role,
            Department,
            Salary
        };

        console.log('Dados: ', data);

        // Atualizar o registro e limpar os campos
        setCompany('');
        setRegistration('');
        setRole('');
        setDepartment('');
        setSalary('');
        setName('');    


        // Executar operações assíncronas de criação e obtenção de faturas
        try {
            await invoiceCreate(data);
            const result = await invoiceGetAll();
            console.log('Resultado:', result);
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao salvar a fatura');
        }
    }

    return (
        <Container>
            <Header title="Register" />
            <Inputs
                placeholder="Company"
                value={Company}
                onChangeText={value => setCompany(value)}
            />
            <Inputs
                placeholder="Registration"
                value={Registration}
                onChangeText={value => setRegistration(value)}
            />
            <Inputs
                placeholder="Role"
                value={Role}
                autoCapitalize='characters'
                onChangeText={value => setRole(value)}
            />
            <Inputs
                placeholder="Name"
                value={Name}
                onChangeText={value => setName(value)}
                />
            <Inputs
                placeholder="Department"
                value={Department}
                onChangeText={value => setDepartment(value)}
            />
            <Inputs
                placeholder="Salary"
                value={Salary}
                onChangeText={value => setSalary(value)}
                keyboardType="numeric"
            />
            <Button title="Add Employe" onPress={handleAddNewInvoice} />
        </Container>
    );
}