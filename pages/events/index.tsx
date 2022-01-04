import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EventList from '../../components/eventList/EventList';
import EventsSearch from '../../components/eventsSearch/EventsSearch';
import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
    const router = useRouter();
    const events = getAllEvents();

    const findEventsHandler = (year: string, month: string) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta name="description" content="Find a lof of great events that allow you to evolve..." />
            </Head>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
};

export default AllEventsPage;
