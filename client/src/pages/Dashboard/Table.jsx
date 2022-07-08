import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";

import "./Dashboard.css";

function Row({ row, disableKey }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton onClick={() => setIsOpen(!isOpen)} size="small">
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="center">{row.disabled ? "Yes" : "No"}</TableCell>
        <TableCell align="center">{row.createdBy}</TableCell>
        <TableCell align="center">{row.creationDate}</TableCell>
        <TableCell align="center">
          {row.disabled ? null : (
            <Button onClick={() => disableKey(row.id)} variant="contained">
              Disable
            </Button>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={8} className="table-cell">
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box className="requests">
              <span className="requestsLength">
                {row.requests?.length || 0} requests
              </span>
              <Table size="small">
                <TableBody>
                  {row.requests.map((request) => (
                    <TableRow key={request}>
                      <TableCell component="th" scope="row">
                        Id: {request}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const DashboardTable = ({ rows, disableKey }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center" className="id">
              Id
            </TableCell>
            <TableCell align="center">Disabled</TableCell>
            <TableCell align="center">Created by</TableCell>
            <TableCell align="center">Creation date</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row row={row} disableKey={disableKey} key={row.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
