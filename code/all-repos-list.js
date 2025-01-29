'use strict';
import AllRepoListView from './AllRepoListView';
import {connect} from 'react-redux';
import {wrapReactClass} from 'src/tools/redux-tools';
import {
  actChangeFilter,
  actChangeLimit,
  actChangeOffset,
  actLoadRepositories,
  actSetAreRepositoriesLoading,
  actSetFavourite,
  actSort,
  getDefaultState,
  getViewState,
} from './actions-all-repos-list';
import {createComponentClass, createInitializingClass} from 'src/actions/common/components';

import './all-repos.scss';

const WATCHING_COMPONENT_TYPE = 'bbb-gp-gitviewer-pageAllRepos-panel';
window.onbeforeunload = null;

function load(data, dispatch, info) {
  setTimeout(() => {
    const {areRepositoriesLoading} = info;
    if (areRepositoriesLoading) {
      dispatch(actSetAreRepositoriesLoading(areRepositoriesLoading));
      return;
    }
    dispatch(actLoadRepositories());
  });
  return {...getDefaultState()};
}

function mapStateToProps(state) {
  return {
    ...getDefaultState(),
    ...getViewState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleLoad: () => dispatch(actLoadRepositories()),
    handleChangeOffset: (offset) => dispatch(actChangeOffset(offset)),
    handleChangeLimit: (limit) => dispatch(actChangeLimit(limit)),
    handleFilter: (filter) => dispatch(actChangeFilter(filter)),
    handleSort: (sort, order) => dispatch(actSort(sort, order)),
    handleSetFavourite: (repoId, favourite) => dispatch(actSetFavourite(repoId, favourite)),
  };
}
const watchingComponentTypeParams = {
  type: WATCHING_COMPONENT_TYPE,
  ReactComponent: wrapReactClass(
    connect(mapStateToProps, mapDispatchToProps),
    createInitializingClass(load),
    createComponentClass(),
  )(AllRepoListView),
};

export {watchingComponentTypeParams};
