import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  EntityAdapter,
  Reducer,
} from "@reduxjs/toolkit";
import { Star, ApiStar } from "types";
import { StateDispatch, RootState } from "../store";
import { mapApiStar } from "utils/mappers";
import { getStarsForUser as getStars } from "utils/apiClient";

const starsAdapter: EntityAdapter<Star> = createEntityAdapter({
  selectId: (star) => star.fullName,
});

// move to a separate file
type LoadingState = "LOADING" | "IDLE" | "ERROR";

// Exporting this just to use it in test utilities
export const initialState = starsAdapter.getInitialState({
  status: "IDLE" as LoadingState,
  error: "" as string,
  username: "" as string,
});

export const getUserStars = createAsyncThunk<ApiStar[], string, StateDispatch>(
  "user/getStars",
  async (_, thunkApi) => {
    try {
      const username: string = thunkApi.getState().stars.username;
      return await getStars(username);
    } catch (err) {
      if (err instanceof Error) return thunkApi.rejectWithValue(err.message);
      return thunkApi.rejectWithValue("Failed to get stars");
    }
  }
);

const starsSlice = createSlice({
  name: "stars",
  initialState,
  reducers: {
    setUsername: (state, { payload }: { payload: string }) => {
      // While it looks like we're mutating state here, every change done
      // in reducers created with createSlice/createReducer is done immutably
      // Redux Toolkit is using Immer to apply state changes immutably
      if (payload) {
        state.username = payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserStars.fulfilled, (state, action) => {
      if (action.payload) {
        starsAdapter.setAll(state, action.payload.map(mapApiStar));
        state.error = "";
        state.status = "IDLE";
      }
    });

    builder.addCase(getUserStars.pending, (state) => {
      state.status = "LOADING";
    });

    builder.addCase(getUserStars.rejected, (state, action) => {
      state.status = "ERROR";
      state.error = String(action.payload) || "Something went wrong!";
    });
  },
});

export default starsSlice.reducer as Reducer<typeof initialState>;

export const { setUsername } = starsSlice.actions;

export const {
  selectById: selectStarByFullName,
  selectAll: selectAllStars,
  selectTotal: selectTotalStars,
} = starsAdapter.getSelectors((state: RootState) => state.stars);
