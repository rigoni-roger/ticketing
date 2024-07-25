import { Publisher, Subjects, TicketCreatedEvent } from '@rigonitickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
