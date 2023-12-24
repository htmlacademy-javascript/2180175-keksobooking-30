import { getMocks } from './getting-data';
import { renderThumbnails } from './thumbnail';
import { onActiveInactiveState, onActiveForm, onActiveFilter } from './form';
import { catchChange, offSeatNumber } from './user-form';
renderThumbnails(getMocks(1));
onActiveInactiveState();
onActiveForm();
catchChange();
offSeatNumber();
