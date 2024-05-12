import FiltersView from '../src/view/filters-view';
import TripInfoPresenter from '../src/presenter/trip-info-presenter';
import { render } from './render';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const tripInfoPresenter = new TripInfoPresenter({eventsListContainer: eventsContainer});

render(new FiltersView(), filtersContainer);
tripInfoPresenter.init();

