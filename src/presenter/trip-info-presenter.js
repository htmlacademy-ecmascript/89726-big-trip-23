import EventsListView from '../view/events-list-view.js';
import SortView from '../view/sort-view.js';
import AddPointFormView from '../view/add-point-form-view.js';
import EditPointFormView from '../view/edit-point-form-view.js';
import PointView from '../view/point-view.js';
import { RenderPosition } from '../render.js';
import {render} from '../render.js';


export default class TripInfoPresenter {
  eventsListComponent = new EventsListView();

  constructor({eventsListContainer}) {
    this.eventsListContainer = eventsListContainer;
  }

  init() {
    render(new SortView(), this.eventsListContainer);
    render(this.eventsListComponent, this.eventsListContainer);
    render(new AddPointFormView(), this.eventsListComponent.getElement());
    render(new EditPointFormView(), this.eventsListComponent.getElement(), RenderPosition.AFTERBEGIN);

    for(let i = 0; i < 3; i++) {
      render(new PointView(), this.eventsListComponent.getElement());
    }
  }
}
