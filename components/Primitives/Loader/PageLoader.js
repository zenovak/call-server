
/**
 * A full page component designed to display a spinning loading circle
 */
export const PageLoader = () => {
    return (
        <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 text-center">
            <div
                className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-zinc-500 mx-auto"
            ></div>
            <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
                
            </p>
        </div>
    );
}