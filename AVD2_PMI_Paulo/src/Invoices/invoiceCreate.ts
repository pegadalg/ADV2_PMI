import AsyncStorage from '@react-native-async-storage/async-storage';
import { invoiceStorageDTO } from './invoiceStorageDTO';
import { INVOICES_COLLECTION } from '../storage/invoiceConfig';
import { Alert } from 'react-native';
import { invoiceGetAll } from './invoiceGetAll';



export async function invoiceCreate(data: invoiceStorageDTO) {
    try {
        const storageInvoice = await invoiceGetAll()
        
        const storage = [...storageInvoice, data]

        await AsyncStorage.setItem(INVOICES_COLLECTION, JSON.stringify(storage))
    }
    catch (error) {
        Alert.alert('Atenção', 'Não foi possivel salvar os dados!!')
        throw error;
    }
}