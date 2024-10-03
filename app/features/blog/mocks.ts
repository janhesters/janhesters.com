export const createSubscriptionSuccessResponse = {
  data: {
    id: 'sub_1a6e9259-7603-437d-b4ef-ec62de709e4e',
    email: 'test@test.com',
    status: 'validating',
    created: 1_727_947_248,
    subscription_tier: 'free',
    subscription_premium_tier_names: [],
    utm_source: '',
    utm_medium: '',
    utm_channel: '',
    utm_campaign: '',
    referring_site: '',
    referral_code: 'f56e9b5231',
    stripe_customer_id: '',
  },
};

export const addSubscriptionTagSuccessResponse = {
  data: {
    id: 'sub_1a6e9259-7603-437d-b4ef-ec62de709e4e',
    email: 'test@test.com',
    status: 'validating',
    created: 1_727_947_248,
    subscription_tier: 'free',
    subscription_premium_tier_names: [],
    utm_source: 'janhesters.com',
    utm_medium: 'organic',
    utm_channel: 'api',
    utm_campaign: 'blog_subscription',
    referring_site: 'https://www.janhesters.com/blog',
    referral_code: 'f56e9b5231',
    stripe_customer_id: '',
    tags: ['janhesters.com'],
  },
};
