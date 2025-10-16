// controllers/configController.js
import { Camunda8 } from '@camunda8/sdk';
import { ZBClient } from 'zeebe-node';

export const zeebe = new ZBClient('localhost:26500', {
  useTLS: false,     // gRPC without TLS for local dev
  loglevel: 'INFO',  // optional console logging
});

/* For local self-managed without auth
const c8 = new Camunda8({
  zeebeGrpcSettings: {
    ZEEBE_ADDRESS: process.env.ZEEBE_ADDRESS || 'localhost:26500',
    // If auth enabled locally/SaaS, also set these env vars:
    // ZEEBE_CLIENT_ID: process.env.ZEEBE_CLIENT_ID,
    // ZEEBE_CLIENT_SECRET: process.env.ZEEBE_CLIENT_SECRET,
    // CAMUNDA_OAUTH_URL: process.env.CAMUNDA_OAUTH_URL,
    // ZEEBE_TOKEN_AUDIENCE: process.env.ZEEBE_TOKEN_AUDIENCE || 'zeebe-api',
  },
  auth: { strategy: 'NONE' } // <-- must be top-level
});

export const zeebe = c8.getZeebeGrpcApiClient();*/
