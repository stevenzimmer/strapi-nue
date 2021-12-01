module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1339),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "19b0c0c414b4790f0e85e22bb83b2b0e"),
    },
  },
});
