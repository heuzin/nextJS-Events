import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import Button from '../../ui/button/Button';
import EventList from '../../components/eventList/EventList';
import ResultsTitle from '../../components/resultsTitle/ResultsTitle';
import ErrorAlert from '../../ui/errorAlert/ErrorAlert';
import Head from 'next/head';

const FilteredEventsPage = () => {
    const router = useRouter();

    const filterData = router.query.slug;

    let pageHeadData = (
        <Head>
            <title>Filtered Events</title>
            <meta name="description" content={'A list of filtered events'} />
        </Head>
    );

    if (!filterData) {
        return (
            <Fragment>
                {pageHeadData}
                <p className="center">Loading...</p>
            </Fragment>
        );
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    pageHeadData = (
        <Head>
            <title>Filtered Events</title>
            <meta name="description" content={`All events for ${numMonth}/${numYear}`} />
        </Head>
    );

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
            <Fragment>
                {pageHeadData}
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                {pageHeadData}
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <Fragment>
            {pageHeadData}
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
};

export default FilteredEventsPage;
