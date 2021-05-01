module.exports = {
  future: { webpack5: true },
  webpack: config => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };
    config.resolve.fallback = { path: false, module: false };

    return config
  },
}