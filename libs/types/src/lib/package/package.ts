export type Package = {
  name?: string;
  displayName?: string;
  version?: string;
  publishConfig?: {
    access?: string;
    tag?: string;
  };
  description?: string;
  homepage?: string;
  author?: {
    email?: string;
    name?: string;
    url?: string;
  };
  icon?: string;
  funding?: string[];
  keywords?: string[];
  type?: string;
  main?: string;
  module?: string;
  types?: string;
  exports?: Record<string, string | Record<string, string>>;
  files?: string[];
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;

  nx?: {
    sourceRoot?: string;
    targets?: {
      build?: {
        executor?: string;
        outputs?: string[];
        options?: {
          outputPath?: string;
          main?: string;
          tsConfig?: string;
          skipTypeCheck?: false;
          stripLeadingPaths?: true;
        };
      };
      'serve:static'?: {
        executor?: string;
        options?: {
          commands?: string[];
        };
      };
      serve?: {
        executor?: string;
        options?: {
          commands?: string[];
          parallel?: boolean;
        };
      };

      'prisma:migrate'?: {
        executor?: string;
        options?: {
          commands?: string[];
          cwd?: string;
        };
      };
      'prisma:reset'?: {
        executor?: string;
        options?: {
          commands?: string[];
          cwd?: string;
        };
      };
      doc?: {
        executor?: string;
        options?: {
          commands?: string[];
          cwd?: string;
        };
      };
    };
  };
};
