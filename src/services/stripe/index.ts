import Stripe from 'stripe'

import { config} from "@/config"
import { prisma } from '../databases'

export const stripe = new Stripe(config.stripe.secretKey || '', {
  apiVersion: '2024-04-10',
  httpClient: Stripe.createFetchHttpClient(),
})
