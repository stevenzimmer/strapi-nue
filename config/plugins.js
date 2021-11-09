module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AKIAQJCQCIRWCUB4QZWB"),
      secretAccessKey: env("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"),
      region: env("us-east-2"),
      params: {
        Bucket: env("nue-strapi-images"),
      },
    },
  },
});
