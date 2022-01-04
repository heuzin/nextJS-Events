import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/eventSummary/EventSummary';
import EventLogistics from '../../components/eventLogistics/EventLogistics';
import EventContent from '../../components/eventContent/EventContent';
import ErrorAlert from '../../ui/errorAlert/ErrorAlert';
import Comments from '../../components/comments/Comments';

const EventDetailPage = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        );
    }

    return (
        <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.description} />
            </Head>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event.id} />
        </Fragment>
    );
};

export default EventDetailPage;
