export default defineAppConfig({
  sidebar: {
    appbar: {
      actions: {
        component: 'AppbarActions',
      },
    },
    navigation: {
      logo: {
        component: 'AppLogo',
        props: { compact: true, class: 'block w-auto h-5' },
      },
      items: [
        {
          label: 'Dashboard',
          icon: 'i-lucide-layout-dashboard',
          content: { component: 'DashboardPanel' },
          children: [
            { label: 'Main', type: 'label' },
            {
              label: 'Orders',
              icon: 'i-lucide-shopping-cart',
              defaultOpen: true,
              children: [
                { label: 'All Orders', icon: 'i-lucide-list', to: '/dashboard/orders' },
                { label: 'Pending Orders', icon: 'i-lucide-clock', to: '/dashboard/orders?filter[state]=pending' },
                { label: 'Completed Orders', icon: 'i-lucide-check-circle', to: '/dashboard/orders?filter[state]=completed' },
              ],
            },
            { label: 'Customers', icon: 'i-lucide-users', to: '/dashboard/customers' },
            { label: 'Inventory', type: 'label' },
            { label: 'Products', icon: 'i-lucide-boxes', to: '/dashboard/products' },
            { label: 'Warehouses', icon: 'i-lucide-warehouse', to: '/dashboard/warehouses' },
            { label: 'Suppliers', icon: 'i-lucide-truck', to: '/dashboard/suppliers' },
            { label: 'Billing', type: 'label' },
            { label: 'Payments', icon: 'i-lucide-credit-card', to: '/dashboard/payments' },
            { label: 'Purchases', icon: 'i-lucide-shopping-bag', to: '/dashboard/purchases' },
          ],
          activePath: '/dashboard',
        },
        {
          label: 'Projects',
          icon: 'i-lucide-clipboard-list',
          children: [
            { label: 'Main', type: 'label' },
            { label: 'Projects', icon: 'i-lucide-folder', to: '/projects' },
            { label: 'Kanban Board', icon: 'i-lucide-layout-grid', to: '/projects/board' },
            { label: 'Tasks', icon: 'i-lucide-list-todo', to: '/projects/tasks' },
          ],
          activePath: '/projects',
        },
        {
          label: 'Reporting',
          icon: 'i-lucide-chart-pie',
          children: [
            { label: 'Main', type: 'label' },
            { label: 'Sales Reports', icon: 'i-lucide-bar-chart', to: '/reports/sales' },
            { label: 'Customer Insights', icon: 'i-lucide-eye', to: '/reports/customers' },
            { label: 'Revenue Analytics', icon: 'i-lucide-trending-up', to: '/reports/revenue' },
          ],
          activePath: '/reports',
        },
        {
          label: 'Support',
          icon: 'i-lucide-life-buoy',
          href: 'https://github.com/jrafaelca',
          target: '_blank',
          position: 'end',
        },
        {
          label: 'Settings',
          icon: 'i-lucide-settings',
          children: [
            { label: 'Main', type: 'label' },
            { label: 'Roles & Permissions', icon: 'i-lucide-users', to: '/settings/roles-permissions' },
            { label: 'Users', icon: 'i-lucide-user-cog', to: '/settings/users' },
            { label: 'Integrations', icon: 'i-lucide-plug', to: '/settings/integrations' },
            { label: 'Notifications', icon: 'i-lucide-bell', to: '/settings/notifications' },
            { label: 'General', icon: 'i-lucide-sliders-horizontal', to: '/settings/general' },
          ],
          activePath: '/settings',
          position: 'end',
        },
      ],
      footer: {
        component: 'AuthDropdown',
      },
    },
  },
})
