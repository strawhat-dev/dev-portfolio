import { skills, SkillItem } from '@/components/skills/SkillItems';
import { Box, Paper, Table, TableBody, TableContainer } from '@mui/material';
import {
  StyledTableRow,
  StyledTableCell,
} from '@/components/styled-material/StyledMaterial';

export const SkillsTable = () => {
  return (
    <TableContainer
      className="stagger"
      component={Paper}
      elevation={24}
      sx={{ width: 'auto', overflow: 'hidden' }}
    >
      <Table aria-label="skills-table">
        <TableBody>
          {Object.entries(skills).map(([title, items], i) => (
            <StyledTableRow key={title} sx={{ display: 'flex' }}>
              <StyledTableCell sx={{ minWidth: '150px' }}>
                {title}
              </StyledTableCell>
              {items.map((item) => (
                <StyledTableCell key={item}>
                  <Box className={i % 2 === 0 ? 'ani-left' : 'ani-right'}>
                    <SkillItem label={item} />
                  </Box>
                </StyledTableCell>
              ))}
              {i !== 0 ? <StyledTableCell sx={{ flex: 1 }} /> : null}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
