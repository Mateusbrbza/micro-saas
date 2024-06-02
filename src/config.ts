export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: '',
    plans: {
      free: {
        priceId: 'price_1PN4pOCfyD2H4eUkyT6XAIvp',
        quota: {
          TASKS: 25,
        },
      },
      pro: {
        priceId: 'price_1PN4pYCfyD2H4eUkv5RQnauX',
        quota: {
          TASKS: 1000,
        },
      },
    }
  },
}
