export interface Languages {
    header: {
      [key: string]: {
        about: string;
        portfolio: string;
        blog: string;
      };
    };
    main: {
      [key: string]: {
        welcome: string;
        name: string;
        business: string;
        introduce: string;
        about: {
          start: string;
          next: string;
          firstbr: string;
          secbr: string;
          thirdbr: string;
          note: string;
          email: string;
          diploma: string;
        };
      };
    };
  }