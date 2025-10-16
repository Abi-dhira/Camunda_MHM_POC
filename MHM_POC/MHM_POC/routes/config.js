// routes/config.js
import { Router } from 'express';
import { zeebe } from '../controllers/configController.js';
import axios from 'axios';

const router = Router();

// POST /api/process/start
router.post('/start', async (req, res) => {
  try {
    const { bpmnProcessId, variables, version } = req.body || {};
    if (!bpmnProcessId) {
      return res.status(400).json({ error: 'bpmnProcessId is required' });
    }
    const result = await zeebe.createProcessInstance({
      bpmnProcessId,
      variables: variables || {},
      version: typeof version === 'number' ? version : -1,
    });
    res.status(201).json({ processInstanceKey: result.processInstanceKey });
  } catch (err) {
    console.error('Create instance failed:', err);
    res.status(500).json({ error: 'Failed to start process', details: String(err?.message || err) });
  }
});

// POST /api/process/start-with-result
router.post('/start-with-result', async (req, res) => {
  try {
    const { bpmnProcessId, variables, requestTimeout } = req.body || {};
    if (!bpmnProcessId) {
      return res.status(400).json({ error: 'bpmnProcessId is required' });
    }
    const r = await zeebe.createProcessInstanceWithResult({
      bpmnProcessId,
      variables: variables || {},
      requestTimeout: requestTimeout ?? 30000,
    });
    res.status(201).json({ processInstanceKey: r.processInstanceKey, variables: r.variables });
  } catch (err) {
    console.error('Create instance with result failed:', err);
    res.status(500).json({ error: 'Failed to start process with result', details: String(err?.message || err) });
  }
});

export default router;
