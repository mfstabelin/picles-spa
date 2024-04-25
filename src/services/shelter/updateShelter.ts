import { IupdateShelterRequest, IupdateShelterResponse } from "../../interfaces/shelter";
import httpClient from "../api/httpClient";

export async function updateShelter(params: IupdateShelterRequest): Promise<IupdateShelterResponse> {
    try{
        const response = await httpClient.put<IupdateShelterResponse>('/shelter', params)
        return response.data
    } catch(error){
        console.log("Erro ao atualizar abrigo", error);
        throw error;
    } 
}