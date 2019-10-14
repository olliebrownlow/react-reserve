// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://OllieBrownlow:columbus@reactreserve-e0gc4.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "powknwdcihgfwoiqmcejuo",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/olliescloud/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
