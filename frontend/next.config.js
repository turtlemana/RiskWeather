/** @type {import('next').NextConfig} */
const nextConfig = {
   rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*",
      },
    ];
  },
  
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    }); return config},


}

module.exports = nextConfig

// module.exports=(phase,{defaultConfig})=>{

//   const rewrites=()=>{
//     return [
//       {
//         source: "/api/:path*",
//         destination: "http://localhost:8000/api/:path*",
//       }
//     ]
//   }

//   return {rewrites}
// }
