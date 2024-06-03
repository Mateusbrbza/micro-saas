import Stripe from 'stripe'

import { config} from "@/config"
import { prisma } from '../databases';

export const stripe = new Stripe(config.stripe.secretKey || '', {
  apiVersion: '2024-04-10',
  httpClient: Stripe.createFetchHttpClient(),
})

export const getStripeCustomerByEmail = async (email:string) => {
  const customers = await stripe.customers.list({ email });
  return customers.data[0];
}

export const createStripeCustomer = async (
  input: {
    name?: string,
    email: string,
  }
) => {
  const customer = await getStripeCustomerByEmail(input.email)
  if(customer) return customer

  const createdCustomer = await stripe.customers.create({
    email: input.email,
    name: input.name
  });

  const createdCustomerSubscription = await stripe.subscriptions.create({
    customer: createdCustomer.id,
    items: [{ price: config.stripe.plans.free.priceId }],
  })

  await prisma.user.update({
    where: {
      email: input.email,
    },
    data: {
      stripeCustomerId: createdCustomer.id,
      stripeSubscriptionId: createdCustomerSubscription.id,
      stripeSubscriptionStatus: createdCustomerSubscription.status,
      stripePriceId: config.stripe.plans.free.priceId,
    }
  })
}

export const createCheckoutSession = async (
  userId: string,
  userEmail: string,
  userStripeSubscriptionId: string,
) => {
  try {
    const customer = await createStripeCustomer({
      email: userEmail,
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      node: 'subscription',
      client_reference_id: userId,
      customer: customer.id,
      success_url: 'http://localhost:3000/app/settings/billing?success=true',
      cancel_url: 'http://localhost:300/app/settings/billing?success=false',
      line_items: [
        {
          price: config.stripe.plans.pro.priceId,
          quantity: 1,
        },
      ],
    })

    return {
      url: session.url,
    }
  } catch (error) {
    console.error(error)
    throw new Error('Error to create checkout session')
  }
}
