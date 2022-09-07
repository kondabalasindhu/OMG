import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { AutoSizer, Column, Table } from "react-virtualized";

const classes = {
  flexContainer: "ReactVirtualizedDemo-flexContainer",
  tableRow: "ReactVirtualizedDemo-tableRow",
  tableRowHover: "ReactVirtualizedDemo-tableRowHover",
  tableCell: "ReactVirtualizedDemo-tableCell",
  noClick: "ReactVirtualizedDemo-noClick",
};

const styles = ({ theme }) => ({
  // temporary right-to-left patch, waiting for
  // https://github.com/bvaughn/react-virtualized/issues/454
  "& .ReactVirtualized__Table__headerRow": {
    ...(theme.direction === "rtl" && {
      paddingLeft: "0 !important",
    }),
    ...(theme.direction !== "rtl" && {
      paddingRight: undefined,
    }),
  },
  [`& .${classes.flexContainer}`]: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  [`& .${classes.tableRow}`]: {
    cursor: "pointer",
  },
  [`& .${classes.tableRowHover}`]: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  [`& .${classes.tableCell}`]: {
    flex: 1,
  },
  [`& .${classes.noClick}`]: {
    cursor: "initial",
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit",
            }}
            headerHeight={headerHeight}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = styled(MuiVirtualizedTable)(styles);

// ---

// const sample = [
//   ["Frozen yoghurt", 159],
//   ["Ice cream sandwich", 237],
//   ["Eclair", 262],
//   ["Cupcake", 305],
//   ["Gingerbread", 356]
// ];

// function createData(id, dessert, calories) {
//   return { id, dessert, calories };
// }

const rows = [
  {
    id: 1,
    dessert: "catID001",
    calories: "fruits",
  },
  {
    id: 2,
    dessert: "catID002",
    calories: "vegetables",
  },
  {
    id: 2,
    dessert: "catID003",
    calories: "oils",
  },
  {
    id: 2,
    dessert: "catID004",
    calories: "rice",
  },
  {
    id: 2,
    dessert: "catID005",
    calories: "spices",
  },
  {
    id: 2,
    dessert: "catID006",
    calories: "diary products",
  },
  {
    id: 2,
    dessert: "catID007",
    calories: "meat",
  },
  {
    id: 2,
    dessert: "catID008",
    calories: "others",
  },
  {
    id: 2,
    dessert: "catID009",
    calories: "10g",
  },
  {
    id: 2,
    dessert: "ytdc",
    calories: "10g",
  },
];

// for (let i = 0; i <10; i += 1) {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   rows.push(createData(i, ...randomSelection));
// }

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 400, width: 400 }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          // {
          //   width: 200,
          //   label: "s.no",
          //   dataKey: "id"
          // },
          {
            width: 200,
            label: "category id",
            dataKey: "dessert",
          },
          {
            width: 120,
            label: "Category Name",
            dataKey: "calories",
            numeric: true,
          },
        ]}
      />
    </Paper>
  );
}
