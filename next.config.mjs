/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 'image.clerk.com'}]
    }
};

export default nextConfig;
