/**
 * @module cart
 * @summary Shopping cart domain module for managing cart state and operations
 * @domain functional
 * @version 1.0.0
 */

export * from './stores';

export const moduleMetadata = {
  name: 'cart',
  domain: 'functional',
  version: '1.0.0',
  publicStores: ['cartStore'],
  dependencies: {
    internal: ['@/core/types'],
    external: ['zustand'],
    domains: [],
  },
  exports: {
    stores: ['useCartStore'],
  },
} as const;
