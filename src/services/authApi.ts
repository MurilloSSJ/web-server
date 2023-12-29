import { LoginSchemaType } from "@/schemas/login";
import { CredentialsType } from "@/types";
import axios, { AxiosError } from "axios";

const login = async (data: LoginSchemaType): Promise<CredentialsType> => {
    console.log(process.env.NEXT_PUBLIC_AUTH_API_URL);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_AUTH_API_URL}/auth/login`, data);
    return response.data;
}

export const authApi = {
    login
}