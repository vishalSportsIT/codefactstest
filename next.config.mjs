/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: '/',  // the URL to redirect from
                destination: '/home',  // the URL to redirect to
                permanent: false,  // Set to false for testing
            },
        ];
    },
};


export default nextConfig;
