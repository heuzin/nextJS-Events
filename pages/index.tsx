import Head from 'next/head';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/eventList/EventList';
import NewsletterRegistration from '../components/newsletterRegistration/NewsletterRegistration';

const HomePage = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <Head>
                <title>NextJS Events</title>
                <meta name="description" content="Find a lof of great events that allow you to evolve..." />
            </Head>
            <NewsletterRegistration />
            <EventList items={featuredEvents} />
        </div>
    );
};

export default HomePage;
