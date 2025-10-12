import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from './Table';

describe('Table', () => {
  it('renders table with basic structure', () => {
    render(
      <Table data-testid="table">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    
    expect(screen.getByTestId('table')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders table wrapper', () => {
    render(
      <Table variant="bordered" data-testid="table">
        <TableBody><TableRow><TableCell>Cell</TableCell></TableRow></TableBody>
      </Table>
    );
    
    expect(screen.getByTestId('table')).toBeInTheDocument();
    expect(screen.getByText('Cell')).toBeInTheDocument();
  });

  it('renders with different size', () => {
    render(
      <Table size="sm" data-testid="table">
        <TableBody><TableRow><TableCell>Small Cell</TableCell></TableRow></TableBody>
      </Table>
    );
    
    expect(screen.getByTestId('table')).toBeInTheDocument();
    expect(screen.getByText('Small Cell')).toBeInTheDocument();
  });
});

describe('TableHeaderCell', () => {
  it('renders sortable header cell', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell sortable>Name</TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('↕')).toBeInTheDocument();
  });

  it('shows sort direction', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell sortable sortDirection="asc">Name</TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    
    expect(screen.getByText('↑')).toBeInTheDocument();
  });
});