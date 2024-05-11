import FiltersView from '../src/view/filters-view';
import { render } from './render';

const filtersContainer = document.querySelector('.trip-controls__filters');
render(new FiltersView(), filtersContainer);
