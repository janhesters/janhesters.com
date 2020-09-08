import mailchimp from '@mailchimp/mailchimp_marketing';

const LIST_ID = process.env.MAILCHIMP_LIST_ID;

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_URL_PREFIX,
});

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    if (process.env.NODE_ENV === 'production') {
      const response = await mailchimp.lists.addListMember(LIST_ID, {
        email_address: email,
        status: 'pending',
      });

      if (response.status >= 400) {
        return res.status(400).json({
          message:
            "There was an error subscribing to the newsletter. DM me on Twitter @janhesters and I'll add you to the list.",
        });
      }
    }

    return res.status(201).json({
      message: 'Success! Check your email to confirm your subscription.',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message || error.toString() });
  }
};
