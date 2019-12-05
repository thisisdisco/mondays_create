// Layouts
import PublicLayout from 'core/ui/layouts/PublicLayout';
import AuthenticatedLayout from 'core/ui/layouts/AuthenticatedLayout';

// Pages
import LoginPage from 'core/ui/pages/LoginPage';
import Welcome from 'core/ui/pages/Welcome';

export default [
  {
    component: LoginPage,
    layout: PublicLayout,
    isPublic: true,
    redirectLogged: true,
    path: '/sign-in'
  },
  {
    exact: true,
    component: Welcome,
    layout: AuthenticatedLayout,
    path: '/'
  },
];
