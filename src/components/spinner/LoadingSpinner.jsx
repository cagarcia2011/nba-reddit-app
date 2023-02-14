import { Spinner } from "flowbite-react";

export function LoadingSpinner() {

    return (
        <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl"/>
        </div>
    )
}