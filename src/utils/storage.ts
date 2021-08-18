import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToStorage(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error to save data ${key}`);
  }
}

export function getFromStorage(key: string): Promise<any> {
  try {
    const data = AsyncStorage.getItem(key).then(response => {
      if (response) {
        return JSON.parse(response);
      }
    });
    return data;
  } catch (err) {
    console.log(`Erro to get data ${key}`);
  }
}
