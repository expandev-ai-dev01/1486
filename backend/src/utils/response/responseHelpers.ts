/**
 * @summary
 * Utility functions for standardized API responses
 *
 * @module utils/response
 */

/**
 * @interface SuccessResponse
 * @description Standard success response structure
 *
 * @property {boolean} success - Success flag (always true)
 * @property {T} data - Response data
 * @property {object} [metadata] - Optional metadata
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @interface ErrorResponse
 * @description Standard error response structure
 *
 * @property {boolean} success - Success flag (always false)
 * @property {object} error - Error details
 * @property {string} timestamp - Error timestamp
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: number;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Creates a standardized success response
 *
 * @function successResponse
 * @module utils/response
 *
 * @param {T} data - Response data
 * @param {object} [metadata] - Optional metadata
 *
 * @returns {SuccessResponse<T>} Standardized success response
 *
 * @example
 * res.json(successResponse({ id: 1, name: 'Product' }));
 */
export function successResponse<T>(data: T, metadata?: any): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: metadata
      ? { ...metadata, timestamp: new Date().toISOString() }
      : { timestamp: new Date().toISOString() },
  };
}

/**
 * @summary
 * Creates a standardized error response
 *
 * @function errorResponse
 * @module utils/response
 *
 * @param {string} message - Error message
 * @param {number} [code=500] - Error code
 * @param {any} [details] - Additional error details
 *
 * @returns {ErrorResponse} Standardized error response
 *
 * @example
 * res.status(400).json(errorResponse('Invalid input', 400));
 */
export function errorResponse(message: string, code: number = 500, details?: any): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}
