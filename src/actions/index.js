import actionsBasic from './actionsBasic';
import actionsFilters from './actionFilters';
import actionsSystem from './actionsSystem';
import actionsAuth from './actionAuth';

export default {
  ...actionsBasic,
  ...actionsFilters,
  ...actionsSystem,
  ...actionsAuth,
};
