import { useEffect, useRef, useState } from "react";

export function useInfiniteQuery(endpoint, options) {
    const nextPage = useRef(undefined);
    const [pages, setPages] = useState(undefined);
    const [trigger, result] = endpoint.useLazyQuery();

    useEffect(() => {
        trigger({ page: undefined });
    }, []);

    useEffect(() => {
        if (!result.isSuccess) return;
        nextPage.current = options.getNextPageParam(result.data);
        setPages([...(pages ?? []), result.data]);
    }, [result.data]);

    return {
        ...result,
        data: pages,
        isLoading: result.isFetching && pages === undefined,
        hasNextPage: nextPage.current !== undefined,
        fetchNextPage() {
            if (nextPage.current !== undefined) {
                trigger({ page: nextPage.current });
            }
        },
    };
}