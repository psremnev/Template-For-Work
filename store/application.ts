import {configureStore} from '@reduxjs/toolkit';
import ServiceReducer from './slice/service';

export default configureStore({
  reducer: {
    service: ServiceReducer
  }
})