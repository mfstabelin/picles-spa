import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { getshelter } from "../services/shelter/getShelter";
import { IShelter } from "../interfaces/shelter";

export function useShelter(options?: Partial<UseQueryOptions<IShelter, Error>>): UseQueryResult<IShelter, Error>{
    const result = useQuery({
        staleTime: Infinity,
        ...options,
        queryKey:['get-shelter'],
        queryFn:() => getshelter(),
    })
    return result
}