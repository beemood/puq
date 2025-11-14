export type AuditLog = {
  id: number;

  /// Log timestamp
  timestamp: Date;

  /// The operator who executed this operation
  operatorId?: string;

  /// Operator type (system/user)
  operatorType?: string;

  /// Operation name
  operationName: string;

  /// Record/model/database table name
  recordName: string;

  /// Record/entry id
  recordId: number;

  /// Differences from old data and new data
  difference: any;

  readonly?: boolean;
};
