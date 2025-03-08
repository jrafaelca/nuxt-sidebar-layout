/**
 * Example: Detailed configuration for a 2-level sidebar.
 * Items can have:
 * - label, icon, position
 * - to (internal route)
 * - href + target (external link)
 * - children (submenus)
 * - content (custom component in the expanded panel)
 * - onClick (optional custom function)
 */

export default defineAppConfig({
  sidebar: {
    appbar: {
      actions: {
        // This defines actions in the top appbar (optional).
        // Example: 'SidebarAppbarActions'
        // Uncomment and set only if needed:
        // component: 'SidebarAppbarActions',
        // props: { class: 'p-2' },
      },
    },
    navigation: {
      logo: {
        // Component for the sidebar logo (optional).
        // Example: 'AppLogo'
        // component: 'AppLogo',
        // props: {
        //   compact: true,
        //   class: 'w-auto h-6',
        // },
      },
      items: [
        /**
         * Example 1: Dashboard item with submenus (children).
         */
        {
          // The display label shown in the sidebar (collapsed or expanded).
          // label: 'Dashboard',

          // Icon class for the item (e.g., from Lucide or another icon set).
          // icon: 'i-lucide-layout-dashboard',

          // The component to render in the expanded panel if this item is selected.
          // content: { component: 'DashboardPanel', props: {} },

          // Submenus: if children exists, the layout might render them or use SidebarNavigationMenu.
          // children: [
          //   { label: 'Home', icon: 'i-lucide-circle-dashed', to: '/dashboard' },
          //   { label: 'Tools', icon: 'i-lucide-circle-dashed', to: '/dashboard/tools' },
          // ],

          // The route path that triggers this item to be "active".
          // activePath: '/dashboard',

          // Position in the sidebar: 'start' (top) or 'end' (bottom).
          // position: 'start',

          // If there's a function for clicks:
          // onClick: () => console.log('Dashboard clicked'),
        },

        /**
         * Example 2: Reports item with children and a content panel.
         */
        {
          // label: 'Reports',
          // icon: 'i-lucide-chart-area',
          // content: { component: 'ReportPanel' },
          // children: [
          //   { label: 'Summary', icon: 'i-lucide-circle-dashed', to: '/reports/summary' },
          //   { label: 'Journey', icon: 'i-lucide-circle-dashed', to: '/reports/journey' },
          // ],
          // activePath: '/reports',
        },

        /**
         * Example 3: Analytics item with no children, just a content panel.
         */
        {
          // label: 'Analytics',
          // icon: 'i-lucide-bar-chart-2',
          // content: { component: 'AnalyticsPanel', props: { theme: 'dark' } },
          // activePath: '/analytics',
        },

        /**
         * Example 4: External link example using href/target.
         */
        {
          // label: 'Nuxt Docs',
          // icon: 'i-lucide-external-link',
          // href: 'https://nuxt.com/docs',
          // target: '_blank',
          // position: 'start',
        },

        /**
         * Example 5: An item with children but no content => rendered by the layout or a fallback.
         */
        {
          // label: 'Settings',
          // icon: 'i-lucide-sliders-horizontal',
          // children: [
          //   { label: 'Users', icon: 'i-lucide-circle-dashed', to: '/settings/users' },
          //   { label: 'Roles & Permissions', icon: 'i-lucide-circle-dashed', to: '/settings/roles' },
          // ],
          // activePath: '/settings',
          // position: 'end',
        },
      ],
      footer: {
        // Optional footer component for the sidebar.
        // Example: 'SidebarFooter'
        // component: 'SidebarFooter',
        // props: { class: 'text-sm text-gray-500' },
      },
    },
  },
})
