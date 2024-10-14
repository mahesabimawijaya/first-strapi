import type { Schema, Attribute } from '@strapi/strapi';

export interface LandingPageRoleSection extends Schema.Component {
  collectionName: 'components_landing_page_role_sections';
  info: {
    displayName: 'Role Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    roleCards: Attribute.Component<'cards.role-card', true> &
      Attribute.Required;
  };
}

export interface LandingPageHeroSection extends Schema.Component {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    downloadBtn: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LandingPageFlowSection extends Schema.Component {
  collectionName: 'components_landing_page_flow_sections';
  info: {
    displayName: 'Flow Section';
    description: '';
  };
  attributes: {
    flowCard: Attribute.Component<'cards.flow-card'> & Attribute.Required;
    enumeratedList: Attribute.Component<'components.enumerated-list', true> &
      Attribute.Required;
  };
}

export interface LandingPageBenefitSection extends Schema.Component {
  collectionName: 'components_landing_page_benefit_sections';
  info: {
    displayName: 'Benefit Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    benefitCard: Attribute.Component<'cards.benefit-card', true> &
      Attribute.Required;
  };
}

export interface ComponentsPhill extends Schema.Component {
  collectionName: 'components_components_phills';
  info: {
    displayName: 'Phill';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsEnumeratedList extends Schema.Component {
  collectionName: 'components_components_enumerated_lists';
  info: {
    displayName: 'Enumerated List';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface CardsRoleCard extends Schema.Component {
  collectionName: 'components_cards_role_cards';
  info: {
    displayName: 'Role Card';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    roles: Attribute.Component<'components.phill', true>;
  };
}

export interface CardsFlowCard extends Schema.Component {
  collectionName: 'components_cards_flow_cards';
  info: {
    displayName: 'Flow Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CardsBenefitCard extends Schema.Component {
  collectionName: 'components_cards_benefit_cards';
  info: {
    displayName: 'Benefit Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing-page.role-section': LandingPageRoleSection;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.flow-section': LandingPageFlowSection;
      'landing-page.benefit-section': LandingPageBenefitSection;
      'components.phill': ComponentsPhill;
      'components.enumerated-list': ComponentsEnumeratedList;
      'cards.role-card': CardsRoleCard;
      'cards.flow-card': CardsFlowCard;
      'cards.benefit-card': CardsBenefitCard;
    }
  }
}
