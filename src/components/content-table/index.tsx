import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Content } from '../../types/content/content';
import PencilIcon from '../icons/pencil-icon';
import TrashIcon from '../icons/trash-icon';
import './styles.scss';

type Props = {
    data: Content[]
}

const ContentTable = ({ data }: Props) => {
  return (
    <>
        <Table >
          <TableHeader>
                <TableRow>
                <TableHead>Content Id</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Published At</TableHead>
                <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            { data.map((fn: Content) => (
            <TableRow key={fn.id}> 
                <TableCell> {fn.id} </TableCell>
                <TableCell> {fn.slug} </TableCell>
                <TableCell> {fn.publishedAt? fn.publishedAt.toString(): ''} </TableCell>
                <TableCell> <div className="icons"><TrashIcon className="w-4 h-4" /> <PencilIcon className="w-4 h-4"/> </div></TableCell>
            </TableRow>
            )) }
          </TableBody>
        </Table>
    </>
  );
};

export default ContentTable;