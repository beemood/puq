export type Hook = {
  /// Unique local integer identifier (system-input)
  id: number;

  /// Defines the creation timestamp (system-input)
  createdAt: Date;

  /// Defines the modification timestamp (system-input)
  updatedAt: Date;

  /// Defines deletion timestamp (system-input)
  deletedAt: Date;

  updatedById: number;

  /// Resource name
  resourceName: string;

  /// Operation name
  operationName: string;

  /// Hook urls (e.g https://n8n.com/hooks/some-hook)
  urls: string[];

  active: boolean;

  /// Defines the number of times this hook is allowed to be used
  usageLimit: number;

  /// Defines the number of times this hook is called
  usageCount: number;

  /// Defines if the entry is readonly or not
  /// Readonly entries cannot be updated by the client application
  readonly: boolean;
};

export type HookTask = {
  hookId: number;
};
