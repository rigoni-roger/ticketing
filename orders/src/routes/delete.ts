import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
} from '@rigonitickets/common';
import express, { Request, Response } from 'express';
import { param } from 'express-validator';

import { Order, OrderStatus } from '../models/order';

const router = express.Router();

router.delete(
  '/api/orders/:orderId',
  requireAuth,
  [param('orderId').isMongoId().withMessage('Invalid OrderId')],
  async (req: Request, res: Response) => {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    order.status = OrderStatus.Cancelled;
    await order.save();

    // Publish an event saying that an order was cancelled;

    res.status(204).send(order);
  }
);

export { router as deleteOrderRouter };
