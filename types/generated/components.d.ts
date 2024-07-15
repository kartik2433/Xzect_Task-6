import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderNavLinks extends Schema.Component {
  collectionName: 'components_header_nav_links';
  info: {
    displayName: 'NavLinks';
    icon: '';
  };
  attributes: {
    LinkText: Attribute.String;
    URL: Attribute.String;
  };
}

export interface HeaderSubmenu extends Schema.Component {
  collectionName: 'components_header_submenus';
  info: {
    displayName: 'Submenu';
    description: '';
  };
  attributes: {
    menu: Attribute.Component<'header.nav-links', true>;
    NavText: Attribute.Component<'header.nav-links'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.nav-links': HeaderNavLinks;
      'header.submenu': HeaderSubmenu;
    }
  }
}
