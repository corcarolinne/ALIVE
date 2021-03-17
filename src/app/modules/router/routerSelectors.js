import { createSelector } from 'reselect'
import { get, find } from 'lodash/fp'
/**
 * Selectors
 */
import MODULE_NAME from './routerConstants'

export const getRouting = get(MODULE_NAME)
export const getPreviousLocations = get([MODULE_NAME, 'previousLocations'])
export const getLocation = get([MODULE_NAME, 'location'])

export const getPathName = createSelector(
  getLocation, //
  (location) => location.pathname
)

export const getPreviousPathName = createSelector(
  getPreviousLocations, //
  getPathName,
  (previousLocations, currentPathName) => {
    const lastValidLocation = find((item) => item.pathname !== currentPathName, previousLocations)
    return lastValidLocation && lastValidLocation.pathname ? lastValidLocation.pathname : '/'
  }
)

export const getLastPathNameBeforeView = createSelector(
  getPreviousLocations, //
  getPathName,
  (previousLocations, currentPathName) => {
    const lastValidLocation = find(
      (item) => !item.pathname.includes('/view') && !item.pathname.includes('/login') && item.pathname !== currentPathName,
      previousLocations
    )
    return lastValidLocation ? lastValidLocation.pathname : '/'
  }
)
