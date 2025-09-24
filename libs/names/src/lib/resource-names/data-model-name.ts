import { InvalidResourceNameError } from '@puq/errors';
import { keysAsString } from '@puq/utils';

export const DataModelNames = {
  // Common
  Sample: 'Sample',
  Todo: 'Todo',

  // Common & Core Resources
  User: 'User',
  Role: 'Role',
  Permission: 'Permission',
  Group: 'Group',
  Team: 'Team',
  Workspace: 'Workspace',
  Organization: 'Organization',
  Tag: 'Tag',
  Note: 'Note',
  File: 'File',

  // Inventory & Supply Chain Management
  Product: 'Product',
  Sku: 'Sku',
  Item: 'Item',
  Inventory: 'Inventory',
  Warehouse: 'Warehouse',
  Stock: 'Stock',
  Supplier: 'Supplier',
  Customer: 'Customer',
  Order: 'Order',
  Shipment: 'Shipment',
  Return: 'Return',
  Invoice: 'Invoice',
  Payment: 'Payment',

  Attribute: 'Attribute',
  Price: 'Price',
  Quantity: 'Quantity',
  PriceLevel: 'PriceLevel',
  Store: 'Store',

  // Content Management & Posting
  Post: 'Post',
  Comment: 'Comment',
  Article: 'Article',
  Blog: 'Blog',
  Page: 'Page',
  Draft: 'Draft',
  Category: 'Category',

  // Customer Relationship Management (CRM)
  Lead: 'Lead',
  Contact: 'Contact',
  Company: 'Company',
  Opportunity: 'Opportunity',
  Deal: 'Deal',
  SalesFunnel: 'SalesFunnel',
  Account: 'Account',
  Ticket: 'Ticket',
  SupportCase: 'SupportCase',

  // Human Resources (HR)
  Employee: 'Employee',
  Department: 'Department',
  Position: 'Position',
  Candidate: 'Candidate',
  JobPosting: 'JobPosting',
  Application: 'Application',
  Recruitment: 'Recruitment',
  Hour: 'Hour',
  Clock: 'Clock',
  Payroll: 'Payroll',
  LeaveRequest: 'LeaveRequest',
  PerformanceReview: 'PerformanceReview',
  Onboarding: 'Onboarding',
  EmployeeShift: 'EmployeeShift',

  // Project Management & Collaboration
  Project: 'Project',
  Task: 'Task',
  Subtask: 'Subtask',
  Milestone: 'Milestone',
  Epic: 'Epic',
  Sprint: 'Sprint',
  KanbanBoard: 'KanbanBoard',
  GanttChart: 'GanttChart',
  Timeline: 'Timeline',
  Issue: 'Issue',
  Report: 'Report',

  // Contact
  Email: 'Email',
  Phone: 'Phone',
  Address: 'Address',
} as const;

export type DataModelName = keyof typeof DataModelNames;

export function isDataModelName<T extends DataModelName>(
  dataModelName: T | string
): dataModelName is T {
  return !!DataModelNames[dataModelName as T];
}

export function isDataModelNameOrThrow<T extends DataModelName>(
  dataModelName: T | string
): dataModelName is T {
  if (isDataModelName(dataModelName)) {
    return true;
  }

  throw new InvalidResourceNameError(
    dataModelName,
    keysAsString(DataModelNames)
  );
}
