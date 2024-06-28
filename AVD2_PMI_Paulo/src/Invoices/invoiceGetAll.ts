import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { INVOICES_COLLECTION } from '../storage/invoiceConfig';
import { invoiceStorageDTO } from './invoiceStorageDTO';

export async function invoiceGetAll() {

    try {

        const storage = await AsyncStorage.getItem(INVOICES_COLLECTION)

        const invoices : invoiceStorageDTO[] = storage ? JSON.parse(storage) : []

        return invoices

    }
    catch (error) 
    {
        Alert.alert('Atenção','Não foi possivel fazer a leitura dos dados!!')
        throw error;
    }
}