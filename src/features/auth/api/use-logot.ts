import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";


import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";


type ResponseType = InferResponseType<typeof client.api.auth.logout["$post"]>;


export const useLogout = () => {
    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const queryClient = useQueryClient();
    const mutation = useMutation<
    ResponseType,
    Error
    >({
        mutationFn: async () => {
            const response = await client.api.auth.logout["$post"]();
            return response.json()
        },
        onSuccess: () => {
            //window.location.reload();
            router.refresh()
            queryClient.invalidateQueries({queryKey:["current"]})
        }
    });

    return mutation;
};