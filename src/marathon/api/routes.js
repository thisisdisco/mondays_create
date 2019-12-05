// Layouts
import AuthenticatedLayout from 'core/ui/layouts/AuthenticatedLayout';

// Pages
import CreatePage from 'marathon/ui/pages/CreatePage';
import FirstStepPage from 'marathon/ui/pages/FirstStepPage';
import SecondStepPage from 'marathon/ui/pages/SecondStepPage';
import ThirdStepPage from 'marathon/ui/pages/ThirdStepPage';
import DraftsPage from 'marathon/ui/pages/DraftsPage';

export default [
  {
    component: DraftsPage,
    layout: AuthenticatedLayout,
    path: '/drafts'
  },
  {
    component: CreatePage,
    layout: AuthenticatedLayout,
    path: '/create'
  },
  {
    component: FirstStepPage,
    layout: AuthenticatedLayout,
    path: '/first'
  },
  {
    component: SecondStepPage,
    layout: AuthenticatedLayout,
    path: '/second'
  },
  {
    component: ThirdStepPage,
    layout: AuthenticatedLayout,
    path: '/third'
  },
];
