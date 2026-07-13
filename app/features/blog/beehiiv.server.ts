import axios from "axios";

import { getEnv } from "~/lib/env.server";

const { BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID } = getEnv();

const api = axios.create({
  baseURL: "https://api.beehiiv.com/v2",
  headers: {
    Authorization: `Bearer ${BEEHIIV_API_KEY}`,
    "Content-Type": "application/json",
  },
});

type BeehivSubscription = {
  id: string;
  email: string;
  status: string;
  created: number;
  subscription_tier: string;
  subscription_premium_tier_names: string[];
  utm_source: string;
  utm_medium: string;
  utm_channel: string;
  utm_campaign: string;
  referring_site: string;
  referral_code: string;
};

type BeehivCreateSubscriptionResponse = {
  data: BeehivSubscription;
};

type BeehivAddSubscriptionTagResponse = {
  data: BeehivSubscription & { tags: string[] };
};

async function createSubscription(email: string) {
  const response = await api.post<BeehivCreateSubscriptionResponse>(
    `/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
    {
      email,
      reactivate_existing: true,
      referring_site: "https://www.janhesters.com/blog",
      send_welcome_email: false,
      utm_campaign: "blog_subscription",
      utm_medium: "organic",
      utm_source: "janhesters.com",
    },
  );

  return response.data.data;
}

async function addSubscriptionTag(subscriptionId: string) {
  const response = await api.post<BeehivAddSubscriptionTagResponse>(
    `/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions/${subscriptionId}/tags`,
    { tags: ["janhesters.com"] },
  );

  return response.data.data;
}

export type SubscriptionStatus =
  | "validating"
  | "pending"
  | "active"
  | "unknown";

const parseSubscriptionStatus = (status: string): SubscriptionStatus => {
  switch (status) {
    case "validating": {
      return "validating" as const;
    }
    case "pending": {
      return "validating" as const;
    }
    case "active": {
      return "active" as const;
    }
    default: {
      return "unknown" as const;
    }
  }
};

export async function subscribeToBlog(email: string) {
  const subscription = await createSubscription(email);
  await addSubscriptionTag(subscription.id);

  return parseSubscriptionStatus(subscription.status);
}
