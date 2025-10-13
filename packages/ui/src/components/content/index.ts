// Typography
export {
  Text,
  Heading, 
  Link,
  type TextProps,
  type HeadingProps,
  type LinkProps
} from './typography';

// Import components for Typography namespace
import { Text, Heading, Link } from './typography';

// Typography namespace for grouped access
export const Typography = {
  Text,
  Heading,
  Link
} as const;

// Code
export {
  Code,
  CodeBlock,
  type CodeProps,
  type CodeBlockProps
} from './code';

// Quote
export {
  Quote,
  type QuoteProps
} from './quote';

// List
export {
  List,
  ListItem,
  type ListProps,
  type ListItemProps
} from './list';

// Table
export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  type TableProps,
  type TableHeaderProps,
  type TableBodyProps,
  type TableRowProps,
  type TableHeaderCellProps,
  type TableCellProps
} from './table';

// Callout
export {
  Callout,
  type CalloutProps
} from './callout';

// Article
export {
  Article,
  ArticleHeader,
  ArticleContent,
  ArticleFooter,
  type ArticleProps,
  type ArticleHeaderProps,
  type ArticleContentProps,
  type ArticleFooterProps
} from './article';