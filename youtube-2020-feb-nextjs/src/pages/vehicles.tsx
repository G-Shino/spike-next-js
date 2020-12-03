import Link from "next/link";
import { NextPageContext } from "next";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { ResVehicle } from "@src/const/types/api";
import { myGet } from "@src/lib/myGet";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const Vehicles = ({ list }: { list: ResVehicle[] }) => {
  const classes = useStyles();
  // 権限認証未実装のため
  if (list.map === undefined) {
    list = [];
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">BRAND</StyledTableCell>
              <StyledTableCell align="right">MODEL</StyledTableCell>
              <StyledTableCell align="right">OWNER ID</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.brand}</StyledTableCell>
                <StyledTableCell align="right">{row.model}</StyledTableCell>
                <StyledTableCell align="right">{row.ownerId}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link href="/" passHref>
        <Button>home</Button>
      </Link>
    </>
  );
};

export default Vehicles;

Vehicles.getInitialProps = async (ctx: NextPageContext) => {
  const json = await myGet("http://localhost:3000/api/vehicles", ctx);
  return { list: json };
};
