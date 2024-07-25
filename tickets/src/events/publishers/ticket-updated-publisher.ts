import { Publisher, Subjects, TicketUpdatedEvent } from '@rigonitickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
