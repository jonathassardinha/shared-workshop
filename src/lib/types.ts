export interface ChildrenProps {
  children: React.ReactNode;
}

// =================================================================
// SHARED ACTION TYPES
// =================================================================

// Generic result type for all server actions
export type ActionResult<T> =
  | (T extends void
      ? {
          success: true;
          data?: undefined;
          error?: undefined;
        }
      : {
          success: true;
          data: T;
          error?: undefined;
        })
  | {
      success: false;
      data?: undefined;
      error: string;
    };
