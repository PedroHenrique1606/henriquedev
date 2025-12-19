declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el?: HTMLElement | null;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
    scrollFromAnywhere?: boolean;
  }

  export interface LocomotiveScrollInstance {
    scroll: {
      instance: {
        scroll: {
          y: number;
        };
      };
    };
    on(event: string, callback: (instance: LocomotiveScrollInstance) => void): void;
    update(): void;
    destroy(): void;
    scrollTo(target: number | string, options?: { duration?: number; disableLerp?: boolean }): void;
  }

  export default class LocomotiveScroll implements LocomotiveScrollInstance {
    constructor(options?: LocomotiveScrollOptions);
    scroll: {
      instance: {
        scroll: {
          y: number;
        };
      };
    };
    on(event: string, callback: (instance: LocomotiveScrollInstance) => void): void;
    update(): void;
    destroy(): void;
    scrollTo(target: number | string, options?: { duration?: number; disableLerp?: boolean }): void;
  }
}
