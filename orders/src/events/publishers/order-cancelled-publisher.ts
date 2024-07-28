import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@rigonitickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
