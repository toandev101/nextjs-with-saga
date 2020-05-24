import { combineReducers } from 'redux';
import sample from '../providers/SampleProvider/reducer';

export default combineReducers({
  sample,
})

// export default function createReducer() {
//   return combineReducers({
//     sample
//   });
// }
