# Big Dunn Entertainment website

Next.js website for Big Dunn Entertainment. Website quote requests, newsletter subscriptions, and reviews are captured in HubSpot so the CRM is the operational system of record.

## HubSpot behavior

- Quote requests create or update a contact and add the complete event request to its timeline.
- When a deal pipeline and stage are configured, a quote request also creates an associated deal.
- Newsletter signups create or update a contact and record explicit email consent against the configured HubSpot subscription type.
- Reviews create or update a contact and add the review to its timeline.
- HubSpot credentials are used only by server-side route handlers and are never exposed to the browser.

## Configure HubSpot

1. Create a private app for the Big Dunn HubSpot account.
2. Grant `crm.objects.contacts.read` and `crm.objects.contacts.write`. If quote requests should create deals, also grant `crm.objects.deals.read` and `crm.objects.deals.write`. For newsletter opt-ins and verification from a legacy private app, grant `communication_preferences.read_write`.
3. Copy `.env.example` to `.env.local` and set `HUBSPOT_ACCESS_TOKEN`.
4. Set `HUBSPOT_NEWSLETTER_SUBSCRIPTION_ID` to the numeric email subscription type ID.
5. Optionally set both `HUBSPOT_DEAL_PIPELINE_ID` and `HUBSPOT_DEAL_STAGE_ID` using their internal HubSpot IDs.
6. Optionally set `HUBSPOT_OWNER_ID` to assign new records to one HubSpot owner.

Use the same names as encrypted environment variables in the production hosting platform. Never prefix these variables with `NEXT_PUBLIC_`.

## Vercel Web Analytics

The root layout includes Vercel's `Analytics` component, so page views and client-side route changes are captured once Web Analytics is enabled for the Vercel project.

1. Open the project in Vercel and select **Analytics** in the sidebar.
2. Click **Enable** for Web Analytics.
3. Deploy the updated application to Vercel.
4. Visit the production site, then confirm that the Analytics dashboard changes from awaiting data after Vercel processes the first page view.

No analytics environment variable is required. See the [Vercel Web Analytics quickstart](https://vercel.com/docs/analytics/quickstart) for dashboard and deployment details.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm test
npm run lint
npm run build
```

The broader WhatsApp Business and QuickBooks rollout is documented in [docs/crm-integrations.md](docs/crm-integrations.md).
