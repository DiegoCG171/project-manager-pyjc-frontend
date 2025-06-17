import type { Draft } from 'immer';
import type { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';

export function addThunkLoading<TState, TReturn, TArg>(
  builder: ActionReducerMapBuilder<TState>,
  thunk: AsyncThunk<TReturn, TArg, {}>,
  loadingSelector: (state: Draft<TState>) => { loading: boolean }
) {
  builder
    .addCase(thunk.pending, (state) => {
      loadingSelector(state).loading = true;
    })
    .addCase(thunk.fulfilled, (state) => {
      loadingSelector(state).loading = false;
    })
    .addCase(thunk.rejected, (state) => {
      loadingSelector(state).loading = false;
    });
}
