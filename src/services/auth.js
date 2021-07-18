import AsyncStorage from '@react-native-async-storage/async-storage';
export const isAuthenticated = async () => await AsyncStorage.getItem("user") !== null;
export const getToken = async() => await AsyncStorage.getItem("token");
export const login = async data => {
    await AsyncStorage.setItem("user", JSON.stringify(data.user));
    await AsyncStorage.setItem("token", data.access_token);
};
export const logout = async () => {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
};
